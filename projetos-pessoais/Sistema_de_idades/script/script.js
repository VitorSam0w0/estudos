function enviar () {
    var TEXTO = document.getElementById('texto')
    var IMAGEM = document.getElementById('imagem')
    var IDADE = document.getElementById('idade')
    var IDADE2 = Number(IDADE.value)
    var checkMM = document.getElementById('checkM')
    var checkFF = document.getElementById('checkF')
    var IDADE1 = Number(IDADE.value)

    if (checkMM.checked && checkFF.checked==false) {
        if (IDADE1 >= 0 && IDADE1 <= 13) {
            IMAGEM.src = 'rapazes/guri0-13.jpg'
            TEXTO.innerHTML = `Menino de ${IDADE2} anos`
        } else {
            if (IDADE1 >= 14 && IDADE1 <= 17) {
                IMAGEM.src = 'rapazes/guri14-17.jpg'
                TEXTO.innerHTML = `Rapaz de ${IDADE2} anos`
            } else {
                if (IDADE1 >= 18 && IDADE1 <= 29) {
                    IMAGEM.src = 'rapazes/rapaz18-29.jpg'
                    TEXTO.innerHTML = `Jovem de ${IDADE2} anos`
                } else {
                    if (IDADE1 >= 30 && IDADE1 <= 49) {
                        IMAGEM.src = 'rapazes/rapaz30-49.jpg'
                        TEXTO.innerHTML = `Homem de ${IDADE2} anos`
                    } else {
                        if (IDADE1 >= 50 && IDADE1 <= 100) {
                            IMAGEM.src = 'rapazes/velho.jpg'
                            TEXTO.innerHTML = `Velho de ${IDADE2} anos`
                        } else {
                            if (IDADE1 >= 101 && IDADE1 <= 120) {
                                IMAGEM.src = 'rapazes/velhao.jpg'
                                TEXTO.innerHTML = `Idoso muito velho de ${IDADE2} anos`
                            } else {
                                if (IDADE1 > 121) {
                                    IMAGEM.src = 'imagem/e.jpg'
                                    TEXTO.innerHTML = `Slk foi de comes ja tem ${IDADE2} anos`
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        if (checkFF.checked && checkMM.checked==false) {
            if (IDADE1 >= 0 && IDADE1 <= 13) {
                IMAGEM.src = 'mulheres/menina0-13.jpg'
                TEXTO.innerHTML = `Menina de ${IDADE2} anos`
            } else {
                if (IDADE1 >= 14 && IDADE1 <= 17) {
                    IMAGEM.src = 'mulheres/menina13-17.jpg'
                    TEXTO.innerHTML = `Garota de ${IDADE2} anos`
                } else {
                    if (IDADE1 >= 18 && IDADE1 <= 29) {
                        IMAGEM.src = 'mulheres/garota18-29.jpg'
                        TEXTO.innerHTML = `Jovem de ${IDADE2} anos`
                    } else {
                        if (IDADE1 >= 30 && IDADE1 <= 49) {
                            IMAGEM.src = 'mulheres/mulher30-49.jpg'
                            TEXTO.innerHTML = `Mulher de ${IDADE2} anos`
                        } else {
                            if (IDADE1 >= 50 && IDADE1 <= 100) {
                                IMAGEM.src = 'mulheres/velha50-100.jpg'
                                TEXTO.innerHTML = `Velha de ${IDADE2} anos`
                            } else {
                                if (IDADE1 >= 101 && IDADE1 <= 120) {
                                    IMAGEM.src = 'mulheres/velhona-100.jpg'
                                    TEXTO.innerHTML = `Idosa muito velha de ${IDADE2} anos`
                                } else {
                                    if (IDADE1 > 121) {
                                        IMAGEM.src = 'mulheres/tua-mae.jpg'
                                        TEXTO.innerHTML = `Sua mãe tem ${IDADE2} anos`
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            IMAGEM.src = "rapazes/andre.jpg"
            TEXTO.innerHTML = `Andrè`
        }
    } 
}
