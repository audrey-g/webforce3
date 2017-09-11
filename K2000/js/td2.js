/* Exercice sur les timers
Mai 2017*/


//Fonction Allumer

/*function on(){
	document.getElementsByTagName("img")[0].src="./img/rouge-on.jpg";
}

*/
/*//Fonction Eteindre
function off(){
	document.getElementsByTagName("img")[0].src="./img/rouge-off.jpg";
}
*/

var on = false;
var numOn = 1;
var ons =[];
init2(ons);
var ti=setInterval(function(){clignoteNum("n2"); clignoteNum("n4"); clignoteNum("n6"); clignoteNum("n8");},500);
var t=setInterval(function(){clignoteNum("n1"); clignoteNum("n3"); clignoteNum("n5"); clignoteNum("n7");},1000);
var marche = true;

function clignote(){

	if (on === false){
		document.getElementById("n2").src="./img/rouge-on.jpg";
		on = true;
	} else {
		document.getElementById("n2").src="./img/rouge-off.jpg";
		on = false;
	}

}

function chenille(){
	var led = document.getElementById("n"+numOn);

	led.src="./img/rouge-off.jpg";

	if(numOn===8){
		numOn=1;
	} else {
		numOn++;
	}
	var led = document.getElementById("n"+numOn);
	led.src="./img/rouge-on.jpg";


}

//Fonction Clignoter avec un paramètre en entrée

function init(){

	for (i=0;i<document.getElementsByTagName("img").length;i++){
		ons.push(false);
	}
}

function clignoteNum (num){

	if (ons[num] === false){
		document.getElementById(num).src="./img/rouge-on.jpg";
		ons[num] = true;
	} else {
		document.getElementById(num).src="./img/rouge-off.jpg";
		ons[num] = false;
	}

}


//Bouton Stop

/*var stop = function(){
	clearInterval(ti);
	clearInterval(t);

	for (i=0;i<document.getElementsByTagName("img").length-1;i++){
		document.getElementsByTagName("img")[i].src="./img/rouge-off.jpg";
	}


}

var btnStop = document.getElementById("stop");

btnStop.addEventListener("click", stop);*/

//Bouton Start

/*var start = function(){
	init(ons);
	ti = setInterval(function(){clignoteNum("n2"); clignoteNum("n4"); clignoteNum("n6"); clignoteNum("n8");},500);
	t =setInterval(function(){clignoteNum("n1"); clignoteNum("n3"); clignoteNum("n5"); clignoteNum("n7");},1000);
}

var btnStart = document.getElementById("start");

btnStart.addEventListener("click", start);*/

//Bouton Marche/Arrêt

// Changement img bouton

/*var marche = true;

var switchOnOff = function(){

	if (marche === true){
		document.getElementById("onoff").src = "./img/button-off.png";
		marche = false;
	} else {
		document.getElementById("onoff").src = "./img/button-on.png";
		marche = true;
	}

}

var btnOnOff = document.getElementById("onoff");

btnOnOff.addEventListener("click", switchOnOff);*/

// Fonctionnalité complète : changement image et fonction start/stop

var switchOnOff = function(){

	if (marche === true){
		document.getElementById("onoff").src = "./img/button-to-on.png";

		clearInterval(ti);
		clearInterval(t);

		for (i=0;i<document.getElementsByTagName("img").length-1;i++){
			document.getElementsByTagName("img")[i].src="./img/rouge-off.jpg";
		}

		marche = false;
	} else {
		document.getElementById("onoff").src = "./img/button-to-off.png";

		init(ons);
		ti = setInterval(function(){clignoteNum("n2"); clignoteNum("n4"); clignoteNum("n6"); clignoteNum("n8");},500);
		t =setInterval(function(){clignoteNum("n1"); clignoteNum("n3"); clignoteNum("n5"); clignoteNum("n7");},1000);

		marche = true;
	}

}

var btnOnOff = document.getElementById("onoff");

btnOnOff.addEventListener("click", switchOnOff);


// Transforme en vert le ième élément

function vert(e){
	e.target.src="./img/vert.jpg";
}

// Transforme en rouge le ième élément
function rouge(e){
	e.target.src="./img/rouge-off.jpg";
}

function init2(){

	tableLed = document.getElementsByTagName("img");

	for (i=0;i<document.getElementsByTagName("img").length-1;i++){
		ons.push(false);
		tableLed[i].addEventListener("mouseenter", function(e){vert(e);});  //au survol, l'img devient verte
		tableLed[i].addEventListener("mouseleave", function(e){rouge(e);});	//quand la souris sort de la zone, l'img devient rouge
	}
}


