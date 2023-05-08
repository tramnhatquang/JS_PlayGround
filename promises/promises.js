/*
- A promise in real life is like a placeholder for something that we are going  to do for somebody in the future
- 
 */
function myAsyncFun() {
  return new Promise((resolve, reject) => {
    let error = true;
    setTimeout(() => {
      console.log("Working asynchronously");
      if (error) {
        reject("Error!!!");
      } else {
        resolve();
      }
    }, 1000);
  });
}

myAsyncFun()
  .then((success) => console.log(success))
  .catch((error) => console.log(error));
