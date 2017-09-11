

// Quand on clique sur le bouton
$('#interrupteur').click(function(){

	if (!($('body').hasClass('nuit'))){
		$('body').addClass('nuit');

		$(this).text('Jour');

		jour = false;
	} else {
		$('body').removeClass('nuit');

		$(this).text('Nuit');

		jour = true;
	}

});
