let mobileNavigation = document.getElementById('mobile-nav');

mobileNavigation.onclick = '';

// show/hide menu

let menuButton = document.getElementById('show-menu');
let menu = document.getElementById('hidden-menu');
let menuHidden = true;

menuButton.onmousedown = () => {
    if(menuHidden) {
        menu.style.right = 0;
        menuHidden = false;
    } else {
        menu.style.right = '-51rem';
        menuHidden = true;
    }
};

// change color of bg/border

const yellow = 'rgb(255, 254, 232)';
const blue = 'rgb(41, 147, 204)';
const lightYellow = 'rgb(255, 254, 232, .8)';
const lightBlue = 'rgb(41, 147, 204, .2)';

let bgColor = yellow;

let changeColorButton = document.getElementById('changecolor');
let header = document.getElementById('desktop-header');
let borderLeft = document.getElementById('border-left');
let borderRight = document.getElementById('border-right');
let footer = document.getElementById('footer');
let body = document.body;

changeColorButton.onclick = () => {
    if (bgColor === yellow) {
        header.style.backgroundColor = blue;
        borderLeft.style.backgroundColor = blue;
        borderRight.style.backgroundColor = blue;
        body.style.backgroundColor = lightYellow;
        footer.style.backgroundColor = blue;
        bgColor = blue;
    } else {
        header.style.backgroundColor = yellow;
        borderLeft.style.backgroundColor = yellow;
        borderRight.style.backgroundColor = yellow;
        body.style.backgroundColor = lightBlue;
        footer.style.backgroundColor = yellow;
        bgColor= yellow;
    }
}

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
let arrowEigth = document.getElementById('arrow-eigth');
let projectFive = document.getElementById('project-five');
let projectFiveTitle = document.getElementById('project-five-title');

let arrowNine = document.getElementById('arrow-nine');
let arrowTen = document.getElementById('arrow-ten');
let projectSix = document.getElementById('project-six');
let projectSixTitle = document.getElementById('project-six-title');

let arrowEleven = document.getElementById('arrow-eleven');
let arrowTwelve = document.getElementById('arrow-twelve');
let projectSeven = document.getElementById('project-seven');
let projectSevenTitle = document.getElementById('project-seven-title');

let arrowThirteen = document.getElementById('arrow-thirteen');
let projectEigth = document.getElementById('project-eigth');
let projectEigthTitle = document.getElementById('project-eigth-title');


// hiding elements

projectTwoTitle.hidden = true;
projectThreeTitle.hidden = true;
projectFourTitle.hidden = true;
projectFiveTitle.hidden = true;
projectSixTitle.hidden = true;
projectSevenTitle.hidden = true;
projectEigthTitle.hidden = true;

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

arrowEigth.onclick = () => {
    projectSix.style.display = 'grid';
    projectFive.style.display = 'none';
    projectFiveTitle.hidden = true;
    projectSixTitle.hidden = false;
}

arrowNine.onclick = () => {
    projectFive.style.display = 'grid';
    projectSix.style.display = 'none';
    projectFiveTitle.hidden = false;
    projectSixTitle.hidden = true;
}

arrowTen.onclick = () => {
    projectSeven.style.display = 'grid';
    projectSix.style.display = 'none';
    projectSixTitle.hidden = true;
    projectSevenTitle.hidden = false;
}

arrowEleven.onclick = () => {
    projectSix.style.display = 'grid';
    projectSeven.style.display = 'none';
    projectSixTitle.hidden = false;
    projectSevenTitle.hidden = true;
}

arrowTwelve.onclick = () => {
    projectEigth.style.display = 'grid';
    projectSeven.style.display = 'none';
    projectSevenTitle.hidden = true;
    projectEigthTitle.hidden = false;
}

arrowThirteen.onclick = () => {
    projectSeven.style.display = 'grid';
    projectEigth.style.display = 'none';
    projectSevenTitle.hidden = false;
    projectEigthTitle.hidden = true;
}