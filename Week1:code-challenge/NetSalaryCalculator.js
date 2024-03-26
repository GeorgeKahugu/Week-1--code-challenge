// function to calculate net salary
function calculateNetSalary(basicSalary,benefits){


// PAYE Rates
const PAYERates=[
    { min: 0, max: 24000, rate: 10 },
        { min: 24001, max: 32333, rate: 25 },
        { min: 32334, max: 500000, rate: 30 },
        { min: 500001, max: 800000, rate: 32.5 },
        { min: 800001, max: Infinity, rate: 35 }
    ];


// NHIF Rates
const NHIFrates=[
    { range: "0-5999", deduction: 150 },
    { range: "6000-7999", deduction: 300 },
    { range: "8000-11999", deduction: 400 },
    { range: "12000-14999", deduction: 500 },
    { range: "15000-19999", deduction: 600 },
    { range: "20000-24999", deduction: 900 },
    { range: "25000-29999", deduction: 850 },
    { range: "30000-34999", deduction: 900 },
    { range: "35000-39999", deduction: 950 },
    { range: "40000-44999", deduction: 1000 },
    { range: "45000-49999", deduction: 1100 },
    { range: "50000-59999", deduction: 1200 },
    { range: "60000-69000", deduction: 1300 },
    { range: "70000-79000", deduction: 1400 },
    { range: "80000-89000", deduction: 1500 },
    { range: "90000-99999", deduction: 1600 },
    { range: "100000-Above", deduction: 1700 }
];
// NSSF contributions
const pensionablepay=0.06

// TheHousingLevy
const AffordableHousingLevy=0.015


   
letPAYE=0;
for (const rate of PAYERates){
    if(basicSalary+benefits >= rate.min && basicSalary+benefits <=rate.max){
        PAYE=(basicSalary+benefits)*(rate.rate/100);
    break;
    }
   
}

// Calculate NHIFDeductions
let NHIFDeductions=0
for (const rate of NHIFrates){
    if(basicSalary>=rate.min && basicSalary<=rate.max){
        NHIFDeductions=rate.deduction;
        break;
    }
   
}


// Calculate grosssalary

const grossSalary=basicSalary+benefits;


// Calculate netSalary
const netSalary = Math.floor(grossSalary-PAYE-NHIFDeductions-pensionablepay)
        return{
            PAYE:PAYE,
            NHIFDeductions:NHIFDeductions,
            pensionablepay:pensionablepay,
            grossSalary:grossSalary,
            netSalary:netSalary
        

        };

}
const basicSalary=35000;
const benefits=13000;
const result= calculateNetSalary(basicSalary,benefits);
console.log("Net Salary:",result.netSalary);
