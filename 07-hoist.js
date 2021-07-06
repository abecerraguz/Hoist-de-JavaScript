dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);
// INTERPRETE
// dojo
// console.log(dojo); / log --> san jose
// learn(); / Se ejecuta la función learn()
   // dojo = "seattle";
   // console.log(dojo); / log --> seattle
   // var dojo
   // console.log(dojo); / log --> burbank
// console.log(dojo); / log --> san jose
/*
SALIDA ES:
    san jose
    seattle
    burbank
    san jose
*/