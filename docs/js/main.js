/*
Formas de integrar un Script a HTML
1) Archivo Externo: <script src="js/archivo.js"></script>
2) Bloque Interno: <script></script>
3) Atributo HTML: onclick, onchange, onblur...
*/

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

    mensaje.open("GET",
    "https://api.rss2json.com/v1/api.json?rss_url=https%3A%2F%2Fwww.clarin.com%2Frss%2Fdeportes%2F");
    
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

    noticias.items.forEach( //como recorrer cada uno de los elementos.
        function(noticia){
            //console.log("El titulo es: " + noticia.titulo)
            
            let articuloMatriz = document.querySelector(".noticia") //.noticia viene del html, va con punto porque es del tipo clase

            let articuloCopia = articuloMatriz.cloneNode(true) //estamos clonando el elemento

            articuloCopia.querySelector("h3").innerText = noticia.title;
            articuloCopia.querySelector("a").innerText = noticia.author;
            articuloCopia.querySelector("p:nth-of-type(2)").innerText = noticia.description; //le dice que busque el parrafo numero 2 p:nth-of-type(2)
            articuloCopia.querySelector("img").src = noticia.enclosure.link;
            
            articuloCopia.classList.remove("d-none") //como antes me traia el oroginal del html en blanco, le puse en la clase d-none para que desaparezca y ahora le digo que lo remueva.

            //console.log(articuloCopia)

            document.querySelector("#ultimas-noticias").appendChild(articuloCopia)

        }
    )
}