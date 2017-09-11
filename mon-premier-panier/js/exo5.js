/* Exercice Panier
Mai 2017*/

var tabArticles =[];

//Définition d'un article
function Article(nom, img, prix){
	this.nom = nom;
	this.img = img;
	this.prix = prix;
}

// Affichage des objets dans une section

function affichHtml(){
	fig = document.createElement("figure");
	document.getElementById("content").appendChild(fig);

	for (var i=0; i<tabArticles.length;i++){
		elt = document.createElement("h2");
		elt.innerText = tabArticles[i].nom;
		fig.appendChild(elt);

		//Image
		elt = document.createElement("img");
		elt.src = tabArticles[i].img;
		elt.alt = tabArticles[i].nom;
		fig.appendChild(elt);

		// Tableau Prix
		tab = document.createElement("table");
		fig.appendChild(tab);
		row = document.createElement("tr");
		tab.appendChild(row);
		one = document.createElement("td");
		one.innerText ="Prix : ";
		two = document.createElement("td");
		two.innerText = tabArticles[i].prix;
		two.setAttribute("class", "prix");
		three = document.createElement("td");
		three.innerText = "€";
		row.appendChild(one);
		row.appendChild(two);
		row.appendChild(three);

		// Form et boutons
		btn = document.createElement("button");
		btn.setAttribute("class","moins");
		btn.innerText="-";
		fig.appendChild(btn);

		form = document.createElement("form");
		fig.appendChild(form);
		qte = document.createElement("input");
		qte.type ="text";
		qte.id =tabArticles[i].nom;
		qte.name=tabArticles[i].nom;
		qte.value="0";
		form.appendChild(qte);

		btn = document.createElement("button");
		btn.setAttribute("class","plus");
		btn.innerText="+";
		fig.appendChild(btn);

	}

}


// Ajout de nouveaux articles
function generateArticles(){
	tabArticles.push(new Article("Banane","./img/banana.png",0.9));
}

generateArticles();
affichHtml();





//Augmentation de la quantité dans le zone de texte quand on appuie sur le bouton "+"

function ajoutQuantite(e){
	var product = e.srcElement.previousElementSibling; // je récupère le frère précédent = le formulaire
	var p = product.firstChild; //je récupére le premier enfant de ce formulaire = l'input où s'affiche la qté
	var q = p.value; // je récupère la valeur de cette qté

	q++;
	p.value=q;

	//Apparition dans le panier

	var cat = e.srcElement.parentNode; //Figure parent

	//if (q===1){
		art = document.createElement("table");
		art.setAttribute("class",cat.getElementsByTagName("h2")["0"].innerText);
		document.getElementById("panier").appendChild(art);
		artRow = document.createElement("tr");
		art.appendChild(artRow);

		artRowLogo = document.createElement("td");
		artRow.appendChild(artRowLogo);

		logo = document.createElement("img");
		logo.src = cat.getElementsByTagName("img")["0"].src;
		logo.alt = cat.getElementsByTagName("img")["0"].alt;
		artRowLogo.appendChild(logo);

		artRowItem = document.createElement("td");
		artRowItem.innerText = cat.getElementsByTagName("h2")["0"].innerText;
		artRow.appendChild(artRowItem);

		artRowQuantity = document.createElement("td");
		artRowQuantity.innerText = 1;
		artRowQuantity.setAttribute("class","qte");
		artRow.appendChild(artRowQuantity);

		artRowPrice = document.createElement("td");
		artRowPrice.innerText = cat.getElementsByClassName("prix")["0"].innerText;
		artRowPrice.setAttribute("class","add");
		artRow.appendChild(artRowPrice);

	/*} else {
		console.log(document.getElementsByClassName("qte"));
		document.getElementsByClassName("qte").innerText = q;
	}*/

	calculTotal();
	
}

var btnPlus = document.getElementsByClassName("plus");

for (i=0; i<btnPlus.length;i++){
	btnPlus[i].addEventListener("click", function(e){ajoutQuantite(e);});
}

//Diminution de la quantité dans le zone de texte quand on appuie sur le bouton "-"

function retraitQuantite(e){
	var product = e.srcElement.nextElementSibling; // je récupère le frère suivant = le formulaire
	var p = product.firstChild; //je récupére le premier enfant de ce formulaire = l'input où s'affiche la qté
	var q = p.value; // je récupère la valeur de cette qté

	if(q>0){
		q--;
		p.value=q;
	}

	var cat = e.srcElement.parentNode; //Figure parent de l'élément cliqué

	basket = document.getElementById("panier"); //focus sur le panier

	ind = basket.getElementsByClassName(cat.getElementsByTagName("h2")["0"].innerText); //je sélectionne les éléments (je sais que ce sont des tables) du panier où la class est égale au texte du h2 de l'élèment cliqué = fait le lien entre l'élèment cliqué et quelle ligne supprimer

	sup = ind[ind.length-1]; //sélectionne la dernière table sélectionnée à la ligne précédente

	basket.removeChild(sup);
	 

	calculTotal();

}

var btnMoins = document.getElementsByClassName("moins");

for (i=0; i<btnMoins.length;i++){
	btnMoins[i].addEventListener("click", function(e){retraitQuantite(e);});
}


function calculTotal(){
	calc = document.getElementsByClassName("add");
	
	s=0;

	for (j=0;j<calc.length;j++){
		s=s+Number(calc[j].innerText);
	}

	document.getElementById("total").innerText = s;
}
