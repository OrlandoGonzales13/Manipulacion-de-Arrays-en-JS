const elements = [1, 1, 2, 2]; // Array inicial
const othersElements = [3, 3, 4, 4]; // Otro array para combinar

// Combinar arrays usando un ciclo for
const newArray = [...elements]; // Copiamos el array elements en newArray
for (let index = 0; index < othersElements.length; index++) {
    const element = othersElements[index]; // Iteramos sobre cada elemento de othersElements
    newArray.push(element); // Agregamos el elemento al final de newArray
}

// Combinar arrays usando concat
const rta = elements.concat(othersElements); // Concatena elements y othersElements en un nuevo array

// Combinar arrays usando spread operator
const rta2 = [...elements, ...othersElements]; // Usa el spread operator para expandir ambos arrays en un nuevo array

// Combinar un array con una cadena usando spread
const rta3 = [...elements, ...'random']; // Convierte la cadena 'random' en un array ['r', 'a', 'n', 'd', 'o', 'm']

// Mostrar resultados
console.log('for', newArray); // Resultado del for: [1, 1, 2, 2, 3, 3, 4, 4]
console.log('concat', rta); // Resultado del concat: [1, 1, 2, 2, 3, 3, 4, 4]
console.log('...', rta2); // Resultado del spread operator: [1, 1, 2, 2, 3, 3, 4, 4]
console.log('rta3', rta3); // Resultado del spread con cadena: [1, 1, 2, 2, 'r', 'a', 'n', 'd', 'o', 'm']

// Agregar elements con spread
elements.push(...othersElements); // Agrega todos los elementos de othersElements a elements usando el spread operator
console.log('elements', elements); // Resultado final de elements: [1, 1, 2, 2, 3, 3, 4, 4]

/*------------------ Explicación -------------------*/

/**
 * 1. **Ciclo for**:
 *    - Creamos una copia de `elements` usando el spread operator `[...elements]`.
 *    - Iteramos sobre `othersElements` y agregamos cada elemento a `newArray` usando `push`.
 *
 * 2. **concat()**:
 *    - Concatena dos arrays y devuelve un nuevo array. No modifica los arrays originales.
 *    - Ejemplo: `elements.concat(othersElements)` → `[1, 1, 2, 2, 3, 3, 4, 4]`.
 *
 * 3. **Spread operator (`...`)**:
 *    - Expande los elementos de un array dentro de otro array.
 *    - Ejemplo: `[...elements, ...othersElements]` → `[1, 1, 2, 2, 3, 3, 4, 4]`.
 *
 * 4. **Spread con cadenas**:
 *    - El spread operator también funciona en cadenas, dividiendo cada letra en un array.
 *    - Ejemplo: `...'random'` → `['r', 'a', 'n', 'd', 'o', 'm']`.
 *
 * 5. **push() con spread**:
 *    - Usamos `push(...othersElements)` para agregar todos los elementos de `othersElements` a `elements`.
 */