export const environment = {
  production: true,
  currencies: [
    {id: 'EUR-USD', from: 'EUR', to: 'USD'}
  ],
  persistence_interval: 10 * 60 * 1000,
  endpoints: {
    currencies: {
      EUR: 'http://data.fixer.io/api/latest?access_key=33b23d6e01efe285daf21f65e1124757'
    }
  }
};
