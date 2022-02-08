// --створити масив з:
// - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль

let text = [`notebook`, `pen`, `school`, `book`];
let num = [9,13,5,7,669];
let alle = [false,13,`pen`,true,`book`];
console.log(text);
console.log(num);
console.log(alle);




//-Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль

let array = [];
array[0] = `wie`;
array[1] = `gehts`;
array[2] = `bro`;
array[3] = `w.m.d?`;
console.log(array);
document.write(array);



// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.

for (let i = 0; i < 10; i++) {
    document.write(`<div>empty text</div>`);
}

for (let i = 0; i < 10; i++) {
   document.write(`<div>${i} - empty text with index array for</div>`);
}
let j =0;
while(j<20){
    document.write(`<div>empty text while</div>`);
    j++;
}
let g =0;
while(g<20){
    document.write(`<div>${g} - empty text with index array while</div>`);
    g++;
}




//-Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.

let numArray = [1991,29,99,65,142,65,85,95,11,20];
for (i = 0; i < numArray.length; i++) {
    console.log(numArray[i])
}


//-Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.

let stringArray = [`notebook`, `pen`, `school`, `book`,`ua`,`auto`,`lviv`,`box`,`club`,`end`];
for (i = 0; i < stringArray.length; i++) {
    console.log(stringArray[i])
}




//-Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.

let allArray = [`notebook`, `pen`, `school`, `book`,false,13,`pen`,true,`book`,`qwerty`];
for (i = 0; i < allArray.length; i++) {
    console.log(allArray[i])
}




//-Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи

let arrayBoolean = [`notebook`, `pen`, `school`, `book`,false,13,`pen`,true,`book`,`qwerty`];
for (i = 0; i < arrayBoolean.length; i++) {
    if (typeof arrayBoolean[i] === 'boolean') {
        console.log(arrayBoolean[i]);
    }
}



//-Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи

let arrayNumber = [`notebook`, `pen`, `school`, `book`,false,13,`pen`,true,`book`,`qwerty`];
for (i = 0; i < arrayNumber.length; i++) {
    if (typeof arrayNumber[i] === 'number') {
        console.log(arrayNumber[i]);
    }
}



//-Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи

let arrayString = [`notebook`, `pen`, `school`, `book`,false,13,`pen`,true,`book`,`qwerty`];
for (i = 0; i < arrayString.length; i++) {
    if (typeof arrayString[i] === 'string') {
        console.log(arrayString[i]);
    }
}



//-Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів.
// Вивести в консоль всі його елементи в циклі.

let newEmptyArray = [];
newEmptyArray[0] = 'ua';
newEmptyArray[1] = 'pl';
newEmptyArray[2] = `de`;
newEmptyArray[3] = 'nl';
newEmptyArray[4] = 'b';
newEmptyArray[5] = 1991;
newEmptyArray[6] = 'notebook, pen, school';
newEmptyArray[7] = true;
newEmptyArray[8] = true;
newEmptyArray[9] = false;
for (let i = 0; i < newEmptyArray.length; i++) {
    console.log(newEmptyArray[i]);
}




//-Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 10; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}




//-Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i++) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}



//-Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write

for (let i = 0; i < 100; i+=2) {
    console.log('поточний крок циклу : ' + i + ' ');
    document.write('поточний крок циклу : ' + i + ' ');
}



//-Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if(i % 2 === 0){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}


//-Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write

for (let i = 0; i < 100; i++) {
    if(i % 2 === 1){
        console.log('поточний крок циклу : ' + i + ' ');
        document.write('поточний крок циклу : ' + i + ' ');
    }
}