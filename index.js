const button = document.querySelector ('.button-task')
const input = document.querySelector ('.input-task')
const listaCompleta = document.querySelector('.list-tasks')

let minhaListaDeItens =[]
// o item acima e o array onde se encontra os registros de tarefas

function adicionarNovaTarefa(){
    const tarefa = input.value.trim();
    if (tarefa !=='')
    minhaListaDeItens.push({
        tarefa :input.value ,
        concluida: false ,
    })

    input.value=''
    mostrarTarefas()

}

function mostrarTarefas(){

    let novaLi = ''
    // letnovali='', deleta a lista do imput
    minhaListaDeItens.forEach((item , posicao) =>{
        // o segundo item do foreach , e referente a posição
        novaLi = novaLi + `
            <li class="task ${item.concluida && 'done' }">
                <img src="index/check_icon-icons.com_73639.png" alt="check-na-tarefa" onclick="concluirTarefa(${posicao})">
                <p>${item.tarefa}</p>
                <img src="index/cesta_delixo.png" onclick ="deletarItem (${posicao})">
        
            </li>
       
        
        
        `



    })

    listaCompleta.innerHTML = novaLi

    localStorage.setItem('lista' , JSON.stringify(minhaListaDeItens))


       
    

    
}
function concluirTarefa(posicao){
    minhaListaDeItens[posicao].concluida = !minhaListaDeItens[posicao].concluida

    mostrarTarefas()


}

function deletarItem (posicao) {
    minhaListaDeItens.splice(posicao , 1)
    mostrarTarefas()
}
function recarregarTarefa(){
    const tarefasDoLocalStorage = localStorage.getItem('lista')
    if(tarefasDoLocalStorage){

    minhaListaDeItens = JSON.parse(tarefasDoLocalStorage)
    }
    
    mostrarTarefas()
}
button.addEventListener('click' ,adicionarNovaTarefa)
document.addEventListener('DOMContentLoaded' , recarregarTarefa);