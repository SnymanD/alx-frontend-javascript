// 2-then.js
function handleResponseFromAPI(promise) {
  return promise
    .then((response) => {
      console.log('Got a response from the API');
      return { status: 200, body: 'success' };
    })
    .catch((error) => {
      console.error('Got an error from the API');
      return new Error(); // Return an empty Error object
    });
}

export default handleResponseFromAPI;

