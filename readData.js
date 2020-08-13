const fs = require('fs')

// 1.5a
// fs.readFile('./personData.json', (error, data) => {
//     if( error ) {
//         console.log('Something went wrong (personData) ', error);
//         return;
//     }
//     // nu har vi filens text-innehåll
//     let object = JSON.parse(data);
//     console.log(`Name: ${object.name}, email: ${object.email}`);
// })

// 1.5b
let readStream = fs.createReadStream('./personData.json');

let data = '';
readStream.on('data', chunk => {
    console.log('Received package from stream: ' + chunk.toString());
    data += chunk;
})
readStream.on('end', () => {
    // nu har vi filens text-innehåll
    let object = JSON.parse(data);
    console.log(`Name: ${object.name}, email: ${object.email}`);
})
