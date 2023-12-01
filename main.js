// 1
// function minNumber(a, b) {
//     alert("Минимальное число: " + Math.min(a, b));
// }

// let a = parseInt(prompt("Введите 1е число: "));
// let b = parseInt(prompt("Введите 2е число: "));

// minNumber(a, b);
// 2
// function numberPow(a, b) {
//     alert(a + "^" + b + " = " + Math.pow(a, b));
// }

// a = parseInt(prompt("Введите 1е число: "));
// b = parseInt(prompt("Введите 2е число: "));

// numberPow(a, b);
// 3
// function calculator(a, b, s) {
//     if (symbol === "+")
//         alert(a + b);
//     else if (symbol === "-")
//         alert(a - b);
//     else if (symbol === "*")
//         alert(a * b);
//     else if (symbol === "/")
//         if (a === 0)
//             alert(0);
//         else if (b === 0)
//             alert("На 0 делить нельзя!");
//         else
//             alert(a / b);
//     else
//         alert("Вы ввели неверный символ!");
// }

// a = parseFloat(prompt("Введите 1е число: "));
// b = parseFloat(prompt("Введите 2е число: "));
// let symbol = prompt("Введите символ: ");

// calculator(a, b, symbol);
// 4
// function simpleNumber(a) {
//     let f = true;

//     for (let i = 2; i < a; i++) {
//         if (a % i == 0)
//             f = false;
//         if (!f)
//             break;
//     }
//     if (f)
//         alert("Число - Простое");
//     else
//         alert("Число - Не простое");
// }

// a = parseInt(prompt("Введите число: "));

// simpleNumber(a);
// 5
// function multiplicationTable(a) {
//     for (let i = 2; i <= 9; i++)
//         document.write("<div>" + a + " * " + i + " = " + (a * i) + "</div>");
// }

// a = parseInt(prompt("Введите число: "));

// multiplicationTable(a);
// 6
// function remainderOfTheDivision(a, b) {
//     let sum = 0;

//     if (a == 0)
//         return 0;

//     for (let i = 0; i < a; i++) {
//         sum += b;

//         if (sum > a) {
//             sum -= b;
//             return a - sum;
//         }
//     }
// }

// a = parseFloat(prompt("Введите 1е число: "));
// b = parseFloat(prompt("Введите 2е число: "));

// let rez = remainderOfTheDivision(a, b);
// alert(a + " % " + b + " = " + rez);
// 7
// function sumOfFiveNumbers(a) {
//     let size = a.length;

//     if (size > 5)
//         return -1;

//     let sum = 0;
//     let arr = Array.from(a);

//     for (let i = 0; i < size; i++)
//         sum += parseInt(arr[i]);

//     return sum;
// }

// a = prompt("Введите число: ");
// rez = sumOfFiveNumbers(a);

// if (rez == -1)
//     alert("Вы ввелие больше 5ти чисел!");
// else
//     alert(a + " = " + rez);
// 8
// function numberMax(a) {
//     let size = a.length;

//     if (size > 5)
//         return -1;

//     let max = 0;
//     let arr = Array.from(a);

//     for (let i = 1; i < size; i++)
//         if (arr[max] < arr[i])
//             max = i;

//     return arr[max];
// }

// a = prompt("Введите число: ");
// rez = numberMax(a);

// if (rez == -1)
//     alert("Вы ввелие больше 5ти чисел!");
// else
//     alert("Большее число: " + rez);
// 9
// function outputEvenOrOdd(a, b, c) {
//     for (let i = a; i <= b; i++)
//         c ? (i % 2 == 0 ? document.write(i + "<br>") : null) : (i % 2 != 0 ? document.write(i + "<br>") : null);
// }

// a = parseInt(prompt("Введите 1е число: "));
// b = parseInt(prompt("Введите 2е число: "));

// outputEvenOrOdd(a, b, confirm("Вывод чётных - ок, нечёнтных - отмена"));

// 10
function nextDay(date) {
    date = date.split('.');
    let temp = date[0];
    date[0] = date[2];
    date[2] = temp;

    console.log(date);

    let newDate = new Date(date);
    newDate.setDate(newDate.getDate() + 1);

    let fullNewDate = newDate.getDate() + "." + (newDate.getMonth() + 1) + "." + newDate.getFullYear();

    return fullNewDate;
}

let date = new Date();

let fullDate = date.getDate() + "." + date.getMonth() + "." + date.getFullYear();
document.write(fullDate + "<br>");

document.write(nextDay(fullDate));
