$(document).ready(function(){

    var slideshow = $('.slideshow');
    var slides = $('.slide');
    var btn_derecha = $('.derecha');
    var btn_izquierda = $('.izquierda');

    btn_derecha.on('click', function(){

        for(var i = 0; i < slides.length; i++){
            if(slides[i].getAttribute('class').indexOf('active') > 0){
                contador = i;
                console.log(contador);
                slides[i].classList.remove('active');
                contador = contador + 1;
                slides[contador].classList.add('active');
                console.log(contador);
                break;
            }
        }

    });

    btn_izquierda.on('click', function(){
        for(var i = 0; i < slides.length; i++){
            if(slides[i].getAttribute('class').indexOf('active') > 0){
                console.log(contador);
                slides[i].classList.remove('active');
                contador = contador - 1;
                slides[contador].classList.add('active');
                console.log(contador);
                break;
            }
        }
    });

});