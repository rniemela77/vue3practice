<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="props.width"
    :height="props.height"
    viewBox="0 0 24 24"
    :aria-labelledby="props.iconName"
    role="presentation"
  >
    <title :id="iconName" lang="en">{{ props.iconName }} icon</title>
    <g :fill="props.iconColor" :stroke="props.iconColor">
      <!-- Not sure if this will work with nuxt? -->
      <slot />
    </g>
  </svg>
</template>

<script setup lang="ts">
interface Props {
  iconName: string;
  width?: string | number;
  height?: string | number;
  iconColor?: string;
}

const props = withDefaults(defineProps<Props>(), {
  iconName: "Mouse",
  width: 24,
  height: 24,
  iconColor: "currentColor",
});
</script>

<style scoped>
svg {
  display: inline-block;
  vertical-align: baseline;
  /* margin-bottom: -2px;*/
}
</style>
