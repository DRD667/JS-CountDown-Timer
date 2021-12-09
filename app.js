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
changeformat();
setInterval(countdown, 400);
btn.addEventListener("click", changeformat);

function changeformat() {
  const el = document.getElementsByClassName("container-day")[0];
  el.classList.toggle("dis");
  document.getElementsByClassName("hours")[0].classList.toggle("textHour2");
}
