let time = +prompt (`time 0-59`);
if (time >= 0 && time <= 14) {
    console.log(`time 1/4`)
}
else if (time >= 15 && time <= 29) {
    console.log(`time 2/4`)
}
else if (time >= 30 && time <=44) {
    console.log(`time 3/4`)
}
else if (time >=45 && time <= 59) {
    console.log(`time 4/4`)
}
else {
    console.log(`incorrect`)
}




let day = +prompt (`number of the month`);
if (day >= 1 && day <= 10) {
    console.log(`first decade`)
}
else if (day >= 11 && day <= 20) {
    console.log(`second decade`)
}
else if (day >= 21 && day <= 31) {
    console.log(`third decade`)
}
else {
    console.log(`incorrect`)
}



let test = `qwerty`;
if (test === true ) {
    console.log(`true`)
 }
else {
    console.log(`not true`)
}



let number = +prompt(`3,9,-7`);
if (number !==0) {
    console.log(`virno`)
}
else {
    console.log(`nevirno`)
}


let dayOfWeeks = +prompt (` choose: monday1 ,tuesday2, wednesday3, thursday4, friday5, saturday6, sunday7`)
switch (dayOfWeeks) {
    case 1:
        console.log(`monday:wash the car`);
        break;
    case 2:
        console.log(`tuesday jogging`);
        break;
    case 3:
        console.log(`wednesday cook`);
        break;
    case 4:
        console.log(`thursday training`);
        break;
    case 5:
        console.log( `friday shopping`);
        break;
    case 6:
        console.log(`saturday cleaning`);
        break;
    case 7:
        console.log(`sunday vacation`);
        break;
    default:
        console.log("incorrect");
}


let year = +prompt(`кількість днів у році`);
if(year % 4 === 0) {
    console.log(`високосний`);
}
else {
    console.log('рік нормальний')
}


let oficialName = prompt('яка офіційна назва JavaScript?');
if(oficialName === `ECMAScript`) {
    alert(`Правельно!`);
} else {
    alert(`Неправельно, офіційна назва - ECMAScript!`);
}