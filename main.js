const student = {
    equipment: ["computer", "pen", "paper strings"],
    energy: 300,
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
    
}