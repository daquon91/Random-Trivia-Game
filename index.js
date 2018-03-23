$(document).ready(function() {
	
const urlParam = window.location.search.substr(1).split("=");

const Name = urlParam[1];

const $playerName = $('#player-name');

$playerName.append("<h4>" + Name + "</h4>");

let playerScore = 0;

const $score = $('#scoreboard');

$score.append("<p>" + playerScore + "</p>");

let question1 = {
	question: "Which is the only U.S. state's capital city with not a single McDonald's ?",
	choices: ["Montpelier, Vt", "New York, Ny", "Dallas, Tx", "Miami, Fl"],
	answer: "Montpelier, Vt"
};

let question2 = {
	question: "Which Nickelodeon adventurer grew quickly <br> from 7 to 10 years old, and moved to <br> the city in a spin-off in 2014 ?",
	choices: ["Kel Mitchell", "Tommy Pickles", "Dora The Explorer", "Otto Rocket"],
	answer: "Dora The Explorer"
};

let question3 = {
	question: "Which U.S. state is home to the Dazed and Confused students at Lee High School, in the memorable 1993 coming-of-age movie ?",
	choices: ["Texas", "New York", "Florida", "Maine"],
	answer: "Texas"
};

let question4 = {
	question: "In the 1984 vice presidential debates, who was George H.W. Bush's opponent ?",
	choices: ["Donald Trump", "Geraldine Ferraro", "Bill Clinton", "Batman"],
	answer: "Geraldine Ferraro"
};

let question5 = {
	question: "Which London department store was started by an American reatiler in 1909 ?",
	choices: ["Selfrides", "H&M", "Uniqlo", "Macy's"],
	answer: "Selfrides"
};

let question6 = {
	question: "With over 35 million residents, what is the most populous city in the world ?",
	choices: ["Tokyo", "New York", "New Orleans", "Los Angeles"],
	answer: "Tokyo"
};

let question7 = {
	question: "How many heads of executive departments make up the president's cabinet - 10, 15, 20, or 25 ?",
	choices: ["10", "15", "20", "25"],
	answer: "15"
};

let question8 = {
	question: "Which actor appeared in American Graffiti before starring in Star Wars?",
	choices: ["Brad Pitt", "Luke Skywalker", "Jamie Foxx", "Harrison Ford"],
	answer: "Harrison Ford"
};

let question9 = {
	question: "Which U.S. state has the longest coastline ?",
	choices: ["Alaska", "Texas", "Florida", "California"],
	answer: "Alaska"
};

let question10 = {
	question: "Who is the pre-Civil War author of a short story about a beating heart beneath the floorboards ?",
	choices: ["Edgar Allan Poe", "Mark Twain", "Dr Suess", "Fredrick Douglass"],
	answer: "Edgar Allan Poe"
};

});
	














