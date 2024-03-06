// 3-all.js
export function uploadPhoto() {
  return new Promise((resolve) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      resolve({ body: 'Photo uploaded successfully' });
    }, 1000);
  });
}

export function createUser() {
  return new Promise((resolve) => {
    // Simulating an asynchronous operation
    setTimeout(() => {
      resolve({ body: { firstName: 'John', lastName: 'Doe' } });
    }, 1500);
  });
}

