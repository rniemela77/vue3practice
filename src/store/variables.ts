import { defineStore } from "pinia";

export const useVariablesStore = defineStore("variables", {
  state: () => {
    return { name: "john johnson" };
  },
  //   actions: {
  //     increment() {
  //       this.count++;
  //     },
  //   },
  // state: () => ({ count: 0 }),
  // getters: {
  //   double: (state) => state.count * 2,
  // },
  // actions: {
  //   increment() {
  //     this.count++
  //   }
  // }
});
