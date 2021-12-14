import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
  state: () => {
    return { count: 0 };
  },
  actions: {
    increment() {
      this.count++;
    },
    double() {
      this.count = this.count * 2;
    },
  },
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
