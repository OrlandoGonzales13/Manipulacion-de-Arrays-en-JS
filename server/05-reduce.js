// Array 'totals' que contiene los números que queremos sumar
const totals = [1, 2, 3, 4];

// SUMA CON FOR LOOP:
let sum = 0; // Inicializamos la variable 'sum' con un valor de 0

// Usamos un bucle 'for' para recorrer cada elemento del array
for (let index = 0; index < totals.length; index++) {
    const element = totals[index]; // Obtenemos el elemento en la posición 'index' del array
    sum = sum + element; // Sumamos el valor del elemento a 'sum'
}

// Imprimimos el resultado de la suma total usando el bucle 'for'
console.log(sum); // Resultado: 10

// SUMA CON REDUCE:
const rta = totals.reduce((sum, element) => sum + element, 0);
// 'reduce' es un método que toma una función de callback y un valor inicial (en este caso, 0).
// El callback recibe dos argumentos: el acumulador ('sum') y el valor actual ('element').
// A medida que 'reduce' recorre el array, suma cada 'element' al acumulador 'sum'.
// Finalmente, retorna el valor total acumulado.

// Imprimimos el resultado de la suma total usando 'reduce'
console.log('rta', rta); // Resultado: 10