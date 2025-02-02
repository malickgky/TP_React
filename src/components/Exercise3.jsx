// Exercise3.jsx
import React from 'react';
import { useFetch } from '../hooks/useFetch';

// Exercice 3 : Hooks Personnalisés
// Utilisation du hook personnalisé useFetch pour charger des données depuis une API
function Exercise3() {
  const { data, loading, error } = useFetch('https://api.example.com/products');

  if (loading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  return (
    <div>
      <h2>Exercice 3 : Hooks Personnalisés</h2>
      <ul>
        {data.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Exercise3;