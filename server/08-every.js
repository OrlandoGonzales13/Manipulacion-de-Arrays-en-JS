const numbers = [1, 30, 39, 29, 10, 13];

let rta = true;
for (let index = 0; index < numbers.length; index++) {
    const element = numbers[index];
    if (element >= 40) {
        rta = false; // Si encontramos un número >= 40, cambiamos 'rta' a false
    }
}
console.log('for', rta); // Resultado: true, porque todos los números son menores a 40

// Usando 'every' para verificar si TODOS los elementos son <= 40
const rta2 = numbers.every(item => item <= 40);
console.log('rta2', rta2); // 'every' retorna true si TODOS los elementos cumplen la condición

const team = [
    { name: "Nicolas", age: 12 },
    { name: "Andrea", age: 8 },
    { name: "Zulema", age: 2 },
    { name: "Santiago", age: 18 }, // Santiago tiene 18 años, mayor que 15
];

// Usando 'every' para verificar si TODOS los miembros tienen 15 años o menos
const rta3 = team.every(item => item.age <= 15);
console.log('rta3', rta3); // Resultado: false, porque Santiago tiene más de 15 años