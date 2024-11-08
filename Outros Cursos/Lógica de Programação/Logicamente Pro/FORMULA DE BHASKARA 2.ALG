Algoritmo "Zerado"


Var

a:inteiro
b, c:real
xum, xdois, delta, raiz:real


Inicio
escreval(" ")
escreval("Algoritmo para verificacao de uma equacao de 2 grau do tipo:")
escreval("ax2 + bx +c =0")
escreval(" ")
escreval("Digite os valores para os coeficientes a, b e c, nessa ordem:")
escreval("Digite o valor do coeficiente a:")
leia(a)
escreval(" ")
escreval("Digite o valor do coeficiente b:")
leia(b)
escreval(" ")
escreval("Digite o valor do coeficiente c:")
leia(c)
escreval(" ")

escreval("A equacao com os valores digitados e representada por:")

//escrita da eq 2 grau conforme coeficientes=1 ou >1

// ERRO AQUI aqui - sera q SOMENTE posso usar o comando Escolha
// com valores reais e nao com operadores??

   escolha a, b, c
   caso a = 0
        escreval("Esta não e uma equacao de 2 grau")
        escreval("Digite novos valores")
   caso a, b, c = 1
        escreva("x2+", "x+", "=0")
   outrocaso
        escreva((a), "x2+", (b), "x+", c, "=0")


//ALGORITMO ANTIGO ABAIXO

se a=0 entao
   escreval("Esta não e uma equacao de 2 grau")
   escreval("Digite novos valores")
senao
   //calculo delta //
   delta<- (b^2)-(4*a*c)

   escreval((a),"x2+", (b), "x+", c, "=0")
   escreval(" ")
   escreval("Agora, vamos calcular o(s) valor(es) para x:")
   escreval(" ")
   escreval("o valor para delta e=", (delta))
   escreval(" ")

   se delta = 0 entao
      raiz<- (RaizQ(delta))
      xum<- ((-b)+(raiz))/2*a
      escreval(" ")
      escreval("o valor para x e:", xum)
   senao
      se delta > 0 entao
         raiz <- (RaizQ(delta))
         xum<- ((-b)+(raiz))/2*a
         xdois<- ((-b)-(raiz))/2*a
         escreval(" ")
         escreval("x recebe 2 valores:")
         escreval("x um':", xum)
         escreval("x dois:", xdois)
      senao
         se delta < 0 entao
         escreval(" ")
         escreval("delta assume valores negativos")
         escreval("nao existe raiz quadrada de numeros negativos")
         escreval("o valor para x nao admite valores reais")
         fimse
      fimse
   fimse
fimse
