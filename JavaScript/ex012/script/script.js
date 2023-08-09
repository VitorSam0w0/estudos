function enviar() {
    var val = document.getElementById('valor')
    var res = document.getElementById('resposta')
    var valo = parseFloat(val.value)
    if (valo >= 12 && valo <= 17) {
        res.innerHTML = `Boa Tarde 🌞`
    } else {
        if (valo > 17 && valo <= 23) {
            res.innerHTML = `boa Noite 🌃`
        } else {
            if (valo >= 0  && valo <= 5 ) {
                res.innerHTML = `Boa Madrugada ⛅`
            } else {
                if (valo > 5 && valo < 13) {
                    res.innerHTML = `Bom dia 🌞`
                } else {
                    res.innerHTML = `Essa Hora não existe ou não esta dentro do padrão do Sistema!`
                }
            }
        }
    }
}