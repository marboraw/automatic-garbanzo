const canvas = document.getElementById('glitterCanvas');
const ctx = canvas.getContext('2d');

// Dopasuj rozmiar canvasu do okna
function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener('resize', resizeCanvas);

// Funkcja losowa
function rand(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Rysuj brokat tylko raz
function drawGlitterParticles(count = 400) {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  const palette = [
    'rgba(255, 215, 0, 0.5)',     // złoty
    'rgba(184, 115, 51, 0.5)',    // miedziany
    'rgba(0, 255, 127, 0.4)',     // szmaragd
    'rgba(138, 43, 226, 0.4)',    // ametyst
    'rgba(25, 25, 112, 0.4)',     // granatowy
    'rgba(255, 255, 255, 0.3)'    // srebrny
  ];

  for (let i = 0; i < count; i++) {
    const x = Math.random() * canvas.width;
    const y = Math.random() * canvas.height;
    const radius = Math.random() * 1.8 + 0.5;
    const color = palette[Math.floor(Math.random() * palette.length)];

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
  }
}

drawGlitterParticles(); // tylko raz

// Funkcja tworząca SVG iskierkę
function createSparkle() {
  const sparkle = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  sparkle.setAttribute("class", "sparkle");
  sparkle.setAttribute("viewBox", "0 0 100 100");
  sparkle.style.position = "fixed";
  sparkle.style.left = `${Math.random() * window.innerWidth}px`;
  sparkle.style.top = `${Math.random() * window.innerHeight}px`;
  sparkle.style.width = "24px";
  sparkle.style.height = "24px";
  sparkle.style.zIndex = "2";
  sparkle.style.pointerEvents = "none";
  sparkle.style.animation = "shimmer 1.8s ease-out forwards";
  sparkle.style.filter = "drop-shadow(0 0 12px white)";

  // Linie promieni
  const line1 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line1.setAttribute("x1", "50");
  line1.setAttribute("y1", "0");
  line1.setAttribute("x2", "50");
  line1.setAttribute("y2", "100");
  line1.setAttribute("stroke", "white");
  line1.setAttribute("stroke-width", "2");

  const line2 = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line2.setAttribute("x1", "0");
  line2.setAttribute("y1", "50");
  line2.setAttribute("x2", "100");
  line2.setAttribute("y2", "50");
  line2.setAttribute("stroke", "white");
  line2.setAttribute("stroke-width", "2");

  const center = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  center.setAttribute("cx", "50");
  center.setAttribute("cy", "50");
  center.setAttribute("r", "6");
  center.setAttribute("fill", "white");

  sparkle.appendChild(line1);
  sparkle.appendChild(line2);
  sparkle.appendChild(center);

  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 2000);
}

// Iskierki pojawiają się bardzo często
setInterval(() => {
  createSparkle();
}, 800 + Math.random() * 700); // co 0.8–1.5 sekundy

