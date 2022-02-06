import React, { useState } from "react";
import './nav.css'

export default function SearchBar({onSearch}) {
  const [city, setCity] = useState("");
  return (
    <form className="form-searchbar" onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }}>
        <div id='busqueda'>
      <input
      id='inputBuscar'
        type="text"
        placeholder="Ciudad..."
        value={city}
        onChange={e => setCity(e.target.value)}
      />
      <input id='botonEnviar'type="submit" value="Agregar" />
      </div>
    </form>
  );
}