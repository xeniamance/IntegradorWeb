document.addEventListener("DOMContentLoaded", () => { //espero que el dom se cargue antes de ejecutar
    
    const imagenes = [ //array donde guardo donde estan las imagenes
        "../recursos/donquijotedelamancha.jpg",
        "../recursos/elprincipito.jpg",
        "../recursos/elseniordelosanilloslacomunidaddelanillo.jpg",
        "../recursos/harrypotterylacamarasecreta.jpg",
        "../recursos/harrypotteryelcalizdefuego.jpg",
        "../recursos/lascronicasdenarniaelsobrinodelmago.jpg",
        "../recursos/harrypotterylapiedrafilosofal.jpg",
        "../recursos/peterpanywendy.jpg"
    ];

    
    const imgElemento = document.getElementById("carrouselImagen"); //obtengo los elementos
    const botonAnterior = document.getElementById("anteriorImagen");
    const botonSiguiente = document.getElementById("siguienteImagen");

    let indiceActual = 0; //indice del array lo pongo en 0 pero luego voy cambiandolo

    
    function mostrarImagen() { //con esta funcion muestro la imagen segun el indice actual
        imgElemento.src = imagenes[indiceActual];
    }

    botonSiguiente.addEventListener("click", () => { //le agrego un escuchador al boton siguiente para cambiar el indice
        indiceActual++;
        if (indiceActual >= imagenes.length) {
            indiceActual = 0; //vuelve al principio
        }
        mostrarImagen();
    });

    botonAnterior.addEventListener("click", () => { //le agrego un escuchador al boton anterior para cambiar el indice
        indiceActual--;
        if (indiceActual < 0) {
            indiceActual = imagenes.length - 1; //vuelve al final
        }
        mostrarImagen();
    });

    
    setInterval(() => { //hago que cada 4 segundos vayan pasando las imagenes automaticamente
        indiceActual = (indiceActual + 1) % imagenes.length;
        mostrarImagen();
    }, 4000);
});