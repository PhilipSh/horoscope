<!-- Use naive ui library -->

<template>
  <SelectSign :list="list" @submit="getForecast" />
  <SignCard :forecast="forecast" />
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
      forecast: null,
    };
  },
  methods: {
    getForecast(sign) {
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
          console.log(data);
          this.forecast = data;
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
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
}
</style>
