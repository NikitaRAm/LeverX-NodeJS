//Task9
function deleteNullAndUndefined(array, callback) {

    let error = null;
    let filteredArray = null;

    try {
        filteredArray = array.filter(el => {
            return el != null
        });
    } catch (e) {
        error = e;
    }

    setTimeout(() => callback(filteredArray, error), 5000)
}

deleteNullAndUndefined([0, 1, null, 2, 3, undefined, 4, 5], (result, error) => {
    if (error) {
        console.log(error);
    } else {
        console.log(result);
    }
})