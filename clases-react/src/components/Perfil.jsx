export default function Perfil(props){
    const {nombre} = props;
    const {rol} = props;
    const {lenguajes} = props;
    return(
        <>
        <h1>Mi nombre es: {nombre}</h1>
        <h2>{rol}</h2>
        <h2>Lenguajes: {lenguajes [0]}, {lenguajes [1]}, {lenguajes [2]}</h2>
        </>
    )
}