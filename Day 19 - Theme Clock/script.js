const hourEl = document.querySelector(".hour");
const minuteEl = document.querySelector(".minute");
const secondEl = document.querySelector(".second");
const toggleBtn = document.querySelector(".toggle");
const dateEl = document.querySelector(".date");
const timeEl = document.querySelector(".time");

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Friday", "Saturday"];
const months = [
  "Jan",
  "Feb",
  "March",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

toggleBtn.addEventListener("click", (e) => {
  const html = document.querySelector("html");
  if (html.classList.contains("dark")) {
    html.classList.remove("dark");
    e.target.innerHTML = "Dark mode";
  } else {
    html.classList.add("dark");
    e.target.innerHTML = "Light mode";
  }
});

function setTime() {
  const time = new Date();
  const month = time.getMonth();
  const day = time.getDay();
  const hours = time.getHours();
  const hoursForClock = hours % 12;
  const minutes = time.getMinutes();
  const seconds = time.getSeconds();
  const date = time.getDate();

  hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    hoursForClock,
    0,
    11,
    0,
    360
  )}deg)`;
  minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    minutes,
    0,
    11,
    0,
    60
  )}deg)`;
  secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
    seconds,
    0,
    60,
    0,
    360
  )}deg)`;

  timeEl.innerHTML = `${hours}:${minutes<10? `0${minutes}`: minutes}`;
  dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle"> ${date}</span>`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// setTime();

setInterval(() => {
    setTime();
//   console.log("shoot");
}, 1000);
