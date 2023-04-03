 
// Tweet Composer- PROMPT is used to accept input from the user
// let myName = prompt("What is your name?");
// alert(  "the lengthof your name  " + myName + " is  " + myName.length);

let tweet = prompt("Compose your tweet");
let tweetLength = tweet.length
alert("You have written" + tweetLength + "characters, you have" +
 (140-tweetLength) + "characters remaining");
