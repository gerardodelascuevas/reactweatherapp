import React from 'react'
import screen from './img/Screen-Shot.png'
import SearchBar from './searchBar.jsx';
import './nav.css';
import { Link } from 'react-router-dom';


function Nav({onSearch}) {
  return (
    <nav id="nav">
      <Link to='/'> {/* AQUI VA EL HIPER VINCULO */}       
          <img id="img-react" src={screen} width="30" height="30"  alt="" />          
      </Link>      
       <h1 id="titulo">
          React Weather App
        </h1>
        <SearchBar
          onSearch={onSearch}
        />
    </nav>
  );
};

export default Nav;
