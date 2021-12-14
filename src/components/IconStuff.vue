<template>
  <div class="icon-stuff">
    <!-- 

Note:
icons are automatically given both stroke and fill.
if you don't want stroke or fill, you have to give that 
path/circle/etc    stroke="none"

       -->
    <IconBase
      class="icon"
      icon-name="mouse"
      icon-color="#124"
      width="48"
      height="48"
    >
      <MouseIcon />
    </IconBase>

    <IconBase
      class="icon"
      icon-name="cool"
      icon-color="#fff"
      width="48"
      height="48"
    >
      <CoolIcon />
    </IconBase>

    <IconBase
      class="icon"
      icon-name="hide"
      icon-color="orange"
      width="48"
      height="48"
    >
      <HideIcon />
    </IconBase>

    <div class="text--red">
      This div has color: red
      <IconBase class="icon" icon-name="hide">
        <HideIcon />
      </IconBase>
    </div>

    <div class="text--aqua">
      This div has color: aqua
      <IconBase class="icon" icon-name="hide">
        <HideIcon />
      </IconBase>
    </div>
  </div>
</template>

<script setup lang="ts">
import IconBase from "./IconBase.vue";
import MouseIcon from "./icons/MouseIcon.vue";
import CoolIcon from "./icons/CoolIcon.vue";
import HideIcon from "./icons/HideIcon.vue";
</script>

<style scoped>
.icon-stuff {
  background: rgb(110, 110, 110);
  margin: 0.25rem;
  padding: 0.5rem;
  padding: 1rem;
}
.icon {
  margin-right: 1rem;
}
.text--red {
  color: red;
  font-size: 200%;
  text-transform: uppercase;
}
.text--aqua {
  color: aqua;
  font-size: 200%;
  text-transform: uppercase;
}
.box-size {
  width: 200px;
  height: 200px;
  border: 1px solid black;
}
</style>
