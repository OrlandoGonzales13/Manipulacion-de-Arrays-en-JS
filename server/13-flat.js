// Definimos una matriz con arrays anidados
const matriz = [
    [1, 2, 3],
    [4, 5, 6, [1, 2, [1, 2]]], // Aquí hay un array dentro de otro array
    [7, 8, 9]
];

// Crear un nuevo array donde almacenaremos los valores "aplanados"
const newArray = [];

// Ciclo for para recorrer la matriz y extraer los elementos
for (let i = 0; i < matriz.length; i++) {
    const array = matriz[i]; // Cada sub-array de la matriz
    for (let j = 0; j < array.length; j++) {
        const element = matriz[i][j]; // Elemento individual del sub-array
        newArray.push(element); // Añadir elemento al nuevo array
    }
}

// Usamos flat() para aplanar la matriz con una profundidad de 3 niveles
const rta = matriz.flat(3); // Profundidad 3 permite extraer todos los elementos incluso dentro de los arrays más anidados

// Mostramos el resultado de cada método
console.log('for', newArray); // Resultado del método manual con for
console.log('flat', rta);     // Resultado usando flat()