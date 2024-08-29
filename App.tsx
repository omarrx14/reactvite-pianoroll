import './App.css'
import React from 'react';
import Grid from './components/Grid';

function App() {
  return (
    <div className="App">
      <h1>Piano Roll</h1>
      <Grid rows={12} columns={16} />
    </div>
  );
}

export default App;

