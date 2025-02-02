// Exercise4.jsx
import React, { useState, useEffect } from 'react';

// Exercice 4 : Gestion Asynchrone et Pagination
// Implémentation de la pagination avec useState et useEffect
function Exercise4() {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const itemsPerPage = 5;

  // Simuler une API avec un tableau de produits
  const allProducts = Array.from({ length: 20 }, (_, i) => ({
    id: i + 1,
    name: `Produit ${i + 1}`,
  }));

  // Calculer les produits pour la page actuelle
  useEffect(() => {
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    setProducts(allProducts.slice(start, end));
  }, [page]);

  // Navigation entre les pages
  const handlePrevious = () => setPage((prevPage) => Math.max(prevPage - 1, 1));
  const handleNext = () => setPage((prevPage) => prevPage + 1);

  return (
    <div>
      <h2>Exercice 4 : Gestion Asynchrone et Pagination</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevious} disabled={page === 1}>
          Précédent
        </button>
        <button onClick={handleNext}>Suivant</button>
      </div>
    </div>
  );
}

export default Exercise4;