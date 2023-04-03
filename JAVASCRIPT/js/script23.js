//ASSESSMENT
//Change the first letter of the name to uppercase not the rest
//STEPS//
//1) Isolate the first character of the name by slicing it alone
//2) Convert the isolated first Character to Uppercase
//3) Isolate the remaining characters of the name by slicing it
//4) Convert the isolated characters to LowerCase
//5) Concatinate the name
  
   let myName = prompt("What is your name");
  
 let FirstChar = myName.slice(0,1);
 let FirstCharact = FirstChar.toUpperCase();

 let RemainChar = myName.slice(1, myName.length);
 let RemainingCharact = RemainChar.toLowerCase();

 alert("Hello! " + FirstCharact + RemainingCharact);