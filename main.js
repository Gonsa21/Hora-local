function carregar(){
    
var msg = document.getElementById('msg')
var img = document.getElementById('imagem')
var data = new Date()
var farmt = Intl.DateTimeFormat('pt-BR', {
    dateStyle: 'long',
});
var hora = Intl.DateTimeFormat('pt-BR',{
    hour: 'numeric',
    minute: "numeric",
})

msg.innerHTML = `<strong>Agora são ${hora.format(data)}, do dia ${farmt.format(data)}</strong>!`
if (hora >= 0 && hora <12) {
    //bom dia...
    img.src = 'manha.png'
    document.body.style.background = '#e2cd9f'
}else if (hora >= 12 && hora < 18){
    //boa tarde...
    img.src = 'tarde.png'
    document.body.style.background = '#722c04'
} else {
    //boa noite...
    img.src = 'noite.png'
    document.body.style.background = '#201a5a'
}
}
