const countdown = () => {
  const btn = document.getElementsByClassName("changeFormat");
  const countDate = new Date("Dec 09 2021 00:00:00");
  const now = new Date().getTime();
  const gap = countDate - now;

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

  document.getElementsByClassName("seconds")[0].innerText = textSeconds;

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
  } else {
    document.getElementsByClassName("seconds")[0].innerText = textSeconds;
  }

  if (textDay < 10) {
    document.getElementsByClassName("days")[0].innerText = "0" + textDay;
  } else {
    document.getElementsByClassName("days")[0].innerText = textDay;
  }

  function cat() {
    if (gap < 10) {
      clearInterval(ab);

      var arr = document.getElementsByClassName("chtime");
      for (let i = 0; i < arr.length; i++) {
        arr[i].innerText = 0;
      }
    }
  }
  cat();
};
changeformat();
var ab = setInterval(countdown, 400);
btn.addEventListener("click", changeformat);

function changeformat() {
  const el = document.getElementsByClassName("container-day")[0];
  el.classList.toggle("dis");
  document.getElementsByClassName("hours")[0].classList.toggle("textHour2");
}
