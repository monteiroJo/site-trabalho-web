document.addEventListener("DOMContentLoaded", function() {
    const noticias = document.querySelectorAll('colocar um id nela .noticia_completa');
    const botao = document.getElementById('class/id');
    let visiveis = 0;
    const porClique = 2;

    botao.addEventListener('click', () => {
        for (let i = visiveis; i < visiveis + porClique && i < noticias.length; i++) {
            noticias[i].style.display = 'block';
        }
        visiveis += porClique;

        if (visiveis >= noticias.length) {
            botao.style.display = 'none';
        }
    });
});