minValue = NaN;
maxValue = NaN;

while (isNaN(minValue)) {
    minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
    minValue = minValue < -999 ? -999 : (minValue > 999 ? 999 : minValue);
}


while (isNaN(maxValue)) {
    maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
    maxValue = maxValue < -999 ? -999 : (maxValue > 999 ? 999 : maxValue);
}

alert(`Загадайте любое целое число от ${minValue} до ${maxValue}, а я его угадаю`);
let answerNumber  = Math.floor((minValue + maxValue) / 2);
let orderNumber = 1;
let gameRun = true;

const orderNumberField = document.getElementById('orderNumberField');
const answerField = document.getElementById('answerField');

orderNumberField.innerText = orderNumber;
answerField.innerText = `Вы загадали число ${answerNumber }?`;

document.getElementById('btnRetry').addEventListener('click', function () {
    minValue = NaN;
    maxValue = NaN;

    while (isNaN(minValue)) {
        minValue = parseInt(prompt('Минимальное знание числа для игры', '0'));
        minValue = minValue < -999 ? -999 : (minValue > 999 ? 999 : minValue);
    }

    while (isNaN(maxValue)) {
        maxValue = parseInt(prompt('Максимальное знание числа для игры', '100'));
        maxValue = maxValue < -999 ? -999 : (maxValue > 999 ? 999 : maxValue);
    }

    orderNumber = 1;
    gameRun = true;

    answerNumber  = Math.floor((minValue + maxValue) / 2);

    orderNumberField.innerText = orderNumber;
    answerField.innerText = `Вы загадали число ${answerNumber }?`;
})

document.getElementById('btnOver').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            minValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round( Math.random() * 3);

            if(phraseRandom === 1) {
               answerField.innerText = `Вы загадали число ${answerNumber }?`; 
            } else if(phraseRandom === 2) {
                answerField.innerText = `Я знаю! Вы загадали ${answerNumber }`;
            } else {
                answerField.innerText = `Элементарно!) Это же ${answerNumber }`;
            }
            
        }
    }
})

document.getElementById('btnLess').addEventListener('click', function () {
    if (gameRun){
        if (minValue === maxValue){
            const phraseRandom = Math.round( Math.random());
            const answerPhrase = (phraseRandom === 1) ?
                `Вы загадали неправильное число!\n\u{1F914}` :
                `Я сдаюсь..\n\u{1F92F}`;

            answerField.innerText = answerPhrase;
            gameRun = false;
        } else {
            maxValue = answerNumber  + 1;
            answerNumber  = Math.floor((minValue + maxValue) / 2);
            orderNumber++;
            orderNumberField.innerText = orderNumber;

            const phraseRandom = Math.round( Math.random() * 3);

            if(phraseRandom === 1) {
                answerField.innerText = `Вы загадали число ${answerNumber }?`; 
             } else if(phraseRandom === 2) {
                 answerField.innerText = `Я знаю! Вы загадали ${answerNumber }`;
             } else {
                 answerField.innerText = `Элементарно!) Это же ${answerNumber }`;
             }
        }
    }
})


document.getElementById('btnEqual').addEventListener('click', function () {
    if (gameRun){
        const phraseRandom = Math.round( Math.random() * 3);
        if(phraseRandom === 1) {
            answerField.innerText = `Я всегда угадываю\n\u{1F60E}`; 
        } else if(phraseRandom === 2) {
            answerField.innerText = `Это было проще простого!`;
        } else if(phraseRandom === 3) {
            answerField.innerText = `Хах! А ты думал, что человек умнее машины...`;
        }

        gameRun = false;
    }
})