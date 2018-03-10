console.log('i work');

const urlParam = window.location.search.substr(1).split("=");

console.log(urlParam);

const Name = urlParam[1];

console.log(Name);

let p = document.createElement("p");

p.appendChild(Name);

const playerName = document.getElementById('player-name');

playerName.appendChild(p);




