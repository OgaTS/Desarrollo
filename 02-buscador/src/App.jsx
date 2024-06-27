import React from 'react';
import SearchComponent from './componente/SearchComponent.jsx'

const data = [
  {
    id: '1',
    nombre: 'Alejandro',
    edad: '18',
  },
  {
    id: '2',
    nombre: 'Roberto',
    edad: '29',
  },
  {
    id: '3',
    nombre: 'Jorge',
    edad: '25',
  },
  {
    id: '4',
    nombre: 'Veronica',
    edad: '38',
  }
]
const App = () => {
  return (
    <div className="App">
      <h1>Buscador</h1>
      <SearchComponent data={data} />
    </div>
  );
};

export default App;
