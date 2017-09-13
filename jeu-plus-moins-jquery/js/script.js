
// Choix du nombre par l'ordinateur (aléatoire)
var nombre = Math.round(Math.random()*100); // l'ordinateur sort un nombre entier aléatoire compris entre 0 et 100

// Initialisation d'un compteur
var i = 0;

// Création du jeu
$('#form').submit(function(){
	i++
	// Récupération du nombre entré par l'utilisateur
	var choix = $('#choix').val();

	// Algorithme du jeu
	if (choix == nombre) { //si les deux nombres sont égaux -> le jeu affiche à l'utilisateur qu'il a gagné
		
		if (i == 1){
			$('#resultat').text(choix+' ! Vous avez gagné du premier coup !');
		} else {
			$('#resultat').text(choix+' ! Vous avez gagné en '+i+' coups !');
		}

		$('#resultat').css('color','green');
		$('#btn-reload').removeClass('hidden');
	} else if (choix > nombre){ // si le nombre de l'utilisateur est sup au nbre de l'ordi
		$('#resultat').text('Vous devez choisir un nombre plus petit'); // le jeu affiche qu'il faut un nombre plus petit
		$('#resultat').css('color','red');

		// On affiche le nombre entré dans un section
		var current = "<p>"+choix+"</p>";
		$('#previous-nb').prepend(current);

	} else { // si le nombre de l'utilisateur est inf au nbre de l'ordi
		$('#resultat').text('Vous devez choisir un nombre plus grand'); // le jeu affiche qu'il faut un nombre plus grand
		$('#resultat').css('color','red');

		// On affiche le nombre entré dans un section
		var current = "<p>"+choix+"</p>";
		$('#previous-nb').prepend(current);
	}

	// On vide l'input
	$('#choix').val('');

	return false;
});

$('#btn-reload').click(function(){

	// Choix du nombre par l'ordinateur (aléatoire)
	nombre = Math.round(Math.random()*100); // l'ordinateur sort un nombre entier aléatoire compris entre 0 et 100

	// Réinitialisation d'un compteur
	i = 0;

	// On vide les sections résultat et previous-nb
	$('#resultat').text("Entrez un premier nombre compris entre 1 et 100 !");
	$('#resultat').css('color','black');

	$('#previous-nb').text("");

	// On cache le bouton "reload"
	$('#btn-reload').addClass("hidden");

});



