// CalculateDemerit Points
function calculateDemeritPoints(speed) {
 // Required Speed-limit 
    const speedLimitinkm = 70;
 // Demerit Points
    const kmPerDemeritPoint = 5;
    let demeritPoints = 0;
// if Statement
    if (speed <= speedLimitinkm) {
        console.log("Ok");
// else Statement
    } else {
        demeritPoints = Math.floor((speed - speedLimitinkm) / kmPerDemeritPoint);
        console.log("Points:", demeritPoints);
    }
// if points>12 = License Suspended
    if (demeritPoints > 12) {
        console.log("License suspended");
    }
}


console.log ("Enter the speed of the car km/h:");


// Input Speed:
console.log(speedLimitinkm(60))

