//Construction function in Javascript is used to instantiate new objects. 
// it looks like regular function but it behaves very differently

           //Keyword in Constructor Function

    // function Car(id) {
    //     this. carId = id;
    // };

    // let car = new Car(123);
    // console.log(car.carId);

    //METHODS / FUNCTIONS
    function Car(id) {
        this. carId = id
        this.start = function() {
            console.log(`start: ` + this.carId)
        };
    }
    let car = new Car(123);
    car.start();