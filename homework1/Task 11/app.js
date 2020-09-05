//Task11
const promiseSeries = pr =>
    pr.reduce((p, next) => p.then(next), Promise.resolve());

    function getName(name) {
        return new Promise((resolve, reject) => {
            console.log(name);
            resolve(name)
        })
    }
    function getSurname(surName) {
    return new Promise((resolve, reject) => {
        console.log(surName);
        resolve(surName)
    })
   
}
promiseSeries([() => getName("Nikita"), () => getSurname("Romanovich")]);