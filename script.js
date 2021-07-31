'use strict';
const num1 = prompt('Enter num1');
const num2 = prompt('Enter num2');
const num3 = prompt('Enter num3');

const callback = (obj) => Number(obj.num1)%Number(obj.num3);

const callback1 = (obj) => Number(obj.num1)+Number(obj.num2)+Number(obj.num3);

const callback2 = (obj) => Number(obj.num1)/Number(obj.num2)/Number(obj.num3);

const callback3 = (obj) => Number(obj.num1)*Number(obj.num2)*Number(obj.num3);

const callback4 = (obj) => Number(obj.num1)-Number(obj.num2)-Number(obj.num3);

function getUserNum (num1 ,num2, num3, callback,callback1, callback2, callback3, callback4) {
    const obj = {
        num1: num1,
        num2: num2,
        num3: num3,
    };
    return console.log( `Деление с остатком ${callback(obj)}, Сложение ${callback1(obj)}, Деление ${callback2(obj)}, Умножение ${callback3(obj)}, Вычитание ${callback1(obj)}`)
}
getUserNum(
    num1,
    num2,
    num3,
    callback,
    callback1,
    callback2,
    callback3,
    callback4,
);
//вот как то так)

