var teste = 1
var p1 = window.document.getElementsByTagName('p')[teste]
window.document.write('olá, mundo ' + p1.innerHTML)

var d = window.document.getElementById('msg')
d.style.background = 'green'

var pid = window.document.querySelector('div#queryporID')
pid.style.background = 'red'

var pclass = window.document.querySelector('div.queryporCLASS')
pclass.style.background = 'blue'