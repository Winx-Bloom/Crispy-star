//FUNCTIONS is uded to avoid creation of multiple logics

// function Finance(money) {
//     console.log(money);
// }
// Finance(500);

function Coke(money) {
   let numberOfCans = Math.floor(money / 1.5);
   console.log( "Get " + numberOfCans + " Cans of coke");

       return money % 1.5
}

 
 let change = Coke(500); 
 console.log("Your change is " + change + " Euros");