//Logical
//1.AND
let highIncome = true;
let cibilScore = true;

let eligiblePerson = highIncome && cibilScore
console.log("status:" + eligiblePerson);//--> true

//2.OR
let studentFees = true;
let examFees = false;

let fees = studentFees || examFees
console.log("student status:" + fees);//--> true

//3.NOT
let application = false;
let loanStatus = true;

let statuss = application || loanStatus

let applicationStatus = !statuss

console.log ("loanStatus:" + statuss);//--> true
console.log("applicationStatus:"+applicationStatus); //--> false