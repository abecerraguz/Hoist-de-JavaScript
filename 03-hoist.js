var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// INTERPRETE
// var brendan
// console.log(brendan) // log super cool


/*

    LA SALIDA ES:
    El console.log hace referencia a la variable global
    que esta fuera de la función
    -->Super cool

*/
