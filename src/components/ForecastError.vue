<template>
  <n-alert title="Failed loading" type="error">
    <p>The server is sick &#129301;</p>
    <p>You can help by sending some money</p>
    <n-button @click="donate">
      <template #icon>
        <n-icon>
          <credit-card></credit-card>
        </n-icon>
      </template>
      +100$
    </n-button>
  </n-alert>

  <n-modal v-model:show="showModal">
    <n-card class="modal" title="One more advice" :bordered="false" size="huge">
      <n-text tag="div">Are you so stupid, don't give you money anyone!</n-text>
      <template #cover>
        <img src="../assets/no-rick-and-morty.gif" alt="Rick no" width="400" />
      </template>
    </n-card>
  </n-modal>
</template>

<script>
import { CreditCard } from '@vicons/fa';
export default {
  name: 'ForecastError',
  components: {
    CreditCard,
  },
  data() {
    return {
      showModal: false,
    };
  },
  methods: {
    donate() {
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
