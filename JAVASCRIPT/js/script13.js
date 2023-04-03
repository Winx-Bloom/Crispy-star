//  DESTRUCTING ARRAY- implies assigning an array to a variable

// First Example

// let nameOfCars = [ "Telsa", "Matrix", "Peugoet", "Pathfinder", "Jeep"];

// document.write(nameOfCars[0]); 

// let [car1, car2, car3, car4] = nameOfCars;

//      document.write(car2,"<br>", car1,"<br>", car4,"<br>", car3 );

     // Second Example
     // let techBrands = ["Oriamo", "Hp", "Dell", "Apple", "Techno"];
     //  let techBrand1, remainingBrands;

     //  [  techBrand1, ...remainingtechBrands] = techBrands;
 
     //  document.write( techBrand1,...remainingtechBrands);


     //Third Example

     let carNames = ["Matrix", "Nisan", "Sirena", "Lexus"]
     let remainingCars;
     [,,...remainingCars] = carNames;

     document.write(remainingCars);


