import './App.css'
import Perfil from './components/Perfil';
import Persona from './components/Persona'

function App() {
  return(
    <>
    <h1>Ejercicio 1</h1>
    <Persona nombre= "Milo"/>
    <p>Estudiante</p>
    <ul>Español</ul>
    <ul>Ingles</ul>
    <ul>Aleman</ul>
    <h1>Ejercicio 2</h1>
    <Perfil nombre= "Pepe" rol= "Artista" lenguajes= "Chino"/>
    </>
  );
}
export default App;