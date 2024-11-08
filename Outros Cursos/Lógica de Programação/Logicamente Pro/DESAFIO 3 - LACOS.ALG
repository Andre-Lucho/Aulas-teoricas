Algoritmo "DESAFIO 3 - LACOS"


Var

a, x:real


Inicio

escreval("Por favor, Digite um numero inteiro:")
leia(a)
escreval(" ")

enquanto a mod 2 = 0 faca
         x<- a mod 2
         escreva(x)
         a<- a/2

         // divisao por 2 nao da n inteiro - ex 3
         
         //se a mod 2 <> 0 ou >=0 entao
         //   a<- a mod 2
         //   escreva(a)
         //fimse
         
fimenquanto

escreval(" ")

escreval("FIM da OPERACAO")

fimalgoritmo