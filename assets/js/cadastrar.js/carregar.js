window.addEventListener("load", atualizar )

function atualizar(){
    document.querySelector("#lista-tarefas").innerHTML = ""
    let tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    tarefas.forEach((tarefa) => criarCard(tarefa))

}

function criarCard(tarefa){
 const card = document.createElement("div")
 card.classList.add("col","s12","m6","l4")

card.innerHTML = `
                <div class="card grey ${tarefa.cadastrado ? 'grey': ''}">

                <div class="card-content ">
                <span class="card-title">${tarefa.Nome}</span>
                <p>
                ${tarefa.modelo}
                ${tarefa.Placa}
                ${tarefa.ano}
                </p>
                <span data-badge-caption ="" class=" badge grey white-text">
                 
                </span>
                </div>

                <div class="card-action">
                    <a href="#" class="btn red" onClick="apagar(${tarefa.id})">
                        <i class="material-icons">delete</i>
                    </a>
                    
                    <a href="#"class ="btn green" onClick="concluir_cadastro(${tarefa.id})">
                        <i class="material-icons">check</i>
                    </a>
                </div>

                </div>
                `

document.querySelector("#lista-tarefas").appendChild(card)


}