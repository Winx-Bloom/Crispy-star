//Loop is a sequence of instructions that is continually repeated
//until a certain condition is met
     //TYPES OF LOOP
     //While Loop - condition is checked before execution 
     //   let count = 0;

     // while(count < 10){
     //      document.write( count, " Who are these girls  <br />");

     //      count = count + 1;
          // count++
          // count+= 1;


     // }



//     DO- WHILE LOOP- operation is performed once before condition is checked
     //    let lisa = 0
        
     //    do {
     //         document.write( lisa, " Stop asking me questions <br />")
     //         lisa = lisa + 1;

     //    } while (lisa < 10);



// FOR LOOP- Loop initialization, testing/checking, intuniation( increae/decrease)
    
for (let lisa = 2; lisa <= 100; lisa++){
     if(lisa % 2 == 0  ){
          document.write(" Even  <br />");
     }

     else if(lisa % 3 == 0 ){
          document.write("Odd <br />");
          
     }
     else {
          document.write(lisa + 1, "<br />");
     }
          
}


