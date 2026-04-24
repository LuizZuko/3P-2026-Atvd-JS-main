const botao = document.getElementById("botao")
const titulo = document.getElementById("titulo")


 botao.addEventListener("click", function(){
    if(titulo.innerText == "Alex que um baidi."){
        
        titulo.innerText = `Atividade 01`
    }else{

        titulo.innerText = `Alex que um baidi.`
    }


 })