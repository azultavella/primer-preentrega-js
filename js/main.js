/* Calcular nota final de alumnos ingresados */

/* Pedir nombre del alumno al cual se le calculara su nota final */

let nombreAlumno = prompt("Ingrese nombre del alumno:")

/* Pedir nota de evaluaciones del alumno para calcular nota final */

let notaExamenParcial = Number(prompt("Ingrese nota del examen parcial:"))

let notaTrabajoPractico = Number(prompt("Ingrese nota del trabajo practico:"))

let notaExamenFinal = Number(prompt("Ingrese nota del examen final:"))

/* Mensaje que se da cuando se calcula la nota final */

if (isNaN(notaExamenParcial) || isNaN(notaTrabajoPractico) || isNaN(notaExamenFinal)) {
    alert ("Ingrese notas validas por favor.");
}else{
    let notaFinal = calculoNotaFinal (notaExamenParcial, notaTrabajoPractico, notaExamenFinal);

    alert (`Nota final del alumno ${nombreAlumno}: ${notaFinal}`)
}

/* Funcion para calcular la nota final */

function calculoNotaFinal (notaExamenParcial, notaTrabajoPractico, notaExamenFinal) {
    
    let porcentajeParcial = 0.3;
    let porcentajeTrabajoPractico = 0.3;
    let porcentajeFinal = 0.4;

    let promedio = (notaExamenParcial * porcentajeParcial) + (notaTrabajoPractico * porcentajeTrabajoPractico) + (notaExamenFinal * porcentajeFinal);

    switch (true) {
        case promedio >= 9:
            return "excelente";
        case promedio >= 8:
            return "muy bueno";
        case promedio >= 7:
            return "bueno";
        default:
            return "desaprobado";
    }
}