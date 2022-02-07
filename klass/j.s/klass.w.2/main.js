let numberEntrance = +prompt('Введіть номер квартири');
if (numberEntrance > 0 && numberEntrance <= 20) {
console.log ('Вказана квартира у 1 підїзді') }
else if (numberEntrance >= 21 && numberEntrance <= 48) {
    console.log('Вказана квартира у 2 підїзді')
} else if (numberEntrance >= 49 && numberEntrance <= 90) {
    console.log('Вказана квартира заходиться у 3 підїзді')
}

let number = 11;
if(number === 10 ) {
    console.log ('ВІРНО')
} else {
    console.log ('НЕ ВІРНО')
}
(+prompt('Введіть число') === 10) ? console.log('ВІРНО') : console.log ('НЕ ВІРНО')

let weatherTemp = +prompt('ЯКА сьогодні температура на вулиці? Введіть число')
if (weatherTemp >=10 && weatherTemp <=22) {
    console.log('Єс, я йду на практику в Okten')
    alert('Єс,я йду на практику в Okten')
    document.write('Єс, я йду на практику в Okten')
} else {
  console.log('Ех,буду сидіти вдома і дивитись онлайн')
    alert('Ех,буду сидіти вдома і дивитись онлайн')
    document.write('Ех,буду сидіти вдома і дивитись онлайн')
}

let poleChudes = +prompt('Введіть число від 0 до 5');
switch (poleChudes)
{
    case 1 :
        alert('Вітаємо! Ваш виграш автомобіль!!!')
        break;
    case 2:
        alert('Вітаємо! Ваш виграш мотобайк!!!')
        break;
    case 3:
        alert ('Вітаємо! Ваш виграш велосипед!!!')
        break;
    case 4:
        alert ('Вітаємо! Ваш виграш самокат!!!')
        break;
    case 5:
        alert('Вітаємо! Ваш виграш гіроборд!!!')
        break;
    default :
        alert('Ви ввели невірне число.Спробуйте наступного разу.');
}






