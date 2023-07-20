function carregar(){
    var msg = window.document.getElementById('mensagem')
    var img = window.document.getElementById('imagem')
    var msg2 = window.document.getElementById('mensagem2')
    var espaço = window.document.getElementById('espaço')
    var titulo = window.document.getElementById('titulo')
    var rodape = window.document.getElementById('rodape')
    var data = new Date()
    var hora = data.getHours()
    var minute = new Date()
    var minuto = minute.getMinutes()
    msg.innerHTML =`Agora são ${hora} horas e ${minuto} minuto`
    
    if (hora >= 0 && hora <5){
        img.src= 'fotomadruga.png'
        msg2.innerHTML = "Boa Madrugada para você"
        document.body.style.backgroundImage = "url('madrugada.jpg')"
        msg.style.color = ("white")
        msg2.style.color = ("white")
        titulo.style.color = ("white")
        rodape.style.color = ("white")
        espaço.style.backgroundColor = ("#6c5ae750")
    }
    else if (hora >=6 && hora <=12){
        img.src = 'fotomanha.png'
        msg2.innerHTML = "Bom Dia para você"
        document.body.style.backgroundImage = "url('fundo.jpg')"
        espaço.style.backgroundColor = ("#00b0c150")
    } else if 
        (hora >12 && hora <=18){
        img.src = 'fototarde.png'
        msg2.innerHTML = "Boa Tarde para você"
        document.body.style.backgroundImage = "url('tarde.jpg')"
        espaço.style.backgroundColor = ("#971b0750")
    } else{
        img.src = 'fotonoite.png'
        msg2.innerHTML = "Boa Noite para Você"
        document.body.style.backgroundImage = "url('noite.jpg')"
        espaço.style.backgroundColor = ("#2f02b250")
        msg.style.color = ("white")
        msg2.style.color = ("white")
        titulo.style.color = ("white")
        rodape.style.color = ("white")
        }

        if(minuto >1){
        msg.innerHTML = `Agora são ${hora} horas e ${minuto} minutos`
        }

        if(minuto ==0){
        msg.innerHTML = `Agora são ${hora} horas em ponto`
        }

}
 
