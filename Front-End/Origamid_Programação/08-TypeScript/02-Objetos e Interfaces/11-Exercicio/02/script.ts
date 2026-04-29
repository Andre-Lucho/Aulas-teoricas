/* 
1. Crie uma interface UserData para o formulário abaixo
2. Crie uma variável global UserData no window, ela será um objeto qualquer
3. Adicione um evento de keyup ao formulário
4. Quando o evento ocorrer adicione a {[id]: value} ao UserData
5. Salve UserData no localStorage
6. Crie uma User Type Guard, para verificar se o valor de localStorage é compatível com UserData
7. Ao refresh da página, preencha os valores de localStorage (caso seja UserData) no formulário e em window.UserData */

const form1 = document.querySelector<HTMLElement>('#form');

// pq .? --> como estou pegando informações do localStorage, os dados(todos os campos) podem não ter sido totlamente preenchido
interface UserData1 {
    nome?: string;
    email?: string;
    cpf?: string;
}

interface Window {
    UserData: any;
}

window.UserData = {};

// User TypeGuard para verificar se window.UserData capturado em handleForm1 é do tipo da interface UserData1
function isUserData1(obj: unknown): obj is UserData1 {
    if (
        obj &&
        typeof obj === 'object' &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)
    ) {
        return true;
    } else {
        return false;
    }
}

function validJSON1(str: string) {
    try {
        JSON.parse(str);
    } catch (e) {
        console.log(`Erro: ${e}`);
        return false;
    }
    return true;
}

function handleLocalStorage1() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validJSON1(localUserData)) {
        const userData = JSON.parse(localUserData);

        if (isUserData1(userData)) {
            Object.entries(userData).forEach(([key, value]) => {
                const input = document.getElementById(key);
                if (input instanceof HTMLInputElement) {
                    input.value = value;
                    window.UserData[key] = value;
                }
            });
        }
    }
}
// JSON.parse -- temos que garantir q o em localStorage temos um JSON válido
// Object.entries() -- retorna uma array de arrays: [[]]
// .forEach(([key, value]) -- desestruturando a array de arrays

function handleForm1({ target }: KeyboardEvent) {
    if (target instanceof HTMLInputElement) {
        console.log(target.id);
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
        // console.log(window.UserData)
    }
}

form1?.addEventListener('keyup', handleForm1);
// evento está no #form1 (KeyboardEvent)--> o elem HTML seria o currentTarget;
// estou buscando input dentro do form --> target

handleLocalStorage1();
