//Slice 
//it is used to dice or reduce a given property- your varaible name should be conventional

//let myName = "Cassandra";
//alert(myName.slice(3,7)); 

let tweet = prompt('Compose your tweet')
let tweetUnder140 = tweet.slice(0, 140);
   alert(tweetUnder140);