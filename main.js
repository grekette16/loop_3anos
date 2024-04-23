function verificarTime() {
  
  var continuarPerguntando = true;

  while (continuarPerguntando) {
    
    var respostaTime = prompt("qual a sua escola?");

    
    if (respostaTime.toLowerCase() === "Emilio de menezes") {
      alert("Isso mesmo! O emilio é o melhor colégio!");
      continuarPerguntando = false; // Sai do loop após a resposta correta
    } else {
      alert("Não é isso! Tente novamente.");
    }
  }
}


// Chamada da função para iniciar o processo
verificarTime ();

