function verificar() {
    var ano = new Date().getFullYear()
    var nas = document.getElementById("nacimento")
    var res = document.querySelector("div#res")
    var img = document.createElement("img")
    img.setAttribute("id" , "foto")
    if (nas.value == 0 || nas.value > ano) {
       window.alert("erro digite o ano certo")
    } else {
       var fsex = document.getElementsByName("text")
       var idade = ano - Number(nas.value)
       var genero = ""
       if (fsex[0].checked) {
          genero = "Homen"
          if (idade <= 5 && idade >= 0) {
            img.setAttribute("src" ,"bebe.jpg");
          } else if (idade < 12) {
            img.setAttribute("src" ,"criança.jpg");
            } else if (idade < 21) {
            img.setAttribute("src" ,"jovemH.jpg");
            } else if (idade < 59) {
            img.setAttribute("src" ,"adultoH.jpg");
            } else if (idade > 59) {
              img.setAttribute("src" ,"idosoH.jpg");
            }
       } else if (fsex[1].checked) {
        genero = "Mulher"
        if (idade <= 5 && idade >= 0) {
          img.setAttribute("src" ,"bebe.jpg");
        } else if (idade < 12) {
          img.setAttribute("src" ,"criançaF.jpg");
          } else if (idade < 21) {
          img.setAttribute("src" ,"jovem.jpg");
          } else if (idade < 59) {
          img.setAttribute("src" ,"adultaM.jpg");
          } else if (idade > 59) {
            img.setAttribute("src" ,"idosaM.jpg");
          }
       }
       res.style.textAlign = "center"
       res.innerHTML = `detectamos ${genero} com ${idade} anos`
       res.appendChild(img)
      }
       
}