const Transform = () => {
  return (
    <div>
      <div class="absolute size-20 bg-blue-500"></div>
      <div class="absolute size-20 bg-yellow-500 translate-x-4 translate-y-8"></div>
      <div class="size-32"></div>
      <br />
      <div class="absolute size-20 bg-blue-500"></div>
      <div class="absolute size-20 bg-yellow-500 rotate-45"></div>
      <div class="size-32"></div>
      <br />
      <div class="absolute size-20 bg-blue-500 scale-105"></div>
      <div class="absolute size-20 bg-yellow-500 scale-50"></div>
      <div class="size-32"></div>
      <br />
      <div class="absolute size-20 bg-red-500 rotate-12 origin-top-left"></div>
      <div class="absolute size-20 bg-purple-500 rotate-6 origin-top-left"></div>
      <div class="absolute size-20 bg-blue-500"></div>
      <div class="absolute size-20 bg-yellow-500 scale-50 origin-top-left"></div>
      <div class="size-32"></div>
    </div>
  );
};

/*

Translate
----------------
translate-x- - transform: translate(x,y)
translate-y- - transform: translate(x,y)

valores de 4 em 4px - aceita valores negativos


Rotate
----------------
rotate-45 - transform: rotate(45deg)

1, 2, 45, 90, 180


Scale
----------------
scale-50 - transform: scale(0.5)

scale-105 - transform: scale(1.05)

Tem scale-y e scale-x para escalar em um eixo apenas.


Origin
----------------
origin-center / top / bottom / left / right - transform-origin: center
posso combinar posicoes: top-left, top-rigth...



*/

export default Transform;
