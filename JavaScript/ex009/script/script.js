function enviar() {
    var pais = window.document.getElementById('pais')
    var paisString = String(pais.value)
    var res = window.document.getElementById('resultado')
    if (paisString == 'Brasil') {
        res.innerHTML = 'Brasileiro(a)'
        res.style.color = 'green'
    } else {
        res.innerHTML = 'Estrangeiro(a)'
        res.style.color = 'blue'
    }
}