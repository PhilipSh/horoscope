<template>
  <n-card v-if="!!forecast || loading">
    <template #header>
      <n-skeleton text v-if="loading" width="60%" />
      <template v-else>{{ sign }}</template>
    </template>

    <n-skeleton text v-if="loading" :repeat="1" />
    <template v-else>
      {{ forecast?.description }}
    </template>

    <template #action>
      <n-button v-if="!!forecast" @click="leaveFeedback">Leave feedback</n-button>
    </template>
  </n-card>

  <n-modal v-model:show="showModal">
    <n-card style="width: 600px" title="Message for stupid user" :bordered="false" size="huge">
      Horoscope don't give a fuck about your opinion!!
    </n-card>
  </n-modal>
</template>

<script>
export default {
  name: 'SignCard',
  props: {
    sign: {
      type: String,
      default: null,
    },
    forecast: {
      type: Object,
      default: null,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    leaveFeedback() {
      this.showModal = true;
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
