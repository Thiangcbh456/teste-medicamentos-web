import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FaInfoCircle, FaClipboardList, FaExclamationTriangle } from 'react-icons/fa';

export default function DetalheMedicamento() {
  const location = useLocation();
  const navigate = useNavigate();
  const medicamento = location.state?.medicamento;

  if (!medicamento) {
    return (
      <div style={{ padding: 20, textAlign: 'center' }}>
        <p>Medicamento não encontrado.</p>
        <button
          onClick={() => navigate('/')}
          style={{
            backgroundColor: '#3498db',
            color: '#fff',
            border: 'none',
            padding: '10px 20px',
            borderRadius: 8,
            cursor: 'pointer'
          }}
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div style={{ padding: 20, fontFamily: 'Arial, sans-serif', maxWidth: 800, margin: '0 auto' }}>
      <button
        onClick={() => navigate('/')}
        style={{
          marginBottom: 20,
          backgroundColor: '#3498db',
          color: '#fff',
          border: 'none',
          padding: '10px 20px',
          borderRadius: 8,
          cursor: 'pointer'
        }}
      >
        Voltar
      </button>

      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          gap: 20,
          border: '1px solid #ddd',
          borderRadius: 15,
          boxShadow: '0 3px 15px rgba(0,0,0,0.1)',
          padding: 20,
          backgroundColor: '#fff',
        }}
      >
        <img
          src={medicamento.imageUrl}
          alt={medicamento.nome}
          style={{
            width: 180,
            height: 180,
            borderRadius: 12,
            objectFit: 'cover',
          }}
        />
        <div style={{ flex: 1 }}>
          <h1 style={{ marginBottom: 10 }}>{medicamento.nome}</h1>
          <p style={{ color: '#555', marginBottom: 8 }}>{medicamento.descricao}</p>
          <p><strong>Categoria:</strong> {medicamento.categoria}</p>
          <p><strong>Forma:</strong> {medicamento.forma}</p>
          <p><strong>Dosagem:</strong> {medicamento.dosagem}</p>
          <p><strong>Preço:</strong> <span style={{ color: '#27ae60', fontWeight: 'bold' }}>R$ {medicamento.preco.toFixed(2)}</span></p>
        </div>
      </div>

      <div style={{ marginTop: 30 }}>
        <h2 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FaInfoCircle color="#3498db" /> Descrição Detalhada
        </h2>
        <p style={{ lineHeight: 1.6, color: '#444', whiteSpace: 'pre-line' }}>
          {medicamento.descricaoDetalhada}
        </p>
      </div>

      <div style={{ marginTop: 20, borderTop: '1px solid #eee', paddingTop: 15 }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FaClipboardList color="#2ecc71" /> Informações adicionais
        </h3>
        <ul style={{ lineHeight: 1.6, color: '#555' }}>
          <li><strong>Estoque disponível:</strong> {medicamento.estoque} unidades</li>
          <li><strong>Popularidade:</strong> {medicamento.popularidade || 'N/A'}</li>
          <li><strong>Mais pesquisado:</strong> {medicamento.maisPesquisado ? 'Sim' : 'Não'}</li>
          <li><strong>Top do momento:</strong> {medicamento.topDoMomento ? 'Sim' : 'Não'}</li>
        </ul>
      </div>

      <div style={{ marginTop: 25, borderTop: '1px solid #eee', paddingTop: 15 }}>
        <h3 style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <FaExclamationTriangle color="#e67e22" /> Aviso importante
        </h3>
        <p style={{ color: '#666', lineHeight: 1.6 }}>
          As informações aqui apresentadas têm caráter informativo e não substituem a prescrição médica.
          Consulte sempre um profissional de saúde antes de utilizar qualquer medicamento.
        </p>
      </div>
    </div>
  );
}
