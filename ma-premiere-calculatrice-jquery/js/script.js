/* Exercice jQuery
Calculatrice
Mai 2017
*/

console.log("----- Fichier bien chargé -----");


$('form').submit(function(event){

	event.preventDefault();

	// Récupération des deux nombres entrés par l'utilisateur
	var nb1 = Number($('#nb-1').val());
	var nb2 = Number($('#nb-2').val());

	// Récupération de l'opérateur choisi par l'utilisateur

	var op = $('#operator').val();

	// Exécution de l'opération

	var res;

		// Structure If/ Else if/Else
	/*if (op === "add"){
		var res = nb1+nb2;
	} 

	else if (op === "soustract"){
		var res = nb1-nb2;
	}

	else if (op === "multiply"){
		var res = nb1*nb2;
	}*/

		// Structure Switch

	switch(op){
		case "add":
			res = nb1+nb2;
			break;

		case "soustract":
			res = nb1-nb2;
			break;

		case "multiply":
			res = nb1*nb2;
			break;
	}

	
	// On affiche le résultat

	$('form p span').text(res);

});
