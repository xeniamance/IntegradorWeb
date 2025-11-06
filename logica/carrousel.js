// Esperamos que el DOM cargue antes de ejecutar
document.addEventListener("DOMContentLoaded", () => {
    // Array con las rutas de las imágenes (ajustá los nombres según tus archivos)
    const imagenes = [
        "../recursos/elartedecomer.png",
        "../recursos/elcalculodedios.png",
        "../recursos/harrypotterylapiedrafilosofal.png",
        "../recursos/harrypotterylacamarasecreta.png",
        "../recursos/harrypotteryelcalizdefuego.png",
        "../recursos/sabores.png",
        "../recursos/starwars.png"
    ];

    // Referencias a los elementos del HTML
    const imgElemento = document.getElementById("carrouselImagen");
    const botonAnterior = document.getElementById("anteriorImagen");
    const botonSiguiente = document.getElementById("siguienteImagen");

    // Índice actual (empezamos en 0)
    let indiceActual = 0;

    // Función para mostrar la imagen actual
    function mostrarImagen() {
        imgElemento.src = imagenes[indiceActual];
    }

    // Evento para el botón "Siguiente"
    botonSiguiente.addEventListener("click", () => {
        indiceActual++;
        if (indiceActual >= imagenes.length) {
            indiceActual = 0; // vuelve al principio
        }
        mostrarImagen();
    });

    // Evento para el botón "Anterior"
    botonAnterior.addEventListener("click", () => {
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = imagenes.length - 1; // vuelve al final
        }
        mostrarImagen();
    });

    // (Opcional) rotación automática cada 4 segundos
    setInterval(() => {
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen();
    }, 4000);
});