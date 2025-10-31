const button = {
  get tamanho() {
    return this._numero || 100;
  },
  set tamanho(number) {
    this._numero = number;
  },
};

// button.tamanho = 400;
console.log(button.tamanho);
