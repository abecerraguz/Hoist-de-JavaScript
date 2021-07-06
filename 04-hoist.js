var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// INTERPRETE
// var food
// console.log(food) / log chicken
// eat() / Ejecuta la funcion
//   food = 'half-chicken'
//   console.log(food); / log half-chicken
//   var food

/*

    LA SALIDA ES:
    
    ---> chicken
    ---> half-chicken

    El console.log que esta fuera de la funcion toma 
    la variable global

    Dentro de la funcion la variable food es redefinida a "half-chicken"

*/