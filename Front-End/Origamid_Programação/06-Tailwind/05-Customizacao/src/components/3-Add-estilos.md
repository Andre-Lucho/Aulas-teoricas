/*
@utility (v4)
------------------------
------------------------
Você pode adicionar qualquer estilo que não existe com o @utility


*/
@import 'tailwindcss';

@utility text-sombra {
  text-shadow: 1px 1px #000;
}

/*
.text-sombra {
  text-shadow: 1px 1px #000;
}
*/

@utility animate-delay-2 {
  animation-delay: 200ms;
}

@utility animate-delay-3 {
  animation-delay: 300ms;
}

/* 
Adicionar Estilo (v3)
------------------------
------------------------
Podemos criar um plugin para adicionarmos propriedes/estilos que não existem no Tailwind. */

/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin';

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {},
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities({
        '.text-shadow': {
          'text-shadow': '1px 1px currentColor',
        },
        '.text-shadow-lg': {
          'text-shadow': '2px 2px currentColor',
        },
      });
      addComponents({
        '.btn-ghost': {
          'border-radius': '9999px',
          padding: '.5rem 1rem',
          opacity: '.2',
          border: '2px solid #ccc',
        },
      });
    }),
  ],
};
