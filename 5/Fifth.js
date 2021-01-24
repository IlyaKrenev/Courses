"use strict"

let length = 10;
var arr = new Array(length);

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }
  

function fillArray() {
    for (let i = 0; i<length; i++){
        arr[i]=getRandomInt(-100,100);
    }
    console.log(arr);
}

function replaceFromArray() {
    for (let i = 0; i<length; i++){
        if (arr[i]<0) arr[i]=0;
    }
    console.log(arr);
}

function addToArray() {
    let check = 0,
        iNew = 0;
    let arrNew = [];
    for (let i = 0; i<length; i++){
        arrNew[i+iNew]=arr[i];
        //if (arr[i]==0) check++;
        if (i%2 == 0 && arr[i] == 0) {
            iNew++;
            arrNew[i+iNew]=-1;
        }
    }
    console.log(arrNew);
}

console.log("Оригинальный массив:");
fillArray();

console.log("Массив без отрицательных чисел:");
replaceFromArray();

console.log("Обновленный массив:");
addToArray();


