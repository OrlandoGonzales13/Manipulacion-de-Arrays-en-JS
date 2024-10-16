// Definimos un array de usuarios, cada uno con un ID, un nombre de usuario y atributos
const users = [
    { userId: 1, username: "Tom", attributes: ["Nice", "Cute"] },
    { userId: 2, username: "Mike", attributes: ["Lovely"] },
    { userId: 3, username: "Nico", attributes: ["Nice", "Cool"] },
];

// Usamos map() para extraer los atributos de cada usuario, y luego aplanamos el resultado con flat()
const rta = users.map((user) => user.attributes).flat(); // Primera forma: map + flat
// Usamos flatMap() para hacer lo mismo en una sola operación
const rta2 = users.flatMap((user) => user.attributes); // Segunda forma: flatMap

// Mostramos los resultados en consola
console.log("map-flat", rta);   // Resultado de map + flat
console.log("rta2", rta2);       // Resultado de flatMap

// Definimos un objeto que contiene dos calendarios con citas
const calendars = {
    primaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 15),
            endDate: new Date(2021, 1, 1, 15, 30),
            title: "Cita 1",
        },
        {
            startDate: new Date(2021, 1, 1, 17),
            endDate: new Date(2021, 1, 1, 18),
            title: "Cita 2",
        },
    ],
    secondaryCalendar: [
        {
            startDate: new Date(2021, 1, 1, 12),
            endDate: new Date(2021, 1, 1, 12, 30),
            title: "Cita 2",
        },
        {
            startDate: new Date(2021, 1, 1, 9),
            endDate: new Date(2021, 1, 1, 10),
            title: "Cita 4",
        },
    ],
};

// Usamos Object.values() para obtener un array de las citas en los calendarios y aplanar los resultados
const rta3 = Object.values(calendars).flatMap(item => {
    return item.map(date => date.startDate); // Extraemos las fechas de inicio
});

// Mostramos el resultado final en consola
console.log(rta3); // Resultado con todas las fechas de inicio de las citas