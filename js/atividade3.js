const botao = document.getElementById("botao")
const nome = document.getElementById("nome")
const ul = document.getElementById("ul")

botao.addEventListener('click', function() {
    const valorDoInput = nome.value;

    if (valorDoInput.trim() !== '') {
        
        const novoItem = document.createElement('li');
        novoItem.textContent = valorDoInput;

        ul.appendChild(novoItem);

        nome.value = '';
        nome.focus(); 
    }


})