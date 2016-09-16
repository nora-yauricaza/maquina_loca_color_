window.addEventListener("load", function() {
  var boton = document.getElementById("cri");
  var contador = 1;
  boton.addEventListener("click", function() {
    if(contador == 1) {
      document.getElementById("color").value = "Anaranjado";
      document.getElementById("orange").classList.add("border-orange");
      document.getElementById("black").classList.remove("border-black");
    }
    if(contador == 2) {
      document.getElementById("color").value = "Azul";
      document.getElementById("blue").classList.add("border-blue");
      document.getElementById("orange").classList.remove("border-orange");
    }
    if(contador == 3) {
      document.getElementById("color").value = "Negro";
      document.getElementById("black").classList.add("border-black");
      document.getElementById("blue").classList.remove("border-blue");
      contador = 0;
    }
    contador++;
  }); 
});
window.addEventListener("load", function() {
  var boton = document.getElementById("supercri");
  boton.addEventListener("click", function() {
    var color = document.getElementById("color").value;
    if (color == "orange") {
      document.getElementById("orange").classList.add("border-orange");
      document.getElementById("blue").classList.remove("border-blue");
      document.getElementById("black").classList.remove("border-black");
    } else if (color == "blue") {
      document.getElementById("blue").classList.add("border-blue");
      document.getElementById("orange").classList.remove("border-orange");
      document.getElementById("black").classList.remove("border-black");
    } else if (color == "black") {
      document.getElementById("black").classList.add("border-black");
      document.getElementById("blue").classList.remove("border-blue");
      document.getElementById("orange").classList.remove("border-orange");
    }
  });
});
