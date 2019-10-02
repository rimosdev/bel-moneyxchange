// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
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

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
