const canvasOOP = document.getElementById("canvasOOP");
const canvasRandom = document.getElementById("canvasRandom");
const canvasMultiple = document.getElementById("canvasMultiple");

const ctx = canvasOOP.getContext("2d");
const ctxRandom = canvasRandom.getContext("2d");
const ctxMultiple = canvasMultiple.getContext("2d");

canvasOOP.height = 200;
canvasOOP.width = 300;

canvasRandom.height = 200;
canvasRandom.width = 300;

canvasMultiple.height = 200;
canvasMultiple.width = 300;

canvasOOP.style.background = "#ff8";
canvasRandom.style.background = "#e6f7f6";
canvasMultiple.style.background = "#fcfb97";

class Circle {
  constructor(x, y, radius, color, text, backcolor) {
    this.posX = x;
    this.posY = y;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.backcolor = backcolor;
  }

  draw(context) {
    context.beginPath();
    context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
    context.fillStyle = this.backcolor;
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = this.color;
    context.stroke();
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "bold 20px cursive";
    context.fillStyle = "White";
    context.fillText(this.text, this.posX, this.posY);
    context.closePath();
  }
}

// Función para generar una posición aleatoria sin que el círculo se salga del canvas
function getRandomPosition(radius, canvasWidth, canvasHeight) {
  let x = Math.random() * (canvasWidth - 2 * radius) + radius;
  let y = Math.random() * (canvasHeight - 2 * radius) + radius;
  return { x, y };
}

// Crear círculo centrado en canvasOOP
let miCirculo = new Circle(canvasOOP.width / 2, canvasOOP.height / 2, 50, "red", "Tec", "rgb(66, 135, 245)");
miCirculo.draw(ctx);

// Crear círculo aleatorio en canvasRandom
let randomRadius = Math.floor(Math.random() * 50 + 30);
let position = getRandomPosition(randomRadius, canvasRandom.width, canvasRandom.height);
let miCirculoRandom = new Circle(position.x, position.y, randomRadius, "green", "Tec", "rgb(83, 186, 52)");
miCirculoRandom.draw(ctxRandom);

// Crear múltiples círculos en canvasMultiple
let arrayCircle = [];
for (let i = 0; i < 10; i++) {
  let randomRadius = Math.floor(Math.random() * 10 + 20);
  let position = getRandomPosition(randomRadius, canvasMultiple.width, canvasMultiple.height);
  let miCirculoMultiple = new Circle(position.x, position.y, randomRadius, "#9e500d", i + 1, "#f29a4e");
  arrayCircle.push(miCirculoMultiple);
  miCirculoMultiple.draw(ctxMultiple);
}