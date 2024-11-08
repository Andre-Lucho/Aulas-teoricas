/*

Javascript Assíncrono --> Super Importante para o JS Moderno 
------------------------------

Síncrono vs Assíncrono
-----------------------

Síncrono == Call Stack
---------

Espera a tarefa acabar para continuar com a próxima.

Assíncrono
-----------

Move para a próxima tarefa (ao longo do algoritmo(script)) antes da anterior terminar(assíncrona =assync). 
O trabalho(assync) será executado no 'fundo'(Web API) e quando terminado, será colocado na fila (Task
Queue).
Após acabarem todas as tarefas da Call Stack, as tarefas da Task Queue serão adicionadas a Call Stak

Exemplos
--------
setTimeout (callback assíncrono), 
Ajax(assync JS and Xml = + antigo), 
Promises, Fetch (+ moderno),
Async. 
(Mutation)*/

/*

Vantagens
----------

Carregamento no Fundo
----------------------

Não trava o script (se as tarefas assíncronas fossem diretamente para a Call Stack, as demais teriam que aguardar seu tempo de execução(mtas vezes, com atrasos já configurados) e, conforme, travaria o script = tela travada);
O resto do algoritmo é excutado normalmente (é possível ir utilizando o site), enquanto o processamento é realizado no fundo(Web API).

Função ao término (funções CallBack)
----------------------
Podemos ficar de olho no carregamento(Web API) e executar uma função (Callback) assim que ele terminar.


Requisições ao Servidor
----------------------
Não precisamos recarregar a página por completo à cada requisição feita ao servidor. */
