// Input and output interface created
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let points = 0;
const speedLimit = 70;
const divider = 5;

function getPoints(speed) {

    if (speed <= speedLimit) {
        return 'Ok';

    }

    //One demerit point is added for every 5kmph above speed limit
    else if (speed > speedLimit && speed <= 130) {
        points = Math.floor((speed - speedLimit) / divider);
        return `Points: ${points}`;
    }
    //license is suspended when points are above 12 points
    else {
        return "License suspended";
    }
}

//prompt input from user
function getInput() {
    
    rl.question('Enter your speed in km/hr: ', (input) => {
        let speed = parseInt(input);

        if (isNaN(speed) || speed < 0) {
            console.log('Invalid input');
            getInput(); //ask for input again,
        } else {
            let results = getPoints(speed);
            console.log(results);
            rl.close();
        }
    });
}


getInput();//Start the program