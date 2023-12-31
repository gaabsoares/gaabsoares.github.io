let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton = document.getElementById('start');
let currentStreakDisplay = document.getElementById('container-one');
let bestStreakDisplay = document.getElementById('container-two');
let currentlyPlaying = true;
const botDoorPath = "https://content.codecademy.com/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://content.codecademy.com/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://content.codecademy.com/projects/chore-door/images/space.svg";
const closedDoorPath = "https://content.codecademy.com/projects/chore-door/images/closed_door.svg";

let numClosedDoors = 3;
let currentStreak = 0;
let bestStreak = 0;
let openDoor1;
let openDoor2;
let openDoor3;

const isBot = (door) => {
    if (door.src === botDoorPath) {
        return true;
    } else {
        return false;
    }
};

const isClicked = (door) => {
    if (door.src === closedDoorPath) {
        return false;
    } else {
        return true;
    }
};

const playDoor = (door) => {
    numClosedDoors--;
    if (numClosedDoors === 0) {
        gameOver('win');
    } else if (isBot(door)) {
        gameOver();
    }
};

const randomChoreDoorGenerator = () => {
    let choreDoor = Math.floor(Math.random() * numClosedDoors);
    if (choreDoor === 0) {
        openDoor1 = botDoorPath;
        openDoor2 = beachDoorPath;
        openDoor3 = spaceDoorPath;
    } else if (choreDoor === 1) {
        openDoor1 = spaceDoorPath;
        openDoor2 = botDoorPath;
        openDoor3 = beachDoorPath;
    } else {
        openDoor1 = beachDoorPath;
        openDoor2 = spaceDoorPath;
        openDoor3 = botDoorPath;
    }
};

doorImage1.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage1)) {
    doorImage1.src = openDoor1;
    playDoor(doorImage1);
    }
};

doorImage2.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage2)) {
    doorImage2.src = openDoor2;
    playDoor(doorImage2);
    }
};


doorImage3.onclick = () => {
    if (currentlyPlaying && !isClicked(doorImage3)) {
    doorImage3.src = openDoor3;
    playDoor(doorImage3);
    }
};

startButton.onclick = () => {
    if (!currentlyPlaying) {
        startRound();
    }
};

startRound = () => {
    doorImage1.src = closedDoorPath;
    doorImage2.src = closedDoorPath;
    doorImage3.src = closedDoorPath;
    numClosedDoors = 3;
    startButton.innerHTML = 'Good luck!';
    currentlyPlaying = true;
    randomChoreDoorGenerator()
};

const gameOver = (status) => {
    if (status === 'win') {
        startButton.innerHTML = "You win! Play again?";
        currentStreak++;
        currentStreakDisplay.innerHTML = currentStreak;
    } else {
        currentStreak = 0;
        currentStreakDisplay.innerHTML = currentStreak;
        startButton.innerHTML = 'Game over! Play again?';
    }
    if (currentStreak > bestStreak) {
        bestStreak = currentStreak;
        bestStreakDisplay.innerHTML = bestStreak;
    }
    currentlyPlaying = false;
};

startRound();
