# O que a aplicação faz? Quais são seus principais recursos? #
 ### APP.JS #
Este código JavaScript, utilizando o Express.js, Axios e a API do OpenWeatherMap, **permite obter informações meteorológicas de uma cidade específica**. A aplicação escuta na porta 3000 e possui uma rota GET (/climatempo/:cidade) que recebe o nome de uma cidade como parâmetro e **faz uma requisição para a API do OpenWeatherMap para obter informações sobre o clima atual da cidade especificada.**

**O código processa os dados recebidos da API, formatando a descrição do clima para ter a primeira letra em maiúscula, construindo URLs para os ícones do clima e das bandeiras dos países, e envia as informações meteorológicas relevantes de volta para o cliente no formato JSON.**

Além disso, o código lida com possíveis erros que podem ocorrer durante a obtenção dos dados meteorológicos, **como erros de requisição ou erros internos do servidor, retornando mensagens de erro apropriadas para o cliente.**

A aplicação também utiliza o framework Express.js para criar um servidor HTTP, define o middleware CORS para permitir requisições de origens diferentes, e configura rotas para servir arquivos estáticos na pasta public (possivelmente contendo a interface do usuário).

**Em resumo, esta aplicação atua como uma ponte entre uma interface do usuário (cliente) e a API do OpenWeatherMap, fornecendo acesso fácil e formatado às informações meteorológicas de uma cidade específica.**
# README #
Clima App
Este é um aplicativo simples que **permite ao usuário buscar informações meteorológicas de uma cidade específica.** O aplicativo utiliza HTML, CSS e JavaScript para criar uma interface simples e intuitiva.

#### Como usar
Digite o nome da cidade no campo de entrada de texto.
Clique no botão "Buscar" para enviar a requisição.
O aplicativo exibirá as informações meteorológicas relevantes na tela, como a temperatura, a descrição do clima, a umidade e a velocidade do vento.
#### Tecnologias utilizadas
HTML
CSS
JavaScript
Fetch API
API do OpenWeatherMap
API flagsAPI
#### Como rodar o aplicativo
Clone o repositório em sua máquina local.
Abra o arquivo index.html em um navegador web.
Digite o nome da cidade no campo de entrada de texto e clique no botão "Buscar".
Considerações finais
Este é um aplicativo simples e não deve ser usado em produção. Ele foi criado apenas para fins educacionais e de demonstração. Além disso, é necessário obter uma chave de API do OpenWeatherMap e da flagsAPI para usar o aplicativo.

# SCRIPT.JS
## O que a aplicação faz? Quais são seus principais recursos?
JavaScript é uma linguagem de programação interpretada, orientada a objetos e dinamicamente tipada, amplamente utilizada para criar conteúdo dinâmico em páginas web e para construir aplicativos web e móveis. Ela é executada no navegador do usuário e permite que os desenvolvedores criem interações e **manipulem elementos da página web, como formulários, botões e imagens.** 

Além disso, JavaScript pode ser usada no lado do servidor, graças a frameworks como Node.js, permitindo que os desenvolvedores criem aplicativos web completos usando apenas uma linguagem de programação.

JavaScript possui uma grande variedade de bibliotecas e frameworks, como jQuery, React, Angular e Vue.js, que facilitam o desenvolvimento de aplicativos web e móveis complexos e aumentam a produtividade dos desenvolvedores.

Em resumo, JavaScript é uma linguagem de programação versátil e amplamente utilizada, que permite aos desenvolvedores criar conteúdo dinâmico em páginas web e construir aplicativos web e móveis completos.

README SCRIPT.JS
Clima App
Este é um aplicativo simples que permite ao usuário **buscar informações meteorológicas de uma cidade específica.** O aplicativo utiliza HTML, CSS e JavaScript para criar uma interface simples e intuitiva.

#### Como usar
Digite o nome da cidade no campo de entrada de texto.
Clique no botão "Buscar" para enviar a requisição.
O aplicativo exibirá as **informações meteorológicas relevantes na tela, como a temperatura, a descrição do clima, a umidade e a velocidade do vento.**
Tecnologias utilizadas
HTML
CSS
JavaScript
Fetch API
API do OpenWeatherMap
API flagsAPI
#### Como rodar o aplicativo
Clone o repositório em sua máquina local.
Abra o arquivo index.html em um navegador web.
Digite o nome da cidade no campo de entrada de texto e clique no botão "Buscar".
Considerações finais
Este é um aplicativo simples e não deve ser usado em produção. Ele foi criado apenas para fins educacionais e de demonstração. Além disso, é necessário obter uma chave de API do OpenWeatherMap e da flagsAPI para usar o aplicativo.

# INDEX.HTML
## O que a aplicação faz? Quais são seus principais recursos?
O código HTML fornecido é uma página web que exibe uma seção de consulta de clima para uma cidade específica. A página possui as seguintes seções:

Cabeçalho: exibe o título "WEATHER WISE" e um logotipo.
**Seção de consulta de clima: permite que o usuário insira o nome de uma cidade no formulário de consulta e clique no botão "Consultar" para obter as informações meteorológicas da cidade.**
Seção de exibição de resultados: exibe as informações meteorológicas da cidade consultada, incluindo a temperatura, a descrição do clima, a umidade e a velocidade do vento.
Além disso, a página utiliza uma vídeo de fundo para fornecer uma **experiência visual** agradável ao usuário.

O código JavaScript associado a essa página web é responsável por fazer uma requisição HTTP para uma API que fornece as informações meteorológicas da cidade consultada e exibe os resultados na seção de exibição de resultados.

Em resumo, esta página web fornece uma interface simples e intuitiva para consultar as informações meteorológicas de uma cidade específica.

## README 
WeatherWise - Consulta de Clima
Este é um projeto simples que permite consultar o clima de uma cidade específica. O projeto consiste em uma página web que utiliza HTML, CSS e JavaScript para exibir um formulário de consulta de clima e exibir os resultados da consulta.

#### Funcionalidades
Consulta de clima de uma cidade específica
Exibição de temperatura, descrição do clima, umidade e velocidade do vento
Exibição de um ícone do clima correspondente
Exibição de uma bandeira do país correspondente
#### Como usar
Digite o nome da cidade no campo de entrada de texto
Clique no botão "Consultar"
A página exibirá os resultados da consulta de clima
#### Tecnologias utilizadas
HTML
CSS
JavaScript
API do OpenWeatherMap
API da FlagsAPI
Instalação e execução
Clone o repositório
Abra o arquivo index.html em um navegador web
# Código comentado 
## APP.js
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
## INDEX.html
<!DOCTYPE html>
<html lang="pt-br">
  <head>
    <!-- Metadados da página -->
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>WeatherWise - Consulta de Clima</title>
    <!-- Ícone da página -->
    <link rel="icon" href="img/siteIcon.png" />
    <!-- Estilos CSS -->
    <link rel="stylesheet" href="style.css" />
    <!-- Fontes Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link
      href="https://fonts.googleapis.com/css2?family=Krona+One&family=Krub:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap"
      rel="stylesheet"
    />
    <!-- Ícones Phosphor -->
    <script src="https://unpkg.com/@phosphor-icons/web"></script>
  </head>
  <body>
    <!-- Container de vídeo -->
    <div class="video-container">
      <video autoplay loop muted>
        <source src="./img/videoplayback.mp4" type="video/mp4" />
      </video>
    </div>
    <!-- Cabeçalho -->
    <header>  
      <main class="main-header">
        <nav class="main-header-nav">
          <!-- Título do cabeçalho -->
          <div class="main-header-nav-title">
            <p class="main-header-nav-title-weather">WEATHER</p>
            <p class="main-header-nav-title-wise">WISE</p>
          </div>
          <!-- Logo do cabeçalho -->
          <img
            src="img/navIcon.png"
            class="main-header-nav-logo"
            alt="WeatherWise Logo"
            title="WeatherWise Logo"
          />
        </nav>
      </main>
    </header>
    <!-- Seção de consulta de clima -->
    <main>
      <section class="main-city">
        <!-- Título da seção -->
        <h3>Confira o clima de uma cidade</h3>
        <!-- Formulário de consulta de clima -->
        <div class="main-city-form">
          <form id="formClima">
            <!-- Campo de entrada para a cidade -->
            <input type="text" id="cityInput" name="cityInput" />
            <!-- Botão de consulta -->
            <button type="submit">Consultar</button>
          </form>
        </div>
      </section>
    </main>
    <!-- Seção de exibição do clima -->
    <main class="main-clima">
      <!-- Contêiner para resultados do clima -->
      <div id="climaResult"></div>
      <!-- Ícone de carregamento (oculto inicialmente) -->
      <div id="loader" class="hide">
        <i class="fa-solid fa-spinner"></i>
      </div>
    </main>
    <!-- Script JavaScript -->
    <script src="script.js"></script>
  </body>
</html>

<!-- 
<main class="main-clima">
  <div id="climaResult">
    <div class="clima-city-name">
      <i class="ph ph-map-pin"></i>
      <p id="cityResult">${cidadeFormatada}</p>
    </div>
    <div class="clima-city-temp">
      <i class="ph ph-thermometer-simple"></i>
      <p id="tempResult">${data.Temperatura}ºC</p>
    </div>
    <div class="clima-city-umidade">
      <i class="ph ph-drop"></i>
      <p id="umidadeResult">${data.Umidade}%</p>
    </div>
    <div class="clima-city-vento">
      <i class="ph ph-wind"></i>
      <p id="ventoResult">${data.VelocidadeDoVento} m/s</p>
    </div>
    <div class="clima-city-icon">
      <img src="${data.Icone}">
    </div>
  </div>
</main> 
-->

## script.js
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

## syle.css
 /* Define estilos padrão para todos os elementos */
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  text-decoration: none;
  font-size: 1em;
  font-family: "Krub";
}

/* Estilos para o container de vídeo */
.video-container {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
}

/* Estilos para o vídeo de fundo */
video {
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
}

/* Estilos para o corpo da página */
body {
  height: 100vh;
  background-color: #fdfdfd;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

/* Estilos para a barra de navegação no cabeçalho */
.main-header-nav {
  display: flex;
  justify-content: space-around;
  align-items: center;
  text-align: center;
  height: 100px;
  background-color: #0d5782;
  position: relative;
}

/* Estilos para o título no cabeçalho */
.main-header-nav-title {
  display: flex;
  justify-content: space-around;
  align-items: end;
}

/* Estilos para o título "WEATHER" */
.main-header-nav-title-weather {
  font-family: "Krona One";
  color: #fdfdfd;
  font-size: 50px;
  padding: 0 10px 0 0;
}

/* Estilos para o título "WISE" */
.main-header-nav-title-wise {
  font-family: "Krub";
  color: #fdfdfd;
  font-size: 40px;
}

/* Estilos para o logotipo no cabeçalho */
.main-header-nav-logo {
  width: 140px;
  position: relative;
  margin-top: 70px;
}

/* Estilos para a seção de consulta de cidade */
.main-city {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 60px;
  position: relative;
}

/* Estilos para o título na seção de consulta de cidade */
.main-city h3 {
  color: #0a4363;
  font-weight: 500;
  font-size: 25px;
  font-style: inherit;
}

/* Estilos para o formulário na seção de consulta de cidade */
.main-city-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

/* Estilos para o campo de entrada na seção de consulta de cidade */
.main-city-form input {
  padding-left: 20px;
  width: 700px;
  height: 50px;
  border-radius: 50px;
  background-color: #d9d9d9;
}

/* Estilos para o botão na seção de consulta de cidade */
.main-city-form button {
  width: 100px;
  height: 50px;
  border-radius: 50px;
  margin-left: 10px;
  background-color: #d9d9d9;
}

/* Estilos para a seção de resultados do clima */
.main-clima {
  display: flex;
  justify-content: center;
  position: relative;
}

/* Estilos para o contêiner de resultados do clima */
#climaResult {
  margin-top: 4rem;
  display: none;
  background-color: #a3ddff;
  width: 500px;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px #0a4363;
  padding: 20px;
}

/* Estilos para o nome da cidade nos resultados do clima */
.clima-city-name {
  display: flex;
  text-align: center;
  justify-content: center;
  font-size: xx-large;
  font-weight: 600;
  text-shadow: 0px 0px 5px #fdfdfd;
}

/* Estilos para a temperatura nos resultados do clima */
.clima-city-temp {
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 30px;
  font-size: 50px;
}

/* Estilos para o ícone do clima nos resultados do clima */
.clima-city-icon {
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  font-weight: 700;
  font-size: 20px;
}

/* Estilos para a seção de informações adicionais nos resultados do clima */
.clima-city-bot {
  display: flex;
  align-items: center; /* Alinha os itens verticalmente no centro */
  text-align: center;
  justify-content: center;
  font-weight: 500;
  font

