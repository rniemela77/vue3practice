<template>
  <!--
            Test using Vee Validate


    -->
  <div id="app">
    <Form @submit="onSubmit">
      <Field name="email" type="email" :rules="validateEmail" />
      <button>Sign up</button><br />
      <ErrorMessage name="email" />
    </Form>

    <Form @submit="onSubmit">
      <Field type="string" name="name" :rules="validateName" />
      <button>submit name with more than 3 char</button><br />
      <ErrorMessage name="name" />
    </Form>
  </div>
</template>

<script setup lang="ts">
import { Form, Field, ErrorMessage } from "vee-validate";

const onSubmit = (values: any) => {
  console.log(values);
  console.log(JSON.stringify(values, null, 2));
};

const validateEmail = (value: any) => {
  // if the field is empty
  if (!value) {
    return "This field is required";
  }
  // if the field is not a valid email
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return "This field must be a valid email";
  }
  // All is good
  return true;
};

const validateName = (value: any) => {
  if (!value) {
    return "This field is required";
  }

  return true;
};
</script>

<style scoped>
form {
  padding: 1rem;
  background: lightcyan;
}
form * {
  font-size: 200%;
}
</style>
