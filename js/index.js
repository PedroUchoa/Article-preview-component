let aux = 0
document.getElementById('show-button').addEventListener('click', ()=>{
    let card = document.getElementById("card-share")
    let triangulo = document.getElementById('triangulo')
    if (aux == 0){
        card.classList.remove("show")
        triangulo.classList.remove('show')
        aux = 1
    }else{
        card.classList.add('show')
        triangulo.classList.add('show')
        aux= 0
    }
})