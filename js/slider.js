window.addEventListener('load', function () {
    console.log('El contenido ha cargado');

    var imagenes = [];

    imagenes[0] = 'img/img_slider/0.png'; 
    imagenes[1] = 'img/img_slider/1.png';
    imagenes[2] = 'img/img_slider/2.png';
    imagenes[3] = 'img/img_slider/3.png';

    var indiceImagenes = 0;

    var tiempo = 3000;

    function cambiarImagenes() {

        document.slice.src = imagenes[indiceImagenes];

        if (indiceImagenes < 2) {
            indiceImagenes++;
        } else {
            indiceImagenes = 0;
        }
    }

    setInterval(cambiarImagenes, tiempo);

});