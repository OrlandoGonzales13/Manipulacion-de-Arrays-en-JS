// Array de meses
const months = ['March', 'Jan', 'Feb', 'Dec'];
// Ordena el array en orden alfabético (por defecto)
months.sort(); // La ordenación es lexicográfica, lo que significa que 'Feb' aparecerá antes de 'Jan'.
console.log(months); // Resultado: ['Dec', 'Feb', 'Jan', 'March']

// Array de números
const numbers = [1, 30, 4, 21, 100000];
// Ordena el array en orden ascendente
// La función de comparación (a, b) => a - b asegura que los números se ordenen numéricamente.
numbers.sort((a, b) => a - b);
console.log(numbers); // Resultado: [1, 4, 21, 30, 100000]

// Array de palabras con caracteres especiales
const words = ['réservé', 'premier', 'communiqué', 'café', 'adieu', 'éclair', 'banana'];
// Ordena las palabras teniendo en cuenta la localización
// La función localeCompare compara dos cadenas de texto según el orden de las letras en el idioma especificado.
words.sort((a, b) => a.localeCompare(b));
console.log(words); // Resultado: ['adieu', 'banana', 'café', 'communiqué', 'déjà', 'premier', 'réservé']

// Array de objetos que representan pedidos
const orders = [
    {
        customerName: "Nicolas",
        total: 600,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 1840,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
];
// Ordena los pedidos en orden descendente según el total
// La función de comparación (a, b) => b.total - a.total asegura que los pedidos se ordenen por total de mayor a menor.
orders.sort((a, b) => b.total - a.total);
console.log(orders);
// Resultado: El array 'orders' se mostrará en orden descendente según el total de cada pedido.
