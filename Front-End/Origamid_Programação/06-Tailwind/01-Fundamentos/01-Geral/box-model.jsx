/*

BOX MODEL
-----------------------------------
-----------------------------------

Altura e Largura
--------------------
w- e h- para definir largura e altura. 
size- para definir largura e altura iguais de mesmo valor, formando um quadraro


Cores
--------------------

Gradiente
----------
Vai de 50(+ claro da paleta) até 950(+ escuro da paleta), além de white e black

As cores podem ser aplicadas a diferentes elementos como background: bg-, color: text-, border: border- e outros.

*text - para cor de texto(=color:)


Unidades
--------------------
Em geral, as unidades são geradas de 4px em 4px, então w-2 =8px e w-5 =20px. 
O Tailwind traduz o px para rem.

Existem exceções:
w-1/2 = 50%, 
w-full = 100% e 
w-px é 1px

*Border é em px


Padding e Margin
--------------------
p- para padding || m- para margin.

py- para top/bottom || px- para left/right.

pt- = top, 
pb- = bottom, 
pr- = right, 
pl- = left.

É possível ter valores negativos para margin, como: -mt-10 e || auto: mx-auto


Border
-----------------------------------
Os valores de border são especificados em px, então border-4 é 4px de borda. 
Os valores de bottom, top e etc são separados por -, por exemplo, border-b.

border-x-4 --> border na esq e dir
border-y-4 --> border em cima e embaixo


Box-sizing
-----------------------------------

Diferente do HTML padrão, o Tailwind define os elementos com box-sizing: border-box; 
Sendo assim, os valores de border e padding são absorvidos pelo valor do height e não somados ao mesmo.

Podemos mudar para o comportamento padrão com box-content
*/
