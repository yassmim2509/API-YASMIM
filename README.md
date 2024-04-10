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
