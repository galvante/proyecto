var vp = document.getElementById("imagen");

var papel = vp.getContext("2d");



var fondo = {

  url: "cajero.gif",

  cargaOK: false

}



fondo.imagen = new Image();

fondo.imagen.src = fondo.url;

fondo.imagen.addEventListener("load", cargarFondo);



function cargarFondo()

{

  fondo.cargaOK = true;

  console.log(fondo.imagen);

  papel.drawImage(fondo.imagen, 0, 0);

  for (var i = 0; i < caja.length;i++){

    caja[i].cargaOK = true;

    papel.drawImage(caja[i].imagen, 180, (25 * i)+80); 

  }

}