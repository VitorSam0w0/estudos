function acao(){
    var data = new Date()
    var agora = data.getDay()
    var day = document.getElementById('dia')
    var comp = document.getElementById('completo')
    switch (agora) {
        case 0 :
            day.innerHTML = 'Domingo'
            comp.innerHTML = data
            break
        case 1 :
            day.innerHTML = 'Segunda'
            comp.innerHTML = data
            break
        case 2 : 
            day.innerHTML = 'Terça'
            comp.innerHTML = data
            break
        case 3 :
            day.innerHTML = 'Quarta'
            comp.innerHTML = data
            break
        case 4 :
            day.innerHTML = 'Quinta'
            comp.innerHTML = data
            break
        case 5 :
            day.innerHTML = 'Sexta'
            comp.innerHTML = data
            break
        case 6 :
            day.innerHTML = 'Sabádo'
            comp.innerHTML = data
            break
        default :
            day.innerHTML = 'Erro dia Invalido!'
    }
}