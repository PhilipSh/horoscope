<template>
  <span>{{ forecast?.description }}</span>

  <button @click="leaveFeedback">Leave feedback</button>
</template>

<script>
export default {
  name: 'SignCard',
  props: {
    forecast: null,
  },
  methods: {
    leaveFeedback() {
      alert("Horoscope don't give a fuck about your opinion");
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
