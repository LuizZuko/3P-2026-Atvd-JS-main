const botao = document.getElementById("botao")
const titulo = document.getElementById("titulo")


 botao.addEventListener("click", function(){
    if( titulo.style.color == "white"){
        document.body.style.backgroundColor = "white"
         titulo.style.color = "Black"
    }else{
        document.body.style.backgroundColor = "Black"
        titulo.style.color = "white"
    }

 })
   