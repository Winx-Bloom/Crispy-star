// Destructuring of OBJECTS

 //A] OBJECT CREATION
    //  let car = {
    //     id : 5000,
    //     style : "Convertible",

    //  };
// b] DESTRUCTURING PROCESS

   // when destructuring array, use square bracket[]
   // when destructuring object, use coldblock/colubrize{}

//FIRST EXAMPLE

// let {id,style} = car;

//    console.log(id,style);


   //SECOND EXAMPLE
   let car = {
    id : 5000,
    style : "Convertible",

 };
   let id, style;
   ({id, style} = car);

   document.write(id);
