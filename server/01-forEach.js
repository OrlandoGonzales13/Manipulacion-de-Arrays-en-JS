// Definimos un array llamado 'letters' que contiene las letras a, b, c, d
const letters = ['a', 'b', 'c', 'd'];

// Bucle 'for' tradicional
for (let index = 0; index < letters.length; index++) {
    // En cada iteración, accedemos al elemento actual del array usando el índice
    const element = letters[index];
    // Imprimimos el valor del elemento actual junto con la etiqueta 'for'
    console.log('for', element);
}

// Método 'forEach' que recorre el array
letters.forEach(item => {
    // Para cada elemento del array, ejecutamos esta función anónima
    // Imprimimos el valor del elemento actual junto con la etiqueta 'forEach'
    console.log('forEach', item);
});

/*
Diferencias entre 'for' y 'forEach':

1. Estructura:
   - 'for': Un bucle tradicional que utiliza un contador de índice para acceder a cada elemento.
   - 'forEach': Un método más directo y simple que se aplica directamente sobre los elementos del array sin necesitar un contador.

2. Control sobre el índice:
   - 'for': Te permite controlar el índice manualmente, lo que significa que puedes acceder a cualquier posición en el array, cambiar la dirección del bucle, o incluso modificar el índice.
   - 'forEach': No te permite manejar el índice directamente, solo trabaja sobre los valores de los elementos del array.

3. Flexibilidad:
   - 'for': Te permite usar instrucciones como `break` o `continue` para salir del bucle o saltar a la siguiente iteración, algo que no es posible con 'forEach'.
   - 'forEach': Ejecuta una función para cada elemento y no puede ser interrumpido; es decir, no puedes usar `break` ni `continue`.

4. Legibilidad:
   - 'for': Puede resultar más verboso cuando solo necesitas iterar sobre todos los elementos del array.
   - 'forEach': Es más compacto y fácil de leer cuando solo necesitas realizar una acción sobre cada elemento.

5. Uso:
   - 'for': Es útil cuando necesitas tener un control más específico del bucle, como modificar el índice o salir del bucle en condiciones particulares.
   - 'forEach': Es preferido cuando simplemente necesitas ejecutar una acción en cada elemento sin preocuparte por el índice o el control del bucle.
*/

/*
Ejemplo de salida en consola:
- Bucle 'for':
   for a
   for b
   for c
   for d

- Método 'forEach':
   forEach a
   forEach b
   forEach c
   forEach d
*/
