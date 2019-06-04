var alert = alert("Beware: You are about to be subject to a  barrage of questions.");
var q1 = prompt("What is your favorite food?");
if((q1 == "potstickers" || q1 == "Potstickers") || (q1 == "potsticker" || q1 == "Potsticker")) {
  alert("Great!");
} else {
  alert("Did you mean to type in 'Potstickers'? Geez, get better at your typing skills.");
}
var q2 = prompt("What is your favorite color?");
if(q1 == "yellow" || q1 == "Yellow") {
  alert("Great!");
} else {
  alert("Did you mean to type in 'Yellow'? You need to upgrade your typing skills.");
}
var q3 = prompt("What is your favorite number?")
if(q1 == "42") {
  alert("Great!");
} else {
  alert("Did you mean to type in '42'? I seriously recommend nitrotype.com to help your terrible type skills.");
}
var q4 = prompt("what level is your typing skills?")
if(q4 == "OVER 9,000!!!!!") {
  alert("you actually did something!");
} else {
  window.location.href = 'https://www.nitrotype.com';
}
