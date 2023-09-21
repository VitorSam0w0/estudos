function calcular() {
    var number = document.getElementById('NUMBER')
    var number2 = Number(number.value)
    var end = document.getElementById('END')
    var end2 = Number(end.value)
    var step = document.getElementById('STEP')
    var step2 = Number(step.value)
    var campo = document.getElementById('CAMPO')

    if (number2 >= 1 && end2 >= 1 && step2 >= 1) {

        var i = number2

        campo.innerHTML = ''

        if (end2 <= number2) {

            campo.innerHTML = ('erro, numero de final invalido!')

        } else {
            if (step2 > end2) {
                campo.innerHTML = ('Os passos devem ser menores do que o tamanho da contagem!')
            } else {
                if (end2 > number2) {

                    while (i <= end2) {
                        campo.innerHTML += '&#x1F449;' + i + ' '
                        i += step2
                    }
            }
            }
        }

    } else {
        campo.innerHTML = ('Coloque um valor valido!')
    }
}