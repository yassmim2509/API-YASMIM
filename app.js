// Importa o framework Express para criar o servidor
const express = require("express");
// Importa a biblioteca axios para fazer solicitações HTTP
const axios = require("axios");
// Importa o módulo path para manipular caminhos de arquivos
const path = require("path");
// Importa o middleware cors para permitir solicitações de diferentes origens
const cors = require("cors");
// Importa as configurações de API do arquivo config.json
const config = require("./config.json");
// Extrai a chave da API do objeto config
const apikey = config.apikey;
// Inicializa o aplicativo Express
const app = express();
// Define o aplicativo para escutar na porta 3000
app.listen(3000);

// Configura o aplicativo para usar o middleware cors
app.use(cors());
// Configura o aplicativo para fazer parsing do corpo da solicitação como JSON
app.use(express.json());
// Configura o aplicativo para servir arquivos estáticos a partir do diretório "public"
app.use(express.static(path.join(__dirname, "public")));

// Define uma rota GET para "/climatempo/:cidade"
app.get("/climatempo/:cidade", async (req, res) => {
  // Extrai o nome da cidade dos parâmetros da solicitação
  const city = req.params.cidade;

  try {
    // Faz uma solicitação GET para a API do OpenWeatherMap para obter dados meteorológicos da cidade especificada
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt_br&appid=${apikey}&units=metric`
    );
    // Verifica se a solicitação foi bem-sucedida (status 200)
    if (response.status === 200) {
      // Extrai os dados meteorológicos da resposta e os formata
      const clima = response.data.weather[0].description;
      const climaFormatado = clima.charAt(0).toUpperCase() + clima.slice(1);
      // Gera URLs para ícone e bandeira do país
      const icon = `http://openweathermap.org/img/wn/${response.data.weather[0].icon}.png`;
      const flag = `https://
