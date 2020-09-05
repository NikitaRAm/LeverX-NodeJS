//Task10
const p = new Promise((resolve,reject) => {
  setTimeout(() => {
    const string = "Hi";
    resolve(string);
  },2000)
})

p.then((resolve) => {
  console.log(resolve)
})

