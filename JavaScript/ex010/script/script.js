function valor() {
    var vel = document.getElementById('velocidade')
    var vel2 = Number(vel.value)
    var result = document.getElementById('resultado')
    if (vel2 > 80) {
        result.innerHTML = `Sua velocidade é de ${vel2}Km/h isso é maior do que a permitida de 80Km/h, MULTADO!`
    } else {
        result.innerHTML = ` Sua velocidade é de ${vel2}Km/h isso esta dentro da velocidade permitida, continue assim!`
    }
}