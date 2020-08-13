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


// Uppgift: hämta och ändra datan.
// Namnet är felstavat, ska vara "Johan" och "johan@home.se"
// 1. läs innehållet i filen
// 2. omvandla texten till ett JavaScript-objekt (mha JSON.parse)
// 3. göra ändringar i objektet
// 4. omvandla objektet till en sträng (mha JSON.stringify)
// 5. spara strängen till filen
fs.readFile('./personData.json', (error, data) => {
    if( error ) {
        console.log('Something went wrong (personData) ', error);
        return;
    }
    // nu har vi filens text-innehåll
    let object = JSON.parse(data);
    console.log('Reading personData', object);

    // dags att göra ändringarna
    object.name = 'Johan';
    object.email = 'johan@home.se';

    let newText = JSON.stringify(object);
    fs.writeFile('./personData.json', newText, () => {
        console.log('Saved new person data to file');
    })
})
