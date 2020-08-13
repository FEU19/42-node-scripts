const fs = require('fs')

fs.readFile('./personData.json', (error, data) => {
    if( error ) {
        console.log('Something went wrong (personData) ', error);
        return;
    }
    // nu har vi filens text-innehåll
    let object = JSON.parse(data);
    console.log(`Name: ${object.name}, email: ${object.email}`);
})
