const inputTarefas = document.getElementById('inputTarefas');
const tarefasInseridas = document.getElementById('tarefasInseridas');

/*
<i class="bi bi-circle"></i>

<i class="bi bi-check2-circle"></i>

*/ 

function adicionarTarefa() { 
    if(inputTarefas.value == ''){
        alert("Insira alguma tarefa!");
    } else{
        let criarItemLista =  document.createElement('li');
        let criarIcon = document.createElement('i');
        let criarParagrafo = document.createElement('p');

        criarIcon.classList.add('bi', 'bi-circle', 'fs-6', 'circulo');

        criarItemLista.appendChild(criarIcon);

        criarParagrafo.innerHTML = inputTarefas.value;

        criarItemLista.appendChild(criarParagrafo);

        criarItemLista.classList.add('list-group-item');
        
        tarefasInseridas.appendChild(criarItemLista);

        let span = document.createElement('span');
        span.innerHTML = "\u00d7";

        criarItemLista.appendChild(span);

    }

    inputTarefas.value = '';
}