let etapa = 1;
const botaoSim = document.getElementById ("SIMMM");
const botaoNao = document.getElementById("Não");
const pergunta = document.getElementById("pergunta");
botaoSim.addEventListener("click", function() {
  if (etapa===1) {
  pergunta.textContent = "E você sabe que eu quero passar a vida com você? 💚"; 
  etapa=2;
  }
  else if(etapa=== 2) {
      pergunta.textContent = "Você ainda escolheria viver tudo comigo de novo?  💚";
  etapa = 3;
  }
  else if (etapa ===3 ) {
    pergunta.textContent = "Então só falta uma pergunta .. Coisa mais linda do planeta, você aceita se casar comigo? 💍💚" ;
    etapa = 4; 
  }
  else if ( etapa === 4) {
    pergunta.textContent = "Agora é oficial: eu escolho você para todos os meus dias. 💍💚";
    botaoSim.style.display = "none";
botaoNao.style.display = "none";
    
    for (let i = 0; i < 50; i++) {
    const coracao = document.createElement("div");

    coracao.textContent = "💚";
    coracao.classList.add("coracao");

    coracao.style.left = Math.random() * 100 + "%";

    document.body.appendChild(coracao);
    }
    
    etapa = 5; 
  }
    });
function fugir() {

    const x = Math.random() * (window.innerWidth - botaoNao.offsetWidth);
    const y = Math.random() * (window.innerHeight - botaoNao.offsetHeight);

    botaoNao.style.position = "absolute";
    botaoNao.style.left = x + "px";
    botaoNao.style.top = y + "px";
}

botaoNao.addEventListener("mouseover", fugir);
botaoNao.addEventListener("touchstart", fugir);
