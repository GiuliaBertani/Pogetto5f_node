'Use strict';
const fs = require('fs');

//creare cartella
try{
	fs.mkdir('./Persone');
}
catch (err) {}

//creare persone(.json) nella cartella Persone 
const creopersona = (JsObject) => {

	let nome = JsObject.nome;
	let cognome = JsObject.cognome;

	if (!nome || !cognome) return console.log("Inserire sia il nome che il cognome delle persona");

	nome = nome.toLowerCase();
    cognome = cognome.toLowerCase();


	const personajson = JSON.stringify(JsObject);
	const nomefile = `${nome}_${cognome}`  //stessa cosa che dire (nome + '_' + cognome)
	const percorsosalvataggio = `./Persone/${nomefile}`;

	fs.writeFile(percorsosalvataggio, personajson, (err) => {

		if (err) return console.log ("Si è verificato un errore: " + err);
		console.log ("Il file è stato salvato con successo");

	});

};
// richiedere elementi del file creato. Funziona solo con dei Json: è semplice
const richiestaJSON = (nome, cognome) => {
    const nomefile = `${nome.toLowerCase()}_${cognome.toLowerCase()}.json`;
    try {
        return require(`./persone/${nomefile}`)
    } catch(err) {
        return null;
    }
};
//richiedere elementi del file creato. Funziona sempre converte degli oggetti (i Json sono praticamente oggetti js) in stringhe
const conversioneJSON_stringa = (nome, cognome) => {
    const nomefile= `${nome.toLowerCase()}_${cognome.toLowerCase()}.json`;
    try {
        const personajson = fs.readFileSync(`./persone/${nomefile}`);
        return JSON.parse(personajson.toString());
    } catch (err) {
        return null;
    }
};

creopersona ({

	nome : "Giulia",
	cognome : "Bertani"

});

const persona = conversioneJSON_stringa("Giulia","Bertani");
console.log (persona);





















/*const student = require('./student.json');
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
*/