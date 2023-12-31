document.addEventListener('DOMContentLoaded', function() {
    let imagenes = [
        {img: '/assets/ima/galeria1 (1).jpg'},
        {img: '/assets/ima/galeria1 (2).jpg'},
        {img: '/assets/ima/galeria1 (3).jpg'},
        {img: '/assets/ima/galeria1 (4).jpg'},
        {img: '/assets/ima/galeria1 (5).jpg'},
        {img: '/assets/ima/galeria1 (6).jpg'},
        {img: '/assets/ima/galeria1 (7).jpg'},
        {img: '/assets/ima/galeria1 (8).jpg'},
        {img: '/assets/ima/galeria1 (9).jpg'}
    ]
    let contador = 0 
    const contenedor = document.querySelector('.slideshow')
    const overlay = document.querySelector('.overlay')
    const galeria_imagenes = document.querySelectorAll('.container img')
    const img_slideshow = document.querySelector('.slideshow img')

    contenedor.addEventListener('click', function (event) {
        let adelante = contenedor.querySelector('.btnAdel'),
            atras = contenedor.querySelector('.btnAtras'),
            img = contenedor.querySelector('img'),
            tgt = event.target
        if (tgt == atras) {
            if (contador > 0){
                img.src = imagenes[contador - 1].img
                contador--
            } else {
                img.src = imagenes[imagenes.length - 1].img
                contador = imagenes.length - 1
            }

        }else if (tgt == adelante){
            if (contador < imagenes.length - 1){
                img.src = imagenes[contador - 1].img
                contador ++
            } else {
                img.src = imagenes [0].img
                contador = 0
            }
        }
    })

    Array.from(galeria_imagenes).forEach(img =>{
        img.addEventListener('click', event => {
            const imagen_seleccionada = event.target.dataset.imgMostrar
            img_slideshow.src = imagenes[imagen_seleccionada].img
            contador = imagen_seleccionada
            overlay.style.visibility = 'visible'
            overlay.style.opacity = 1
        })
    })

    document.querySelector('.btn_cerrar').addEventListener('click', () => {
        overlay.style.opacity = 0
        overlay.style.visibility = 'hidden'
    })


})


