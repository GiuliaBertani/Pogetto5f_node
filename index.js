
'Use strict';
function somma(n1, n2) {
 if(typeof n1=='number' && typeof n2=='number'){ 
 	var somma = n1 +n2;
 	return somma;
 }
 else{
 console.log(somma + 'non è un numero');
}
}

const somma2 = (n1,  n2) => {

	return n1 + n2;
}

const somma3 = function (n1, n2) {

	return n1 +n2;
}
console.log(somma(2,3));
console.log(somma2(3,4));
console.log(somma3(4,5));
