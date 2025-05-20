// // const prompt = require('prompt-sync')({ sigint: true });

/*
1)

Escreva um algoritmo que leia uma temperatura em Celsius e retorner em Fahrenheit
Fórmula = ( °C × 9/5 ou 1.8) + 32 = °F
Aqui, através de uma função e utilizando do/while e if  */

const tempFahrenheit = () => {
  let inputUsuario = '';
  let tempFahrenheit = '';

  do {
    inputUsuario = prompt(
      'Digite a temperatura em Celsius (ou "sair" para terminar): ',
    );
    if (inputUsuario.toLowerCase() === 'sair') {
      break;
    }

    if (isNaN(inputUsuario)) {
      console.log(
        'Você digitou um valor diferente de numeral. Digite um valor válido',
      );
    } else {
      tempFahrenheit = inputUsuario * 1.8 + 32;
      console.log(tempFahrenheit);
    }
  } while (true);
  console.log('Saindo do sistema...');

  return inputUsuario;
};

// tempFahrenheit();

/*
2)

Escreva um algoritmo para ler o número de eleitores de um município, o número de votos brancos, nulos e válidos.
Calcular e escrever o percentual que cada um representa em relação ao total de eleitores
 */

const votos = () => {
  let eleitores = Number(
    prompt('Digite o número de eleitores aptos a votar: '),
  );
  let brancos = Number(prompt('Digite o número de votos brancos do pleito: '));
  let nulos = Number(prompt('Digite o número de votos nulos do pleito: '));

  let validos = eleitores - (brancos + nulos);
  let brancoPrecent = Math.floor((brancos / eleitores) * 100);
  let nulosPrecent = Math.floor((nulos / eleitores) * 100);
  let validosPrecent = Math.floor((validos / eleitores) * 100);

  let option = Number(
    prompt(
      'Digite a opção desejada:\n1. Para saber a quantidade e percentual de votos brancos do pleito\n2. Para saber a quantidade e percentual de votos nulos do pleito\n3. Para saber a quantidade e percentual de votos válidos do pleito',
    ),
  );

  switch (option) {
    case 1:
      console.log(`Total de eleitores = ${eleitores}`);
      console.log(`Total de votos brancos = ${brancos}`);
      console.log(`Percentual de votos brancos: ${brancoPrecent}%`);
      break;
    case 2:
      console.log(`Total de eleitores = ${eleitores}`);
      console.log(`Total de votos nulos = ${nulos}`);
      console.log(`Percentual de votos nulos: ${nulosPrecent}%`);
      break;
    case 3:
      console.log(`Total de eleitores = ${eleitores}`);
      console.log(`Total de votos válidos = ${validos}`);
      console.log(`Percentual de votos válidos: ${validosPrecent}%`);
      break;
  }
};

// votos();

/*
3)

A turma C é composta de 60 alunos, e a turma D de 20 alunos.
Escreva um algoritmo que leia o percentual de alunos reprovados na turma C,
o percentual de aprovados na turma D, calcule e escreva:

a) O número de alunos reprovados na turma C.
b) O número de alunos reprovados na turma D.
c) A porcentagem de alunos reprovados em relação ao total de alunos das duas turmas.

[Exemplo de dados de entrada]
10 (percentual de alunos reprovados na turma C)
85 (percentual de alunos aprovados na turma D)

[Saída para os dados de entrada acima]
6 (quantidade de alunos reprovados na turma C)
3 (quantidade de alunos reprovados na turma D)
11.25 (percentual de alunos reprovados em relação ao total de alunos das duas turmas) */

// retortar =
// quantidade de alunos reprovados na turma C,
// quantidade de alunos reprovados na turma D,
// percentual de alunos reprovados em relação ao total de alunos das duas turmas;

function reprovados() {
  let alunosCTotal = 60;
  let alunosDTotal = 20;
  let alunosTotal = alunosCTotal + alunosDTotal;

  let percentualReprovC = Number(
    prompt('Digite o percentual de alunos reprovados na turma C: '),
  );
  let percentualAprovD = Number(
    prompt('Digite o percentual de alunos aprovados na turma D: '),
  );

  let reproC = (percentualReprovC / 100) * alunosCTotal; // qt reprovados C
  let reproD = alunosDTotal - [(percentualAprovD / 100) * alunosDTotal]; //qt reprov D
  let ReproTotal = Math.floor(((reproC + reproD) / alunosTotal) * 100).toFixed(
    1,
  );
  console.log(
    `Quantitades de alunos reprovados nas turmas:\nTurma C: ${reproC} alunos,\nTurma D: ${reproD} alunos, \nPercentual de reprovação nas 2 turmas: ${ReproTotal}% dos alunos`,
  );
}
// reprovados();

/*

4)
Faça um programa que LEIA o dia da semana (Domingo, Segunda, Terça, Quarta,Quinta, Sexta e Sabado).
Esse dia deve ser um TEXTO. SE FOR Sábado ou Domingo, imprimir "Final de Semana", SENÃO imprimir "Dia Útil". */

const weekDays = () => {
  const date = new Date();
  let userInput = '';

  do {
    userInput = prompt(
      'Gostaria de saber o dia da semana?\nSe sim, digite "s"; \nse não, digite "n":',
    );

    if (userInput === 'n') {
      alert('Saindo do sistema...');
      break;
    } else if (userInput !== yes) {
      alert(
        'A tecla escolhida não corresponda a "s" ou "n";\nExecute novamente.\nSaindo do sistema...',
      );
    } else {
      const day = date.getDay();
      if (day == 0 || day == 6) {
        alert('Estamos no Final de Semana');
      } else {
        alert('Estamos em um dia útil');
      }
    }
  } while (userInput == 's');
};

// weekDays();

//     switch (day) {
//       case 0:
//         alert('Estamos no Domingo');
//         break;
//       case 1:
//         alert('Estamos na Segunda-Feira');
//         break;
//       case 2:
//         alert('Estamos na Terça-Feira');
//         break;
//       case 3:
//         alert('Estamos na Quarta-Feira');
//         break;
//       case 4:
//         alert('Estamos na Quinta-Feira');
//         break;
//       case 5:
//         alert('Estamos na Sexta-Feira');
//         break;
//       case 6:
//         alert('Estamos no Sábado');
//         break;
//     }
//   }

/*

5)
Escreva um algoritmo para REPETIR a leitura de um número ENQUANTO o valor fornecido for diferente de 0.
Para cada número fornecido, imprimir se ele é NEGATIVO ou POSITIVO.
Quando o número 0 for fornecido a REPETIÇÃO deve ser encerrada sem imprimir mensagem alguma. */

function numeros() {
  let userInput = '';

  do {
    userInput = Number(
      prompt(
        'Verificação de Números Positivos e Negativos!\nInsira o valor a ser conferido:\nPara sair, digite 0',
      ),
    );

    let check = isNaN(userInput);
    if (check) {
      alert(`O caractere digitado não é um numeral.\nSaindo do sistema...`);
      break;
    }

    if (userInput > 0) {
      alert(`O número "${userInput}" digitado é um número positivo`);
    } else if (userInput < 0) {
      alert(`O número "${userInput}" digitado é um número negativo`);
    } else if (userInput === 0) {
      break;
    }
  } while (userInput !== NaN);
}

//  algoritmo sem a verificação:

//   do {
//     userInput = Number(
//       prompt(
//         'Verificação de Números Positivos e Negativos!\nInsira o valor a ser conferido:\nPara sair, digite 0',
//       ),
//     );

//     if (userInput > 0) {
//       alert(`O número "${userInput}" digitado é um número positivo`);
//     } else {
//       alert(`O número "${userInput}" digitado é um número negativo`);
//     }
//   } while (userInput !== 0);
// }

// numeros();

/*

6)
Escreva um algoritmo para repetir a leitura de uma senha até que ela seja válida.
Para cada leitura da senha incorreta informada escrever a mensagem "SENHA INVÁLIDA".
Quanto a senha for informada corretamente deve ser impressa a mensagem "ACESSO PERMITIDO" e o algoritmo encerrado.
Considere que a senha correta é o valor 2807. */

const checkPassword = () => {
  const key = 2807;

  do {
    userInput = Number(prompt('Verificação de Senha!\nInsira sua senha: '));

    let check = isNaN(userInput);
    if (check) {
      alert('Você digitou caracteres não numerais.\nDigite apenas números...');
    }

    // encapsular abaixo, qd for NaN com IF ou função:
    if (userInput != key) {
      alert('SENHA INVÁLIDA');
    } else {
      alert('ACESSO PERMITIDO');
      break;
    }
  } while (true);
};

checkPassword();
