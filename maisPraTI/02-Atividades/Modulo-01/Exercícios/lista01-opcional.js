const prompt = require('prompt-sync')({ sigint: true });

// Exercício 1:
//Escreva um programa para calcular a redução do tempo de vida de um fumante.
//Pergunte a quantidade de cigarros fumados por dias e quantos anos ele já fumou.
//Considere que um fumante perde 10 min de vida a cada cigarro. Calcule quantos dias de vida um fumante perderá e exiba o total em dias.

/*
1 cigarro - 10*60 --> 600s perdido

1 dia -- 86400 s
x --600s
x= 0,006944444 dias perdidos de vida a cada cigarro

10 cigarros/dia por 1 ano = 365 dias
10 * 365 = 3650 cigarros/ano  */

function cigarette() {
  let cigarettesPerDay = Number(
    prompt(
      'Calculadora de redução de expectativa de vida de um fumante!\nQuantos cigarros você fuma por dia? ',
    ),
  );

  let cigarettesPerYear = Number(prompt('Quantos anos você é um fumante? '));
  let daysLost = 0;

  if (isNaN(cigarettesPerDay) || isNaN(cigarettesPerYear)) {
    console.log(
      'Você digitou um valor diferente de numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else {
    daysLost = Math.round(
      cigarettesPerDay * (cigarettesPerYear * 365) * 0.006944444,
    );
    console.log(
      `Com essa quantidade de cigarros fumandos por dia, sua expectativa de vida está reduzida em ${daysLost} dias.`,
    );
  }
}

// Exercício 2:
// Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 80 Km h-1, exiba uma mensagem dizendo que o usuário foi multado.
// Nesse caso, exiba o valor da multa, cobrando R$ 5,00 por cada Km acima da velocidade permitida.

function trafficTicket() {
  let carSpeed = Number(
    prompt(
      'Calculadora de multa de trânsito!\nQual é a velocidade atual do seu carro? ',
    ),
  );
  if (isNaN(carSpeed)) {
    console.log(
      'Você digitou um valor diferente de numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else if (carSpeed > 80) {
    console.log(`Velocidade atual: ${carSpeed} ! Você foi multado!`);
    let trafficTicket = Math.round((carSpeed - 80) * 5).toFixed(2);
    console.log(`Sua multa é de R$${trafficTicket}.`);
  } else {
    console.log(
      `Sua velocidade está dentro do permitido pela legislação vigente. Tenha uma boa viagem.`,
    );
  }
}

// Exercício 3
// Faça um algoritmo que pergunte a distância que um passageiro deseja percorrer em Km.
// Calcule o preço da passagem, cobrando R$ 0.50 por Km para viagens até 200 Km e R$ 0.45 para viagens mais longas.

function travelTicket() {
  let travelDistance = Number(
    prompt('MaisPraTI Viagens!\nQual é a distância da viagem desejada? '),
  );

  if (isNaN(travelDistance)) {
    console.log(
      'Você digitou um valor diferente de numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else {
    let travelDistance1 = Math.round(travelDistance);
    if (travelDistance1 <= 200) {
      console.log(
        `O preço de sua passagem é de R$${(travelDistance1 * 0.5).toFixed(2)}.`,
      );
    } else {
      console.log(
        `O preço de sua passagem é de R$ ${(travelDistance1 * 0.45).toFixed(
          2,
        )}.`,
      );
    }
  }
}

// Exercício 4
// Crie um programa que leia o tamanho de três segmentos de reta. Analise seus comprimentos e diga se é possível formar um triângulo com essas retas.
// Matematicamente, para três segmentos formarem um triângulo, o comprimento de cada lado deve ser menor que a soma dos outros dois.

function triangleCheck() {
  let sideA = Number(
    prompt('Verificação de Triângulos!\nDigite um valor para o lado A: '),
  );
  let sideB = Number(
    prompt('Verificação de Triângulos!\nDigite um valor para o lado B: '),
  );
  let sideC = Number(
    prompt('Verificação de Triângulos!\nDigite um valor para o lado C: '),
  );

  if (isNaN(sideA) || isNaN(sideB) || isNaN(sideC)) {
    console.log(
      'Você digitou um valor diferente de um numeral.\nDigite um valor válido.\nSaindo...',
    );
  } else {
    sideA + sideB > sideC && sideA + sideC > sideB && sideB + sideC > sideA
      ? console.log('Os valores fornecidos podem formar um triângulo')
      : console.log('Os valores fornecidos não formam um triângulo');
  }
}

// Exercício 5
// Crie um jogo de JoKenPo (Pedra-Papel-Tesoura).

/*
pedra
pedra - tesoura = ganha
pedra - pedra = empate
pedra - papel = perde

papel
papel - pedra = ganha
papel - papel = empate
papel - tesoura = perde

tesoura
tesoura - papel = ganha
tesoura - tesoura = empate
tesoura - pedra = perde 
*/

function joKenPo() {
  let userInputA = prompt(
    'Jogo Pedra-Papel-Tesoura!\nJogador A - Escolha um:\nPedra (pedra), Papel (papel), Tesoura (tesoura) e digite o seu correspondente:',
  );
  let userInputB = prompt(
    'Jogador B - Escolha um:\nPedra (pedra), Papel (papel), Tesoura (tesoura) e digite o seu correspondente:',
  );
  // ;

  if (userInputA === null || userInputB === null) {
    console.log('Entrada cancelada. O jogo não pode continuar.');
    return;
  }

  const playerA = userInputA.toLowerCase().trim();
  const playerB = userInputB.toLowerCase().trim();
  const validChoices = ['pedra', 'papel', 'tesoura'];

  if (!validChoices.includes(playerA) || !validChoices.includes(playerB)) {
    console.log(
      'Escolha inválida! Por favor, os dois jogadores devem escolher entre pedra, papel ou tesoura.',
    );
    if (!validChoices.includes(playerA)) {
      console.log(`Jogador A escolheu: "${userInputA}" ! Opção inválida.`);
    }
    if (!validChoices.includes(playerB)) {
      console.log(`Jogador B escolheu: "${userInputB}"! Opção inválida.`);
    }
  }

  if (playerA === playerB) {
    console.log('Houve um empate!');
  } else {
    switch (playerA) {
      case 'pedra':
        if (playerB === 'tesoura') console.log('O jogador A venceu!');
        else console.log('O jogador B venceu!');
        break;
      case 'papel':
        if (playerB === 'pedra') console.log('O jogador A venceu!');
        else console.log('O jogador B venceu!');
        break;
      case 'tesoura':
        if (playerB === 'papel') console.log('O jogador A venceu!');
        else console.log('O jogador B venceu!');
        break;
    }
  }
}

/*
Com IF apenas:
---------------------------------------

} else {
    console.log(`O Jogador A escolheu ${userInputA} `);
    console.log(`O Jogador B escolheu ${userInputB} `);

    if (playerA == 'pedra') {
      if (playerB == 'tesoura') console.log('O jogador A venceu');
      else if (playerB == 'papel') console.log('O jogador B venceu');
      else {
        console.log('Houve um empate!');
      }
    }
    if (playerA == 'papel') {
      if (playerB == 'pedra') console.log('O jogador A venceu');
      else if (playerB == 'tesoura') console.log('O jogador B venceu!');
      else {
        console.log('Houve um empate!');
      }
    }
    if (playerA == 'tesoura') {
      if (playerB == 'papel') console.log('O jogador A venceu');
      else if (playerB == 'pedra') console.log('O jogador B venceu!');
      else {
        console.log('Houve um empate!');
      }
    }
  } */

// Exercício 6
// Crie um jogo onde o computador vai sortear um número entre 1 e 5.
// O jogador vai tentar descobrir qual foi o valor sorteado.

function guessNumber() {
  let arr = [1, 2, 3, 4, 5];
  let number = 0;
  let userInput;

  while (!arr.includes(number)) {
    number = Math.round(Math.random() * 5) + 1;
  }

  do {
    userInput = Number(prompt('Escolha um nuúmero de 1 a 5 e digite: '));
    if (isNaN(userInput)) {
      console.log(
        'Você digitou um valor diferente de um numeral.\nDigite um valor válido...',
      );
    } else if (userInput < 1 || userInput > 5 || !Number.isInteger(userInput)) {
      console.log('Por favor, digite um número inteiro entre 1 e 5.');
    } else {
      if (number === userInput) {
        console.log(
          `Você acertou o número sorteado pelo PC: ${number} Parabéns!`,
        );
      } else {
        console.log(`Você não acertou o número sorteado! Tente novvamente`);
      }
    }
  } while (number !== userInput || isNaN(userInput));
  console.log('Fim do jogo!');
}

// Exercício 7
/* 
Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O aluguel de um carro popular custa R$ 90,00 por dia e um carro de luxo custa R$ 150,00. 
Além disso, o cliente paga por Km percorrido. 
Faça um programa que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e quantos Km foram percorridos. 
No final, mostre o preço a ser pago de acordo com os dados a seguir:

Carros populares
- Até 100 Km percorridos: R$ 0,20 por Km
- Acima de 100 Km percorridos: R$ 0,10 por Km
Carros de luxo
- Até 200 Km percorridos: R$ 0,30 por Km
- Acima de 200 Km percorridos: R$ 0,25 por Km */

// Exercício 8
/*
Um programa de vida saudável quer dar pontos por atividades físicas realizadas que podem ser trocados por dinheiro. 
Cada hora de atividade física no mês vale pontos. O sistema funciona assim:
- até 10 h de atividade no mês: ganha 2 pontos por hora
- de 10 h até 20 h de atividade no mês: ganha 5 pontos por hora
- acima de 20 h de atividade no mês: ganha 10 pontos por hora
- A cada ponto ganho, o cliente fatura R$ 0,05 (5 centavos)
Faça um programa que leia quantas horas de atividade uma pessoa teve por mês.
Calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar. */

// Exercício 9
// Desenvolva um aplicativo que leia o salário e o sexo de vários funcionários. No final, mostre o total de salário pago aos homens e o total pago às mulheres.
// O programa vai perguntar ao usuário se ele quer continuar ou não sempre que ler os dados de um funcionário.

// Exercício 10
/* 
Crie um programa usando a estrutura “faça enquanto” que leia vários números. A cada laço, pergunte se o usuário quer continuar ou não. 
No final, mostre na tela:
a) O somatório entre todos os valores;
b) Qual foi o menor valor digitado;
c) A média entre todos os valores;
d) Quantos valores são pares. */

const executarExercicios = (nomeDaFuncao) => {
  typeof nomeDaFuncao == 'function'
    ? nomeDaFuncao()
    : console.log(
        'Você inseriu um nome inválido para a função que deseja executar!!\nInsira novamente o nome correto da função correspondente ao exercício desejado',
      );
};

// Digitar abaixo (entre os parênteses) nome da função que se quer executar sem os parênteses:
executarExercicios();
