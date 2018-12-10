const student = {
    equipment: ["computer", "pen", "paper strings"],
    energy: 6,
    grades: 95,
    uniform: {
        top: "blue",
        bottom: "",
        shoes: "",
    }
}

//create a method that takes in new equipment that will update our equipment array (add it to the end).

function addEquipment(item) {
    student.equipment.push(item);
    return student.equipment;
}

console.log(student.equipment);
console.log(addEquipment("fujifilm"));

//create a method that will change any part of the uniform object (since everyday you wear something different).

function changeUniform(top, bottom, shoes) {
    student.uniform.top = top;
    student.uniform.bottom = bottom;
    student.uniform.shoes = shoes;
    return student.uniform ;
}

console.log(changeUniform("red", "blue","green"));
console.log(student.uniform.top);

//create a method study time that takes time studied (minutes) that will update our grades and deplete our energy.
function study(minutes) {
    const hours = (minutes/60);
    if (student.energy > 0) {
        if (student.grades < 100) {
            let gradesUp = student.grades += (5*hours);
            let energyDown = student.energy -= 2;
            console.log("you studied for " + minutes + "minutes! Your grade is now " + gradesUp.toFixed(2) + "% and your energy is " + energyDown)
        } else {
            console.log("You cannot study anymore")
        };
    } else if (student.energy <= 0) {
        let gradeTired = student.grades -= (10*hours);
        console.log("You are very tired! Your grade is now " + gradeTired.toFixed(2) + "%")
    } else {
        console.log("Invalid input, please try again");
    }
}

// study 20 minute increments
console.log(student.energy);
console.log(study(20));
console.log(study(20));
console.log(study(20));
console.log(study(20));
console.log(study(20));

// Old Solution
function studyTime(minutes) {
    if (minutes < 60) {
        let studyMuchMore = student.grades - 20;
        let energy1 = student.energy - 100;
        console.log("your grade is " + studyMuchMore + "% and your energy is at " + energy1 + ". Study more next time.");
    } else if (60 <= minutes && minutes <= 180) {
        let studyMore = student.grades - 5;
        let energy2 = student.energy - 200;
        console.log("your grade is " + studyMore + "% and your energy is at " + energy2 + ". You did okay.");
    } else if (minutes > 180) {
        let studyEnough = student.grades + 5;
        let energy3 = student.energy - 300;
        console.log("your grade is " + studyEnough + "% and your energy is at " + energy3 + ". Great Job! Get some rest.");
    } else {
        console.log("your input is invalid");
    };
};

ran some tests
console.log(studyTime(30));
console.log(studyTime(90));
console.log(studyTime(300));