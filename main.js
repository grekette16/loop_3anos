function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("a senha é 123?");

    
    if (respostaTime.toLowerCase() === "123") {
      alert("Isso mesmo! a melhor senha!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}


// Chamada da função para iniciar o processo
verificarTime ();

