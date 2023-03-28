// read as string ./src/blank.txt
const fs = require('fs');
const path = require('path');

let blank = fs.readFileSync(
    path.join(__dirname, 'public', 'blank.txt'),
    'utf8'
);
const bundle = fs.readFileSync(
    path.join(__dirname, 'public', 'bundle.js'),
    'utf8'
);

//replace ??? to script tag from ./src/public/bundle.js from source
blank = blank.replace('???', `${bundle}`);
//write to ./public/404.html

fs.writeFileSync(path.join(__dirname, 'public', '404.html'), blank, 'utf8');
