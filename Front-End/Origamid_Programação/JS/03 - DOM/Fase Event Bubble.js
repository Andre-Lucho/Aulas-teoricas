/* 
Event Bubble
--------------- 

Fases de execução de um código JS:
-----------------------------------

1) Hoisting

Fase de alocar (apenas) na mémoria todas as variáies, funções, objetos, etc;
Nenhum valor é atribuido a elas.

2) Execução do script

Todos as propriedades e métodos são executadas em ordem, sendo alocados (em formato 'pilha') em uma 'Call Stack' ;
Os valores que estão na mémória são atualizados com os seus valores declarados (propriedades e métodos).
Após a execução os valores da 'Call Stack', estes são apagados.

3) Execução dos eventos (.addEventListener) na Web API

4) Ação propriamente dita do usuário

linkada ao evento .addEventListener

5) Evento de clique

Funções callback (linkada ao evento .addEventListener) sendo disparadas e alocadas na 'Call Stack'

6) Fase de Bubble

Fase que ocorre ao final de um evento DOM e anterior a execução de outro evento.
Ela faz uma verificação se um Element parent(Pai) possui algum evento ligado a ele

Ex. <div>
      <ul>
        <li> Evento está ocorrendo aqui

Bubble faz uma verificação em <ul>. Se possuir, executa. Senão, passa p o próximo tag parent, verificando se ela possui eventos, e assim por diante

Execução do Bubble(nesse exemplo):
<li> --> <ul> --> <div> --> <body> --> <html> --> <document> --> <window>

7) Script é finalizado

** Todos os elementos que foram add a memória e a Web API se mantém no host enquanto o site está ativo 

*/
