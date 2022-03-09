export default class ForecastService {
  getForecast(sign) {
    // const url = 'https://horoscopes.rambler.ru/' + sign + '/';

    // const url = 'http://localhost:8000';
    // return fetch(url);

    const day = 'today';

    const url = new URL('https://sameer-kumar-aztro-v1.p.rapidapi.com');
    const params = { sign, day };

    url.search = new URLSearchParams(params).toString();
    return fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-rapidapi-host': 'sameer-kumar-aztro-v1.p.rapidapi.com',
        'x-rapidapi-key': 'dea6ab7236msh5d035e56517d4b8p18b79fjsnd4b65491be0b',
      },
    }).then((response) => response.json());
  }

  constructor() {}
}
