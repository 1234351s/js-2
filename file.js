// const output = document.querySelector(".js-clockface");
// const buttons = document.querySelector(".actions");
// const startButton = document.querySelector("[data-action='start']");
// const resetButton = document.querySelector("[data-action='reset']");

// let startSeconds = 0;
// let timerId = null;
// let timerIsActive = false;

// startButton.addEventListener("click", startTimer);
// resetButton.addEventListener("click", resetTimer);

// function startTimer() {
//   if (timerIsActive === false) {
//     timerId = setInterval(() => {
//       startSeconds++;
//       console.log(startSeconds);
//       const time = getTimeFromSeconds(startSeconds);
//       output.textContent = `${time.hours}:${time.minutes}:${time.secs}`;
//     }, 1000);
//     timerIsActive = true;
//     resetButton.disabled = false;
//   }
// }

// function resetTimer() {
//   startSeconds = 0;
//   timerIsActive = false;
//   output.textContent = "00:00:00";
//   resetButton.disabled = true;
//   clearInterval(timerId);
// }

// function getTimeFromSeconds(startSeconds) {
//   const SECONDS_IN_MINUTE = 60;
//   const SECONDS_IN_HOUR = 60 * SECONDS_IN_MINUTE;
//   const SECONDS_IN_DAY = 24 * SECONDS_IN_HOUR;

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

// function pad(value) {
//   return String(value).padStart(2, "0");
// }

// function getTimeComponents(time) {
//   const hours = pad(
//     Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
//   );
//   const mins = pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
//   const secs = pad(Math.floor((time % (1000 * 60)) / 1000));

//   return { hours, mins, secs };
// }



