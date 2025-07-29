import { creatRoot } from 'react-dom/client';
import { App } from './App';

const container = document.getElementById('root');

const root = creatRoot(container);

root.render(<App />);
