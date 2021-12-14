<template>
  <div class="wrapper">
    <h1>Typescript Interface</h1>
    <template v-for="person in people" :key="person">
      <Person :person="person" />
    </template>
  </div>
</template>

<script setup lang="ts">
import Person from "./Person.vue";

const people = [
  {
    name: "John Johnson",
    age: 100,
    likes: {
      colors: "red",
    },
  },
  {
    name: "Bob Bobson",
    age: 200,
    likes: {
      colors: ["blue", "green"],
    },
  },
  {
    name: "qqqqqqqq",
    age: 200,
    likes: {
      animals: "dog",
    },
  },
  {
    name: "fffff",
    age: 200,
    likes: {
      animals: ["dog", "cat"],
    },
  },
  {
    name: "ddddddd",
    age: 200,
    likes: {
      colors: "orange",
      animals: ["dog", "cat"],
    },
  },
  {
    name: "bbbbbbbb",
    age: 400,
    likes: {},
  },
  {
    name: "cccccccccc",
    age: 500,
  },
];
</script>

<style scoped>
.wrapper {
  background: rgb(255, 169, 112);
  max-width: 500px;
  margin: 0 auto;
}
</style>
