// alert("Привет мир!");


// Задание 1
let price = prompt("Введите стоимость товара");
let person = prompt("Введите количество денег");
if (price === person) {
    console.log('Покупка совершена');
} else if (price > person) {
    console.log('Покупка совершена. Сдача: ' + (person - price));
} else {
    prisenone =
        console.log('Покупка не совершена. Не хватает: ' + (price - person));
}


// Задание 2
let num = prompt("Задание 2. Введите число");

if (num > 0) {
    alert('1');
} else if (num < 0) {
    alert('-1');
} else {
    alert('0');
}


// Задание 3
let result = (a + b < 4) ? 'Мало' : 'Много';


// let price = promt("Введите стоимость товара");
// let person = prompt("Введите количество денег");

// if (price === person) {
//     console.log('Покупка совершена');
// }else if (price > person){
//     console.log('Покупка совершена. Сдача: '+ price-person);
// }else {
//     console.log('Покупка не совершена. Не хватает: '+ person-price);
// }

