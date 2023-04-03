//The Switch statement is similar to ternary and conditional statement
//The switch statement evaluates an expression, matching the expression's value to a 
// case clause, and executes statements associated with that case

// Working on Switch is best when dealing one variable but if...else when dealing with mutiple variable
let city = "New York"
switch(city){
     case "Abuja" :
         console .log("Abuja is the federal capital territory");
         break;


         case "Abia" :
             console.log("Abia is the food basket of the nation");
             break;

             case "Seoul":
                 console.log("Seoul is the capital of South Korea");
                 break;

                 default:
                     console.log("Selected city is not available")
}