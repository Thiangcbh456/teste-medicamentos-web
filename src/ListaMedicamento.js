import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ListaMedicamento({ medicamentos }) {
  const navigate = useNavigate();
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('Todos');

  const handleClick = (medicamento) => {
    setTimeout(() => {
      navigate(`/detalhes/${medicamento.id}`, { state: { medicamento } });
    }, 300);
  };

  // Extrai todas as categorias únicas
  const categorias = ['Todos', ...new Set(medicamentos.map(m => m.categoria))];

  // Filtra os medicamentos pela categoria selecionada
  const medicamentosFiltrados = categoriaSelecionada === 'Todos'
    ? medicamentos
    : medicamentos.filter(m => m.categoria === categoriaSelecionada);

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif' }}>
      <h1 style={{ textAlign: 'center', marginBottom: 20 }}>Medicamentos</h1>

      {/* Menu de categorias */}
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: 20, flexWrap: 'wrap', gap: 10 }}>
        {categorias.map(cat => (
          <button
            key={cat}
            onClick={() => setCategoriaSelecionada(cat)}
            style={{
              padding: '8px 16px',
              borderRadius: 8,
              border: categoriaSelecionada === cat ? '2px solid #27ae60' : '1px solid #ddd',
              backgroundColor: categoriaSelecionada === cat ? '#27ae60' : '#fff',
              color: categoriaSelecionada === cat ? '#fff' : '#333',
              cursor: 'pointer',
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Lista de medicamentos filtrados */}
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        {medicamentosFiltrados.map(medicamento => (
          <div
            key={medicamento.id}
            onClick={() => handleClick(medicamento)}
            style={{
              cursor: 'pointer',
              display: 'flex',
              flexDirection: 'row',
              border: '1px solid #ddd',
              borderRadius: 15,
              boxShadow: '0 3px 15px rgba(0,0,0,0.15)',
              padding: 15,
              marginBottom: 20,
              maxWidth: 450,
              transition: 'transform 0.2s',
            }}
            onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.02)'}
            onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            <img 
              src={medicamento.imageUrl} 
              alt={medicamento.nome} 
              style={{ width: 100, height: 100, borderRadius: 12, marginRight: 15 }} 
            />
            <div style={{ flex: 1 }}>
              <h3 style={{ margin: 0 }}>{medicamento.nome}</h3>
              <p style={{ margin: '5px 0', color: '#555' }}>{medicamento.descricao}</p>
              <p style={{ fontWeight: 'bold', fontSize: 18 }}>R$ {medicamento.preco.toFixed(2)}</p>
              <div style={{ marginTop: 5 }}>
                {medicamento.maisPesquisado && (
                  <span style={{ backgroundColor: '#f39c12', color: '#fff', padding: '3px 8px', borderRadius: 5, fontSize: 12, marginRight: 5 }}>
                    Mais Pesquisado
                  </span>
                )}
                {medicamento.topDoMomento && (
                  <span style={{ backgroundColor: '#27ae60', color: '#fff', padding: '3px 8px', borderRadius: 5, fontSize: 12 }}>
                    Top do Momento
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
