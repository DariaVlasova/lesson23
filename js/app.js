"use strict"
//урок №7
let number=1;
while  (number<6){
    console.log(number);
    number++;
}

let num=1;
 do {
    console.log(num);
    num++;
 }
 while(num<6);


 for (let numb=1; numb<6; numb++){
    console.log (numb)
 }
 let nuM=0;
 while(nuM<3){
    console.log(`Число:${nuM}`);
    nuM++;
 }
 firstFor: for (let numB=0; numB<2; numB++){
    for (let size=0; size<3; size++){
        if (size==1){
            break firstFor;
        }
        console.log(size);
    }
 }
 //Урок 10
 let numOne=Math.fround(1.005*100)/100;
 console.log(numOne);

 let value = parseFloat("135.58px");
 console.log(value);
 
 let valuE = 58 + "Фрилансер";
 if (58 + "Фрилансер" !== NaN){
   console.log('Результат выражения NaN');
 }

 console.log(Math.max(10,58,39,-150,0));

 let nUm = Math.floor(58.858);
 console.log(nUm);

 //Урок 11
 let text="Фрилансер";
 console.log(text[5]);

let teXt="Фрилансер";
console.log(teXt.toUpperCase());

let texT="Фрилансер";
console.log(texT.slice(3,6))