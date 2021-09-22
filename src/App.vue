<template>
  <div id="app">
    <h1>object.initialProperty = "{{ object.initialProperty }}"</h1>
    <button @click="chageInitialProperty">change object.initialProperty</button>

    <h1>object.newProperty = "{{ object.newProperty }}"</h1>
    <button @click="chageNewProperty">change object.newProperty</button>
  </div>
</template>

<script>
import store from "./store";

export default {
  computed: {
    object: () => store.state.object,
  },
  methods: {
    chageInitialProperty: () =>
      store.dispatch("onSetObjectProperty", {
        prop: "initialProperty",
        val: new Date().toISOString(),
      }),

    chageNewProperty: () =>
      store.dispatch("onSetObjectProperty", {
        prop: "newProperty",
        val: new Date().toISOString(),
      }),
  },
};
</script>
