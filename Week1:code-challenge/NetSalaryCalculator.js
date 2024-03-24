
// PAYE Rates
const payRates=[
    (0-24000, rate=10),
    (24001-32333, rate=25),
    (32334-500000, rate=30)
    (500001-800000, rate=32.5)
    (Above800000,rate=35)

];

// NHIF Rates
const NHIFrates=[
    (0-5999, deduction=150)
    (6000-7999,deduction=300)
    (8000-11999,deduction=400)
    (12000-14999,deduction=500)
    (15000-19999,deduction=600)
    (20000-24999,deduction=900)
    (25000-29999,deduction=850)
    (30000-34999,deduction=900)
    (35000-39999,deduction=950)
    (40000-44999,deduction=1000)
    (45000-49999,deduction=1100)
    (50000-59999,deduction=1200)
    (60000-69000,deduction=1300)
    (70000-79000,deduction=1400)
    (80000-89000,deduction=1500)
    (90000-99999,deduction=1600)
    (100000-Above,deduction=1700)
]
// NSSF contributions
const pensionablepay=0.06

// TheHousingLevy
const AffordableHousingLevy=0.015

// Calculate an Individual's Net Salary
function CalculateNetSalary(payRates){
    return basicsalary = 85000
}
let netSalary = payRates - CalculateNetSalary(payRates)
console.log("Your net salary is:", netSalary)

// Calculate NHIFDeductions
function calculateNHIFDeductions(basicsalary){
    let NHIFDeductions;

    //NHIF Deductions based on income
        if(basicsalary>0 && basicsalary<=5999){
            NHIFDeductions=150;
        } else if (basicsalary>=6000 && basicsalary<=7999){
            NHIFDeductions=300;
        }else if (basicsalary>=8000 && basicsalary<=11999){
            NHIFDeductions=400;
        }else if (basicsalary>=12000 && basicsalary<=14999){
            NHIFDeductions=500;
        }else if (basicsalary>= 15000 && basicsalary<=19999){
            NHIFDeductions=600
        }else if (basicsalary>= 20000 && basicsalary<=24999){
            NHIFDeductions=750;
        }else if (basicsalary>= 25000 && basicsalary<=29999){
            NHIFDeductions=850;
        }else if (basicsalary>= 30000 && basicsalary<=34999){
            NHIFDeductions=900;   
        }else if (basicsalary>= 35000 && basicsalary<=39999){
            NHIFDeductions=950;
        }else if (basicsalary>= 40000 && basicsalary<=44999){
            NHIFDeductions=1000
        }else if (basicsalary>= 45000 && basicsalary<=49999){
            NHIFDeductions=1100;
        }else if (basicsalary>= 50000 && basicsalary<=59999){
            NHIFDeductions=1200;
        }else if (basicsalary>= 60000 && basicsalary<=69999){
            NHIFDeductions=1300;
        }else if (basicsalary>= 70000 && basicsalary<=79999){
            NHIFDeductions=1400;
        }else if (basicsalary>= 80000 && basicsalary<=89999){
            NHIFDeductions=1500;
        }else if (basicsalary>= 90000 && basicsalary<=99999){
            NHIFDeductions=1600;
        }else (basicsalary >=100000)
            NHIFDeductions=1700

}