<template>
  <button @click="togglePrice" :class="{ 'selected': showingPrice }">
    Toggle Price
  </button>
  <button @click="toggleState" :class="{ 'selected': showingState }">Toggle State</button>
  <button @click="toggleTypescript" :class="{ 'selected': showingTypescript }">Toggle Typescript</button>
  <button @click="toggleIcons" :class="{ 'selected': showingIcons }">Toggle Icons</button>

  <Price v-if="showingPrice" />
  <State v-if="showingState" />
  <Typescript v-if="showingTypescript" />
  <IconStuff v-if="showingIcons" />
</template>

<script setup lang="ts">
import { ref } from "vue";
import Price from "./components/Price.vue";
import State from "./components/State.vue";
import Typescript from "./components/Typescript.vue";
import IconStuff from "./components/IconStuff.vue";

const showingPrice = ref(true);
const showingState = ref(false);
const showingTypescript = ref(false);
const showingIcons = ref(false);

const togglePrice = () => (showingPrice.value = !showingPrice.value);
const toggleState = () => (showingState.value = !showingState.value);
const toggleTypescript = () =>
  (showingTypescript.value = !showingTypescript.value);
const toggleIcons = () => (showingIcons.value = !showingIcons.value);
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
button {
  font-size: 150%;
  border: none;
  padding: 1rem 2rem;
}
.selected {
  background: lime;
}
</style>
