import styles from './Plants.module.css'
import React, { useState } from 'react';

function PlantaMarinha({ nome, imagem }) {
  return (
    <div className="planta">
      <img src={imagem} alt={nome} />
      <p>{nome}</p>
    </div>
  );
}

function App() {
  const [plantas, setPlantas] = useState([
    { nome: '', imagem: '' },
    { nome: '', imagem: '' },
    { nome: '', imagem: '' },
    // Adicionar nomes das plantas e imagens
  ]);

  return (
    <div>
      <h1>Plantas Marinhas</h1>
      <div className="plantas-container">
        {plantas.map(planta => (
          <PlantaMarinha key={planta.nome} {...planta} />
        ))}
      </div>
    </div>
  );
}

export default App;