$(document).ready(function() {
	
const urlParam = window.location.search.substr(1).split("=");

const Name = urlParam[1];

const $playerName = $('#player-name');

$playerName.append("<h4>" + Name + "</h4>");




});
	


/* console.log('i work');

const urlParam = window.location.search.substr(1).split("=");

console.log(urlParam);

const Name = urlParam[1];

console.log(Name);

const $playerName = $('#player-name');

$playerName.append(name); */











