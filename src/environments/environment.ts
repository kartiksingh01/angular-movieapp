// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  movieApiBaseUrl : "https://imdb8.p.rapidapi.com/auto-complete",
  XRapidAPIHostHeaderName:"X-RapidAPI-Host",

  XRapidAPIHostValue:"imdb8.p.rapidapi.com",
  XRapidAPIKeyHeaderName:"X-RapidAPI-Key",
  XRapidAPIKeyValue:"d312acce86msh75ee956857f23b8p182485jsn509813deae5c",
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
