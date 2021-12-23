<template>
  <h1>{{ pageTitle }}</h1>
  <SelectSign :list="list" @submit="getForecast" />
  <SignCard :sign="sign" :forecast="forecast" :loading="loading" />
</template>

<script>
import SelectSign from './components/SelectSign.vue';
import SignCard from './components/SignCard.vue';

export default {
  name: 'App',
  components: {
    SelectSign,
    SignCard,
  },
  data() {
    return {
      pageTitle: 'Who are you today??',
      list: [
        'Aries',
        'Taurus',
        'Gemini',
        'Cancer',
        'Leo',
        'Virgo',
        'Libra',
        'Scorpio',
        'Sagittarius',
        'Capricorn',
        'Aquarius',
        'Pisces',
      ],
      sign: null,
      forecast: null,
      loading: false,
    };
  },
  methods: {
    getForecast(sign) {
      this.loading = true;
      this.forecast = null;

      const day = 'today';

      const url = new URL('https://sameer-kumar-aztro-v1.p.rapidapi.com');
      const params = { sign, day };

      url.search = new URLSearchParams(params).toString();

      fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
          'x-rapidapi-key': 'dea6ab7236msh5d035e56517d4b8p18b79fjsnd4b65491be0b',
        },
      })
        .then((response) => {
          return response.json();
        })
        .then((data) => {
          this.forecast = data;
          this.sign = sign;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  width: auto;
  max-width: 600px;
  min-width: 320px;
  padding: 0 1em;
  box-sizing: border-box;
  color: #2c3e50;
  margin: 60px auto 0;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 1em;
}
</style>
