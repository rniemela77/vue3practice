<template>
  <div class="wrapper">
    <PricingBreakout
      v-if="showBreakout"
      @show-pricing-breakout="showBreakout = $event"
    />

    <PricingSection
      :msrp="msrp"
      :chapman-price="chapmanPrice"
      :my-chapman-discount="myChapmanDiscount"
      :type="type"
      :rebates="{}"
      :discounts="{}"
      vin="123"
      :isMsrpRequired="isMsrpRequired"
      :isAuthenticated="isAuthenticated"
      @show-pricing-breakout="showBreakout = $event"
    />

    <div class="controls">
      <div class="range-group">
        <input
          type="range"
          class="slider"
          id="msrpAmount"
          name="msrpAmount"
          min="-50000"
          max="50000"
          step="10000"
          v-model.number="msrp"
        />
      </div>
      <div class="range-group">
        <input
          class="slider"
          type="range"
          id="chapmanPriceAmount"
          name="chapmanPriceAmount"
          min="-50000"
          max="50000"
          step="10000"
          v-model.number="chapmanPrice"
        />
      </div>
      <div class="range-group">
        <input
          type="range"
          class="slider"
          id="myChapmanDiscountAmount"
          name="myChapmanDiscountAmount"
          min="-50000"
          max="50000"
          step="10000"
          v-model.number="myChapmanDiscount"
        />
      </div>
      <div class="range-group">
        <input
          type="radio"
          id="type-new"
          name="new"
          value="new"
          v-model="type"
        />
        <label for="type-new">New</label>

        <input
          type="radio"
          id="type-used"
          name="used"
          value="used"
          v-model="type"
        />
        <label for="type-used">Used</label>
      </div>
      <div class="range-group">
        <input type="checkbox" id="isMsrpRequired" v-model="isMsrpRequired" />
        <label for="isMsrpRequired">{{ isMsrpRequired }}</label>
      </div>
      <div class="range-group">
        <input type="checkbox" id="isAuthenticated" v-model="isAuthenticated" />
        <label for="isAuthenticated">{{ isAuthenticated }}</label>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PricingSection from "./PricingSection.vue";
import PricingBreakout from "./PricingBreakout.vue";
import { ref } from "vue";

const msrp = ref(100);
const chapmanPrice = ref(90);
const myChapmanDiscount = ref(1);
const type = ref("new");
const isAuthenticated = ref(true);
const isMsrpRequired = ref(false);

const showBreakout = ref(false);
</script>

<style scoped>
input {
  font-size: 200%;
}
.range-group {
  margin: 0 auto;
  height: 2rem;
  display: flex;
  align-items: center;
  text-align: left;
}
.slider {
  -webkit-appearance: none;
  width: 12rem;
  background: #d3d3d3;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}
.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}
.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  background: #04aa6d;
  cursor: pointer;
}
label {
  background: rgb(228, 228, 228);
  padding: 0.3rem;
  color: white;
}
input:checked + label {
  background: rgb(1, 180, 10);
}
input + label {
  display: inline-block;
  width: 3rem;
  text-align: center;
  background: rgb(145, 2, 2);
}
input[type="radio"],
input[type="checkbox"] {
  display: none;
}
.wrapper {
  display: flex;
  justify-content: center;
}
</style>
