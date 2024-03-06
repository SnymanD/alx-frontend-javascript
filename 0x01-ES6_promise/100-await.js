export function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      // For demonstration purposes, let's resolve the promise with some data
      resolve({ status: 200, body: `Photo uploaded successfully: ${fileName}` });
      // If there's an error, you can reject the promise
      // reject(new Error(`Failed to upload photo: ${fileName}`));
    }, 1000); // Simulating a delay of 1 second
  });
}

export function createUser(firstName, lastName) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      // For demonstration purposes, let's resolve the promise with some data
      resolve({ status: 200, body: { firstName, lastName } });
      // If there's an error, you can reject the promise
      // reject(new Error('Failed to create user'));
    }, 1500); // Simulating a delay of 1.5 seconds
  });
}

