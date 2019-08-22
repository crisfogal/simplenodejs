/*
Formas de integrar un Script a HTML
1) Archivo Externo: <script src="js/archivo.js"></script>
2) Bloque Interno: <script></script>
3) Atributo HTML: onclick, onchange, onblur...
*/
window.onload = function () {
    //window se usa para chequear que este todo cargado en el navegador

    let mensaje = new XMLHttpRequest()
    //creamos un objeto y lo llamamos mensaje. luego configuramos
    //este mensaje al ser xml y todo eso ya tiene cosas incluidas
    mensaje.open("GET", "https://api.sheety.co/5c34824b-0097-4e84-b841-e38fb0fbe1cd")

    mensaje.send()

    mensaje.onload = function () {

        console.log(mensaje.response)

        noticias = JSON.parse(mensaje.response)

        //JSON.parse es inflar al enano 

        //return noticias
    }

}