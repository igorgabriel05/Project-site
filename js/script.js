var meuVideo = document.getElementById("meuVideo");
var barraDeProgresso = document.getElementById("barraDeProgresso");

meuVideo.addEventListener("timeupdate", function () {
    // Atualize o valor da barra de progresso à medida que o vídeo é reproduzido
    var valorAtual = (meuVideo.currentTime / meuVideo.duration) * 100;
    barraDeProgresso.value = valorAtual;
});

// Desative os controles de avanço e retrocesso padrão
meuVideo.removeAttribute("controls");