<template>
  <kinesis-container class="container">
    <kinesis-element class="primary-moon" :strength="5">
      <img src="./assets/primary-moon.png" alt="Primary moon" />
    </kinesis-element>
    <kinesis-element class="secondary-moon" :strength="10">
      <img src="./assets/secondary-moon.png" alt="Secondary moon" />
    </kinesis-element>
    <kinesis-element class="rick-and-morty" :strength="50" axis="x">
      <img src="./assets/rick-and-morty.png" alt="Rick and Morty" />
    </kinesis-element>

    <kinesis-element class="grass" :strength="100" axis="x">
      <img src="./assets/grass.png" alt="Grass" />
    </kinesis-element>

    <div class="content">
      <h1>{{ pageTitle }}</h1>
      <SelectSign :list="list" @submit="getForecast" />

      <!-- LOADING -->
      <ForecastLoading v-if="loading" />

      <!-- ERROR -->
      <ForecastErorr v-else-if="error" />

      <!-- DATA -->
      <Forecast v-else-if="!!sign && !!forecast" :sign="sign" :forecast="forecast" />
    </div>
  </kinesis-container>
</template>

<script>
import SelectSign from './components/SelectSign.vue';
import ForecastLoading from './components/ForecastLoading.vue';
import ForecastErorr from './components/ForecastError.vue';
import Forecast from './components/Forecast.vue';
import ForecastService from './services/forecast-service';
import { darkTheme } from 'naive-ui';

export default {
  name: 'App',
  components: {
    SelectSign,
    ForecastLoading,
    ForecastErorr,
    Forecast,
  },
  data() {
    return {
      pageTitle: 'Кто ты сегодня?',
      list: [
        'aries',
        'taurus',
        'gemini',
        'cancer',
        'leo',
        'virgo',
        'libra',
        'scorpio',
        'sagittarius',
        'capricorn',
        'aquarius',
        'pisces',
      ],
      sign: null,
      forecast: null,
      loading: false,
      error: false,
      darkTheme,
    };
  },
  methods: {
    getForecast(sign) {
      const forecastService = new ForecastService();

      this.loading = true;
      this.error = false;
      this.forecast = null;

      forecastService
        .getForecast(sign)
        .then((data) => {
          this.forecast = data;
          this.sign = sign;
        })
        .catch(() => {
          this.error = true;
        })
        .finally(() => {
          this.loading = false;
        });
    },
  },
};
</script>

<style>
body {
  margin: 0 !important;
  padding: 0 !important;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.container {
  margin: 0 !important;
  padding: 0 !important;
  position: absolute;
  overflow: hidden;
  background-image: url('./assets/background.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

.primary-moon {
  position: absolute;
  right: 10%;
  top: 10%;
}
.primary-moon img {
  widows: 200px;
  height: 200px;
}

.secondary-moon {
  position: absolute;
  right: 25%;
  top: 25%;
}
.secondary-moon img {
  widows: 100px;
  height: 100px;
}

.rick-and-morty {
  position: absolute;
  left: 25%;
  bottom: 2%;
}

.rick-and-morty img {
  height: 350px;
}

.grass {
  position: absolute;
  left: 0;
  bottom: 0;
}

.grass img {
  width: calc(100vw + 200px);
  position: absolute;
  bottom: 0;
  left: -100px;
}

.content {
  max-width: 600px;
  min-width: 320px;
  height: 100%;
  padding: 60px 1em;
  box-sizing: border-box;
  color: #fff;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1em;
  overflow: auto;
}

h1 {
  width: 100%;
  text-align: center;
}
</style>
