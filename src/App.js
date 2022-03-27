import React, { useState } from 'react';
import './App.css';
import Nav from './components/nav'
import Footer from './components/footer'
import Ciudad from './components/Ciudad'
import Cards from './components/cards'


import { BrowserRouter, Route } from 'react-router-dom';

//const apiKey = process.env.REACT_APP_apiKey
const apiKey = 'b8fdbd0442d2af5ea3a745d022020ea2'

function App() {
  const [cities, setCities] = useState([]);
  function onClose(id) {
    setCities(oldCities => oldCities.filter(c => c.id !== id));
  }
  function onSearch(ciudad) {
    //Llamado a la API del clima
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${apiKey}`)
      .then(r => r.json())
      .then((recurso) => {
        if(recurso.main !== undefined){
          const ciudad = {
            min: Math.round(recurso.main.temp_min),
            max: Math.round(recurso.main.temp_max),
            img: recurso.weather[0].icon,
            id: recurso.id,
            wind: recurso.wind.speed,
            temp: recurso.main.temp,
            name: recurso.name,
            weather: recurso.weather[0].main,
            clouds: recurso.clouds.all,
            latitud: recurso.coord.lat,
            longitud: recurso.coord.lon
          };
          setCities(oldCities => [...oldCities, ciudad]);
        } else {
          alert("Ciudad no encontrada");
        }
      });
  }
  
  function onFilter(ciudadId) {
    let ciudad = cities.filter(c => c.id === parseInt(ciudadId));
    if(ciudad.length > 0) {
        return ciudad[0];
    } else {
        return null;
    }
  }
  return (
   <BrowserRouter>       
      <Route
             path='/'
            render={() => <Nav onSearch={onSearch} />}
            />
            <Route exact path='/' render={() =>  <Cards cities={cities} onClose={onClose} />} />
           
            <Route 
              exact path='/ciudad/:ciudadId'
              render={({match})=> <Ciudad city ={onFilter(match.params.ciudadId)}/>}
            />      
      
        <Footer/>
  </BrowserRouter>
  );
}

export default App;
