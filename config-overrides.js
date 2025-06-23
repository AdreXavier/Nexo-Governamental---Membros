const { override, addBabelPlugin } = require('customize-cra');

module.exports = override(
  // Adiciona o plugin Babel para suportar decoradores
  // 'legacy: true' é importante para a compatibilidade com a sintaxe atual de decoradores
  addBabelPlugin(['@babel/plugin-proposal-decorators', { legacy: true }])
);
