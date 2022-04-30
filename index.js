const fs = require('fs');
// create a file if it doesnt exist and if it exist it will overwirte over that file a delete the previous content
fs.writeFileSync('text.txt','hello thats my first program');
// appen a new data in it 
fs.appendFileSync('text.txt','this is appended data');
// now if i want to read the data from a file
const bufdata=fs.readFileSync('text.txt');
console.log(bufdata.toString());