// creating interface for input and output
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


//Getting student's grade
function getGrade(marks) {

    if (marks > 79) {
        return 'A';
    } else if (marks >= 60 && marks <= 79) {
        return 'B';
    } else if (marks >= 49 && marks <= 59) {
        return 'C';
    } else if (marks >= 40 && marks <= 48) {
        return 'D';
    } else {
        return 'E';
    }
}


//Getting the input
function getInput() {

    //prompt ing user to enter the marks
    rl.question("Enter student's marks between 0 and 100: ", (marks) => {
        marks = parseInt(marks);

        //validates user input
        if (marks < 0 || marks > 100) {
            console.log('Please enter a number between 0 and 100.');

            getInput();//prompts for input if input is invalid

            //if input is valid, the function get grade is called
        } else {
            const grade = getGrade(marks);
            console.log(`Student's grade is ${grade}`);
            rl.close();
        }
    });
}


getInput(); //calling the function to get the input