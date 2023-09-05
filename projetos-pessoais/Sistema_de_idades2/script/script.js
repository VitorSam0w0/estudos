function anos() {
    var idade = document.getElementById('IDADE')
    var idade2 = Number(idade.value)
    var masculino = document.getElementById('MASCULINO')
    var feminina = document.getElementById('FEMININA')
    var imagem = document.getElementById('IMAGEM')
    var texto = document.getElementById('TEXTO')
    var ano = new Date()
    var agora = ano.getFullYear()

    var final = agora - idade2

    if(masculino.checked && feminina.checked==false) {
        if(final >= 1 && final <= 13) {
            texto.innerHTML = `É um menino de ${final} anos`
            imagem.src = 'imagem/guri0-13.jpg'
        } else {
            if(final >= 14 && final <= 17){
                texto.innerHTML = `É um Adolescente de ${final} anos`
                imagem.src = 'imagem/guri14-17.jpg'
            } else {
                if(final >= 18 && final <= 29) {
                    texto.innerHTML = `É um Jovem de ${final} anos`
                    imagem.src = 'imagem/rapaz18-29.jpg'
                } else {
                    if(final >= 30 && final <= 49) {
                        texto.innerHTML = `É um Homem de ${final} anos`
                        imagem.src = 'imagem/rapaz30-49.jpg'
                    } else {
                        if(final >= 50 && final <= 100) {
                            texto.innerHTML = `É um Senhor de ${final} anos`
                            imagem.src = 'imagem/velho.jpg'
                        } else {
                            if(final >= 101 && final <= 120) {
                                texto.innerHTML = `Esse ae já ta com o  pé na cova com ${final} anos`
                                imagem.src = 'imagem/velhao.jpg'
                            } else {
                                if(final>121) {
                                    texto.innerHTML = `Foi de americanas`
                                    imagem.src = 'imagem/america.jpeg'
                                } else {
                                    if(final<0){
                                        texto.innerHTML = `Esse veio do futuro SLK`
                                        imagem.src = 'imagem/dv.jpg'
                                    } else {
                                        if(final===final) {
                                            texto.innerHTML = `Não completou nem 1 ano ainda`
                                            imagem.src = 'imagem/bb.jpg'
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    } else {
        if(feminina.checked && masculino.checked==false) {
            if(final >= 1 && final <= 13) {
                texto.innerHTML = `É uma menina de ${final} anos`
                imagem.src = 'imagem/menina0-13.jpg'
            } else {
                if(final >= 14 && final <= 17){
                    texto.innerHTML = `É uma Adolescente de ${final} anos`
                    imagem.src = 'imagem/menina13-17.jpg'
                } else {
                    if(final >= 18 && final <= 29) {
                        texto.innerHTML = `É uma Jovem de ${final} anos`
                        imagem.src = 'imagem/garota18-29.webp'
                    } else {
                        if(final >= 30 && final <= 49) {
                            texto.innerHTML = `É uma Mulher de ${final} anos`
                            imagem.src = 'imagem/mulher30-49.jpg'
                        } else {
                            if(final >= 50 && final <= 100) {
                                texto.innerHTML = `É uma Senhora de ${final} anos`
                                imagem.src = 'imagem/velha50-100.jpg'
                            } else {
                                if(final >= 101 && final <= 120) {
                                    texto.innerHTML = `Essa ae já ta com o  pé na cova com ${final} anos`
                                    imagem.src = 'imagem/velhona-100.jpg'
                                } else {
                                    if(final>121) {
                                        texto.innerHTML = `Foi de americanas`
                                        imagem.src = 'imagem/america.jpeg'
                                    } else {
                                        if(final<0){
                                            texto.innerHTML = `Essa veio do futuro SLK`
                                            imagem.src = 'imagem/mfut.jpg'
                                        } else {
                                            if(final===final) {
                                                texto.innerHTML = `Não completou nem 1 ano ainda`
                                                imagem.src = 'imagem/bb.jpg'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        } else {
            if(feminina.checked && masculino.checked) {
                texto.innerHTML = `André`
                imagem.src = 'imagem/andre.jpg'
            } else {
                if(feminina.checked==false && masculino.checked==false) {
                    texto.innerHTML = 'Escolha um gênero'
                    imagem.src = 'imagem/erro.jpg'
                }
            }
        }
    }

}
