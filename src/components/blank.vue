<template>
  <div class="chips">
    <template v-if="tagsAreSelected">
      <span key="tag-and" class="and"> and </span>
      <div key="tag-group" class="chip-group">
        <template v-for="(tag, key, index) in tags">
          <template v-if="tag.isSelected">
            <span :key="`tag-or-${index}`" class="or"> or </span>
            <div
              :key="`tag-${index}`"
              :aria-label="`remove ${tag.label}`"
              class="chip"
              tabindex="0"
              role="button"
              @click="removeTag(key)"
              @keydown.enter="removeTag(key)"
            >
              <span>{{ tag.label }}</span>
              <svg
                class="svg-icon"
                aria-hidden="true"
                v-html="
                  require('~/assets/img/icons/remove_circle_outline.svg?inline')
                "
              />
            </div>
          </template>
        </template>
      </div>
    </template>
    <template v-if="keywords && keywords.trim().length">
      <span class="and">and</span>
      <div class="chip-group">
        <div
          key="keywords"
          :aria-label="`remove ${keywords}`"
          class="chip"
          tabindex="0"
          role="button"
          @click="removeKeywords"
          @keydown.enter="removeKeywords"
        >
          <span>Keywords: {{ keywords }}</span>
          <svg
            class="svg-icon"
            aria-hidden="true"
            v-html="
              require('~/assets/img/icons/remove_circle_outline.svg?inline')
            "
          />
        </div>
      </div>
    </template>
    <template v-if="isPriceRangeDifferent()">
      <span class="and">and</span>
      <div class="chip-group">
        <div
          key="price-range"
          :aria-label="`remove price range selection`"
          class="chip"
          tabindex="0"
          role="button"
          @click="removePriceSelections"
          @keydown.enter="removePriceSelections"
        >
          <span>
            Price: {{ formatPrice(priceSelected[0]) }} -
            {{ formatPrice(priceSelected[1]) }}
          </span>
          <svg
            class="svg-icon"
            aria-hidden="true"
            v-html="
              require('~/assets/img/icons/remove_circle_outline.svg?inline')
            "
          />
        </div>
      </div>
    </template>
    <template v-if="isMileageRangeDifferent()">
      <span class="and">and</span>
      <div class="chip-group">
        <div
          key="mileage-range"
          class="chip"
          aria-label="remove mileage selections"
          tabindex="0"
          role="button"
          @click="removeMileageSelections"
          @keydown.enter="removeMileageSelections"
        >
          <span>
            Mileage: {{ mileageSelected[0] }} -
            {{ mileageSelected[1] }}
          </span>
          <svg
            class="svg-icon"
            aria-hidden="true"
            v-html="
              require('~/assets/img/icons/remove_circle_outline.svg?inline')
            "
          />
        </div>
      </div>
    </template>
    <template v-for="(group, key, index) in selections">
      <span :key="`and-${index}`" class="and"> and </span>
      <div :key="index" class="chip-group">
        <template v-for="(chip, chipIndex) in group">
          <span :key="`or-${chipIndex}`" class="or"> or </span>
          <div
            :key="chipIndex"
            :aria-label="`remove option ${chip.option}`"
            class="chip"
            role="button"
            tabindex="0"
            @click="removeFilterSelection(chip.category, chip.option)"
            @keydown.enter="removeFilterSelection(chip.category, chip.option)"
          >
            <span>{{ chip.option }}</span>
            <svg
              class="svg-icon"
              aria-hidden="true"
              v-html="
                require('~/assets/img/icons/remove_circle_outline.svg?inline')
              "
            />
          </div>
        </template>
      </div>
    </template>
    <div
      v-if="showReset"
      class="reset-all"
      tabindex="0"
      role="button"
      @click="reset()"
      @keydown.enter="reset()"
    >
      reset all
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";
import { formatPrice, urlEncode } from "~/plugins/helpers";
import _groupBy from "lodash/groupBy";
import _some from "lodash/some";

export default {
  name: "ChipsDisplay",
  props: {
    type: {
      type: String,
      required: true,
    },
  },
  computed: {
    ...mapState({
      selections(state) {
        const list = [...state.filters[this.type].selections];
        const grouped = _groupBy(list, "category");
        return grouped;
      },
      tags(state) {
        return { ...state.filters[this.type].tags };
      },
      tagsAreSelected() {
        return _some(this.tags, (tag) => tag.isSelected);
      },
      groupsNum() {
        return Object.keys(this.selections).length;
      },
      priceSelected(state) {
        return state.filters[this.type].price;
      },
      priceLimits(state) {
        return state.filters[this.type].options.price;
      },
      mileageSelected(state) {
        return state.filters[this.type].mileage;
      },
      mileageLimits(state) {
        return state.filters[this.type].options.mileage;
      },
      keywords(state) {
        return state.filters[this.type].keywords;
      },
    }),
    showReset() {
      return (
        (this.keywords && this.keywords.trim().length) ||
        this.isPriceRangeDifferent() ||
        this.isMileageRangeDifferent() ||
        Object.keys(this.selections).length ||
        this.tagsAreSelected
      );
    },
  },
  methods: {
    ...mapMutations("filters", [
      "SET_KEYWORDS",
      "SET_PRICE_SELECTIONS",
      "SET_MILEAGE_SELECTIONS",
      "SET_FILTER_SELECTIONS",
    ]),
    ...mapActions("filters", ["UPDATE_FILTER_SELECTIONS"]),
    isPriceRangeDifferent() {
      const limits = this.priceLimits;
      const range = this.priceSelected;
      return limits[0] !== range[0] || limits[1] !== range[1];
    },
    isMileageRangeDifferent() {
      let show = false;
      if (this.mileageLimits) {
        const limits = this.mileageLimits;
        const range = this.mileageSelected;
        show = limits[0] !== range[0] || limits[1] !== range[1];
      }
      return show;
    },
    removeKeywords() {
      const query = { ...this.$route.query };
      delete query.keywords;
      this.$router.push({ query });
      this.SET_KEYWORDS({ type: this.type, keywords: "" });
    },
    removePriceSelections() {
      const query = { ...this.$route.query };
      delete query.minPrice;
      delete query.maxPrice;
      this.$router.push({ query });
      this.SET_PRICE_SELECTIONS({
        type: this.type,
        limits: this.priceLimits,
      });
    },
    removeMileageSelections() {
      const query = { ...this.$route.query };
      delete query.minMileage;
      delete query.maxMileage;
      this.$router.push({ query });
      this.SET_MILEAGE_SELECTIONS({
        type: this.type,
        limits: this.mileageLimits,
      });
    },
    removeFilterSelection(key, value) {
      const query = { ...this.$route.query };
      const cleanValue = urlEncode(value);
      const values = query[key];
      if (Array.isArray(values) && values.length > 1) {
        query[key] = query[key].filter((option) => {
          const cleanOption =
            typeof option === "number" ? parseInt(option, 10) : option;
          return cleanOption !== cleanValue.toString();
        });
      } else {
        delete query[key];
      }
      this.$router.push({ query });
    },
    removeTag(key) {
      const query = { ...this.$route.query };
      delete query[key];
      this.$router.push({ query });
    },
    reset() {
      this.$router.push({
        name: "search",
        params: { type: this.$route.params.type },
        query: {},
      });
    },
    formatPrice(input) {
      return formatPrice(input);
    },
  },
};
</script>

<style lang="scss" scoped>
.chips {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 0 5px;
}
.chip-group {
  @include center;
  flex-wrap: wrap;
  border-radius: 25px;
  min-height: 50px;
  background-color: $light-gray;
  margin: 5px;
  padding: 5px 5px;
}
.and:first-child,
.or:first-child {
  display: none;
}
.chip {
  flex: none;
  @include center;
  padding: 0 10px;
  margin: 5px;
  line-height: 30px;
  cursor: pointer;
  transition: $transition;
  background-color: #fff;
  border-radius: 15px;
  .svg-icon {
    width: 14px;
    height: 14px;
    margin-left: 5px;
    fill: $font-dark;
    transition: $transition;
  }
  &:hover,
  &:focus {
    background-color: $highlight;
    color: contrast-text($highlight);
    .svg-icon {
      fill: contrast-text($highlight);
    }
  }
}
.reset-all {
  @include center;
  align-self: stretch;
  padding-left: 5px;
  color: $error;
  cursor: pointer;
  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
</style>
