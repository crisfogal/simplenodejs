
window.onload = function() {

    peticionAPI()

}
/*
document.querySelector("#tabla-posiciones").onclick = function(){
    peticionAPI()
}
*/

function peticionAPI(){

    let mensaje = new XMLHttpRequest()

    mensaje.open("GET","https://api.sheety.co/5c34824b-0097-4e84-b841-e38fb0fbe1cd");
    
    mensaje.send()
    
    mensaje.onload = function() {
            if (mensaje.status == 200) {
            noticias = JSON.parse(mensaje.response)
            renderizar(noticias)
        }
    }
}

function renderizar(){

    //console.log(noticias)        

    noticias.forEach( //como recorrer cada uno de los elementos.
        function(noticia){
            //console.log("El titulo es: " + noticia.titulo)
            
            let articuloMatriz = document.querySelector(".noticia") //.noticia viene del html, va con punto porque es del tipo clase

            let articuloCopia = articuloMatriz.cloneNode(true) //estamos clonando el elemento

            articuloCopia.querySelector("h3").innerText = noticia.titulo
            articuloCopia.querySelector("a").innerText = noticia.autor
            articuloCopia.querySelector("p:nth-of-type(2)").innerText = noticia.detalle //le dice que busque el parrafo numero 2 p:nth-of-type(2)
            articuloCopia.querySelector("img").src = noticia.imagen
            
            articuloCopia.classList.remove("d-none") //como antes me traia el oroginal del html en blanco, le puse en la clase d-none para que desaparezca y ahora le digo que lo remueva.

            //console.log(articuloCopia)

            document.querySelector("#ultimas-noticias").appendChild(articuloCopia)

        }
    )
}