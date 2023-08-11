function dia() {
    var agora = new Date()
    var semana = agora.getDay()
    var dia = document.getElementById('diaSem')
    var DIA = String(dia.value)
    switch (semana){
        case 4:
            console.log('ola')
            break
        default:
            console.log('Deu ruim!')
            break
    }
}