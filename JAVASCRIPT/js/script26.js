// Assessment
//Create a function that tells us how
//many days, weeks and months we have left if we live until 90yrs
//Assumption- 365days in a year
           //52 weeks in ayear
           //12 months in a year
           

           //Output should be
           // X days
           // Y weeks
           // Z months left

           //solution
   let myAge = prompt("What is your age");

   let remainingYears= (90 - myAge);
   let remainingDays = (remainingYears * 365);
   let remainingWeeks = (remainingYears* 52);
   let remainingMonths = (remainingYears* 12);

   alert ("You "+ "have " + remainingDays + "days " + remainingWeeks + "weeks " 
   + remainingMonths + "months, " + " Thank you! ");






