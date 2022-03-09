<template>
  <n-card>
    <n-descriptions label-placement="top" :title="sign">
      <n-descriptions-item>
        <template #label>Date</template>
        {{ forecast?.current_date }}
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>Color</template>
        {{ forecast?.color }}
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>Lucky number</template>
        {{ forecast?.lucky_number }}
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>Lucky time</template>
        {{ forecast?.lucky_time }}
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>Compatibility</template>
        {{ forecast?.compatibility }}
      </n-descriptions-item>
      <n-descriptions-item>
        <template #label>Mood</template>
        {{ forecast?.mood }}
      </n-descriptions-item>

      <n-descriptions-item>
        <template #label>Prediction</template>
        {{ forecast?.description }}
      </n-descriptions-item>
    </n-descriptions>

    <template #footer>
      <n-button @click="leaveFeedback">
        <template #icon>
          <n-icon>
            <heart-regular></heart-regular>
          </n-icon>
        </template>

        Leave feedback
      </n-button>
    </template>
  </n-card>

  <n-modal v-model:show="showModal">
    <n-card style="width: 600px" title="Message for stupid user" :bordered="false" size="huge">
      Horoscope fucked your opinion!!
    </n-card>
  </n-modal>
</template>

<script>
import { HeartRegular } from '@vicons/fa';
export default {
  name: 'Forecast',
  components: {
    HeartRegular,
  },
  props: {
    sign: {
      type: String,
      default: null,
    },
    forecast: {
      type: Object,
      default: null,
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
