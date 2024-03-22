
function inputStudentmark(studentmark){

    let grade;

if(grade>=79 && grade<=100){
     grade= "A";
}
else if(grade>=60 && grade <79){
    grade = "B";
}
else if(grade >=50 && grade <59){
    grade = "C"
}
else if (grade>=40 && grade<49){
   grade ="D"
}
else if(grade <40 && grade >0) {
   grade = "E"


}
console.log(`The student's mark is ${studentmark} and the grade is:${grade}`); 
}

