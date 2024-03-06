// 1-promise.js
import getFullResponseFromAPI from "./1-promise.js";

const successResponsePromise = getFullResponseFromAPI(true);
const failureResponsePromise = getFullResponseFromAPI(false);

successResponsePromise
  .then(response => console.log(response))
  .catch(error => console.error(error.message));

failureResponsePromise
  .then(response => console.log(response))
  .catch(error => console.error(error.message));

