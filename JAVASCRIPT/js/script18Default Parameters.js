 //Default parameters must be filled and be on the right hand side not left
 // DEFAULT PARAMETERS

 let trackCar = function(carId, city = 'NY') {
        console.log(`Tracking ${carId} in ${city}` )  

 };
 console.log(trackCar(123));

 console.log(trackCar(123, `Chicago`))