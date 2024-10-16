const elements = ["Fire", "Air", "Water"];

let rtaFinal = '';
const separator = '--';

// Ciclo for para concatenar los elementos del array con un separador
for (let index = 0; index < elements.length; index++) {
    const element = elements[index];
    rtaFinal = rtaFinal + element + separator; // Concatenamos el elemento con el separador
}

// Usando join para hacer lo mismo en una línea
const rta = elements.join('--'); // Une los elementos del array con '--' entre cada uno

console.log('for', rtaFinal); // Resultado con for: 'Fire--Air--Water--'
console.log('join', rta); // Resultado con join: 'Fire--Air--Water'

/*-------------------------------------*/

// Ahora vamos a transformar una cadena en una URL amigable

const title = 'Curso de manipulación de arrays';

// Usamos split para dividir el título en un array, y luego join para unir las palabras con '-'
const urlFinal = title.split(' ').join('-').toLowerCase();
// Primero usamos split(' ') para separar las palabras en el título por espacios,
// Luego join('-') las une con '-' entre cada palabra, y toLowerCase() lo convierte a minúsculas

console.log(urlFinal); // Resultado: 'curso-de-manipulacion-de-arrays'