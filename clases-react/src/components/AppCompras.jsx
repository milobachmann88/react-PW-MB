import { useState } from 'react';

export default function AppCompras(){
    const [items, setItems] = useState([]);
    const [texto, setTexto] = useState('');
    const agregarItem = (e) => {
    const nuevoItem = {
        id: Date.now(),
        texto: texto.trim(),
        comprado: false,
    };
    setItems([...items, nuevoItem]); 
    setTexto(''); 
}



    function cambiarEstado(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, comprado: !item.comprado } : item
      )
    );
  }

  function eliminar(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  const faltantes = items.filter((item) => item.comprado === false).length;

  return (
    <>
    <input
          type="text"
          value={texto}
          onChange={(e) => setTexto(e.target.value)} />
          <button onClick={agregarItem}>Agregar</button>
          <p>Faltan comprar: {faltantes}</p>
    <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input 
              type="checkbox" 
              checked={item.comprado} 
              onChange={() => cambiarEstado(item.id)} 
            />

            <button onClick={() => eliminar(item.id)}>✕</button>
            {item.comprado ? <del>{item.texto}</del> : item.texto}

          </li>
        ))}
      </ul>
    </>     
  );
}