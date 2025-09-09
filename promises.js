// Fetching Promise (Data)
function fetchData() {
  return new Promise((resolve, reject) => {
    console.log('Fetching Data...');

    // Simulating an API call
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve('Data fetched successfully!'); // Fulfills the Promise
      } else {
        reject('Error: Could not fetch data.'); // Rejects the Promise
      }
    }, 2000); // 2 seconds delay
  });
}

// Using the Promise
fetchData()
  .then(response => {
    console.log(response); // 'Data fetched successfully!'
  })
  .catch(error => {
    console.error(error); // 'Error: Could not fetch data.'
  });
