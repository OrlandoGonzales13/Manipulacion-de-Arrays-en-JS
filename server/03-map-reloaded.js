const orders = [
    { customerName: "Nicolas", total: 60, delivered: true },
    { customerName: "Zulema", total: 120, delivered: false },
    { customerName: "Santiago", total: 180, delivered: true },
    { customerName: "Valentina", total: 240, delivered: true },
];

console.log("original", orders);
const rta = orders.map((item) => item.total);
console.log("rta", rta);

// Inmutabilidad: Usar el spread operator asegura que el objeto original no se modifique, lo que es una buena práctica en programación 
//para evitar efectos secundarios no deseados.

// Flexibilidad: Puedes agregar o modificar propiedades de objetos dentro de un array sin afectar el array original.

const rta3 = orders.map((item) => {
    return { ...item, tax: 0.19 };
});
console.log("rta3", rta3);
console.log("original", orders);
