const botao = document.getElementById("btnResultado");

botao.addEventListener("click", async () => {
  
  const valor = document.getElementById("valorInicial").value;
  const apiKey = "01523e25c3c06fe88d639aa6";
  const moedaInicial = document.getElementById("moedaInicial").value;
  const moedaConvertida = document.getElementById("moedaConvertida").value;
  const resultado = document.getElementById("resultado");

  try {

    //Fazendo a requisição para a API
    const resposta = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${moedaInicial}/${moedaConvertida}/${valor}`);

    //Convertendo a resposta da API para JSON
    const dado = await resposta.json();

    //Pegando o campo que desejo do JSON, nesse caso sendo a valor da conversão da moeda
    const valorConversao = dado.conversion_result;

    // Inserindo o resultado no HTML
    resultado.innerText = "O valor convertido é: " + valorConversao.toFixed(2) + ` ${moedaConvertida} `;

  } 
    // Caso a API dê algum erro na requisição, o erro será impresso no console do navegador 
    catch (error) {
    console.log(error);
  }

  // Adicionar estilos à div de resultado
  resultado.style.display = "flex";
  resultado.style.fontSize = "24px";
  resultado.style.fontWeight = "bold";
  resultado.style.color = "#106321";
  resultado.style.fontFamily = "'Poppins', sans-serif";
  resultado.style.height = "115px";
  resultado.style.width = "466px";
  resultado.style.backgroundColor = "#A3FAC6"
  resultado.style.borderRadius = "8px";
  resultado.style.justifyContent = "center";
  resultado.style.alignItems = "center";
  resultado.style.justifyContent = "center";

  consumoAPI();
});