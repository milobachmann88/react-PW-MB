import './App.css'
import Perfil from './components/Perfil';
import Persona from './components/Persona'
import TarjetaPelicula from './components/TarjetaPelicula';

const peliculas = [
  { id: 1, titulo: "Interstellar",     año: 2014, vista: false },
  { id: 2, titulo: "The Dark Knight",  año: 2008, vista: true  },
  { id: 3, titulo: "Inception",        año: 2010, vista: false },
  { id: 4, titulo: "Oppenheimer",      año: 2023, vista: true  },
];

function App() {
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
    </>
  );
}
export default App;