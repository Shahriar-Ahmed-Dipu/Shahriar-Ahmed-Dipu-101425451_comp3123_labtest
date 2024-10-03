// ID:10125451

function lowerCaseWords(mixedArray) {
    return new Promise((resolve, reject) => {
        try {
            const result = mixedArray
                .filter(item => typeof item === 'string')
                .map(word => word.toLowerCase());
            resolve(result);
        } catch (error) {
            reject('An error occurred while processing the array.');
        }
    });
}


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
    .then(result => console.log(result)) // Output will be: ['pizza', 'wings']
    .catch(error => console.error(error));
