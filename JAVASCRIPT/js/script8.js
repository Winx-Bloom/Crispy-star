// FUNCTIONS IS ALSO KNOWN AS METHOD
//A function is a group of reusable codes which  can be called and used anywhere
// in your program. FUNCTION is a reserved word in JS
//Let your function name be similar to the project you are working on. Function follows Camom casing

// function zariDuo(params) {
//     document.write("Her father's daughter")
// }
// zariDuo();

//A parameter is a variable declared in form of a function

// function calArea(length, breadth ) {
//    let area = length * breadth;

// document.write(area) 
// }

// calArea( 8, 5);


function calc() {
    let l  = document. getElementById("length").value;
    let b  = document. getElementById("breadth"). value;
   
    let area = l * b ;
    
    document.getElementById("answer").value =  area; 
}
 