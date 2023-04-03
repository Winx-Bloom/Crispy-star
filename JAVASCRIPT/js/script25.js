
    function Coke(money, costPerCan) {
   
        console.log( "Get " + calCans(money, costPerCan) + " Cans of coke");
     
            return calChange(money, costPerCan)
     }
     
     
     //CALCAN FUNCTION
     function calCans(initialCash, costPerCan) {
         let numberOfCans = Math.floor(initialCash / costPerCan); 
       
         return numberOfCans;
     
     }
     
      //CalCan fUNCTION

      function calChange(startingCash, costPerCan) {
          return startingCash % costPerCan;
      }
       let change = Coke(500, 1.5); 
      console.log("Your change is " + change + " Euros"); 






