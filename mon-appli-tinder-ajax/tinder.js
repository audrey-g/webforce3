const image = document.getElementById('pic');
const name = document.getElementById('name');
const age = document.getElementById('age');	
const email = document.getElementById('email');
const gender = document.getElementById('gender');


document.getElementById('like').addEventListener("click", callUser);
document.getElementById('dislike').addEventListener("click", callUser);

/* ou 
document.querySelectorAll('button').forEach(function(button){
bouton.addEventListener('click', callUser)
})*/

function callUser(){
	var request = new XMLHttpRequest();

	request.open("GET", "https://randomuser.me/api/?inc=gender,name,email,dob,picture");

	request.onload = function(){
		var result = JSON.parse(request.responseText);
		
		image.src = result.results[0].picture.large;
		name.innerText = capitalize(result.results[0].name.title) + " " + capitalize(result.results[0].name.first) + " " + capitalize(result.results[0].name.last);
		email.innerText = result.results[0].email;

		var gen = result.results[0].gender;

		if (gen == "female"){
			gender.innerHTML = '<i class="fa fa-female" aria-hidden="true"></i>';
		} else {
			gender.innerHTML = '<i class="fa fa-male" aria-hidden="true"></i>';
		}

		/* ou modifier classe de l'icône : icon.className = "fa fa-" + result.results[0].gender */

		var dob = Date.parse(result.results[0].dob);

		var ageCalcul = Math.floor((Date.now() - dob )/(365.25*24*60*60000));

		age.innerText = ageCalcul + " ans";
	};

	request.send();
}


function capitalize (str){
	var firstLetterMaj = str[0].toUpperCase();

	str = str.replace(str[0], firstLetterMaj);

	return str;	
}

callUser();

