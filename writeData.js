const fs = require('fs');

// An alternative is to use the READLINE Node API:
// https://nodejs.org/api/readline.html

let question = 1;
console.log('What do you want the name to be?');
let name = '', email = '';

process.stdin.resume();
process.stdin.on('data', data => {
    if( question === 1 ) {
        name = data.toString().trim();
        console.log(`You wrote name: "${name}"`);
        question++;

        console.log('What do you want for email?');
    }
    else if( question === 2 ) {
        email = data.toString().trim();
        console.log(`You wrote email: "${email}"`);
        process.stdin.pause();

        let object = { name: name, email: email };
        let stringToWrite = JSON.stringify(object);
        fs.writeFile('./personData.json', stringToWrite, () => {
            console.log('Wrote the new information to personData.json.');
        })
    }
})
