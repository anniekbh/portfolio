 function maquina(contenedor,texto,intervalo){
   longitud = texto.length;
   cnt = document.getElementById(contenedor);
   var i=0;
   timer = setInterval(function(){
      cnt.innerHTML = cnt.innerHTML.substr(0,cnt.innerHTML.length-1) + texto.charAt(i) + "_";
      if(i >= longitud){
         clearInterval(timer);
         cnt.innerHTML = cnt.innerHTML.substr(0,longitud);
      } else {
         i++;
      }
   },intervalo);
};

var texto = "FRONT - END DEVELOPER";
// 100 es el intervalo de minisegundos en el que se escribirá cada letra.
maquina("letter",texto,200);