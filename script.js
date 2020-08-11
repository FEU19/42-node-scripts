const myModule = require('./module.js');
const importedFunction = myModule.moduleFunction;

const fs = require('fs');

// i React: import moduleFunction from './module.js'

console.log('Hello world!!');

importedFunction();

fs.readFile('./fakeDatabase.txt', (error, data) => {
    if( error ) {
        console.log('Error when reading the file: ' + error);
        return;
    }
    console.log('Read from file: ' + data);
    // JSON.parse if we want to convert it to a JavaScript data type
})
