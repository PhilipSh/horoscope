<template>
  <n-select v-model:value="value" :options="selectList" @update:value="submitValue" />
</template>

<script>
export default {
  name: 'SelectSign',
  props: {
    list: Array,
  },
  emits: ['submit'],
  data() {
    return {
      value: null,
    };
  },
  computed: {
    selectList() {
      return this.list.map((item) => ({ label: item, value: item }));
    },
  },
  methods: {
    submitValue(value) {
      this.$emit('submit', value);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
