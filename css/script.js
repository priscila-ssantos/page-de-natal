const numSnowflakes = 120;
  const snowflakes = [];

  for(let i = 0; i < numSnowflakes; i++) {
    const snowflake = document.createElement('div');
    snowflake.classList.add('snowflake');
    snowflake.innerHTML = '❄';
    
    snowflake.x = Math.random() * window.innerWidth;
    snowflake.y = Math.random() * window.innerHeight;
    snowflake.size = Math.random() * 20 + 10;
    snowflake.speed = Math.random() * 1 + 0.5;
    snowflake.angle = Math.random() * 2 * Math.PI;
    snowflake.angleSpeed = Math.random() * 0.02 + 0.01;

    snowflake.style.left = snowflake.x + 'px';
    snowflake.style.top = snowflake.y + 'px';
    snowflake.style.fontSize = snowflake.size + 'px';
    snowflake.style.opacity = Math.random() * 0.7 + 0.3;

    document.body.appendChild(snowflake);
    snowflakes.push(snowflake);
  }

  function animateSnow() {
    for(const snowflake of snowflakes) {
      snowflake.y += snowflake.speed;
      snowflake.angle += snowflake.angleSpeed;
      snowflake.x += Math.sin(snowflake.angle) * 2; // oscilação horizontal

      if(snowflake.y > window.innerHeight) {
        snowflake.y = -50;
        snowflake.x = Math.random() * window.innerWidth;
      }

      snowflake.style.top = snowflake.y + 'px';
      snowflake.style.left = snowflake.x + 'px';
      snowflake.style.transform = `rotate(${snowflake.angle * 180/Math.PI}deg)`;
    }

    requestAnimationFrame(animateSnow);
  }

   function gerarMensagem() {
    const mensagens = [
      "Que o Natal traga paz ao seu coração,\namor aos seus dias\ne esperança para um novo começo.\n\n ✨🎅",
      "Desejo que a luz do nosso Senhor Deus ilumine seus caminhos\ne que 2026 venha com saúde, amor e fé.\n\nFeliz Natal 🌟",
      "Que nunca falte esperança,\nabraços sinceros\ne motivos para sorrir.\n\nUm Natal abençoado 🍾🎉\n",
      "Neste Natal, o Senhor Jesus\nrenove sua fé te enchendo de força e realize seus sonhos.\n\nBoas Festas! 🎅",
      "Que o Espírito Santo do nosso Senhor Jesus cristo encha sua casa\nde alegria, amor e muita luz.\n\nFeliz Natal e um próspero 2026! 🎆"

      
    ];

    const aleatoria = Math.floor(Math.random() * mensagens.length);
    document.getElementById("mensagem").innerText = mensagens[aleatoria];
  }

  animateSnow();