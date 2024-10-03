function resolvedPromise() {
    return new Promise((resolve) => {       // Create a new promise
        setTimeout(() => {                  // Wait for 500ms
            resolve({ message: 'delayed success!' }); // Resolve with a success message
        }, 500);
    });
}

function rejectedPromise() {
    return new Promise((_, reject) => {      // Create a new promise
        setTimeout(() => {                   // Wait for 500ms
            reject({ error: 'delayed exception!' });  // Reject with an error message
        }, 500);
    });
}


// Call the promises and handle the results
resolvedPromise()
    .then(result => console.log(result))     // If this resolved, log the result
    .catch(error => console.log(error));     // If this rejected, log the error

rejectedPromise()
    .then(result => console.log(result))     // If resolved, log the result
    .catch(error => console.log(error));     // If rejected, log the error
