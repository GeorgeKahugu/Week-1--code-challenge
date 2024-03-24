// // Inputing Student Marks. Then having an output of the correct grade.
// // Input Function
function inputStudentmark(studentmark) {
    
    let grade;
// if statement
    if (studentmark >= 79 && studentmark <= 100) {
        grade = "A"
// else if statements
    } else if (studentmark >= 60 && studentmark <=79) {
        grade = "B"
    } else if (studentmark >= 50 && studentmark <= 59) {
        grade = "C"
    } else if (studentmark >= 40 && studentmark < 49) {
        grade = "D"
    } else if (studentmark < 0 || studentmark > 100) {
          grade = "E"
    }

    console.log(`The student's mark is ${studentmark} and the grade is: ${grade}`);
}

console.log(inputStudentmark(60))

