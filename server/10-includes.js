const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;
for (let index = 0; index < pets.length; index++) {
    const element = pets[index];
    if (element === 'dog') { // Si encontramos 'dog' en el array
        includeInArray = true; // Marcamos como true si existe 'dog'
        break; // Terminamos el ciclo cuando lo encontramos
    }
}

const rta = pets.includes('dog'); // Utiliza 'includes' para verificar si 'dog' está en el array
console.log('for', includeInArray); // Resultado: true, ya que 'dog' existe en el array
console.log('includes', rta); // Resultado: true, porque 'includes' también encontró 'dog'