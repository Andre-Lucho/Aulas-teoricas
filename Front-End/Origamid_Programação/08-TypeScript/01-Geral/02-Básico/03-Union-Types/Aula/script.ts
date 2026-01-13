function isNumber(value: string | number) {
  return typeof value === 'number' ? true : false;
}

console.log(isNumber(200));

const button = document.querySelector('button');

button?.click();
// Executa click() se button for diferente de null/undefined

// igual:
// if(button) button.click();
