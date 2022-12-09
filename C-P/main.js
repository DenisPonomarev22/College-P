
/*let nameJS;

nameJS = prompt("Какое официальное название у JavaScript?", "");

if (nameJS == "ECMAScript"){
    alert("Верно!");
}
else{
    alert("Не знаете? ECMAScript!");
}
*/

/*let num = +prompt("Введите число", "");

num > 0 ? alert("1") : num == 0 ? alert(num) : alert("-1");*/

// let login = prompt("Ваш логин", "");

// message = login == 'Сотрудник' ? "Привет" :
//     login == "Директор" ? "Здравствуйте" :
//     login  == "" ? "Нет логина" : "";

// alert(message);

// let flag = 1;
// let it;

// while(flag){
//     i = +prompt("Введите число больше 100", "");
//     if (i < 100){
//         alert("Не верное число, ввидите число больше 100");
//     }

//     else {
//         flag = 0;
//     }

// }12

let i = +prompt("Введите конец интервала", "");
let flag = 1;
let div;

for (let j = 2; j <= i; j++){
    flag = 1;
    for (let u = 1; u < j; u++){
        div = j % u;
            
        if (j != u && u != 1 && div == 0){
            flag = 0;
        }
    }

    if (flag == 1){
        alert(`Число ${j} является простым`)
    }
}