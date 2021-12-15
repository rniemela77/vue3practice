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
              <!-- <svg
                class="svg-icon"
                aria-hidden="true"
                v-html="
                  require('~/assets/img/icons/remove_circle_outline.svg?inline')
                "
              /> -->
            </div>
          </template>
        </template>
      </div>
    </template>
    <!--
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
    -->
  </div>
</template>

<script setup lang="ts">
//Imports
import { computed } from "vue";
import { formatPrice, urlEncode } from "../helpers";
import _groupBy from "lodash/groupBy";
import _some from "lodash/some";
import { useFiltersStore } from "@/store/filters";

/*
    Props
*/
interface Props {
  type: "new"; // cannot use 'string'! Typescript is TOO SMART
}
const props = defineProps<Props>();

/*
    Store
*/
const filters = useFiltersStore();

/*
    Tags
*/
// Get a list of tags for the type(new/used/cpo)
const tags = computed(() => {
  return { ...filters[props.type].tags };
});
// Check if ANY tags are selected
const tagsAreSelected = computed(() => {
  return _some(tags.value, (tag) => tag.isSelected);
});
// Remove the tag
const removeTag = (key: string) => {
  alert('pretending to remove tag with key: ' + key);
};
</script>

<style scoped>
.chip {
  display: inline-block;
  background: pink;
}</style>
