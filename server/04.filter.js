const words = ["spray", "limit", "elite", "exuberant"];

// con for
const newArray = [];
for (let index = 0; index < words.length; index++) {
    const element = words[index];
    if (element.length >= 6) {
        newArray.push(element);
    }
}

// VS

// con filter
const rta = words.filter((element) => element.length >= 6);

console.log(newArray);
console.log(words);
console.log(rta);
console.log(words);



// en ambos casos, el resultado:
// ['exuberant']



// Array de pedidos 'orders', donde cada pedido tiene un nombre de cliente, un total y un estado de entrega
const orders = [
    {
        customerName: "Nicolas",
        total: 60,
        delivered: true,
    },
    {
        customerName: "Zulema",
        total: 120,
        delivered: false,
    },
    {
        customerName: "Santiago",
        total: 180,
        delivered: true,
    },
    {
        customerName: "Valentina",
        total: 240,
        delivered: true,
    },
    {
        customerName: "Nicolas",
        total: 2322,
        delivered: false,
    },
];


// Uso de 'filter' para obtener pedidos entregados y cuyo total es mayor o igual a 100
const rta3 = orders.filter(item => item.delivered && item.total >= 100)
// 'filter' crea un nuevo array que contiene solo los pedidos que cumplen la condición:
// que estén entregados (item.delivered === true) y que su total sea mayor o igual a 100.
console.log('rta3', rta3);

// Función de búsqueda que usa 'filter' para encontrar pedidos según el nombre del cliente
const search = (query) => {
    // 'filter' retorna un nuevo array con los pedidos cuyo nombre del cliente contiene la cadena 'query'
    return orders.filter(item => {
        return item.customerName.includes(query);
        // 'includes' verifica si el nombre del cliente (customerName) contiene la cadena 'query'
    })
}

// Llamamos a la función 'search' para buscar todos los pedidos cuyo nombre del cliente contiene 'Nico'
console.log(search('Nico'));