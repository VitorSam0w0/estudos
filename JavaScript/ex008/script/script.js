function valor() {
    var vel = document.getElementById('velocidade')
    var vel2 = Number(vel.value)
    var res = document.getElementById('resultado')
    if (vel2>80) {
        res.style.color = 'red'
        res.innerHTML = `Sua velocidade de ${vel2}Km/h é maior do que a velocidade permitida de 80Km/h, MULTADO!`
    } else {
        res.style.color = 'green'
        res.innerHTML = `Sua velocidade de ${vel2}Km/h é menor do que a velocidade permitida de 80Km/h, continue assim!`
    }
}