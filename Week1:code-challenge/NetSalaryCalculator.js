
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
