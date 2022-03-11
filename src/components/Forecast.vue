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
      <n-space>
        <n-button @click="leaveFeedback">
          <template #icon>
            <n-icon>
              <heart-regular></heart-regular>
            </n-icon>
          </template>

          Like
        </n-button>

        <n-button @click="leaveFeedback">
          <template #icon>
            <n-icon>
              <thumbs-down-regular></thumbs-down-regular>
            </n-icon>
          </template>

          Dislike
        </n-button>
      </n-space>
    </template>
  </n-card>

  <n-modal v-model:show="showModal">
    <n-card class="modal" title="The rule of Ricks horoscope" :bordered="false" size="huge">
      <n-text tag="div"> Rick fucked your opinion! </n-text>
      <template #cover>
        <img src="../assets/rick-and-morty-fuck-you.gif" alt="Rick no" width="400" />
      </template>
    </n-card>
  </n-modal>
</template>

<script>
import { HeartRegular, ThumbsDownRegular } from '@vicons/fa';
export default {
  name: 'Forecast',
  components: {
    HeartRegular,
    ThumbsDownRegular,
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

<style lang="css" scoped>
.modal {
  width: auto;
}
</style>
