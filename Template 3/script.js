// Counter Feature

let days = document.querySelector(".days");
let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");

let countDate = new Date("Jul 14 2030, 12:00:00").getTime();

let counter = setInterval(() => {
  let dateNow = new Date().getTime();
  let dateDiff = countDate - dateNow;

  let dayInput = Math.floor(dateDiff / 1000 / 60 / 60 / 24);

  let hoursInput = Math.floor(
    (dateDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );

  let minutesInput = Math.floor((dateDiff % (1000 * 60 * 60)) / (1000 * 60));

  let secondsInput = Math.floor((dateDiff % (1000 * 60)) / 1000);

  days.innerHTML = dayInput;
  hours.innerHTML = hoursInput;
  minutes.innerHTML = minutesInput < 10 ? `0${minutesInput}` : minutesInput;
  seconds.innerHTML = secondsInput < 10 ? `0${secondsInput}` : secondsInput;

  if (dateDiff < 0) {
    clearInterval(counter);
  }
}, 1000);

// Progress Feature

let spans = document.querySelectorAll(".the-progress span");
let skills = document.querySelector(".skills");

window.onscroll = function () {
  if (window.scrollY >= skills.offsetTop - 250) {
    console.log("Reached this section");
    spans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
};

// Increase Number On Scrolling
let statistics = document.querySelector(".statistics");
let numSpans = document.querySelectorAll(".statistics .number");
let numMoney = document.querySelector(".statistics .number-money");
let started = false;

window.onscroll = function () {
  if (window.scrollY >= statistics.offsetTop - 300) {
    if (!started) {
      numSpans.forEach((span) => start(span));
    }
    started = true;
    numMoney.textContent = `${start()}k`;
  }
};

function start(el) {
  let goal = el.dataset.number;
  let count = setInterval(() => {
    el.textContent++;
    if (el.textContent == goal) {
      clearInterval(count);
    }
  }, 500 / goal);
}
