let menuButton = document.getElementById('show-menu');
let menu = document.getElementById('hidden-menu');
let menuHidden = true;

menuButton.onmousedown = () => {
    if(menuHidden) {
        menu.style.right = 0;
        menuHidden = false;
    } else {
        menu.style.right = '-40.5rem';
        menuHidden = true;
    }
};

// projects screen

let arrowZero = document.getElementById('arrow-zero');
let projectOne = document.getElementById('project-one');
let projectOneTitle = document.getElementById('project-one-title');

let arrowOne = document.getElementById('arrow-one');
let arrowTwo = document.getElementById('arrow-two');
let projectTwo = document.getElementById('project-two');
let projectTwoTitle = document.getElementById('project-two-title');

let arrowThree = document.getElementById('arrow-three');
let arrowFour = document.getElementById('arrow-four');
let projectThree = document.getElementById('project-three');
let projectThreeTitle = document.getElementById('project-three-title');

let arrowFive = document.getElementById('arrow-five');
let arrowSix = document.getElementById('arrow-six');
let projectFour = document.getElementById('project-four');
let projectFourTitle = document.getElementById('project-four-title');

let arrowSeven = document.getElementById('arrow-seven');
let projectFive = document.getElementById('project-five');
let projectFiveTitle = document.getElementById('project-five-title');


// hiding elements

projectTwoTitle.hidden = true;
projectThreeTitle.hidden = true;
projectFourTitle.hidden = true;
projectFiveTitle.hidden = true;

// click functions

arrowZero.onclick = () => {
    projectOne.style.display = 'none';
    projectTwo.style.display = 'grid';
    projectOneTitle.hidden = true;
    projectTwoTitle.hidden = false;
}

arrowOne.onclick = () => {
    projectOne.style.display = 'grid';
    projectTwo.style.display = 'none';
    projectOneTitle.hidden = false;
    projectTwoTitle.hidden = true;
}

arrowTwo.onclick = () => {
    projectThree.style.display = 'grid';
    projectTwo.style.display = 'none';
    projectTwoTitle.hidden = true;
    projectThreeTitle.hidden = false;
}

arrowThree.onclick = () => {
    projectTwo.style.display = 'grid';
    projectThree.style.display = 'none';
    projectTwoTitle.hidden = false;
    projectThreeTitle.hidden = true;
}

arrowFour.onclick = () => {
    projectFour.style.display = 'grid';
    projectThree.style.display = 'none';
    projectThreeTitle.hidden = true;
    projectFourTitle.hidden = false;
}

arrowFive.onclick = () => {
    projectThree.style.display = 'grid';
    projectFour.style.display = 'none';
    projectThreeTitle.hidden = false;
    projectFourTitle.hidden = true;
}

arrowSix.onclick = () => {
    projectFive.style.display = 'grid';
    projectFour.style.display = 'none';
    projectFourTitle.hidden = true;
    projectFiveTitle.hidden = false;
}

arrowSeven.onclick = () => {
    projectFour.style.display = 'grid';
    projectFive.style.display = 'none';
    projectFourTitle.hidden = false;
    projectFiveTitle.hidden = true;
}