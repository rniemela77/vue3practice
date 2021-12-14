<template>
  <div class="wrapper">
    <h1>State test</h1>
    <div>
      <h2>counter.count: {{ counter.count }}</h2>
      <fieldset>
        <legend>Ways to manipulate state</legend>
        <button @click="handleClick1">counter.count++</button>
        <button @click="handleClick2">
          counter.$patch({ count: counter.count + 1})
        </button>
        <div>actions</div>
        <button @click="handleClick3">counter.increment()</button>
        <button @click="handleClick4">counter.double()</button>
      </fieldset>
    </div>
    <div>
      <h2>variables.name: {{ variables.name }}</h2>
      <input type="text" v-model="myName" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";

import { useCounterStore } from "@/store"; // import store index file
import { useVariablesStore } from "@/store/variables"; // import specific store file

// pinia setup
const counter = useCounterStore();
const variables = useVariablesStore();

const myName = ref(variables.name);
/*
This has some other purpose.
watchEffect(() => {
  variables.$patch({ name: myName.value });
});
*/
watch(myName, (newName) => {
  variables.$patch({ name: newName });
});

const handleClick1 = () => {
  counter.count++;
};
const handleClick2 = () => {
  counter.$patch({ count: counter.count + 1 });
};
const handleClick3 = () => {
  counter.increment();
};
const handleClick4 = () => {
  counter.double();
};
</script>

<style scoped>
.wrapper {
  background: lightpink;
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
}
button {
  font-size: 130%;
}
input {
  font-size: 250%;
}
</style>
