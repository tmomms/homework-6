let i = 0;
let a = +prompt()
while (i < a){
    i++;
    console.log(i);
} 




// first variante

// let ageDragon = +prompt("enter dragon's age:");


// if (ageDragon <= 100){
//     let headDragon = ageDragon * 3;
//     let eyeDragon = headDragon * 2;
//     console.log(`head ${headDragon} and eye ${eyeDragon}`)
// }
// else if (ageDragon >= 100){
//     let headDragon = ageDragon * 2
//     let eyeDragon = headDragon * 2;
//     console.log(`head ${headDragon} and eye ${eyeDragon}`)
// }







// second variante

// let age = +prompt("age Dragon`s");
// let headSum = 0;
// let eyeSum = 0;

// function head (){
//     headSum = age * 3; 
//     console.log(`head is ${headSum}`);   
// }

// function headHunderd (){
//     headSum = age * 2; 
//     console.log(`head >100 is ${headSum}`);
// }

// function eye (){
//     eyeSum = headSum * 2;
//     console.log(`eye is ${eye}`);
// }


// if (age > 100){
//     headHunderd();
//     eye();
//     console.log(`head is ${headSum}, ${eyeSum} is a eye of dragon's`);
// }
// else if (age <= 100){
//     head();
//     eye();
//     console.log(`head is ${headSum}, ${eyeSum} is a eye of dragon's`);
// }





// let  name = prompt("what's your name?");
// let age = +prompt("how old are you?");
// if (age > 18){
//     prompt(`В каком университете ты учишся? ${name}`);
//     alert("Неплохой университет");
// }
// else{
//     prompt(`В каком школе ты учишся? ${name}`);
//     alert("хорошая школа!")
// }
// alert("До следующей встречи!")



// const firstNumber = +prompt("first number");
// const secondNumber = +prompt("second number");
// if (firstNumber > secondNumber){
//     alert(firstNumber + secondNumber);
// }
// else if (firstNumber < secondNumber){
//     alert(firstNumber * secondNumber);

// }
// alert("задача решена!!!");


// -------------------------------------------------------

// Население Bishkek City равняется 2000000 жителей. Население New Balykchy равняется 1000 жителей. Напишите программу, которая определяет разницу в числе жителей между двумя городами.
// const bishkek = 2000000;
// const balykchy = 1000;

// function res (a, b){
//     console.log(a - b);

// }
// res(bishkek, balykchy);

// ---------------------------------------------------------

// В углу прямоугольного двора размером 50х30 стоит прямоугольный дом размером 20х10. Подсчитать площадь дома, свободную площадь двора и длину забора. 

// const gardALeft = 50;    
// const gardBLeft = 30;     
// const houseALeft = 20;   
// const houseBLeft = 10;    
// let allgard = gardALeft * gardBLeft;
// let allhouse = houseALeft * houseBLeft;
// let p = (gardALeft + gardBLeft) * 2 - (houseALeft + houseBLeft)
// console.log("площадь дома:", allhouse, "m2");
// console.log("свободный площадь двора:", allgard - allhouse, "m2");
// console.log("длина забора:", p, "m");