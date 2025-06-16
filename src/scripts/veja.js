document.addEventListener("DOMContentLoaded", function() {
    const noticias = document.querySelectorAll('#noticias-veja-mais .noticia_completa');
    const botao = document.getElementById('verMaisBtn');
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