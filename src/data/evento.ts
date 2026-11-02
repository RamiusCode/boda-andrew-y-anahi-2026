// src/data/evento.ts
// Datos de la pareja, en un solo lugar. La portada los lee de acá: para
// armar la muestra de otra pareja alcanza con cambiar este archivo (y el
// monograma en /public/imagenes).

export const evento = {
    // Se muestran en este orden: "Andrew & Anahi"
    nombre1: "Andrew",
    nombre2: "Anahi",
    // Monograma blanco sobre transparente: se usa en el sello de cera y
    // en la tarjeta, y se tiñe por CSS donde hace falta otro color.
    monograma: "/imagenes/aa.png",
    iniciales: "AA",
    anuncio: "¡ Nos Casamos !",
    fechaCorta: "12 · 12 · 2026",
    fechaLarga: "Sábado 12 de diciembre de 2026",
};

export const tituloPagina = `${evento.nombre1} & ${evento.nombre2} | 12 de Diciembre 2026`;
