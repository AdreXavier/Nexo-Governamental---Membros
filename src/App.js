import React, { useState } from 'react';
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, ScatterChart, Scatter
} from 'recharts';

const UniversidadesAnalise = () => {
  const = useState('tabela');
  const = useState(`# Análise das Universidades Brasileiras

## Resumo Executivo

Este estudo revela **importantes disparidades regionais** na distribuição de universidades e cursos de Direito pelo Brasil. Os dados mostram uma *concentração significativa* na região Sudeste, especialmente em São Paulo.

## Principais Descobertas

### Concentração Geográfica
- **São Paulo** concentra 149 membros (43% do total nacional)
- **Região Sudeste** possui 217 membros (62% do total)
- Apenas **3 estados** (SP, RJ, MG) representam mais da metade dos membros

### Estados sem Representação
Os seguintes estados não possuem membros:
- Roraima (RR)
- Tocantins (TO)
- Espírito Santo (ES)

### Densidade Universitária
- **Distrito Federal** apresenta a maior densidade: 9,33 membros por universidade
- Estados menores como Amapá e Rondônia também têm alta densidade
- São Paulo, apesar do volume, tem densidade moderada (9,93)

## Observações Importantes

### Universidades Tecnológicas
Algumas universidades de excelência em áreas tecnológicas **não oferecem curso de Direito**:
- Unicamp
- UFSCar
- UFABC
- FATEC Sebrae

### Padrão Regional
- **Norte**: Baixa representação, exceto Pará
- **Nordeste**: Pernambuco se destaca com 26 membros
- **Centro-Oeste**: Brasília domina a região
- **Sul**: Distribuição mais equilibrada

## Conclusões

Os dados sugerem que existe uma **oportunidade de expansão** significativa nas regiões Norte e Nordeste, bem como a necessidade de avaliar a inclusão de cursos de Direito em universidades tecnológicas de prestígio.

---

*Relatório elaborado com base nos dados de 347 membros distribuídos em 27 estados brasileiros.*`);

  // Dados organizados por estado com universidades
  const dadosEstados = [
    // Norte
    { estado: 'AC', regiao: 'Norte', universidades: ['Universidade Federal do Acre (UFAC)'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'AP', regiao: 'Norte', universidades: ['Universidade do Estado do Amapá'], membros: 3, temDireito: true, densidade: 3.0 },
    { estado: 'AM', regiao: 'Norte', universidades: ['Universidade Federal do Amazonas', 'Universidade do Estado do Amazonas'], membros: 3, temDireito: true, densidade: 1.5 },
    { estado: 'PA', regiao: 'Norte', universidades: ['Universidade Federal do Pará', 'Faculdade de Itaituba (FAI)'], membros: 4, temDireito: true, densidade: 2.0 },
    { estado: 'RO', regiao: 'Norte', universidades:, membros: 3, temDireito: true, densidade: 3.0 },
    { estado: 'RR', regiao: 'Norte', universidades:, membros: 0, temDireito: false, densidade: 0 },
    { estado: 'TO', regiao: 'Norte', universidades:, membros: 0, temDireito: false, densidade: 0 },
    
    // Nordeste
    { estado: 'AL', regiao: 'Nordeste', universidades: ['Universidade Federal de Alagoas'], membros: 4, temDireito: true, densidade: 4.0 },
    { estado: 'BA', regiao: 'Nordeste', universidades:, membros: 5, temDireito: true, densidade: 1.25 },
    { estado: 'CE', regiao: 'Nordeste', universidades: ['Universidade Federal do Ceará'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'MA', regiao: 'Nordeste', universidades: ['Universidade Federal do Maranhão'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'PB', regiao: 'Nordeste', universidades: ['Universidade Federal da Paraíba', 'Universidade Estadual da Paraíba'], membros: 11, temDireito: true, densidade: 5.5 },
    { estado: 'PE', regiao: 'Nordeste', universidades:, membros: 26, temDireito: true, densidade: 6.5 },
    { estado: 'PI', regiao: 'Nordeste', universidades: ['Universidade Estadual do Piauí'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'RN', regiao: 'Nordeste', universidades:, membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'SE', regiao: 'Nordeste', universidades:, membros: 5, temDireito: true, densidade: 2.5 },
    
    // Centro-Oeste
    { estado: 'DF', regiao: 'Centro-Oeste', universidades:, membros: 28, temDireito: true, densidade: 9.33 },
    { estado: 'GO', regiao: 'Centro-Oeste', universidades: ['Universidade Federal de Goiás', 'Instituto de Pós-graduação e Graduação de Goiás'], membros: 5, temDireito: true, densidade: 2.5 },
    { estado: 'MT', regiao: 'Centro-Oeste', universidades: ['Universidade do Estado de Mato Grosso', 'UNIVAG - Centro Universitário de Várzea Grande'], membros: 2, temDireito: true, densidade: 1.0 },
    { estado: 'MS', regiao: 'Centro-Oeste', universidades:, membros: 1, temDireito: true, densidade: 1.0 },
    
    // Sudeste
    { estado: 'ES', regiao: 'Sudeste', universidades:, membros: 0, temDireito: false, densidade: 0 },
    { estado: 'MG', regiao: 'Sudeste', universidades:, membros: 31, temDireito: true, densidade: 5.17 },
    { estado: 'RJ', regiao: 'Sudeste', universidades:, membros: 37, temDireito: true, densidade: 7.4 },
    { estado: 'SP', regiao: 'Sudeste', universidades:, membros: 149, temDireito: 'parcial', densidade: 9.93 },
    
    // Sul
    { estado: 'PR', regiao: 'Sul', universidades: ['Pontifícia Universidade Católica do Paraná', 'Universidade Estadual de Londrina', 'Universidade Estadual de Maringá (UEM)'], membros: 10, temDireito: true, densidade: 3.33 },
    { estado: 'RS', regiao: 'Sul', universidades:, membros: 8, temDireito: true, densidade: 2.0 },
    { estado: 'SC', regiao: 'Sul', universidades:, membros: 3, temDireito: true, densidade: 3.0 }
  ];

  // Universidades sem curso de Direito identificadas
  const universidadesSemDireito =;

  // Dados para gráficos
  const dadosPorRegiao = dadosEstados.reduce((acc, curr) => {
    const existing = acc.find(item => item.regiao === curr.regiao);
    if (existing) {
      existing.membros += curr.membros;
      existing.universidades += curr.universidades.length;
    } else {
      acc.push({
        regiao: curr.regiao,
        membros: curr.membros,
        universidades: curr.universidades.length
      });
    }
    return acc;
  },);

  const top10Estados = dadosEstados
   .filter(estado => estado.membros > 0)
   .sort((a, b) => b.membros - a.membros)
   .slice(0, 10);

  // Dados para scatter plot
  const dadosScatter = dadosEstados
   .filter(d => d.membros > 0)
   .map(d => ({
      estado: d.estado,
      x: d.universidades.length,
      y: d.densidade,
      membros: d.membros
    }));

  const COLORS = ['#8884d8', '#82ca9d', '#ffc658', '#ff7c7c', '#8dd1e1'];

  // Componente para renderizar markdown básico
  const MarkdownRenderer = ({ children }) => {
    const renderMarkdown = (text) => {
      return text
       .split('\n')
       .map((line, index) => {
          // Headers
          if (line.startsWith('# ')) {
            return <h1 key={index} className="text-3xl font-bold mb-4 text-gray-800">{line.slice(2)}</h1>;
          }
          if (line.startsWith('## ')) {
            return <h2 key={index} className="text-2xl font-semibold mb-3 text-gray-700">{line.slice(3)}</h2>;
          }
          if (line.startsWith('### ')) {
            return <h3 key={index} className="text-xl font-medium mb-2 text-gray-600">{line.slice(4)}</h3>;
          }
          
          // Separador
          if (line.startsWith('---')) {
            return <hr key={index} className="my-6 border-gray-300" />;
          }
          
          // Lista
          if (line.startsWith('- ')) {
            const text = line.slice(2);
            return (
              <li key={index} className="mb-1 text-gray-700">
                <span dangerouslySetInnerHTML={{
                  __html: text
                   .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                   .replace(/\*(.*?)\*/g, '<em>$1</em>')
                }} />
              </li>
            );
          }
          
          // Parágrafo vazio
          if (line.trim() === '') {
            return <div key={index} className="mb-4"></div>;
          }
          
          // Parágrafo normal
          return (
            <p key={index} className="mb-3 text-gray-700 leading-relaxed">
              <span dangerouslySetInnerHTML={{
                __html: line
                 .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
                 .replace(/\*(.*?)\*/g, '<em>$1</em>')
              }} />
            </p>
          );
        });
    };

    // A classe 'prose' é a chave para o plugin Typography.
    // Você pode experimentar modificadores como 'prose-lg', 'prose-xl' para tamanhos,
    // ou 'dark:prose-invert' para suporte a modo escuro.
    return <div className="prose max-w-none">{renderMarkdown(children)}</div>;
  };

  return (
    <div className="w-full max-w-6xl mx-auto p-6 bg-white">
      <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
        Análise de Universidades e Cursos de Direito por Estado
      </h1>

      {/* Abas de navegação */}
      <div className="flex flex-wrap gap-2 mb-6 border-b">
        {['tabela', 'graficos', 'correlacoes', 'insights', 'texto'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 rounded-t-lg font-medium ${
              activeTab === tab 
               ? 'bg-blue-500 text-white border-b-2 border-blue-500' 
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab === 'tabela' && 'Tabela Completa'}
            {tab === 'graficos' && 'Gráficos'}
            {tab === 'correlacoes' && 'Correlações'}
            {tab === 'insights' && 'Insights'}
            {tab === 'texto' && 'Relatório Completo'}
          </button>
        ))}
      </div>

      {/* Tabela Completa */}
      {activeTab === 'tabela' && (
        <div className="space-y-6">
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-gray-100">
                  <th className="border border-gray-300 px-4 py-2 text-left">Estado</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Região</th>
                  <th className="border border-gray-300 px-4 py-2 text-left">Universidades</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Qtd</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Membros</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Densidade</th>
                  <th className="border border-gray-300 px-4 py-2 text-center">Status Direito</th>
                </tr>
              </thead>
              <tbody>
                {dadosEstados.map((estado, index) => (
                  <tr key={index} className={index % 2 === 0? 'bg-gray-50' : 'bg-white'}>
                    <td className="border border-gray-300 px-4 py-2 font-medium">{estado.estado}</td>
                    <td className="border border-gray-300 px-4 py-2">{estado.regiao}</td>
                    <td className="border border-gray-300 px-4 py-2 text-sm">
                      {estado.universidades.length > 0? (
                        <ul className="space-y-1">
                          {estado.universidades.map((univ, idx) => (
                            <li key={idx} className="text-gray-700">• {univ}</li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-gray-400 italic">Nenhuma universidade</span>
                      )}
                    </td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{estado.universidades.length}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{estado.membros}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">{estado.densidade.toFixed(2)}</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">
                      <span className={`px-2 py-1 rounded text-xs ${
                        estado.temDireito === true? 'bg-green-100 text-green-800' : 
                        estado.temDireito === 'parcial'? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {estado.temDireito === true? 'Todas têm' : 
                         estado.temDireito === 'parcial'? 'Parcial' : 
                         'Não têm'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-red-50 p-4 rounded-lg">
            <h3 className="text-lg font-semibold text-red-800 mb-2">
              Universidades Identificadas SEM Curso de Direito:
            </h3>
            <ul className="list-disc list-inside text-red-700 space-y-1">
              {universidadesSemDireito.map((univ, index) => (
                <li key={index}>{univ}</li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Gráficos */}
      {activeTab === 'graficos' && (
        <div className="space-y-8">
          {/* Gráfico por Região */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Distribuição por Região</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={dadosPorRegiao}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="regiao" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="membros" fill="#8884d8" name="Total de Membros" />
                <Bar dataKey="universidades" fill="#82ca9d" name="Universidades" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Top 10 Estados */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Top 10 Estados por Número de Membros</h3>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={top10Estados}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="estado" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="membros" fill="#ff7c7c" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Pizza por Região */}
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Distribuição Percentual por Região</h3>
            <ResponsiveContainer width="100%" height={300}>
              <PieChart>
                <Pie
                  data={dadosPorRegiao}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({regiao, percent}) => `${regiao}: ${(percent * 100).toFixed(1)}%`}
                  outerRadius={80}
                  fill="#8884d8"
                  dataKey="membros"
                >
                  {dadosPorRegiao.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
      )}

      {/* Correlações */}
      {activeTab === 'correlacoes' && (
        <div className="space-y-6">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold mb-4">Densidade vs Número de Universidades</h3>
            <ResponsiveContainer width="100%" height={400}>
              <ScatterChart data={dadosScatter}>
                <CartesianGrid />
                <XAxis dataKey="x" name="Universidades" type="number" domain={[0, 'dataMax + 1']} />
                <YAxis dataKey="y" name="Densidade" type="number" />
                <Tooltip 
                  cursor={{ strokeDasharray: '3 3' }} 
                  formatter={(value, name, props) => {
                    if (name === 'y') return;
                    if (name === 'x') return [value, 'Universidades'];
                    return [value, name];
                  }}
                  labelFormatter={(label, payload) => {
                    const data = payload?.?.payload;
                    return data? `Estado: ${data.estado} (${data.membros} membros)` : '';
                  }}
                />
                <Scatter dataKey="y" fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-blue-800 mb-3">Estados com MAIOR Densidade</h4>
              <div className="space-y-2">
                {dadosEstados
                 .filter(e => e.densidade > 0)
                 .sort((a, b) => b.densidade - a.densidade)
                 .slice(0, 5)
                 .map((estado, index) => (
                    <div key={index} className="flex justify-between">
                      <span className="font-medium">{estado.estado}</span>
                      <span className="text-blue-600">{estado.densidade.toFixed(2)}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="text-lg font-semibold text-yellow-800 mb-3">Estados SEM Representação</h4>
              <div className="space-y-2">
                {dadosEstados
                 .filter(e => e.membros === 0)
                 .map((estado, index) => (
                    <div key={index} className="text-yellow-700">
                      <span className="font-medium">{estado.estado}</span> - {estado.regiao}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Insights */}
      {activeTab === 'insights' && (
        <div className="space-y-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-green-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Total Geral</h3>
              <p className="text-3xl font-bold text-green-600">347</p>
              <p className="text-green-700">membros em todo o país</p>
            </div>
            
            <div className="bg-blue-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Concentração</h3>
              <p className="text-3xl font-bold text-blue-600">43%</p>
              <p className="text-blue-700">apenas em São Paulo</p>
            </div>
            
            <div className="bg-purple-100 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Cobertura</h3>
              <p className="text-3xl font-bold text-purple-600">85%</p>
              <p className="text-purple-700">dos estados representados</p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
              <h4 className="text-lg font-semibold text-yellow-800">🎯 Principais Descobertas:</h4>
              <ul className="mt-2 space-y-2 text-yellow-700">
                <li><strong>Concentração Extrema:</strong> SP, RJ e MG juntos representam 62% de todos os membros</li>
                <li><strong>Paradoxo Tecnológico:</strong> Unicamp e UFSCar (referências em tecnologia) não têm Direito</li>
                <li><strong>Densidade Surpreendente:</strong> DF tem a maior densidade (9,33 membros/universidade)</li>
                <li><strong>Lacunas Regionais:</strong> RR, TO e ES não têm representação</li>
              </ul>
            </div>

            <div className="bg-red-50 border-l-4 border-red-400 p-4">
              <h4 className="text-lg font-semibold text-red-800">⚠️ Correlações Curiosas:</h4>
              <ul className="mt-2 space-y-2 text-red-700">
                <li><strong>Estados Pequenos:</strong> Alguns têm densidade muito alta (AP: 3.0, RO: 3.0)</li>
                <li><strong>São Paulo:</strong> Concentra 43% dos membros, mas nem todas universidades têm Direito</li>
                <li><strong>Nordeste:</strong> PE se destaca com 26 membros, muito acima da média regional</li>
              </ul>
            </div>

            <div className="bg-green-50 border-l-4 border-green-400 p-4">
              <h4 className="text-lg font-semibold text-green-800">📊 Padrões Identificados:</h4>
              <ul className="mt-2 space-y-2 text-green-700">
                <li><strong>Universidades Federais:</strong> Quase todas têm curso de Direito</li>
                <li><strong>Capitais:</strong> Estados com universidades nas capitais têm maior representação</li>
                <li><strong>Região Sudeste:</strong> Domina com 62% dos membros em apenas 4 estados</li>
              </ul>
            </div>
          </div>
        </div>
      )}

      {/* Relatório Completo (Markdown) */}
      {activeTab === 'texto' && (
        <div className="p-4 bg-gray-50 rounded-lg">
          <MarkdownRenderer>{textoPersonalizado}</MarkdownRenderer>
        </div>
      )}
    </div>
  );
};

export default UniversidadesAnalise;
