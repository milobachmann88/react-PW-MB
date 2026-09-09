import { useState } from 'react';
import './App.css'
import Perfil from './components/Perfil';
import Persona from './components/Persona'
import TarjetaPelicula from './components/TarjetaPelicula';
import Acordeon from './components/Acordeon';
import Buscador from './components/Buscador';
import AppCompras from './components/AppCompras';

const peliculas = [
  { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
  { id: 3, titulo: "Inception",        año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
];

function App() {
  const [cuenta, setCuenta]= useState(0)
  return(
    <>
    <h1>Ejercicio 1</h1>
    <Persona nombre= "Milo"/>
    <p>Estudiante</p>
    <ul>
      <li>Español</li>
      <li>Ingles</li>
      <li>Aleman</li>
    </ul>
   
    <h1>Ejercicio 2</h1>
    <Perfil nombre="Ana" rol="Desarrolladora" lenguajes={["JavaScript", "React", "CSS"]} />
   
    <h1>Ejercicio 3</h1>
    {peliculas.map((pelicula)=>(<TarjetaPelicula 
    key={pelicula.id} 
    titulo={pelicula.titulo}
    año={pelicula.año}
    vista={pelicula.vista}/>))}

    <h1>Ejercicio 4</h1>
    <h2>Contador: </h2>
    <div>
      <p>{cuenta}</p>
      <button onClick={ () => setCuenta (cuenta + 1) }>Sumar</button>
      <button onClick={ () => cuenta  > 0 ? setCuenta (cuenta - 1) : (cuenta)}>Restar</button>
      <button onClick={ () => setCuenta(0) }>Reiniciar</button>
    </div>

    <h1>Ejercicio 5</h1>
    <Acordeon titulo="Hello Kity" contenido= "Gato"/>
    
    <h1>Ejercicio 6</h1>
    <Buscador/>
    
    <h1>Ejercicio 7</h1>
    <AppCompras/>
    </>
    
  );
}
export default App;