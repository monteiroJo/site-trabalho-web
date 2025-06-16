<img id="colocar id" src="img1" alt="" />

  const imagens = [
    "img",
    "img",
    "img",
    "img"
  ];

  let indexAtual = 0;

  const img = document.getElementById("id");

  img.addEventListener("click", () => {
    indexAtual = (indexAtual + 1) % imagens.length;
    img.src = imagens[indexAtual];
  });