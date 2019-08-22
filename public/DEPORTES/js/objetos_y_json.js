/*
Formas de integrar un Script a HTML
1) Archivo Externo: <script src="js/archivo.js"></script>
2) Bloque Interno: <script></script>
3) Atributo HTML: onclick, onchange, onblur...
*/
//window se usa para chequear que este cargado en el navegador
window.onload = function () {
    //se crea un OBJETO (persona) con ciertos ATRIBUTOS (nombre, edad, etc), lleva info y ademas adentro hago que haga cosas sobre mi
    //los numeros no precisan comillas
    persona = {
        nombre: "Martin",
        edad: 40,
        peso: 95,
        altura: 1.82,
        comidas_preferidas: ['milanga', 'pizza', 'zapallito relleno'],
        quejarse: function () {
            alert('Uy que pesado estoy')
        }
    }

    perro = {
        nombre: "fido",
        peso: 35,
        ladra: function () {
            if (this.peso > 30) {
                alert('wofff woff')
            } else {
                alert('guau gua guau')
            }
        },
        hacer_dieta: function () {
            this.peso = this.peso - 1

        }
    }

}

texto = '[{"nombre":"Martín","edad":40,"peso":95,"altura":1.82,"comidas_preferidas":["milanga","pizza","zapallito relleno"]},{"nombre":"Joel","edad":30,"peso":95,"altura":1.82,"comidas_preferidas":["arepas","tequeño"]},{"nombre":"Jose","edad":31,"peso":80,"altura":1.72,"comidas_preferidas":["asado","repas","pastas"]}]'

los_pibes = JSON.parse(texto); //parse o to parse: es reconocer estructuras.