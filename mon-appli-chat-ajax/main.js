const messagesDiv = document.getElementById('messages');

function displayLastMessages(){
    
    // On communique avec le fichier chat.php
    
    var requete = new XMLHttpRequest();
    
    requete.open('GET', './chat.php');
    
    requete.onload = function(){
        var result = JSON.parse(requete.responseText);
        console.log(result);
        // On vide la div messages
        messagesDiv.innerHTML = "";
    
        afficherHTML(result);
    }
    
    requete.send();
    
}

function afficherHTML (tableau){
    
    var html = "";

	for (i=tableau.length-1; i>=0; i--){
		var msg = tableau[i];
		html += "<p>"+msg.author+" ["+msg.moment+"] : "+msg.content+"</p>";
	}

	messagesDiv.innerHTML = html;
    
    
}

setInterval(displayLastMessages, 3000);

///////////////////////////////////////////////////////////////////////////////////


document.querySelector('form').addEventListener('submit', function(event){
    
    var author = document.getElementById('author').value;
    var comment = document.getElementById('comment').value;
    var parameters = ""
    
    
    var requete = new XMLHttpRequest();
    
    requete.open('POST', './chat.php');
    
    requete.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    
    requete.send();
    
    
    displayLastMessages();
    
    event.preventDefault(); 
});  

    
    