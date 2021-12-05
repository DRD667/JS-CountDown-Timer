const countdown = () => {
  const countDate = new Date("Dec 09 2021 00:00:00");
  const now = new Date().getTime();
  const gap = countDate - now;
  const btn = document.getElementsByClassName("changeFormat");

  //   Calculating TIme

  const seconds = 1000;
  const minutes = seconds * 60;
  const hour = minutes * 60;
  const days = hour * 24;

  const textDay = Math.floor(gap / days);
  let textHour = Math.floor((gap % days) / hour);
  let textHour2 = Math.floor(gap / hour);
  const textMinutes = Math.floor((gap % hour) / minutes);
  const textSeconds = Math.floor((gap % minutes) / seconds);
  function changeformat() {
    const el = document.getElementsByClassName("days")[0];
    el.classList.toggle("dis");
    // textHour = Math.floor(gap / hour);
  }
  if (textHour < 10) {
    document.getElementsByClassName("hours")[0].innerText = "0" + textHour;
    document.getElementsByClassName("textHour2")[0].innerText = "0" + textHour2;
  } else {
    document.getElementsByClassName("hours")[0].innerText = textHour;
    document.getElementsByClassName("textHour2")[0].innerText = textHour2;
  }

  if (textMinutes < 10) {
    document.getElementsByClassName("minutes")[0].innerText = "0" + textMinutes;
  } else {
    document.getElementsByClassName("minutes")[0].innerText = textMinutes;
  }

  if (textSeconds < 10) {
    document.getElementsByClassName("seconds")[0].innerText = "0" + textSeconds;

    btn.addEventListener("click", changeformat);
  } else {
    document.getElementsByClassName("seconds")[0].innerText = textSeconds;
  }

  if (textDay < 10) {
    document.getElementsByClassName("days")[0].innerText = "0" + textDay;
  } else {
    document.getElementsByClassName("days")[0].innerText = textDay;
  }
};

setInterval(countdown, 100);
btn.addEventListener("click", changeformat);

function changeformat() {
  const el = document.getElementsByClassName("container-day")[0];
  el.classList.toggle("dis");
  document.getElementsByClassName("hours")[0].classList.toggle("textHour2");
}
