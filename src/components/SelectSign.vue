<template>
  <p>Who are you today ??</p>
  <select name="select" @input="submitValue">
    <option v-for="(item, index) in list" :value="item" :key="index">{{ item }}</option>
  </select>
</template>

<script>
export default {
  name: 'SelectSign',
  props: {
    list: Array,
  },
  emits: ['submit'],
  methods: {
    submitValue(event) {
      let value = event.target.value;
      this.$emit('submit', value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
