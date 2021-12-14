<template>
  <div class="person">
    <p>Name: {{ props.person.name }}</p>

    <p>Age: {{ props.person.age }}</p>

    <p v-if="props.person.likes && Object.keys(props.person.likes).length > 0">
      Likes:
      <p
        v-for="[key, value] in Object.entries(props.person.likes)"
        :key="key"
      >
        {{ key }}...........{{ value }}
      </p>
    </p>
  </div>
</template>

<script setup lang="ts">
interface Props {
  person?: personObj;
}

const props = withDefaults(defineProps<Props>(), {
  person: () => {
    return {
      name: "",
      age: 0,
      likes: {
        colors: undefined,
        animals: undefined,
      },
    };
  },
});
</script>

<style scoped>
.person {
  background: rgb(83, 79, 22);
  color: white;
  margin: 0.25rem;
  padding: 0.5rem;
  text-align: left;
}
p {
  margin: 0 0 0 1rem;
}
</style>
