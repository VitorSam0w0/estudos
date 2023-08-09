function enviar() {
    var idade = document.getElementById('idade')
    var idade2 = String(idade.value)
    var res = document.getElementById('resultado')
    if (idade2 >= 18) {
        res.innerHTML = `Voto obrigatorio!`
    } else {
        if (idade2 > 15) {
            res.innerHTML = `Voto Opcional`
        } else {
            res.innerHTML = `Não pode Votar!`
        }
    }
}