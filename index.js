function Calcular() {
    var peso = window.document.getElementById('peso')
    var altura = window.document.getElementById('altura')
    var res = window.document.getElementById('res')
    var peso1 = Number(peso.value)
    var altura1 = Number(altura.value)
    var imc = peso1 / (altura1*altura1)

    res.innerHTML = (`O seu <strong>IMC</strong> ficou em ${imc}`) 

if(peso.value.length == 0){
     res.innerHTML = ("<strong>[ERRO] Preencha os campos corretamente</strong>")
     res2.innerHTML = ("")
}else if(altura.value.length == 0){
      res.innerHTML = ("<strong>[ERRO] Preencha os campos corretamente</strong>")
      res2.innerHTML = ("")
}else if(imc < 17 ){
     res2.innerHTML = ("<strong>Muito abaixo do peso</strong><br><br><br>")
    res2.innerHTML += ("<strong>@Copyright LDev</strong>")
}else if(imc <= 18.5){
      res2.innerHTML = ("<strong>Abaixo do peso</strong><br><br><br>")
      res2.innerHTML += ("<strong>@Copyright LDev</strong>")
}else if(imc <= 25){
      res2.innerHTML = ("<strong>Peso normal</strong><br><br><br>")
      res2.innerHTML += ("<strong>@Copyright LDev</strong>")
}else if(imc <= 30){
    res2.innerHTML = ("<strong>Acima do peso</strong><br><br><br>")
    res2.innerHTML += ("<strong>@Copyright LDev</strong>")
}else if(imc <= 35){
    res2.innerHTML = ("<strong>Obesidade I</strong><br><br><br>")
    res2.innerHTML += ("<strong>@Copyright LDev</strong>")
}else if(imc <= 40){
    res2.innerHTML = ("<strong>Obesidade II</strong><br><br><br>")
    res2.innerHTML += ("<strong>@Copyright LDev</strong>")
}else{
    res2.innerHTML = ("<strong>Obesidade III</strong><br><br><br>")
    res2.innerHTML += ("<strong>@Copyright LDev</strong>")
}

res2.style.textAlign = 'center'
res.style.textAlign = 'center'
}
