window.onload = function () {
  const canvas = document.getElementById("space");
  const ctx = canvas.getContext("2d");
  const rainbow = document.getElementById("rainbow");

  let floatPhase = 0;

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }

  resizeCanvas();
  window.addEventListener("resize", resizeCanvas);

  const NUM_STARS = 40;
  const stars = [];

  function createStar(x) {
    return {
      x: x !== undefined ? x : Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: 3,
      speed: 0.4 + Math.random() * 0.6,
      opacity: 0.7 + Math.random() * 0.3,
    };
  }

  for (let i = 0; i < NUM_STARS; i++) {
    stars.push(createStar());
  }

  function draw() {
    ctx.fillStyle = "#3a4a9e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    for (let s of stars) {
      ctx.globalAlpha = s.opacity;
      ctx.fillStyle = "#d4d8ec";
      ctx.fillRect(Math.round(s.x), Math.round(s.y), s.size, s.size);

      s.x -= s.speed;

      if (s.x < -s.size) {
        s.x = canvas.width + s.size;
        s.y = Math.random() * canvas.height;
      }
    }

    ctx.globalAlpha = 1;

    floatPhase += 0.07;
    const floatY = Math.sin(floatPhase) * 10;
    rainbow.style.transform = `translateY(${floatY}px)`;
    tuna.style.transform = `translateY(${floatY}px)`;

    requestAnimationFrame(draw);
  }

  draw();
}; //end of window.onload
