// 4) Ordene o array números em ordem crescente - arquivo 01-vetores-unid.js

const array = [3, 6, 1, 2, -3];
/*
(i = 0):
---------------

...| j=0
3, 1, 6, 2, -3 | j=1
3, 1, 2, 6, -3 | j=2
3, 1, 2, -3, 6 | j=3

(i = 1): Está fornecendo mais uma série nova de loops para o segundo for
-----------------------------------------------------------------------------------------------------
array novo em i=1:
[3, 1, 2, -3, 6]
-------------------

1, 3, 6, 2, -3| j=0
... | j=1
1, 3, 2, 6, -3 | j=2
1, 3, 2, -3, 6 | j=3

(i = 2) - + 1 série ao for do j
... (i=3)... até o -3 ir para o início do Array */

// for (let i = 0; i < n; i++) {
//   const inserido = array[i];
//   // Este loop 'for' interno procura o local onde o novo número ('inserido')
//   // deve ser inserido em 'ordem2' para manter a ordenação crescente.
//   let j;
//   for (j = 0; j < ordem2.length; j++) {
//     if (ordem2[posicaoInsercao] >= inserido) {
//       break; // Encontrou a posição correta, sai do loop interno
//     }
//   }
//   ordem2.splice(posicaoInsercao, 0, inserido); // Insere o 'inserido' na 'posicaoInsercao' encontrada  }
// }

// console.log(ordem2);

let n = array.length;

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n - 1; j++) {
    if (array[j] > array[j + 1]) {
      let temp = array[j];
      array[j] = array[j + 1];
      array[j + 1] = temp;
    }
  }
}

console.log(array);
console.log(array.sort((a, b) => a - b));

// * pq o segundo for tem como limite n-1?
// pois, quando a comparação só é válida até ali... na útima posição [9](que seria n =10) eu não tenho um elemento em [10] ou 'n+1' para comparar, pois acabou o Array original 'números'

// ** Importante:
// No BubbleSort, o maior número na primeira iteração interna já vai para o final do Array

/*

BubbleSort
-------------------------------------------------------- 
É um dos algoritmos de ordenação mais básicos e intuitivos que a gente aprende quando começa a programar. 
Pensa nele como uma forma bem metódica de colocar as coisas em ordem, um pouco como organizar cartas de baralho na mão.

Em essência, o Bubble Sort funciona da seguinte maneira:

1) Comparação em pares: Ele percorre a lista de elementos (como números em um array) comparando cada elemento com o seu vizinho imediato.

2) Troca se necessário: Se o elemento da esquerda for maior que o da direita (para ordenação crescente), eles são trocados de posição. 
Assim, o maior dos dois "borbulha" para a direita.

3) Repetição: Esse processo de comparação e troca é repetido várias vezes ao longo da lista. 
A cada "passada" completa pela lista, o maior elemento não ordenado "flutua" para sua posição correta no final.

4) Continuidade até a ordenação: As passadas pela lista continuam até que nenhuma troca seja mais necessária em uma passada inteira, 
o que significa que a lista está completamente ordenada.

Vamos definir formalmente o Bubble Sort:
-------------------------------------------------------- 
O Bubble Sort é um algoritmo de ordenação simples que repetidamente percorre a lista, compara elementos adjacentes e os troca se estiverem na ordem errada. 
A cada iteração, o maior elemento não ordenado "borbulha" para sua posição correta no final da lista.


Para ilustrar com um exemplo:
-------------------------------------------------------- 

Imagine a lista de números: [5, 1, 4, 2, 8]

Primeira passada:

Compara 5 e 1. 5 é maior que 1, então troca: [1, 5, 4, 2, 8]
Compara 5 e 4. 5 é maior que 4, então troca: [1, 4, 5, 2, 8]
Compara 5 e 2. 5 é maior que 2, então troca: [1, 4, 2, 5, 8]
Compara 5 e 8. 5 não é maior que 8, não troca: [1, 4, 2, 5, 8] (O 8 já está na posição correta para esta passada)

Segunda passada:

Compara 1 e 4. Não troca: [1, 4, 2, 5, 8]
Compara 4 e 2. Troca: [1, 2, 4, 5, 8]
Compara 4 e 5. Não troca: [1, 2, 4, 5, 8]
Compara 5 e 8. Não troca: [1, 2, 4, 5, 8]
E assim por diante, até que a lista esteja completamente ordenada: [1, 2, 4, 5, 8].

** Características importantes do Bubble Sort:

a) Simples de entender e implementar: Essa é a principal vantagem dele.

b) Ineficiente para grandes conjuntos de dados: Sua complexidade de tempo no pior caso e caso médio é O(n2), onde n é o número de elementos. 
Isso significa que o tempo de execução cresce quadraticamente com o tamanho da entrada, tornando-o lento para listas grandes.

c) Bom para pequenas listas ou listas quase ordenadas: Em listas pequenas ou que já estão quase na ordem correta, o Bubble Sort pode ter um desempenho razoável.

d)Algoritmo de ordenação estável: Ele preserva a ordem relativa de elementos com valores iguais.

Em resumo:
-------------------------------------------------------- 
O Bubble Sort é um algoritmo fundamental para entender a lógica da ordenação, mas na prática, para a maioria das aplicações, 
existem algoritmos de ordenação muito mais eficientes como o Merge Sort, Quick Sort ou Heap Sort. 
Mesmo assim, entender o Bubble Sort é um ótimo ponto de partida na jornada da ciência da computação */

// Big O notation --> permite verificar o quão complexo é um algoritmo e sugerir qual estratégia de ordenação gera uma melhor performance para o problema apresentado

// a primeira pergunta do colega bruno não está correta
// a posição j está se referndo ao array 'Array' que tem 5 elementos e o segundo for está limitado na consição a ler n-1
// ou seja, o segundo for nunca irá ler um elemento além dos elementos presentes no array Array e não dará nenhum tipo de erro!
