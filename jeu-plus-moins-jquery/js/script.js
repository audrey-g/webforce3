
// Choix du nombre par l'ordinateur

//var nombre = 55;
var nombre = Math.round(Math.random()*100); // l'ordinateur sort un nombre entier aléatoire compris entre 0 et 100

// Initialisation d'un compteur
var i = 0;

$('#form').submit(function(){
	i++
	// Récupération du nombre entré par l'utilisateur
	var choix = $('#choix').val();

	// Algorithme du jeu
	if (choix == nombre) { //si les deux nombres sont égaux
		$('#resultat').text('Vous avez gagné en '+i+' coup(s) !') // le jeu affiche à l'utilisateur qu'il a gagné
		$('#resultat').css('color','green');
	} else if (choix > nombre){ // si le nombre de l'utilisateur est sup au nbre de l'ordi
		$('#resultat').text('Vous devez choisir un nombre plus petit'); // le jeu affiche qu'il faut un nombre plus petit
		$('#resultat').css('color','red');
	} else { // si le nombre de l'utilisateur est inf au nbre de l'ordi
		$('#resultat').text('Vous devez choisir un nombre plus grand'); // le jeu affiche qu'il faut un nombre plus grand
		$('#resultat').css('color','red');
	}

	// On vide l'input
	$('#choix').val('');

	return false;
})


