export default function Perfil(props){
    const {nombre} = props;
    const {rol} = props;
    const {lenguajes} = props;
    return(
        <>
        <h1>Mi nombre es: {nombre}</h1>
        <h2>{rol}</h2>
        <h2>Lenguajes: {lenguajes.map((lenguaje, index) => (
            <div key={index}>
                <p>{lenguaje}</p>
            </div>
        ))}</h2>
        </>
    )
}