const numbers = [1, 30, 49, 29, 10, 13];

let rta = undefined;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element === 301) { // Busca si hay un número igual a 301
        rta = element; // Si lo encuentra, guarda el valor en 'rta'
        break; // Termina el ciclo al encontrar el primer resultado
    }
}
console.log('for', rta); // Resultado: undefined, porque 301 no está en el array

// Usando 'find' para buscar el primer elemento que sea igual a 30
const rta2 = numbers.find(item => item === 30);
console.log('find', rta2); // Resultado: 30, porque 'find' devuelve el primer elemento que cumple la condición

const products = [
    { name: "Pizza", price: 12, id: '🍕' },
    { name: "Burger", price: 23, id: '🍔' },
    { name: "Hot dog", price: 34, id: '🌭' },
    { name: "Hot cakes", price: 355, id: '🥞' },
];

// Usando 'find' para buscar un producto cuyo id sea igual a '🍔'
const rta3 = products.find(item => item.id === '🍔');
console.log('find', rta3); // Resultado: { name: "Burger", price: 23, id: '🍔' }, devuelve el primer objeto que coincide con la condición

// Usando 'findIndex' para obtener el índice del producto con id '🍔'
const rta4 = products.findIndex(item => item.id === '🍔');
console.log('findIndex', rta4); // Resultado: 1, porque 'Burger' está en la posición 1 del array