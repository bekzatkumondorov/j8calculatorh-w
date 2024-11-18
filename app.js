// view 1 function declarations expresstion arraw
//   function grett() {
//     console.log("Hello word");
    
//   }
//   greet()

// ecpression

// const greet = function () {
//     console.log("Hello");
    
//     greet();
// }

// arrow

// const arrow = () => {
     
// }



// function numbers(a, b) {
//     console.log(`Cложение: ${a} + ${b} = ${a + b}`);
//     console.log(`Вычитание: ${a} - ${b} = ${a - b}`);
//     console.log(`Умножение: ${a} * ${b} = ${a * b}`);
//     console.log(`Деление: ${a} / ${b} = ${a / b}`);
//   }
//   numbers(5, 3);
  
// prompt('Enter your age')
// checkAge(20);
// checkAge(72);


// const drink = function () {

//     switch (drink) {
//         case 1:
//             console.log("You chose coffee");     
//     }
//     switch (drink) {
//         case 2:
//             console.log("You chose tea");     
//     }
//     switch (drink) {
//         case 3:
//             console.log("We don't have");     
//     }
// }

// function drinkName(name) {
//     switch (name) {
//       case "coffee":
//         console.log("вы выбрали кофе цена 100 сом");
//         break;
//       case "tea":
//         console.log("вы выбрали чай цена 60 сом");
//         break;
//       case "juice":
//         console.log("вы выбрали сок цена 80 сом");
//         break;
//       default:
//         console.log(" такого напитка нет в нашем магазине");
//     }
//   }
//   drinkName("tea");

// function checkBall(ball) {
//     switch (ball) {
//       case 60:
//           console.log("You should study!!!!!!!");
//           break;
//       case 120:
//           console.log("You are the best");
//           break;
//           default: 
//           console.log("There is no such number");
              
//     }
// }
// checkBall(190)

function calculate(a,b,operation){
    

switch (operation) {
    case '+':
        console.log(result = a + b);
        
        break;
    case '*':
       console.log(result = a * b);
       
        break;
    case '-':
       console.log( result = a - b);
       
        break;
    case '/':
        console.log(result = a / b);
        
        break;

    default:
        break;
}
}
calculate(20,10, '/')

// let num1 = parseFloat(prompt("Введите первое число:"));
// let num2 = parseFloat(prompt("Введите второе число:"));

// // Запросить операцию
// let operation = prompt("Выберите операцию (+, -, *, /):");

// // Переменная для хранения результата
// let result;

// // Используем switch case для выбора операции
// switch(operation) {
//   case '+':
//     result = num1 + num2;
//     break;
//   case '-':
//     result = num1 - num2;
//     break;
//   case '*':
//     result = num1 * num2;
//     break;
//   case '/':
//     // Проверка на деление на ноль
//     if (num2 !== 0) {
//       result = num1 / num2;
//     } else {
//       result = "Ошибка: деление на ноль!";
//     }
//     break;
//   default:
//     result = "Ошибка: неверная операция!";
// }



