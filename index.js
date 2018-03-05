console.log('i work');

const urlParam = window.location.search.substr(1).split("=");

console.log(urlParam);

const playerName = urlParam[1];

console.log(playerName);



