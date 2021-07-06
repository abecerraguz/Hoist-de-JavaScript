console.log(makeDojo("Chicago", 65));
console.log(makeDojo("Berkeley", 0));
function makeDojo(name, students){
    let dojo = {};
    dojo.name = name;
    dojo.students = students;
    if(dojo.students > 50){
        dojo.hiring = true;
    }
    else if(dojo.students <= 0){
        dojo = "closed for now";
    }
    return dojo;
}
// INTERPRETE
// console.log(makeDojo("Chicago", 65)) / Ejecuta a la funcion

   // let dojo
   // dojo.name = name; / Chicago
   // dojo.students = students / 65
   // if(dojo.students > 50) true
      //  dojo.hiring = true 
   // else if(dojo.students <= 0) / false
   // return dojo / { name: 'Chicago', students: 65, hiring: true }

// console.log(makeDojo("Chicago", 65)) / Ejecuta a la funcion

   // let dojo
   // dojo.name = name; / Berkeley
   // dojo.students = students / 0
   // if(dojo.students > 50) false
      //  dojo.hiring = true 
   // else if(dojo.students <= 0) / true
      // dojo = "closed for now";
   // return dojo / closed for now

/*
    LA SALIDA ES:
    // closed for now
*/