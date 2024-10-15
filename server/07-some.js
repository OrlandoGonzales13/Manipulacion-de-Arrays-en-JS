const numbers = [1, 2, 3, 4];

// let rta = false;
// for (let index = 0; index < numbers.length; index++) {
//     const element = numbers[index];
//     if (element % 2 === 0) {
//         rta = true;
//         break;
//     }
// }
// console.log(rta);

const rta2 = numbers.some((item) => item % 2 === 0);
console.log("rta2", rta2);

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

const rta3 = orders.some((item) => item.delivered);
console.log("rta3", rta3);



// Array 'dates' que contiene objetos con información sobre citas (fecha de inicio, fecha de fin y título)
const dates = [
    {
        startDate: new Date(2021, 1, 1, 10), // Fecha y hora de inicio de la cita
        endDate: new Date(2021, 1, 1, 11),   // Fecha y hora de fin de la cita
        title: "Cita de trabajo",            // Título de la cita
    },
    {
        startDate: new Date(2021, 1, 1, 15), // Cita a las 3:00 PM
        endDate: new Date(2021, 1, 1, 15, 30), // Finaliza a las 3:30 PM
        title: "Cita con mi jefe",
    },
    {
        startDate: new Date(2021, 1, 1, 20), // Cita a las 8:00 PM
        endDate: new Date(2021, 1, 1, 21),   // Finaliza a las 9:00 PM
        title: "Cena",
    },
];

// Nueva cita que queremos agregar al calendario
const newAppointment = {
    startDate: new Date(2021, 1, 1, 8),   // Fecha de inicio de la nueva cita (8:00 AM)
    endDate: new Date(2021, 1, 1, 9, 30), // Fecha de fin de la nueva cita (9:30 AM)
};

// Importamos la función 'areIntervalsOverlapping' desde la librería 'date-fns'
// Esta función compara dos intervalos de tiempo y determina si se superponen
const areIntervalsOverlapping = require('date-fns/areIntervalsOverlapping');

// Función 'isOverlap' que determina si la nueva cita se superpone con alguna de las citas existentes
const isOverlap = (newDate) => {
    // 'some' itera sobre el array 'dates' y retorna 'true' si alguna cita se superpone con la nueva
    return dates.some(date => {
        // Aquí usamos la función 'areIntervalsOverlapping' para comparar las fechas
        return areIntervalsOverlapping(
            { start: date.startDate, end: date.endDate },  // Intervalo de tiempo de la cita existente
            { start: newDate.startDate, end: newDate.endDate }, // Intervalo de tiempo de la nueva cita
        );
    });
};

// Llamamos a la función 'isOverlap' para verificar si la nueva cita se superpone con las existentes
console.log('isOverlap', isOverlap(newAppointment));
// Resultado esperado: false, porque la nueva cita (8:00 AM - 9:30 AM) no se solapa con ninguna de las otras citas
