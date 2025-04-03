import prompt from 'prompt';

// Comience declarando un total de 2 variables con un valor numérico asignado por usted. Estas variables serán los numero con
// los cuales usted realizará las operaciones matemáticas.
let num1;
let num2;
// cree una variable para almacenar la operación matemática que desea realizar. 
// Esta va a tomar valores de “suma”, “resta”, “multiplicación” y “división”.
let operacion;
let pregunta;

// Crea una función llamada realizarOperacion que reciba tres parámetros: num1, num2 y operación.
// Dentro de la función, utiliza una estructura condicional (if...else if...else) para realizar la operación indicada en el parámetro operacion:
// - Si operacion es "suma", devuelve la suma de num1 y num2.
// - Si operacion es "resta", devuelve la resta de num1 y num2.
// - Si operacion es "multiplicacion", devuelve la multiplicación de num1 y num2.
// - Si operacion es "division", devuelve la división de num1 y num2.
function realizarOperacion(num1, num2, operacion) {
    if (operacion === "suma") {
        return num1 + num2;
    } else if (operacion === "resta") {
        return num1 - num2;
    } else if (operacion === "multiplicacion") {
        return num1 * num2;
    } else if (operacion === "division") {
        if (operacion === "division" && num2 === 0 || num1 === 0) {
            console.log("No se puede dividir por cero");
        }else{
            return num1 / num2;
        }
    } else {
        return "Operación no válida";
    }
}

// Crea un bucle while que permita al usuario realizar varias operaciones de manera continua.
// El bucle debe continuar hasta que el usuario ingrese la palabra "salir" como la operación.

while(operacion != "salir") {
    // pide al usuario que ingrese los dos números y la operación que desea realizar.
    num1 = prompt("\nIngrese el primer numero \n");
    num2 = prompt("Ingrese el segundo numero \n");
    operacion = prompt("Ingrese la operacion (suma, resta, multiplicacion, division): \n");

    console.log("El resultado es: ")
    console.log(realizarOperacion(num1, num2, operacion))

    pregunta = prompt("\n\nDesea realizar otra operacion? \n")

    if (pregunta == "si") {
        continue
    } else {
        console.log("Gracias por usar la calculadora! Adios!!\n")
        break
    }
}