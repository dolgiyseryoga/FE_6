//1 @ на !
let str = 'aaa@bbb@ccc';
let re = /@/gi;
let newstr = str.replace(re, '!');
console.log(newstr);

//2
let date = '2025-12-31';
console.log(date.replace(/-/g, '/'));

//3
let String = 'Я учу javascript!';
console.log(String.substr(2, 4));
console.log(String.substr(6, 14));
console.log(String.substring(2, 5));
console.log(String.substring(6, 17));
console.log(String.slice(2, 5));
console.log(String.slice(6, 17));

//4
let Arr2 = [];
let Arr = [4, 2, 5, 19, 13, 0, 10];
for (let i = 0; i < Arr.length; i++){
    Arr2.push(Math.pow(Arr[i],3));
}

function count(Arr2) {
    let sum = 0;
    Arr2.forEach(function(item){
        sum += item
    })
    return sum;
}

console.log(Math.sqrt(count(Arr2)));

//5
let a;
let b;
let c;
c = 3 - 5;
console.log(Math.abs(c));

//6
let dat = new Date();

let Ndate = (dat.getFullYear()+":"+dat.getMonth()+":"+dat.getDate()+" "
+dat.getHours()+":"+dat.getMinutes()+":"+dat.getSeconds());
console.log(Ndate);

let M;
let D;

if(dat.getMonth() < 10) {
    M = '0' + dat.getMonth();
} else {
    M = dat.getMonth();
}

if(dat.getDate() < 10) {
    D = '0' + dat.getDate();
} else {
    D = dat.getDate();
}

let NDate = (dat.getFullYear()+":"+M+":"+D+" "
+dat.getHours()+":"+dat.getMinutes()+":"+dat.getSeconds());

console.log(NDate);

//7
let string = 'aa aba abba abbba abca abea';

console.log(str.match(/[a][b*]/gim));



//8 Задача
let phone = prompt("Введите номер телефона в международном формате +375(33)3333333");
    let reg = /^\+375\([0-9][0-9]\)[0-9][0-9][0-9][0-9][0-9][0-9][0-9]/;

console.log(reg.test(phone));