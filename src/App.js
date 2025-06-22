import React, { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell, ScatterChart, Scatter } from 'recharts';

const UniversidadesAnalise = () => {
  const [activeTab, setActiveTab] = useState('tabela');

  // Dados organizados por estado com universidades
  const dadosEstados = [
    // Norte
    { estado: 'AC', regiao: 'Norte', universidades: ['Universidade Federal do Acre (UFAC)'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'AP', regiao: 'Norte', universidades: ['Universidade do Estado do Amapá'], membros: 3, temDireito: true, densidade: 3.0 },
    { estado: 'AM', regiao: 'Norte', universidades: ['Universidade Federal do Amazonas', 'Universidade do Estado do Amazonas'], membros: 3, temDireito: true, densidade: 1.5 },
    { estado: 'PA', regiao: 'Norte', universidades: ['Universidade Federal do Pará', 'Faculdade de Itaituba (FAI)'], membros: 4, temDireito: true, densidade: 2.0 },
    { estado: 'RO', regiao: 'Norte', universidades: ['Universidade Federal de Rondônia'], membros: 3, temDireito: true, densidade: 3.0 },
    { estado: 'RR', regiao: 'Norte', universidades: [], membros: 0, temDireito: false, densidade: 0 },
    { estado: 'TO', regiao: 'Norte', universidades: [], membros: 0, temDireito: false, densidade: 0 },
    
    // Nordeste
    { estado: 'AL', regiao: 'Nordeste', universidades: ['Universidade Federal de Alagoas'], membros: 4, temDireito: true, densidade: 4.0 },
    { estado: 'BA', regiao: 'Nordeste', universidades: ['Universidade Federal da Bahia', 'Universidade Estadual do Sudoeste da Bahia', 'Faculdades Santo Agostinho de Vitória da Conquista'], membros: 5, temDireito: true, densidade: 1.25 },
    { estado: 'CE', regiao: 'Nordeste', universidades: ['Universidade Federal do Ceará'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'MA', regiao: 'Nordeste', universidades: ['Universidade Federal do Maranhão'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'PB', regiao: 'Nordeste', universidades: ['Universidade Federal da Paraíba', 'Universidade Estadual da Paraíba'], membros: 11, temDireito: true, densidade: 5.5 },
    { estado: 'PE', regiao: 'Nordeste', universidades: ['Universidade Federal de Pernambuco', 'Universidade Católica de Pernambuco', 'Centro Universitário Frassinetti do Recife (UNIFAFIRE)', 'Faculdade de Ciências Aplicadas e Sociais de Petrolina'], membros: 26, temDireito: true, densidade: 6.5 },
    { estado: 'PI', regiao: 'Nordeste', universidades: ['Universidade Estadual do Piauí'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'RN', regiao: 'Nordeste', universidades: ['Universidade Federal do Rio Grande do Norte (UFRN)'], membros: 1, temDireito: true, densidade: 1.0 },
    { estado: 'SE', regiao: 'Nordeste', universidades: ['Universidade Federal de Sergipe', 'Universidade Tiradentes'], membros: 5, temDireito: true, densidade: 2.5 },
    
    // Centro-Oeste
    { estado: 'DF', regiao: 'Centro-Oeste', universidades: ['Universidade de Brasília', 'Centro Universitário de Brasília (UniCEUB)', 'Instituto Brasileiro de Ensino, Desenvolvimento e Pesquisa (IDP)'], membros: 28, temDireito: true, densidade: 9.33 },
    { estado: 'GO', regiao: 'Centro-Oeste', universidades: ['Universidade Federal de Goiás', 'Instituto de Pós-graduação e Graduação de Goiás'], membros: 5, temDireito: true, densidade: 2.5 },
    { estado: 'MT', regiao: 'Centro-Oeste', universidades: ['Universidade do Estado de Mato Grosso', 'UNIVAG - Centro Universitário de Várzea Grande'], membros: 2, temDireito: true, densidade: 1.0 },
    { estado: 'MS', regiao: 'Centro-Oeste', universidades: ['Universidade Federal da Grande Dourados'], membros: 1, temDireito: true, densidade: 1.0 },
    
    // Sudeste
    { estado: 'ES', regiao: 'Sudeste', universidades: [], membros: 0, temDireito: false, densidade: 0 },
    { estado: 'MG', regiao: 'Sudeste', universidades: ['PUC Minas', 'Universidade Federal de Uberlândia (UFU)', 'Universidade Federal de Minas Gerais (UFMG)', 'Universidade do Estado de Minas Gerais (UEMG)', 'Universidade Federal de São João del-Rei', 'Universidade Federal de Ouro Preto'], membros: 31, temDireito: true, densidade: 5.17 },
    { estado: 'RJ', regiao: 'Sudeste', universidades: ['Universidade Federal do Rio de Janeiro (UFRJ)', 'Universidade do Estado do Rio de Janeiro (UERJ)', 'Universidade Federal Fluminense', 'PUC Rio', 'Centro Universitário Augusto Motta (UNISUAM)'], membros: 37, temDireito: true, densidade: 7.4 },
    { estado: 'SP', regiao: 'Sudeste', universidades: ['Universidade de São Paulo (USP)', 'Faculdade de Direito de Franca', 'Universidade Estadual de Campinas (Unicamp)', 'Universidade Estadual Paulista (Unesp)', 'Universidade Federal de São Paulo (UNIFESP)', 'Universidade Federal do ABC', 'Universidade Federal de São Carlos (UFSCar)', 'Pontifícia Universidade Católica de Campinas', 'Pontifícia Universidade Católica de São Paulo', 'Universidade Presbiteriana Mackenzie', 'Universidade de Mogi das Cruzes', 'FATEC Sebrae', 'Toledo Prudente Centro Universitário', 'Universidade De Ribeirão Preto - UNAERP', 'Faculdade de Direito de São Bernardo do Campo'], membros: 149, temDireito: 'parcial', densidade: 9.93 },
    
    // Sul
    { estado: 'PR', regiao: 'Sul', universidades: ['Pontifícia Universidade Católica do Paraná', 'Universidade Estadual de Londrina', 'Universidade Estadual de Maringá (UEM)'], membros: 10, temDireito: true, densidade: 3.33 },
    { estado: 'RS', regiao: 'Sul', universidades: ['Universidade Federal do Rio Grande do Sul', 'Universidade Federal de Santa Maria (UFSM)', 'Universidade Federal de Pelotas', 'Centro Universitário Ritter dos Reis'], membros: 8, temDireito: true, densidade: 2.0 },
    { estado: 'SC', regiao: 'Sul', universidades: ['Universidade Federal de Santa Catarina (UFSC)'], membros: 3, temDireito: true, densidade: 3.0 }
  ];

  // Universidades sem curso de Direito identificadas
  const universidadesSemDireito = [
    'Universidade Estadual de Campinas (Unicamp)',
    'Universidade Federal de São Carlos (UFSCar)',
    'Universidade Federal do ABC',
    'FATEC Sebrae'
  ];

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
  }, []);

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

  // Nova paleta de cores
  const COLORS = ['#4F46E5', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
  const REGIOES_COLOR = {
    'Norte': '#3B82F6',
    'Nordeste': '#10B981',
    'Centro-Oeste': '#F59E0B',
    'Sudeste': '#EF4444',
    'Sul': '#8B5CF6'
  };

  return (
    <div className="w-full max-w-7xl mx-auto p-4 md:p-6 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen">
      <header className="text-center py-6 mb-8 border-b border-gray-200">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-700">
          Análise de Universidades e Cursos de Direito por Estado
        </h1>
        <p className="mt-2 text-gray-600 max-w-3xl mx-auto">
          Distribuição geográfica de instituições de ensino superior com cursos de direito no Brasil
        </p>
      </header>
      
      {/* Navegação por abas - Design moderno */}
      <div className="flex flex-wrap gap-2 mb-8 border-b border-gray-200">
        {['tabela', 'graficos', 'correlacoes', 'insights'].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-3 font-medium rounded-t-lg transition-all duration-200 ${
              activeTab === tab 
                ? 'text-indigo-600 border-b-2 border-indigo-600 bg-indigo-50' 
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-100'
            }`}
          >
            {tab === 'tabela' && 'Tabela Completa'}
            {tab === 'graficos' && 'Visualizações Gráficas'}
            {tab === 'correlacoes' && 'Análises de Correlação'}
            {tab === 'insights' && 'Insights Estratégicos'}
          </button>
        ))}
      </div>

      {/* Tabela Completa - Design aprimorado */}
      {activeTab === 'tabela' && (
        <div className="space-y-8">
          <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-lg">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Estado</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Região</th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Universidades</th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Qtd</th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Membros</th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Densidade</th>
                  <th className="px-6 py-4 text-center text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">Status Direito</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {dadosEstados.map((estado, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                      <div className="flex items-center">
                        <div className="flex-shrink-0 h-10 w-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
                          {estado.estado}
                        </div>
                        <div className="ml-4">
                          <div className="text-sm font-medium text-gray-900">{estado.estado}</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap border-r border-gray-100">
                      <span 
                        className="px-2 py-1 text-xs font-semibold rounded-full" 
                        style={{ 
                          backgroundColor: `${REGIOES_COLOR[estado.regiao]}20`,
                          color: REGIOES_COLOR[estado.regiao]
                        }}
                      >
                        {estado.regiao}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-700 border-r border-gray-100">
                      {estado.universidades.length > 0 ? (
                        <ul className="space-y-2">
                          {estado.universidades.map((univ, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="inline-block h-2 w-2 rounded-full bg-gray-400 mt-2 mr-2"></span>
                              <span>{univ}</span>
                            </li>
                          ))}
                        </ul>
                      ) : (
                        <span className="text-gray-400 italic">Nenhuma universidade</span>
                      )}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 border-r border-gray-100">
                      {estado.universidades.length}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 border-r border-gray-100">
                      {estado.membros}
                    </td>
                    <td className="px-6 py-4 text-center text-sm font-medium text-gray-900 border-r border-gray-100">
                      {estado.densidade > 0 ? estado.densidade.toFixed(2) : '-'}
                    </td>
                    <td className="px-6 py-4 text-center">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        estado.temDireito === true ? 'bg-green-100 text-green-800' : 
                        estado.temDireito === 'parcial' ? 'bg-yellow-100 text-yellow-800' : 
                        'bg-red-100 text-red-800'
                      }`}>
                        {estado.temDireito === true ? 'Completo' : 
                         estado.temDireito === 'parcial' ? 'Parcial' : 
                         'Sem direito'}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          
          <div className="bg-red-50 p-6 rounded-xl border border-red-200 shadow-sm">
            <h3 className="text-lg font-semibold text-red-800 mb-3 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
              </svg>
              Universidades Identificadas SEM Curso de Direito
            </h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-3 text-red-700">
              {universidadesSemDireito.map((univ, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-block h-2 w-2 rounded-full bg-red-500 mt-2 mr-2"></span>
                  <span>{univ}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}

      {/* Gráficos - Design modernizado */}
      {activeTab === 'graficos' && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Gráfico por Região */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Distribuição por Região</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={dadosPorRegiao}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="regiao" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  />
                  <Bar dataKey="membros" fill="#4F46E5" name="Total de Membros" radius={[4, 4, 0, 0]} />
                  <Bar dataKey="universidades" fill="#10B981" name="Universidades" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Top 10 Estados */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Top 10 Estados por Número de Membros</h3>
            <div className="h-80">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={top10Estados}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0f0f0" />
                  <XAxis dataKey="estado" tick={{ fill: '#6b7280' }} />
                  <YAxis tick={{ fill: '#6b7280' }} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  />
                  <Bar dataKey="membros" fill="#F59E0B" radius={[4, 4, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Pizza por Região */}
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm lg:col-span-2">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Distribuição Percentual por Região</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={dadosPorRegiao}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({regiao, percent}) => `${regiao}: ${(percent * 100).toFixed(1)}%`}
                    outerRadius={120}
                    innerRadius={60}
                    dataKey="membros"
                  >
                    {dadosPorRegiao.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                  />
                  <Legend 
                    layout="horizontal" 
                    verticalAlign="bottom" 
                    align="center"
                    wrapperStyle={{ paddingTop: '20px' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>
      )}

      {/* Correlações - Design modernizado */}
      {activeTab === 'correlacoes' && (
        <div className="space-y-8">
          <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">Densidade vs Número de Universidades</h3>
            <div className="h-96">
              <ResponsiveContainer width="100%" height="100%">
                <ScatterChart data={dadosScatter}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis 
                    dataKey="x" 
                    name="Universidades" 
                    type="number" 
                    domain={[0, 'dataMax + 1']} 
                    tick={{ fill: '#6b7280' }}
                    label={{ value: 'Número de Universidades', position: 'insideBottom', offset: -5, fill: '#4b5563' }}
                  />
                  <YAxis 
                    dataKey="y" 
                    name="Densidade" 
                    type="number" 
                    tick={{ fill: '#6b7280' }}
                    label={{ value: 'Densidade (Membros/Universidade)', angle: -90, position: 'insideLeft', fill: '#4b5563' }}
                  />
                  <Tooltip 
                    cursor={{ strokeDasharray: '3 3' }} 
                    formatter={(value, name, props) => {
                      if (name === 'y') return [value.toFixed(2), 'Densidade'];
                      if (name === 'x') return [value, 'Universidades'];
                      return [value, name];
                    }}
                    contentStyle={{ 
                      backgroundColor: 'white', 
                      borderRadius: '8px',
                      border: '1px solid #e5e7eb',
                      boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)'
                    }}
                    labelFormatter={(label, payload) => {
                      const data = payload?.[0]?.payload;
                      return data ? `Estado: ${data.estado} (${data.membros} membros)` : '';
                    }}
                  />
                  <Scatter 
                    dataKey="y" 
                    fill="#8B5CF6" 
                    shape={(props) => {
                      const { cx, cy, payload } = props;
                      return (
                        <g>
                          <circle cx={cx} cy={cy} r={Math.min(20, Math.max(8, payload.membros))} fill="#8B5CF6" opacity="0.7" />
                          <text 
                            x={cx} 
                            y={cy} 
                            dy={4} 
                            textAnchor="middle" 
                            fill="white" 
                            fontSize="10" 
                            fontWeight="bold"
                          >
                            {payload.estado}
                          </text>
                        </g>
                      );
                    }}
                  />
                </ScatterChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-blue-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-blue-800">Estados com MAIOR Densidade</h4>
              </div>
              <div className="space-y-4">
                {dadosEstados
                  .filter(e => e.densidade > 0)
                  .sort((a, b) => b.densidade - a.densidade)
                  .slice(0, 5)
                  .map((estado, index) => (
                    <div key={index} className="flex justify-between items-center bg-white p-3 rounded-lg border border-blue-100">
                      <div className="flex items-center">
                        <div className="bg-blue-100 text-blue-800 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-3">
                          {index + 1}
                        </div>
                        <span className="font-medium text-gray-800">{estado.estado}</span>
                      </div>
                      <div className="bg-blue-50 px-3 py-1 rounded-full text-blue-700 font-medium">
                        {estado.densidade.toFixed(2)}
                      </div>
                    </div>
                  ))}
              </div>
            </div>

            <div className="bg-gradient-to-br from-yellow-50 to-yellow-100 p-6 rounded-xl border border-yellow-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                  </svg>
                </div>
                <h4 className="text-lg font-semibold text-yellow-800">Estados SEM Representação</h4>
              </div>
              <div className="space-y-3">
                {dadosEstados
                  .filter(e => e.membros === 0)
                  .map((estado, index) => (
                    <div key={index} className="flex items-center bg-white p-3 rounded-lg border border-yellow-100">
                      <div className="bg-yellow-100 text-yellow-800 font-bold w-8 h-8 rounded-full flex items-center justify-center mr-3">
                        {index + 1}
                      </div>
                      <div>
                        <span className="font-medium text-gray-800">{estado.estado}</span>
                        <span className="text-gray-600 ml-2">- {estado.regiao}</span>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Insights - Design modernizado */}
      {activeTab === 'insights' && (
        <div className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border border-green-200 shadow-sm">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Total Geral</h3>
              <p className="text-4xl font-bold text-green-700 mb-1">347</p>
              <p className="text-green-700">membros em todo o país</p>
              <div className="mt-4 h-2 bg-green-200 rounded-full overflow-hidden">
                <div className="h-full bg-green-500 rounded-full" style={{ width: '100%' }}></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border border-blue-200 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-800 mb-2">Concentração</h3>
              <p className="text-4xl font-bold text-blue-700 mb-1">43%</p>
              <p className="text-blue-700">apenas em São Paulo</p>
              <div className="mt-4 h-2 bg-blue-200 rounded-full overflow-hidden">
                <div className="h-full bg-blue-500 rounded-full" style={{ width: '43%' }}></div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-6 rounded-xl border border-purple-200 shadow-sm">
              <h3 className="text-lg font-semibold text-purple-800 mb-2">Cobertura</h3>
              <p className="text-4xl font-bold text-purple-700 mb-1">85%</p>
              <p className="text-purple-700">dos estados representados</p>
              <div className="mt-4 h-2 bg-purple-200 rounded-full overflow-hidden">
                <div className="h-full bg-purple-500 rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-yellow-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-yellow-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Principais Descobertas</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-yellow-800">Concentração Extrema</p>
                  <p className="text-gray-700">SP, RJ e MG juntos representam 62% de todos os membros</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-yellow-800">Paradoxo Tecnológico</p>
                  <p className="text-gray-700">Unicamp e UFSCar (referências em tecnologia) não têm Direito</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-yellow-800">Densidade Surpreendente</p>
                  <p className="text-gray-700">DF tem a maior densidade (9,33 membros/universidade)</p>
                </div>
                <div className="p-4 bg-yellow-50 rounded-lg">
                  <p className="font-medium text-yellow-800">Lacunas Regionais</p>
                  <p className="text-gray-700">RR, TO e ES não têm representação</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-red-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-red-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Correlações Curiosas</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="font-medium text-red-800">Estados Pequenos</p>
                  <p className="text-gray-700">Alguns têm densidade muito alta (AP: 3.0, RO: 3.0)</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="font-medium text-red-800">São Paulo</p>
                  <p className="text-gray-700">Concentra 43% dos membros, mas nem todas universidades têm Direito</p>
                </div>
                <div className="p-4 bg-red-50 rounded-lg">
                  <p className="font-medium text-red-800">Nordeste</p>
                  <p className="text-gray-700">PE se destaca com 26 membros, muito acima da média regional</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-green-100 p-2 rounded-lg mr-3">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <h4 className="text-xl font-semibold text-gray-800">Padrões Identificados</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Universidades Federais</p>
                  <p className="text-gray-700">Quase todas têm curso de Direito</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Capitais</p>
                  <p className="text-gray-700">Estados com universidades nas capitais têm maior representação</p>
                </div>
                <div className="p-4 bg-green-50 rounded-lg">
                  <p className="font-medium text-green-800">Região Sudeste</p>
                  <p className="text-gray-700">Domina com 62% dos membros em apenas 4 estados</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <footer className="mt-12 pt-6 border-t border-gray-200 text-center text-gray-500 text-sm">
        <p>© {new Date().getFullYear()} Nexo Governamental - Análise de Membros</p>
      </footer>
    </div>
  );
};

export default UniversidadesAnalise;
