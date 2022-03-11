<template>
  <n-card>
    <n-skeleton text height="30px" width="30%" />
    <n-skeleton text height="60px" :repeat="3" />
  </n-card>
</template>

<script>
export default {
  name: 'ForecastLoading',
};
</script>
