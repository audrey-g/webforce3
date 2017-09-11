/*
Exercice jQuery
Validation de formulaire - version 2
Mai 2017
*/

$('form').submit(function(){

	var errors = false;

	var champs = $('.obligatoire');

	for (var i=0; i<champs.length;i++){

		var element = $(champs[i]);
		var valeur = element.val();
		// On récupère l'id de l'élément puis on construit l'id du message d'erreur correspondant
		var id = champs[i].id;
		var idMsg = '#'+id+'-msg';

		if (valeur.length === 0){
			element.addClass('error');

			// si on est sûrs que le paragraphe est l'élément suivant : element.next().show(); pour faire apparaître le message d'erreur
			$(idMsg).fadeIn(150); //on fait apparaître le message d'erreur grâce à la méthode sur l'id

			errors = true;
		} else {
			element.removeClass('error');

			// si on est sûrs que le paragraphe est l'élément suivant : element.next().hide(); pour faire apparaître le message d'erreur
			$(idMsg).fadeOut(150); //on fait disparaître le message d'erreur grâce à la méthode sur l'id
		}
	}

	if (errors){
		return false;
	} else {
		return true;
	}

	
});