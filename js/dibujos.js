function dibujarLinea(color, xIni, yIni, xFin, yFin) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xIni, yIni);
    lienzo.lineTo(xFin, yFin);
    lienzo.stroke();
    lienzo.closePath();
}

var canv = document.getElementById("canvas1");
canv.width = 600;
canv.height = 600;
var size = canv.width;

var lienzo = canv.getContext("2d");
console.log(canv);
var color = "red";

for (i = 0; i <= size; i += 10) {
    dibujarLinea(color, 0, i, i, size);
    dibujarLinea(color, i, 0, size, i)
    dibujarLinea(color, 0, size - i, i, 0);
    dibujarLinea(color, i, size, size, size - i);
}