"use strict";

const categoria = parseInt(prompt("Ingrese la categoria (1: u$s 1000, 2: u$s 1500, 3: u$s 2000)"));

const subcategoria= prompt("Ingrese la subcategoría (A: x1.5, B: x2, C: x2.5)").toUpperCase();

let sueldo;
let multiplicador;
let sueldoTotal;

switch (categoria) {

    case 1:
        sueldo = 1000;
        break;

    case 2:
        sueldo = 1500;
        break;

    case 3:
        sueldo = 2000;
        break;

    default:
        sueldo = 0;
        alert("La categoría no es válida");
        break;
}

switch (subcategoria) {

    case "A":
        multiplicador = 1.5;
        break;

    case "B":
        multiplicador = 2;
        break;

    case "C":
        multiplicador = 2.5;
        break;

    default:
        multiplicador = 0;
        alert("La subcategoría no es válida");
        break;
}

sueldoTotal = multiplicador * sueldo;

if(sueldoTotal >= 1500 && sueldoTotal <=3000) {
    alert("Rango de salario es inicial");
}
else if(sueldoTotal> 3000 && sueldoTotal<= 4000){
    alert("Rango de salario es intermedio");
}
else if(sueldoTotal > 4000){
    alert("Rango de salario es avanzado");
}
else {
    alert("El salario es inválido. Revise los datos de entrada");
}