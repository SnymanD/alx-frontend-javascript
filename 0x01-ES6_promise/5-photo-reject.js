// 5-photo-reject.js
export default function uploadPhoto(fileName) {
  return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      // For demonstration purposes, let's reject the promise with an error
      const errorMessage = `${fileName} cannot be processed`;
      reject(new Error(errorMessage));
    }, 1000); // Simulating a delay of 1 second
  });
}

