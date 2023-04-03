//Assignment
//Write a program  to find the following scores in  a tertiary institution

//If a student scored between 75-100, print out >> FIRST CLASS UPPER
//If a student scored between 65-74, print out >> SECOND CLASS UPPER
//If a student scored between 50-64, print out, THIRD CLASS LOWER
//If a student scored between 41-49, print out, THIRD CLASS
//If a student scored between 31-40, print out, PASS
//ELSE FAIL
                 //SOLUTION

let scores = 32;

if (scores >= 75 &&  scores <= 100) {
    console.log("FIRST UPPER CLASS" );
} 

else if( scores >= 65 && scores <= 74  ) {
    console.log("SECOND CLASS UPPER");
}

else if (scores >= 50  && scores <= 64) {
    console.log("SECOND CLASS LOWER");
}

else if (scores >= 41  && scores <= 49) {
    console.log("THIRD CLASS");
}

else if (scores >= 31  && scores<= 40) {
    console.log("PASS - SEE THE DEPARTMENTAL PART ADVISER");
}
 
else {
    console.log("FAIL- ADVISED TO WITHDRAW");
}