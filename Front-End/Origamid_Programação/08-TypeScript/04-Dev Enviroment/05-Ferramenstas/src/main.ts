import _ from 'lodash';
import ClipboardJS from 'clipboard';

const button = new ClipboardJS('button');

const handleCopy = (e: ClipboardJS.Event) => {
  console.log('Copiado!', e);
};
// ClipboardJS.Event --> interface do método 'on()'

// e --> retorna um objeto da API

button.on('success', handleCopy);

interface Produto {
  nome: string;
}

const livro: Produto = {
  nome: 'Algum nome',
};

_.difference([1, 2, 3], [1, 2]);
