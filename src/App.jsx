// App.jsx
import React from 'react';
import Exercise1 from './components/Exercise1';
import Exercise2 from './components/Exercise2';
import Exercise3 from './components/Exercise3';
import Exercise4 from './components/Exercise4';

// Composant principal qui affiche tous les exercices
function App() {
  return (
    <div>
      <h1>TP React Hooks</h1>
      <Exercise1 />
      <hr />
      <Exercise2 />
      <hr />
      <Exercise3 />
      <hr />
      <Exercise4 />
    </div>
  );
}

export default App;