function click(n) {
    let parimp = document.getElementById('parimp.value')
    let text = document.getElementById('mensagem')

    if (parimp % 2 == 0) {
        return 'par'
    } else {
        return 'impar'
    }
    

    text.innerHTML = (n)
}