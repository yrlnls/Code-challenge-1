// Create user interface for input and output
const readline = require('readline')
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let netSalary, PAYE, NHIF, NSSF



// asynchronous function to calculate gross salary
async function getGrossSalary() {
    let inputInvalid = true;
    let basicSalary, benefits, grossSalary;

    // loop until valid input is entered
    while (inputInvalid) {

        // prompt user for basic salary and benefits
        let inputSalary = await new Promise(resolve => {
            rl.question('Enter your month(s) basic salary in Kshs: ', resolve);
        });
        let inputBenefits = await new Promise(resolve => {
            rl.question('Enter your month(s) benefits if any: ', resolve);
        });

        basicSalary = parseFloat(inputSalary);
        benefits = parseFloat(inputBenefits);

        // check if input is valid
        if (isNaN(basicSalary) || isNaN(benefits) || basicSalary <= 0 || benefits < 0) {
            console.log('Invalid input. Please enter a valid number for basic salary and benefits.');

        } else {
            inputInvalid = false;
            grossSalary = basicSalary + benefits;
        }
    }
    rl.close();
    return grossSalary;

}


// Get value of PAYE
function getPAYE(grossSalary) {
    let PAYE;
    if (grossSalary <= 24000) {
        PAYE = (grossSalary * 0.1);

    } else if (grossSalary > 24000 && grossSalary <= 32333) {
        PAYE = (grossSalary * 0.25);

    } else if (grossSalary > 32333 && grossSalary <= 500000) {
        PAYE = (grossSalary * 0.30);

    } else if (grossSalary > 500000 && grossSalary <= 800000) {
        PAYE = (grossSalary * 0.325);

    } else {
        PAYE = (grossSalary * 0.35);
    }

    return Math.floor(PAYE);

}

// Get NHIF's value
function getNHIF(grossSalary) {

    let NHIF;

    if (grossSalary <= 6000) {
        NHIF = 150;
    } else if (grossSalary < 8000) {
        NHIF = 300;
    } else if (grossSalary < 12000) {
        NHIF = 400;
    } else if (grossSalary < 15000) {
        NHIF = 500;
    } else if (grossSalary < 20000) {
        NHIF = 600;
    } else if (grossSalary < 25000) {
        NHIF = 750;
    } else if (grossSalary < 30000) {
        NHIF = 850;
    } else if (grossSalary < 35000) {
        NHIF = 900;
    } else if (grossSalary < 40000) {
        NHIF = 950;
    } else if (grossSalary < 45000) {
        NHIF = 1000;
    } else if (grossSalary < 50000) {
        NHIF = 1100;
    } else if (grossSalary < 60000) {
        NHIF = 1200;
    } else if (grossSalary < 70000) {
        NHIF = 1300;
    } else if (grossSalary < 80000) {
        NHIF = 1400;
    } else if (grossSalary < 90000) {
        NHIF = 1500;
    } else if (grossSalary < 100000) {
        NHIF = 1600;
    } else {
        NHIF = 1700;
    }
    return Math.floor(NHIF);
}

// Get the value of NSSF
function getNSSF(grossSalary) {
    let NSSF = (grossSalary * 0.06);
    return Math.floor(NSSF);

}


// Get the net salary
function getNetSalary(grossSalary, PAYE, NHIF, NSSF) {


    let totalTax = PAYE + NHIF + NSSF;
    let netSalary = grossSalary - totalTax;

    console.log(`PAYE: Ksh ${PAYE} NHIF:Ksh ${NHIF} NSSF:Ksh ${NSSF}\nGross salary: Ksh ${grossSalary}\nTotal tax: Ksh ${totalTax}\nNet salary: Ksh ${netSalary}`);
}


// Asynchronous self-invoking function to calculate and display net salary
(async () => {
    let grossSalary = await getGrossSalary();
    let PAYE = await getPAYE(grossSalary);
    let NHIF = await getNHIF(grossSalary);
    let NSSF = await getNSSF(grossSalary);
    getNetSalary(grossSalary, PAYE, NHIF, NSSF);
})();