// //  - Створіть таймер, використовуючи setTimeout
// // який відлічує задану кількість хвилин та секунд до нуля.
// // Після досягнення нульового значення виведіть
// // повідомлення "Час вийшов!".

// let secondData = 10;
// let minutesData = 1;
// function countSeconds(){
//     console.log("Час вийшов");
    
// }
// setTimeout(countSeconds , secondData * 1000) 
// //  - Створити таймер, використовуючи setInterval який буде починати 
// // відлік з 5 хвилин та зменшувати час кожну секунду.
// // виводити в консолі час у форматі `${mins}:${secs}`
// //  При досягненні 0 хвилин та 0 секунд,
// // таймер повинен зупинятися та виводити
// // повідомлення "Час вийшов!".

// let minutes = 5;
// let timerData = minutes * 60;

// const timerId = setInterval(()=>{
// const  time = getTimeFromSeconds(timerData)
// console.log("Залишилось ")
// }, 1000)





// function getTimeFromSeconds(startSeconds) {
//   const SECONDS_IN_MINUTE = 60;
//   const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE; // 3600
//   const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR; // 86400

//   const totalSeconds = Math.floor(startSeconds);

//   const days = Math.floor(totalSeconds / SECONDS_IN_DAY);
//   const remSeconds = totalSeconds % SECONDS_IN_DAY;

//   const hours = pad(Math.floor(remSeconds / SECONDS_IN_HOUR));
//   const minutes = pad(
//     Math.floor((remSeconds % SECONDS_IN_HOUR) / SECONDS_IN_MINUTE)
//   );
//   const secs = pad(remSeconds % SECONDS_IN_MINUTE);

//   return { days, hours, minutes, secs };
// }

// function pad(value) {
//   return String(value).padStart(2, "0");
// }


// for (let i = 0; i <= 100; i += 1) {
//   console.log(i);
  
// }
const input = document.querySelector("#datetime-picker");
const startBtn = document.querySelector("button[data-start]");
const daysSpan = document.querySelector("span.value[data-days]");
const hoursSpan = document.querySelector("span.value[data-hours]");
const minutesSpan = document.querySelector("span.value[data-minutes]");
const secondsSpan = document.querySelector("span.value[data-seconds]");

let userSelectedDate;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
      console.log(selectedDates[0]);
//перевірь чи вибрана дата не в минулому і виведи повідомлення "Please choose a date in the future"
// запиши значення вибраної дати в userSelectedDate
  },
};
// створюємо новий flatpickr
flatpickr(input, options);
iziToast.show({
        title: 'Incorrect date',
        message: 'Please pick a future date',
        position: 'topRight',
        titleColor: 'white',
        messageColor: 'lightgray',
        backgroundColor: 'darkblue',
        theme: 'dark',
});

// нижче напиши код для обробки кліку кнопки старт
function startButton() {

}

//допоміжні функції для обробки мілісекунд
function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
}

function pad(value) {
  return String(value).padStart(2, "0");
};


/*
  Послідовний проміс
 Створіть функцію getRandomNumber, яка повертає проміс, 
що генерує випадкове число.
 Використайте метод then, щоб обробити результат першого проміса, 
додати до нього число 10 та вивести результат.
 Використайте метод catch, щоб обробити помилки у будь-якому 
з промісів та вивести повідомлення "Помилка проміса".
 Використайте метод finally для виведення повідомлення 
"Робота з промісом завершена" незалежно від того, чи було виконання успішним, чи виникла помилка.
 */

function getRandomNumber() {
  return new Promise((resolve, reject) => {
    const randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber < 50) {
      reject(new Error("Random number is less than 50"));
    } else {
      resolve(randomNumber + 10);
    }
  });
}


// Створіть альтернативу яка базується на промісах. 
// Функція delay(ms) повинна повертати проміс, 
// який перейде в стан resolved через ms мілісекунд, 
// так щоб ми могли додати до нього .then:
// function delay(ms) {
// // ваш код
// }
// delay(3000).then(() => alert('виконалось через 3 секунди'));
function delay(ms) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}



// Завдання

// Створи галерею з можливістю кліка по її елементах і перегляду повнорозмірного зображення в модальному вікні. Прев'ю результату подивися за посиланням.






// Розбий завдання на кілька підзадач:



// Створення і рендер розмітки по масиву даних galleryItems з app.js і наданим шаблоном.
// Реалізація делегування на галереї ul.js-gallery і отримання url великого зображення.
// Відкриття модального вікна при натисканні на елементі галереї.
// Підміна значення атрибута src елемента img.lightbox__image.
// Закриття модального вікна при натисканні на кнопку button[data-action=""close-lightbox"].
// Очищення значення атрибута src елемента img.lightbox__image. Це необхідно для того, щоб при наступному відкритті модального вікна, поки вантажиться зображення, ми не бачили попереднє.


// Стартові файли

// В папці src ти знайдеш стартові файли проєкту з базовою розміткою і готовими стилями.
// В файлі app.js є масив об'єктів galleryItems, які містять інформацію про зображення: маленьке зображення, оригінальне і опис.


// Розмітка елемента галереї



// Посилання на оригінальне зображення повинне зберігатися в data-атрибуті source на елементі img, і вказуватися в hrefпосилання (це необхідно для доступності).



