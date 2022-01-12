(function(){
    const openButton = document.querySelector('.nav_menu');
    const menu = document.querySelector('.nav_link');
    const exitMenu = document.querySelector('.nav_exit');

    openButton.addEventListener('click', ()=>{
        menu.classList.add('nav_link--show');
    })
    
    exitMenu.addEventListener('click', ()=>{
        menu.classList.remove('nav_link--show');
    })
})();