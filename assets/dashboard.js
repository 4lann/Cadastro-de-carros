function calcularestatistica() {
    
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];
  
    const pendentes = tarefas.filter(t => t.concluida === false);
    const qtdependentes = pendentes.length;
    document.querySelector("#qtde-pendente").innerHTML = qtdependentes;
  
    const concluida = tarefas.filter(t => t.concluida === true);
    const qtdconcluida = concluida.length;
    document.querySelector("#qtde-concluido").innerHTML = qtdconcluida;
  
    const totalpontos = tarefas.reduce((total, t) => total += +t.pontos, 0);
    document.querySelector("#Total-pontos").innerHTML = totalpontos;
  
    const meusPontos = tarefas.reduce((total, t) => total += +t.pontos, 0);
    
    document.querySelector("#Meus-Pontos").innerHTML = meusPontos;
  }
  
  calcularestatistica();
  