"use strict";
/*
1. Crie uma interface UserData para o formulário abaixo
2. Crie uma variável global UserData no window, ela será um objeto qualquer
3. Adicione um evento de keyup ao formulário
4. Quando o evento ocorrer adicione a {[id]: value} ao UserData
5. Salve UserData no localStorage
6. Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
7. Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData */
const form = document.querySelector('#form');
window.UserData = {};
const isUserData = (obj) => {
    if (obj &&
        typeof obj === 'object' &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
};
// console.log(isUserData('oi'));
const validJSON = (str) => {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
};
const handleLocalStorage = () => {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON(localUserData)) {
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
            Object.entries(UserData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}; // **
handleLocalStorage();
const handleForm = ({ target }) => {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
        console.log(window.UserData);
    }
};
form?.addEventListener('keyup', handleForm);
/*

Explicações do código
----------------------

*) porque do ?. === pq quero ter a opção de não ter esses valores qd o usuário for preencher o formulario de forma incompleta, ou seja, eles são opcionais == o Objeto que a interface faz referência não precisará ter todos esses parêmetros


1. O evento está sendo chamado pelo 'form'; quero o 'target' dele, ou seja, o campo(elemeto) que disparou o evento;
form é do tipo Element | null

2. Quero acessar os métodos de 'KeyboardEvent' no {target}, mas o evento é do tipo 'Event' :
Element não recebe KeyboardEvent, mas sim Event == KeyboardEvent herda de Event
Element não implementa GlobalEventHandlers, que contém um mapa de eventos (GlobalEventHandlersEventMap) == por isso não consigo acessar os métodos de 'KeyboardEvent' no {target}

3. Transformo a 'const form' para HTMLElement == agora 'form' NÃO é + do tipo Element, mas sim HTMLElement == HTMLElement implementa GlobalEventHandlers que fazem esse mapeamento dos métodos de 'KeyboardEvent' funcionar.

4. No momento {target} = EventTarget - genérico, pois o TS não sabe qual será o tipo do 'target' que será retornado. - uso o Type Guard 'if (target instanceof HTMLInputElement)' para verificar se o 'target' é do tipo 'HTMLInputElement' e poder utilizar os métodos de 'HTMLInputElement' no {target}

5. estou criando a interface Window com a propriedade'UserData: any' e não UserData: UserData e não sendo específico no que window pode receber, perdendo o controle e segurança dos tipos.... pq?

daria erro em 'window.UserData[target.id] = target.value' == TS não sabe o que é UserData[target.id] === posso adicionar outros campos inputs que não estão na interface UserData

6. localStorage.setItem('UserData', JSON.stringify(window.UserData));
a. window.UserData - não dá erro == UserData é do tipo any
b. Lembrar que localStorage só aceita strings == método JSON.stringify()

7.
**) a function 'handleLocalStorage' está funcionando, porém ela pode retornar erro se qualquer coisa q não seja um string estiver armazenada no localStorage - fazemos uma função simples validadora de JSON para nos certificar que o objeto retornado do localStorage tenha um aspecto JSON--> validJSON()



*/
