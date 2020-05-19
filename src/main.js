import data from './data/rickandmorty/rickandmorty.js';
import { filterData, sortData, computeStatus, computeStatusPorcentage} from './data.js'


function getCharacters(characterList) {
	for (let character of characterList) {
		printCharacter(character);
	}
}
getCharacters(data.results);
function printCharacter(character) {
	let listItem = createListItem(character);
	listItem.innerHTML += "<br/> Status:" + " " + character.status + "<br /> ";
	listItem.innerHTML += "Name:" + " " + character.name + "<br /> ";
	listItem.innerHTML += "Specie:" + " " + character.species + "<br /> ";
	listItem.innerHTML += "Gender:" + " " + character.gender + "<br />";
	listItem.innerHTML += "Origin:" + " " + character.origin.name + "<br />";
}
function createListItem(character) {
	let listItem = document.createElement("li");
	listItem.classList.add("character-information");
	document.getElementById("characters-list").appendChild(listItem);
	let divText = document.createElement("div");
	divText.classList.add("div-text");
	let divImg = document.createElement("div-img")
	listItem.appendChild(divImg);
	let img = document.createElement('img');
	img.classList.add("character-img")
	img.src = character.image;
	divImg.appendChild(img);

	return listItem;
}
function getFilterCharacters(characterList, condition) {
	clearList();
	let filterResult = filterData(characterList, condition);
	getCharacters(filterResult);
	if (condition == "alive"){
		document.getElementById("count").innerHTML = "Alive characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%"+ " " + ")";
	}else if(condition =="dead"){
		document.getElementById("count").innerHTML = "Dead characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%"+ " " + ")";
	}else if(condition =="unknown"){
		document.getElementById("count").innerHTML = "Unknown status characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%"+ " " + ")";
	}else if(condition =="female"){
		document.getElementById("count").innerHTML = "Female characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML ="(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%" +" " + ")";
	}else if(condition =="male"){
		document.getElementById("count").innerHTML = "Male characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%"+" " + ")";
	}else if(condition =="unknown-gender"){
		document.getElementById("count").innerHTML = "Unknown gender characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%" +" " + ")";
	}else if(condition =="human"){
		document.getElementById("count").innerHTML = "Human characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%"+ " " + ")";
	}else if(condition =="alien"){
		document.getElementById("count").innerHTML = "Alien characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%" +" " + ")";
	}else if(condition =="unknown-status"){
		document.getElementById("count").innerHTML = "Unknown specie characters in all dimensions:" + " " + computeStatus(data.results, condition);
		document.getElementById("porcentage").innerHTML = "(" + " " + computeStatusPorcentage(data.results, condition) + " " + "%" +" " + ")";
	}
}
function clearList() {
	document.getElementById("characters-list").innerHTML = ""
}
function orderCharacters(characterList, condition) {
	clearList();
	let orderResult = sortData(characterList, condition);
	getCharacters(orderResult);
}
let selectOptions = document.getElementById("select-options");
selectOptions.addEventListener("change", function () {getFilterCharacters(data.results, selectOptions.value)});

let order = document.getElementById("button-order-characters");
order.addEventListener("change", function () { orderCharacters(data.results, order.value) });


