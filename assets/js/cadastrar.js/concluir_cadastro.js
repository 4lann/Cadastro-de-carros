function concluir_cadastro(id){
    const tarefas = JSON.parse(localStorage.getItem("tarefas")) || []
    let tarefa = tarefas.find(t =>  t.id === id )
    tarefa.cadastrado = true
    localStorage.setItem("tarefas", JSON.stringify(tarefas)) 

    atualizar()
    calcularestatistica()
}