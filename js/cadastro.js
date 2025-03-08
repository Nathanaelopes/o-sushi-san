function mostrarSenha(){
    var inputPass = document.getElementById ('senha')
    var btnshowPass = document.getElementById ('btn-senha')

    if(inputPass.type === 'password'){
        inputPass.setAttribute ('type','text')
        btnshowPass.classList.replace('bi-eye-fill','bi-eye-slash-fill')
    }else{
        inputPass.setAttribute ('type','password')
        btnshowPass.classList.replace('bi-eye-slash-fill','bi-eye-fill')
    }


}   