<template>
  <div class="breakout">
    <h1>I am breakout</h1>
    <button @click="closeBreakout">close</button>
  </div>
</template>

<script setup lang="ts">
const emit = defineEmits(["show-pricing-breakout"]);

const closeBreakout = () => {
  emit("show-pricing-breakout", false);
};
</script>

<style scoped>
.breakout {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 20vw;
  background-color: rgba(0, 174, 255, 0.61);
}
button {
  height: 10rem;
  width: 10rem;
}
</style>
