function Calcular() {
    var peso = window.document.getElementById('peso')
    var altura = window.document.getElementById('altura')
    var res = window.document.getElementById('res')
    var res_total = window.document.getElementById('res_total')
    var peso1 = Number(peso.value)
    var altura1 = Number(altura.value)
    var imc = peso1 / (altura1*altura1)

    res.innerHTML = (`<strong>O seu IMC ficou em ${imc}</strong>`) 

if(peso.value.length == 0){
     res.innerHTML = ("<strong>[ERRO] Preencha os campos corretamente</strong>")
     res2.innerHTML = ("")
}else if(altura.value.length == 0){
      res.innerHTML = ("<strong>[ERRO] Preencha os campos corretamente</strong>")
      res2.innerHTML = ("")
}else if(imc < 17 ){
     res2.innerHTML = ("<strong>Muito abaixo do peso</strong>")
    res3.innerHTML = ("<strong>@Copyright LDev</strong>")
}else if(imc <= 18.5){
      res2.innerHTML = ("<strong>Abaixo do peso</strong>")
      res3.innerHTML = ("<strong>@Copyright LDev</strong>")
}else if(imc <= 25){
      res2.innerHTML = ("<strong>Peso normal</strong>")
      res3.innerHTML = ("<strong>@Copyright LDev</strong>")
}else if(imc <= 30){
    res2.innerHTML = ("<strong>Acima do peso</strong>")
    res3.innerHTML = ("<strong>@Copyright LDev</strong>")
}else if(imc <= 35){
    res2.innerHTML = ("<strong>Obesidade I</strong>")
    res3.innerHTML = ("<strong>@Copyright LDev</strong>")
}else if(imc <= 40){
    res2.innerHTML = ("<strong>Obesidade II</strong>")
    res3.innerHTML = ("<strong>@Copyright LDev</strong>")
}else{
    res2.innerHTML = ("<strong>Obesidade III</strong>")
    res3.innerHTML = ("<strong>@Copyright LDev</strong>")
}
res3.style.color = "black"
res3.style.textAlign = 'center'
res2.style.textAlign = 'center'
res.style.textAlign = 'center'
}
