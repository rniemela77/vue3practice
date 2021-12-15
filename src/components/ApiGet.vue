<template>
  <div class="wrapper">
    <h1>Api test</h1>
    <code>{{ text }}</code>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const text = ref("");

/*
const axios = require("axios");

const url = "https://reqbin.com/echo";

axios
  .get(url)
  .then((response) => {
    console.log(response);
    text.value = response.data;
  })
  .catch((error) => {
    console.log(error);
  });
*/
/*
WORKS

const axios = require("axios");
async function getAxios() {
  let res = await axios.get("https://reqbin.com/echo");

  text.value = res.data;
}
getAxios();
*/
</script>

<style scoped>
.wrapper {
  background: rgb(222, 182, 255);
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
</style>
