const menu = document.querySelector('.menu')
const sideMenu = document.querySelector('.sidebar')
const container = document.querySelector('.container')
menu.addEventListener('click',()=>{
    sideMenu.classList.toggle('small-sidebar')
    container.classList.toggle('large-container')
})