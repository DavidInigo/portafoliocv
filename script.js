let menuVisible = false;
//Acá es para ocultar o mostrar el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true
    }
}

function seleccionar(){
    //Se oculta el menu cada vez que eligo una opción
    document.getElementById("nav").classList =""
    menuVisible = false
}
ScrollReveal().reveal('.inicio');
ScrollReveal().reveal('.sobremi', { delay: 200});
ScrollReveal().reveal('.tecnologias', { delay: 200});
ScrollReveal().reveal('.curriculum', { delay: 200});
ScrollReveal().reveal('.proyectos', { delay: 200});
ScrollReveal().reveal('.contacto', { delay: 200});