var wrapperMenu = document.querySelector('.wrapper-menu');

wrapperMenu.addEventListener('click', function(){
  wrapperMenu.classList.toggle('open');  
})


// ==========================================================================
var preloader = document.getElementById('loding');

function myload(){
    preloader.style.display = 'none';
}