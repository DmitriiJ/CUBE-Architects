let mainMenu = document.querySelector('.main-menu');
let hamburgerButton = document.querySelector('.hamburger');
let menuCloseButton = document.querySelector('.cross');



//hamburger start
hamburgerButton.onclick = () => {
    mainMenu.style.left = '0';
}

menuCloseButton.onclick = () => {
    mainMenu.style.left = '100vw';
}
//gamburger end

