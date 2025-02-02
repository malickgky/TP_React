// LanguageContext.jsx
import React, { createContext, useState } from 'react';

// Création du contexte pour la langue
export const LanguageContext = createContext();

// Provider pour envelopper les composants enfants
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('fr'); // Langue par défaut : français

  // Traductions pour chaque langue
  const translations = {
    fr: { title: "Liste des Produits", add: "Ajouter un Produit" },
    en: { title: "Product List", add: "Add Product" },
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, translations }}>
      {children}
    </LanguageContext.Provider>
  );
};