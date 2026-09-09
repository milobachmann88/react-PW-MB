import { useState } from 'react';

export default function Acordeon(props){
    const {titulo} = props;
    const {contenido} = props;
    const [abierto, setAbierto]= useState(false)
    function acordeon(){
        setAbierto(!abierto)
    }
    return(
        <>
        <div>
            <button onClick={acordeon}>
                {titulo} {abierto ? '▲' : '▼'}
            </button>
        {abierto && (
        <div>
          <p>{contenido}</p>
        </div>
      )}
        </div>
        </>
    )
}