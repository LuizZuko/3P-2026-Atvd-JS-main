const botao = document.getElementById("botao");
const nome = document.getElementById("nome");
const ul = document.getElementById("ul");

botao.addEventListener("click", function() {
    const valorDigitado = nome.value;

    if (valorDigitado.trim() !== "") {
        const li = document.createElement("li");
        li.textContent = valorDigitado + " ";

        const btnRemover = document.createElement("button");
        btnRemover.textContent = "Remover";

        btnRemover.addEventListener("click", function() {
            ul.removeChild(this.parentElement);
        });

        li.appendChild(btnRemover);
        ul.appendChild(li);

        nome.value = "";
        nome.focus();
    }
});