export default function TarjetaPelicula({titulo, año, vista}){

    function fueVista(){
        if (vista == true) {return "✓ "}
        else {return ""}
    }

    return(
        <>
        <h2>Título: {titulo} {fueVista()}</h2>
        <h2>Año: {año}</h2>
        </>
    )
}