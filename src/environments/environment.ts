// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  rss_to_json_api_url: 'https://rss2json.com/api.json?rss_url=',
  firebase: {
    apiKey: "AIzaSyBrjiI-dR4D4cNWBg1b5vw1GJQd2m5Pusw",
    authDomain: "pollenkontrollen.firebaseapp.com",
    databaseURL: "https://pollenkontrollen.firebaseio.com",
    projectId: "pollenkontrollen",
    storageBucket: "pollenkontrollen.appspot.com",
    messagingSenderId: "1036343881291"
  },
  google: {
    maps: {
      apiKey: 'AIzaSyBlJyv3d6EGmrNRoPb6yJZMa2-PIPw9VcM'
    }
  }
};
