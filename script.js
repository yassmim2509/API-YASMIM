// Adiciona um ouvinte de evento para o formulário de clima quando é enviado
document.getElementById("formClima").addEventListener("submit", function (event) {
  // Previne o comportamento padrão de submissão do formulário
  event.preventDefault();

  // Obtém o valor inserido no campo de entrada para a cidade
  const city = document.getElementById("cityInput").value;
  // Formata o nome da cidade para ter a primeira letra maiúscula
  const cidadeFormatada = city.charAt(0).toUpperCase() + city.slice(1);

  // Faz uma solicitação fetch para a API local que fornece dados meteorológicos da cidade especificada
  fetch(`http://localhost:3000/climatempo/${city}`)
    // Converte a resposta em formato JSON
    .then((response) => response.json())
    .then((data) => {
      // Obtém a referência ao elemento onde os resultados do clima serão exibidos
      const tempoResult = document.getElementById("climaResult");

      // Exibe o contêiner dos resultados do clima
      document.getElementById("climaResult").style.display = "block";

      // Verifica se os dados meteorológicos foram recebidos corretamente
      if (data.Temperatura) {
        // Atualiza o HTML dentro do contêiner de resultados com os dados meteorológicos formatados
        tempoResult.innerHTML = `
          <div class="clima-city-name">
            <i class="ph-fill ph-map-pin" id="pin_map"></i>
            <p id="cityResult">${cidadeFormatada}</p>
            <img src="${data.Flag}" class="flag-city">
          </div>
          <div class="clima-city-temp">
            <i class="ph ph-thermometer-simple"></i>
            <p id="tempResult">${data.Temperatura}ºC</p>
          </div>
          <div class="clima-city-icon">
            <p id="climaDescriptionResult">${data.Clima}</p>
            <img src="${data.Icone}">
          </div>
          <div class="clima-city-bot">
            <div class="clima-city-umidade">
              <i class="ph ph-drop"></i>
              <p id="umidadeResult">${data.Umidade}%</p>
            </div>
            <p class="espacamento">|</p>
            <div class="clima">
              <i class="ph ph-wind"></i>
              <p id="ventoResult">${data.VelocidadeDoVento} m/s</p>
            </div>
          </div>`;
      } else {
        // Se houver um erro ao obter os dados meteorológicos, exibe uma mensagem de erro
        tempoResult.innerHTML = "Erro ao obter dados metereológicos!";
      }
    });
});
