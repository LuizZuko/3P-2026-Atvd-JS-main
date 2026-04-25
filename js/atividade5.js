const botao = document.getElementById("botao")
const nome = document.getElementById("nome")
const ul = document.getElementById("ul")

document.addEventListener('DOMContentLoaded', carregarLista);

botao.addEventListener('click', function() {
    const valorDoInput = nome.value;
    if (valorDoInput.trim() !== '') {
        criarli(valorDoInput);
        salvarStorage(); 
    }
});


function criarli (li){

    if (li.trim() !== '') {
        
    const novoItem = document.createElement('li');
    novoItem.textContent = li;
    ul.appendChild(novoItem);

    nome.value = '';
    nome.focus(); 
    }
}

function salvarStorage() {
    const itens = [];
    ul.querySelectorAll('li').forEach(li => {
        
        itens.push(li.textContent);

    });

    localStorage.setItem('minhaLista', JSON.stringify(itens));
}


function carregarLista(){
    const dadosSalvos = localStorage.getItem('minhaLista');

    if(dadosSalvos){
        const listaArray = JSON.parse(dadosSalvos)
        listaArray.forEach(item => criarli(item))
    }


}