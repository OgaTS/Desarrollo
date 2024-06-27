import React, { useState } from 'react';

const SearchComponent = ({ data }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredData = data.filter(item => {
    return (
      item.nombre.toLowerCase().startsWith(searchTerm.toLowerCase()) ||
      item.edad.toString().includes(searchTerm)
    );
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by first letter"
        value={searchTerm}
        onChange={handleChange} 
      />
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
          </tr>
        </thead>
        <tbody>
          {
            filteredData.map(item => {
              const  {nombre, edad} = item
              return (
                <tr>
                  <td>{nombre}</td>
                  <td>{edad}</td>
                </tr>
              )
          
            })
          
          }
        </tbody>
      </table>
    </div>
  );
};

export default SearchComponent;
