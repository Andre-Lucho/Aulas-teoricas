export default function initDataObject() {
  const shopTime = document.querySelector("[data-week]");

  const weekDays = shopTime.dataset.week.split(",").map(Number);
  const weekHours = shopTime.dataset.time.split(",").map(Number);
  // // shopTime.dataset.week e time --> retona uma string
  // // . slipt(",") --> retorna uma array com os valores de dataset
  // // .map(Number) --> retorna uma nova Array já transformada em Number

  // console.log(weekDays);
  // console.log(weekHours);

  const timeNow = new Date();
  const dayNow = timeNow.getDay();
  // console.log(dayNow);
  const hourNow = timeNow.getHours();

  const isAOpenDay = weekDays.includes(dayNow); // estar entre seg - sex
  // console.log(isAOpenDay);
  // verifica se o dia da semana corresponde com o dia de funcionamento e retornando true ou false

  const isAOpenHour = hourNow >= weekHours[0] && hourNow < weekHours[1]; // estar entre 8 e 18h
  // // verifica se a hora atual corresponde ao horário de funcionamento, retornando true or false
  console.log(isAOpenHour);

  if (isAOpenDay && isAOpenDay) {
    shopTime.classList.add("open");
    shopTime.previousElementSibling.classList.add("open");
  } else {
    shopTime.previousElementSibling.classList.add("closed");
  }
}
