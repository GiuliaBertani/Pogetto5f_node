'Use strict';
const fs = require('fs');
const student = require('./student.json');
const text = student.name + ' ' + student.surname + ' ' + student.age;

fs.writeFile('./text.text', text, error => {
    console.log('file creato con successo');
});

console.log('sto creando il file...');


fs.readFile('./text.txt', 'utf-8', (error, data) => {

    if (error)
        return console.log('Si è verificato un errore:', error);

    console.log('file creato con successo:', student);


});

console.log('sto leggendo i dati dal file...');
