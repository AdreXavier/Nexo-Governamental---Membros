/** @type {import('tailwindcss').Config} */
module.exports = {
  // O array 'content' informa ao Tailwind onde procurar por classes CSS
  // para que ele possa purgar o CSS não utilizado na construção de produção.
  // Certifique-se de que ele inclua todos os seus arquivos de componente.
  content:,
  theme: {
    extend: {
      // Você pode estender o tema de tipografia aqui para personalização avançada.
      // Por exemplo, para mudar cores, tamanhos de fonte, etc.
      // typography: ({ theme }) => ({
      //   DEFAULT: {
      //     css: {
      //       color: theme('colors.gray.700'),
      //       a: {
      //         color: theme('colors.blue.600'),
      //         '&:hover': {
      //           color: theme('colors.blue.800'),
      //         },
      //       },
      //       h1: {
      //         color: theme('colors.indigo.900'),
      //         fontSize: theme('fontSize.4xl'),
      //       },
      //       'ul > li::before': {
      //         backgroundColor: theme('colors.purple.500'),
      //       },
      //     },
      //   },
      // }),
    },
  },
  plugins:,
};
