// Exercise1.jsx
import React, { useState, useEffect } from 'react';

// Exercice 1 : État et Effets
// Utilisation de useState et useEffect pour gérer la liste des produits
function Exercise1() {
  const [products, setProducts] = useState([]);

  // Simuler une API avec un tableau de produits
  const initialProducts = [
    { id: 1, name: "Produit 1" },
    { id: 2, name: "Produit 2" },
    { id: 3, name: "Produit 3" },
  ];

  // useEffect pour charger les données initiales au montage du composant
  useEffect(() => {
    console.log("Chargement des produits depuis l'API...");
    setProducts(initialProducts); // Simulation de chargement depuis une API
  }, []);

  // Fonction pour ajouter un produit
  const addProduct = () => {
    const newProduct = { id: products.length + 1, name: `Produit ${products.length + 1}` };
    setProducts((prevProducts) => [...prevProducts, newProduct]); // Mise à jour immédiate
  };

  return (
    <div>
      <h2>Exercice 1 : État et Effets</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
      <button onClick={addProduct}>Ajouter un Produit</button>
    </div>
  );
}

export default Exercise1;