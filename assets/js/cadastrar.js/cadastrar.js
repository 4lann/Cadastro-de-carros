
function calcularestatistica(){

}
document.querySelector("#botao-cadastrar").addEventListener("click",() => {
 
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []

    const tarefa = {
      id: Date.now(),
        Nome: document.querySelector("#Nome").value,
        modelo: document.querySelector("#modelo").value,
        Placa: document.querySelector("#Placa").value,
        pontos: document.querySelector("#pontos").value,  
        cadastrado: false
    }
     
    tarefas.push(tarefa)

  localStorage.setItem("tarefas", JSON.stringify( tarefas ))

  window.location.href ="index.html"
  calcularestatistica()
})