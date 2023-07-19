// Este evento se ejecuta cuando se ha cargado completamente la página
window.addEventListener('load', function() {
  // Mostramos la página cambiando el estilo del body
  document.body.style.display = 'block';
});

//-----------------------------go top button-------------------------------
//Get the button:
mybutton = document.getElementById("gotop");

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

mybutton.addEventListener("click",topFunction)



//-----------------------------menu scroll--------------------------------
let menu= document.querySelector(".menu");
window.addEventListener("scroll",() => {
  menu.classList.toggle("up", window.scrollY>0)
})

button = document.querySelector(".button");
cel = document.querySelector(".menu_cel");

button.addEventListener('click',()=>{
    cel.classList.toggle("active");
})










