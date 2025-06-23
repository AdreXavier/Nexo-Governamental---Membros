/* As diretivas @tailwind são fundamentais para injetar os estilos do Tailwind */
@tailwind base;
@tailwind components;
@tailwind utilities;

/*
  Nota: Se você estiver usando Tailwind CSS v4 ou posterior,
  a configuração do plugin pode ser feita diretamente aqui com `@plugin`.
  No entanto, para a maioria dos projetos React existentes (Tailwind v3),
  a configuração via `tailwind.config.js` é a correta.
  Se você estiver na v4, você poderia ter:
  @plugin '@tailwindcss/typography';
*/

/* Seus estilos CSS personalizados podem vir abaixo */
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
