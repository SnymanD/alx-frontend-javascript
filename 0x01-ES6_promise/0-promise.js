// 0-promise.js
function getResponseFromAPI() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // Assuming a successful response for demonstration purposes
      resolve("API response data");
      // If there's an error, you can reject the promise
    }, 1000);
  });
}

export default getResponseFromAPI;

