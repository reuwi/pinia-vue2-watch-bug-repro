import { defineStore } from "pinia";

const store = defineStore("foo", {
  state: () => ({
    lol: { hhh: 2333 },
    bar: {}
  }),
  actions: {
    setBar() {
      this.bar = { baz: 2333 };
    }
  }
});

export default store;
