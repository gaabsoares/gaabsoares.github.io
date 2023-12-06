let menuButton = document.getElementById('show-menu');
let menu = document.getElementById('hidden-menu');
let menuHidden = true;

menuButton.onmousedown = () => {
    if(menuHidden) {
        menu.style.right = 0;
        menuHidden = false;
    } else {
        menu.style.right = '-37rem';
        menuHidden = true;
    }
};

