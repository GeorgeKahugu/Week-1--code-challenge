
function inputStudentmark(studentmark){

if(grade>=79 && grade<=100){
    console.log("A")
}
else if(grade>=60 && grade <79){
    console.log("B")
}
else if(grade >=50 && grade <59){
    console.log("C")
}
else if (grade>=40 && grade<49){
    console.log("D")
}
else if(grade <40 && grade >0){
    console.log("E")
}

console.log (`The student's mark is ${studentmark} is: {grade}`)

}