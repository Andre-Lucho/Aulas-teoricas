export default function initDataObject() {
  const shopTime = document.querySelector("[data-week]");

  const weekDays = shopTime.dataset.week.split(",").map(Number);
  const weekhours = shopTime.dataset.time.split(",").map(Number);
  // shopTime.dataset.week e time --> retona uma string
  // .map(Number) --> retorna uma nova Array já transformada em Number

  // console.log(weekDays);
  // console.log(weekhours);

  const timeNow = new Date();
  const dayNow = timeNow.getDay();
  // console.log(dayNow);
  const hourNow = timeNow.getHours();
  //

  const isAOpenDay = weekDays.includes(dayNow);
  // console.log(isAOpenDay);
  // verifica se o dia da semana corresponde com o dia de funcionamento

  const isAOpenHour = hourNow >= weekhours[0] && hourNow < weekhours[1];
  // retorna true or false
  // console.log(isAOpenHour);
  // verifica se a hora atual corresponde ao horário de funcionamento

  if (isAOpenDay && isAOpenDay) {
    shopTime.classList.add("open");
    shopTime.previousElementSibling.classList.add("open");
  } else {
    shopTime.previousElementSibling.classList.add("closed");
  }
}
