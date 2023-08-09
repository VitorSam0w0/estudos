function enviar() {
    var agora = new Date()
    var agora2 = new Date()
    var agora2 = agora2.getMinutes()
    var hora = agora.getHours()
    var val = document.getElementById('valor')
    var res = document.getElementById('resposta')
    var hor = document.getElementById('hora')
    var valo = String(val.value)
    if (valo >= 13 && valo <= 17) {
        res.innerHTML = `Agora são ${hora}h e ${agora2}m Boa Tarde ⛅`
        hor.innerHTML = valo
    } else {
        if (hora > 17 && hora <= 23) {
            res.innerHTML = `Agora são ${hora}h e ${agora2}m Boa Noite 🌃`
            hor.innerHTML = valo
        } else {
            if (hora >= 0  && hora <= 5 ) {
                res.innerHTML = `Agora são ${hora}h e ${agora2}m Boa Madrugada ⛅`
                hor.innerHTML = valo
            } else {
                if (hora > 5 && hora < 13) {
                    res.innerHTML = `Agora são ${hora}h e ${agora2}m Bom Dia 🌞`
                    hor.innerHTML = valo
                } else {
                    res.innerHTML = `Essa Hora não existe ou não esta dentro do padrão do Sistema!`
                }
            }
        }
    }
}