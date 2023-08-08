function enviar() {
    var pais = window.document.getElementById('pais')
    var res = window.document.getElementById('resultado')
    if (pais == 'Brasil') {
        res.innerHTML = 'Brasileiro(a)'
    } else {
        res.innerHTML = 'Estrangeiro'
    }
}