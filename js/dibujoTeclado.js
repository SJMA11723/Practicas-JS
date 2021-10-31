function dibujarLinea(color, xIni, yIni, xFin, yFin) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xIni, yIni);
    lienzo.lineTo(xFin, yFin);
    lienzo.stroke();
    lienzo.closePath();
}

function start() { // Inicia el lienzo con los parámetros en las cajas de texto
    canv.width = parseInt(textWidth.value);
    canv.height = parseInt(textHeight.value);

    posX = Math.max(0, Math.min(canv.width, textCoordX.value));
    posY = Math.max(0, Math.min(canv.height, textCoordY.value));
    color = "red";
    moveLen = parseInt(textLength.value);

    // Dibuja los bordes
    dibujarLinea("black", 0, 1, canv.width, 1);
    dibujarLinea("black", 1, 0, 1, canv.height);
    dibujarLinea("black", canv.width - 1, canv.height, canv.width - 1, 0);
    dibujarLinea("black", canv.width, canv.height - 1, 0, canv.height - 1);

    // Cambia el estado a "iniciado"
    btnStart.value = "Reiniciar";
    started = true
}

function move(event) { // Dependiendo del tipo de evento, dibuja la línea
    if (started == true) { // Solo si el lienzo está iniciado, se dibuja
        if (event.type == "keydown") { // Dibuja con las flechas
            switch (event.keyCode) {
                case Arrows.LEFT: // ArrowLeft
                    dibujarLinea(color, posX, posY, posX - moveLen, posY);
                    posX = Math.max(0, posX - moveLen);
                    break;
                case Arrows.UP: // ArrowUp
                    dibujarLinea(color, posX, posY, posX, posY - moveLen);
                    posY = Math.max(0, posY - moveLen);
                    break;
                case Arrows.RIGHT: // ArrowRight
                    dibujarLinea(color, posX, posY, posX + moveLen, posY);
                    posX = Math.min(canv.width, posX + moveLen);
                    break;
                case Arrows.DOWN: // ArrowDown
                    dibujarLinea(color, posX, posY, posX, posY + moveLen);
                    posY = Math.min(canv.height, posY + moveLen);
                    break;
            }
        } else if (event.type == "mousedown") { // Add event listener to start drawing
            posX = event.layerX;
            posY = event.layerY;
            canv.addEventListener("mousemove", move);
        } else if (event.type == "mouseup" || event.type == "mouseout") { // Remove event listener to finish drawing
            canv.removeEventListener("mousemove", move);
        } else if (event.type == "mousemove") { // Draw the move of the mouse
            dibujarLinea(color, posX, posY, event.layerX, event.layerY);
            posX = event.layerX;
            posY = event.layerY;
        }
    }
}

var textWidth = document.getElementById("txtWidth");
var textHeight = document.getElementById("txtHeight");
var textLength = document.getElementById("txtLength");
var textCoordX = document.getElementById("txtCoordX");
var textCoordY = document.getElementById("txtCoordY");
var btnStart = document.getElementById("btnStart");
var canv = document.getElementById("canvasTeclado");
var lienzo = canv.getContext("2d");

// Put hints
textWidth.placeholder = 300;
textHeight.placeholder = 300;
textLength.placeholder = 1;
textCoordX.placeholder = 0;
textCoordY.placeholder = 0;

// Put values by default
textWidth.value = 300;
textHeight.value = 300;
textLength.value = 1;
textCoordX.value = 0;
textCoordY.value = 0;

var Arrows = {
    LEFT: 37,
    UP: 38,
    RIGHT: 39,
    DOWN: 40
};
var posX, posY, moveLen, color;
var started = false;

// Add listeners
btnStart.addEventListener("click", start);
document.addEventListener("keydown", move);
canv.addEventListener("mousedown", move);
canv.addEventListener("mouseup", move);
canv.addEventListener("mouseout", move);