// Exercise2.jsx
import React, { useContext } from 'react';
import { LanguageProvider, LanguageContext } from '../contexts/LanguageContext';

// Exercice 2 : Context et Internationalisation
// Utilisation de useContext pour partager les traductions entre les composants
function ProductList() {
  const { language, translations } = useContext(LanguageContext);

  return (
    <div>
      <h2>Exercice 2 : Context et Internationalisation</h2>
      <h3>{translations[language].title}</h3>
      <button>{translations[language].add}</button>
    </div>
  );
}

function Exercise2() {
  return (
    <LanguageProvider>
      <ProductList />
      <div>
        <button onClick={() => window.languageContext.setLanguage('fr')}>Français</button>
        <button onClick={() => window.languageContext.setLanguage('en')}>English</button>
      </div>
    </LanguageProvider>
  );
}

export default Exercise2;