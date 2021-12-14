import { defineStore } from "pinia";

export const useVariablesStore = defineStore("variables", {
  state: () => {
    return { name: "john johnson" };
  },
});
