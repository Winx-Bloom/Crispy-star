//A parameter is a variable being defined in an object//
         
       
     function calc() {
         let a = document.getElementById("a").value;
         let b = document.getElementById("b").value;
         let c = document.getElementById("c").value;

         let  s = (a*b*c)/2;

         let area = Math.sqrt (s*(s-a)*(s-b)*(s-c))

        

         document.getElementById("answer").value = area;
     }
     