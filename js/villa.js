function rand(ini, fin) {
    return Math.floor(Math.random() * (fin - ini + 1)) + ini;
}

function drawMap() {
    canvContext.drawImage(map, 0, 0);
    reDraw();
}

function drawChicken() {
    canvContext.drawImage(imgChicken, xChicken, yChicken);
    loaded.CHICKEN = true;
    console.log("Chicken: " + xChicken + ", " + yChicken);
}

function drawPig() {
    canvContext.drawImage(imgPig, xPig, yPig);
    loaded.PIG = true;
    console.log("Pig: " + xPig + ", " + yPig);
}

function drawCow() {
    canvContext.drawImage(imgCow, xCow, yCow);
    loaded.COW = true;
    console.log("Cow: " + xCow + ", " + yCow);
}

function reDraw() {
    if (loaded.CHICKEN) {
        drawChicken();
    }
    if (loaded.PIG) {
        drawPig();
    }
    if (loaded.COW) {
        drawCow();
    }
}

var canv = document.getElementById("canvVilla");
var canvContext = canv.getContext("2d");

canv.width = 500;
canv.height = 500;

var mapRoute = "img/tile.png";

loaded = {
    CHICKEN: false,
    PIG: false,
    COW: false
}

var map = new Image();
map.src = mapRoute;
map.addEventListener("load", drawMap);

var imgChicken = new Image();
imgChicken.src = "img/chicken.png";
var xChicken = rand(0, canv.width - 40),
    yChicken = rand(0, canv.height - 40);
imgChicken.addEventListener("load", drawChicken);

var imgCow = new Image();
imgCow.src = "img/cow.png";
var xCow = rand(0, canv.width - 40),
    yCow = rand(0, canv.height - 40);
imgCow.addEventListener("load", drawCow);

var imgPig = new Image();
imgPig.src = "img/Pig.png";
var xPig = rand(0, canv.width - 40),
    yPig = rand(0, canv.height - 40);
imgPig.addEventListener("load", drawPig);