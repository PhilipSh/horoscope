<template>
  <n-alert title="Ошибка загрузки" type="error">
    <p>Сервер заболел &#129301;</p>
    <p>Вы можете помочь предложив серверу денюжку</p>
    <n-button @click="donate">
      <template #icon>
        <n-icon>
          <credit-card></credit-card>
        </n-icon>
      </template>
      +100$
    </n-button>
  </n-alert>
</template>

<script>
import { CreditCard } from '@vicons/fa';
export default {
  name: 'ForecastError',
  components: {
    CreditCard,
  },
  methods: {
    donate() {
      alert('Спасибо хуесос');
    },
  },
};
</script>
