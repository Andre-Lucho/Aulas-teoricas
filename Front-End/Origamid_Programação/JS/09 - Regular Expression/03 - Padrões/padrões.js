/*

CEP
------------------------------------------------------

\d = digitos apenas
{} = quantificador
[-\s = -, somado ao whitespace] = ou todo - (traço), e/ou todo espaço, quebra parag, tabs
? = pode ou não existir [-\s]? 

** tuso for de classe ou de grupo de captura é obrigatório == tem sempre

*/

// const regexpCEP = /\d{5}[-\s]?\d{3}/g;

// const ceps = ["00000-000", "00000 000", "00000000"];

// for (cep of ceps) {
//   console.log(cep, cep.match(regexpCEP));
// }

/*

CPF
------------------------------------------------------

/\d{3}[.-]?\d{3}[.-]?\d{3}[.-]?\d{2}/g == /(\d{3}[.-]?){3}\d{2}/g  

+  '?:' no início p não capturar o grupo


=== /(?:\d{3}[.-]?){3}\d{2}/g

===/(?:\d{3}[.-\s]?){3}\d{2}/g

*/

// const regexpCPF = /(?:\d{3}[-.]?){3}\d{2}/g;

// const cpfs = [
//   "000.000.000-00",
//   "000-000-000-00",
//   "000.000.000.00",
//   "000000000-00",
//   "00000000000",
// ];

// for (cpf of cpfs) {
//   console.log(cpf, cpf.match(regexpCPF));
// }

/*

CNPJ
------------------------------------------------------

/\d{2}(?:[-.]?\d{3}){2}[/.-]?\d{4}[.-]?\d{2}/g 

(depende se pega o primeiro ponto junto com os 2 primeiros digitos ou depois)

ou

*/

// const regexpCNPJ =
// /\d{2}[-.]?(?:\d{3}[-.]?){2}[-\/]?\d{4}[-.]?\d{2}/g;

// const cnpjs = [
// 00.000.000/0000-00
// 00.000.000/000000
// 00.000.000.000000
// 00.000.000.0000.00
// 00-000-000-0000-00
// 00000000000000
// ];
// for(cnpj of cnpjs) {
// console.log(cnpj, cnpj.match(regexpCNPJ));
// }

/*

Telefone
------------------------------------------------------

1. (?:\+?55\s?)? = pegando o grupo +55 (com o + opc) + 'espaço' (opc) e o próprio grupo de captura opcional + Ignorar Captura

2. (?:\(?\d{2}\)?[\s-]?)? = pegando o DDD + o próprio grupo de captura opciona l + (- ou espaço opc) + Ignorar Captura

3. \d{4,5} = inicio do telefone com 4 ou 5 dígitos

4. [-\s]? = pegando - ou espaço(opc)

5. \d{4} = pegando os 4 últimos dígitos */

// const regexpTELEFONE = /(?:\+?55\s?)?(?:\(?\d{2}\)?[-\s]?)?\d{4,5}[-\s]?\d{4}/g;
// const telefones = [
//   "+55 11 98888-8888",
//   "+55 11 98888 8888",
//   "+55 11 988888888",
//   "+55 11988888888",
//   "+5511988888888",
//   "5511988888888",
//   "11 98888-8888",
//   "11 98888 8888",
//   "(11) 98888 8888",
//   "(11) 98888-8888",
//   "11-98888-8888",
//   "11 98888 8888",
//   "11988888888",
//   "11988888888",
//   "988888888",
//   "(11)988888888",
//   "98888 8888",
// ];

// for (telefone of telefones) {
//   console.log(telefone, telefone.match(regexpTELEFONE));
// }

/*

Email
------------------------------------------------------


1. [\w-.]+ = pega usuario (palavras), mesmo que ele use '-' ou '.' no seu nome

2. @ = obrigatório

3. [\w-]+ = pega o domínio 

4. \.[\w.-]+ = pegando o '.', seguido de palavra, com '.' ou '-'

5. flag = i


const regexpEMAIL = /[\w.-]+@[\w-]+\.[\w-.]+/gi;

const emails = [
'email@email.com',
'email@email.com.org',
'email-email@email.com',
'email_email@email.com',
'email.email23@email.com.br',
'email.email23@empresa-sua.com.br',
'c@contato.cc',
];

for(email of emails) {
console.log(email, email.match(regexpEMAIL));

http://emailregex.com/


/*

Tag (apenas - sem o texto)
------------------------------------------------------
<\/?[\w\s="'_]+\/?>

** [\w\s="'] == tudo que vai dentro da tag (classes, data...)


const regexpTAG = /< \ /?[\w\s=" ']+\ /?>/gi;

const tags = [
'<div>Isso é uma div</div>',
'<div class="ativa">Essa está ativa</div>',
'<img src="imagem" />',
'<img src="imagem">',
'<ul class="ativa">',
'<li>Essa está ativa</li>',
'</ul>'
];
for(tag of tags) {
console.log(tag, tag.match(regexpTAG));

*/

/*

Tag (apenas o nome(tipo) da tag)
------------------------------------------------------

(?<=<\/?) -- Positive Lookbehind - não está disponível em todos os browsers.

const regexpTAG = / (?<=<\/?)[\w]+/gi;
COPIAR
const tags = [
'<div>Isso é uma div</div>',
'<div class="ativa">Essa está ativa</div>',
'<img src="imagem" />',
'<img src="imagem">',
'<ul class="ativa">',
'<li>Essa está ativa</li>',
'</ul>'
];

for(tag of tags) {
console.log(tag, tag.match(regexpTAG));
}


*/
