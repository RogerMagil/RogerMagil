// var num = 10 + 2 ;


// console.log(num);

// console.log(num + 4);

// let data = 8
// let user = "Navin"

// let num1 = 1500000094357940395734987380931087534907435700378982263289563197307913003127550239750503497532917392057320517253753573579304197501327691n

// console.log(num1)

// let firstname = "Roger"

// let lastname = "Magil"

// let result = firstname +" "+ lastname

// console.log(result);

// let msg = "Ro\nger\nMa\ngil"

// console.log(msg);

// let bool = 5 < 6
// console.log(typeof bool);

// let nul
// console.log(typeof nul);

// let number = 5
// console.log(5/"Roger"); //NaN => Not a Number

// const value1 = 5;
// const value2 = 9;
// let sum = value1 + value2;

// console.log(typeof value1);

// let ex
// console.log(typeof ex);
// ex = 8
// console.log(8, typeof ex);
// ex = ex + ""
// console.log(8, typeof ex);
// ex = ex-2
// ex = !ex
// console.log(Boolean("Roger"))
// console.log(ex);


// ex =parseInt("Roger")
// console.log(parseInt)

// let numb = 4

// numb--
// console.log(numb);

// let x = "2"
// let y = 2

// let boole = x + y
// console.log(boole);

// let a = 7
//  let b = 8
//  let c = 5

//  let print = a < b || a < c
// let n =!result
//  console.log(print, n);

//  let number1 = 6
//  let number2 = 4 
//  let number3 = 7

//  if (number1 > number2 && number1 < number3)
//   console.log("number1 is greater");
// else if(number2 < number3)
// {
//  console.log("number2 is greater");
// }
// else {
//     console.log("number3 is less than");
// }
//  console.log("wareee va");



// //initialize, condition, increment

// let i = 5;

// while(i>0)
// {
// console.log("hi",i);
// i--;
// }

// // let

let num = 564782

 while(num>0)
{
  console.log(num%10);
  num=parseInt(num/10)
  console.log(num); 
}


const person= {
  name:'Roger',
  age:24
};

for (const key in person) {
        console.log(key + ": ", person[key]);
  }

  let colors =['red', 'blue', 'green'];
  
  for(const index in colors) {
    console.log(colors[index]);
  }

for (let color of colors){
  console.log("Color: " + color);
}


let alien = {
  name: 'Roger',
  tech:'JS',
  sibling: {
    brother:'Roger',
    sister: 'Magil'
  }
}

console.log(alien.siblings);