var agora1 = new Date()
var agora = agora1.getHours()
var minutos = agora1.getMinutes()
function getHours() {
    if (agora >= 6 && agora < 13) {
        return "morning"
    } else {
        if (agora >= 13 && agora < 18) {
            return "afternoon"
        } else {
            if (agora >= 18 && agora <= 23) {
                return "night"
            } else {
                if (agora >= 0 && agora <= 5) {
                    return "dawn"
                }
            }
        }
    }
}

function getImage() {
    var period = getHours()
    var theimage = document.getElementById('imagem')
    var agoraHora = document.getElementById('horaAgora')
    if (period==="morning") {
        agoraHora.innerHTML = `Agora são ${agora}h e ${minutos}m`
        theimage.src = 'imagem/bomdia.jpg'
    } else {
        if (period==="afternoon") {
            agoraHora.innerHTML = `Agora são ${agora}h e ${minutos}m`
            theimage.src = 'imagem/boatarde.jpg'
        } else {
            if (period==="night") {
                agoraHora.innerHTML = `Agora são ${agora}h e ${minutos}m`
                theimage.src = 'imagem/boanoite.jpg'
            } else {
                if (period==="dawn") {
                    agoraHora.innerHTML = `Agora são ${agora}h e ${minutos}m`
                    theimage.src = 'imagem/boamadrugada.jpg'
                }
            }
        }
    }
}

getImage()