console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

//INTERPRETE
// console.log(genre) / log --> undefined
// var genre;
// rewind() / Ejecuto la funcion 
    // genre = 'rock'
    // console.log(genre); / log --> rock
    // var genre;
    // console.log(genre) / log --> r&b
// console.log(genre); / log disco


/*
SALIDA ES:
UNDEFINED
-->Rock
-->r&b
-->disco
*/