function enviar() {
    var Number = document.getElementById('number')
    var Number1 = parseInt(Number.value)
    var One = document.getElementById('one')
    var One1 = parseInt(One.value = 1)
    var Two = document.getElementById('two')
    var Two1 = parseInt(Two.value = 2)
    var Three = document.getElementById('three')
    var Three1 = parseInt(Three.value = 3)
    var Four = document.getElementById('four')
    var Four1 = parseInt(Four.value = 4)
    var Five = document.getElementById('five')
    var Five1 = parseInt(Five.value = 5)
    var Six = document.getElementById('six')
    var Six1 = parseInt(Six.value = 6)
    var Seven = document.getElementById('seven')
    var Seven1 = parseInt(Seven.value = 7)
    var Eight = document.getElementById('eight')
    var Eight1 = parseInt(Eight.value = 8)
    var Nine = document.getElementById('nine')
    var Nine1 = parseInt(Nine.value = 9)
    var Ten = document.getElementById('ten')
    var Ten1 = parseInt(Ten.value = 10)
    var NUMBERcase1 = document.getElementById('numberCase1')
    var NUMBERcase2 = document.getElementById('numberCase2')
    var NUMBERcase3 = document.getElementById('numberCase3')
    var NUMBERcase4 = document.getElementById('numberCase4')
    var NUMBERcase5 = document.getElementById('numberCase5')
    var NUMBERcase6 = document.getElementById('numberCase6')
    var NUMBERcase7 = document.getElementById('numberCase7')
    var NUMBERcase8 = document.getElementById('numberCase8')
    var NUMBERcase9 = document.getElementById('numberCase9')
    var NUMBERcase10 = document.getElementById('numberCase10')

    var ERRO = document.getElementById('erro')
    var Body = document.getElementById('body')

    if (Number1 == 0) {
        ERRO.innerHTML = ('Digite um numero valido!')
        ERRO.style.color = 'red'
    } else {
        if (Number1 > 0) {
            if (Number1 > 9999) {
                ERRO.innerHTML = ('O numero maximo para calculo permitido é de 9999!  :(')
                ERRO.style.color = 'red'
            } else {
                if (Number1 <= 9999) {
                    ERRO.innerHTML = ('Resultado dos calculos:')
                    ERRO.style.color = 'gray'
                    numberValueOne = Number1*One1
                    numberValueTwo = Number1*Two1
                    numberValueThree = Number1*Three1
                    numberValueFour = Number1*Four1
                    numberValueFive = Number1*Five1
                    numberValueSix = Number1*Six1
                    numberValueSeven = Number1*Seven1
                    numberValueEight = Number1*Eight1
                    numberValueNine = Number1*Nine1
                    numberValueTen = Number1*Ten1
                
                    One.innerHTML = numberValueOne
                    Two.innerHTML = numberValueTwo
                    Three.innerHTML = numberValueThree
                    Four.innerHTML = numberValueFour
                    Five.innerHTML = numberValueFive
                    Six.innerHTML = numberValueSix
                    Seven.innerHTML = numberValueSeven
                    Eight.innerHTML = numberValueEight
                    Nine.innerHTML = numberValueNine
                    Ten.innerHTML = numberValueTen
                
                    NUMBERcase1.innerHTML = Number1
                    NUMBERcase2.innerHTML = Number1
                    NUMBERcase3.innerHTML = Number1
                    NUMBERcase4.innerHTML = Number1
                    NUMBERcase5.innerHTML = Number1
                    NUMBERcase6.innerHTML = Number1
                    NUMBERcase7.innerHTML = Number1
                    NUMBERcase8.innerHTML = Number1
                    NUMBERcase9.innerHTML = Number1
                    NUMBERcase10.innerHTML = Number1
                }
            }
        }
    }



}