/*
Exercice jQuery
Validation de formulaire
Mai 2017
*/

$('form').submit(function(){

	var errors = false;

	// Civilité
	var civilite = $('#civilite').val();
	if (civilite.length === 0){
		$('#civilite').addClass('error');
		errors = true;
	} else {
		$('#civilite').removeClass('error');
	}

	// Nom de famille
	var nom = $('#nom').val();
	if (nom.length === 0){
		$('#nom').addClass('error');
		errors = true;
	} else {
		$('#nom').removeClass('error');
	}

	// Prénom
	var prenom = $('#prenom').val();
	if (prenom.length === 0){
		$('#prenom').addClass('error');
		errors = true;
	} else {
		$('#prenom').removeClass('error');
	}

	if (errors){
		return false;
	} else {
		return true;
	}

	
});
