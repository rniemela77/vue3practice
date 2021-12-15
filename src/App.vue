<template>
  <button @click="togglePrice" :class="['button', { selected: showingPrice }]">
    Toggle Price
  </button>
  <button @click="toggleState" :class="['button', { selected: showingState }]">
    Toggle State
  </button>
  <button
    @click="togglePersonList"
    :class="['button', { selected: showingPersonList }]"
  >
    Toggle PersonList
  </button>
  <button @click="toggleIcons" :class="['button', { selected: showingIcons }]">
    Toggle Icons
  </button>
  <button
    @click="toggleApiGet"
    :class="['button', { selected: showingApiGet }]"
  >
    Toggle ApiGet
  </button>
  <button
    @click="toggleChipsDisplay"
    :class="['button', { selected: showingChipsDisplay }]"
  >
    Toggle ChipsDisplay
  </button>
  <button
    @click="toggleFormValidate"
    :class="['button', { selected: showingFormValidate }]"
  >
    Toggle FormValidate
  </button>

  <Price v-if="showingPrice" />
  <State v-if="showingState" />
  <PersonList v-if="showingPersonList" />
  <IconStuff v-if="showingIcons" />
  <ApiGet v-if="showingApiGet" />
  <ChipsDisplay v-if="showingChipsDisplay" type="new" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Price from "./components/price/Price.vue";
import State from "./components/State.vue";
import PersonList from "./components/people/PersonList.vue";
import IconStuff from "./components/icon/IconStuff.vue";
import ApiGet from "./components/ApiGet.vue";
import ChipsDisplay from "./components/ChipsDisplay.vue";

const showingPrice = ref(false);
const showingState = ref(false);
const showingPersonList = ref(false);
const showingIcons = ref(false);
const showingApiGet = ref(false);
const showingChipsDisplay = ref(false);
const showingFormValidate = ref(true);

const togglePrice = () => (showingPrice.value = !showingPrice.value);
const toggleState = () => (showingState.value = !showingState.value);
const togglePersonList = () =>
  (showingPersonList.value = !showingPersonList.value);
const toggleIcons = () => (showingIcons.value = !showingIcons.value);
const toggleApiGet = () => (showingApiGet.value = !showingApiGet.value);
const toggleChipsDisplay = () =>
  (showingChipsDisplay.value = !showingChipsDisplay.value);
const toggleFormValidate = () =>
  (showingFormValidate.value = !showingFormValidate.value);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
.button {
  font-size: 150%;
  border: none;
  padding: 1rem 2rem;
}
.selected {
  background: lime;
}
</style>
