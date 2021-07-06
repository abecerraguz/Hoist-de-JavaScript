var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// INTERPRETE
// var needle 
// test() // Ejecuta funcion
//  -var needle 
//  console.log(needle) // log magnet

/*
    La Salida es :
    Aunque existe una variable global, la funcion
    prevalece la re definición de su contexto

    ----> magnet
*/