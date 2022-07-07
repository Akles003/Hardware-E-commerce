//Function Open Nav
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
}
  
//Function Close Nav
function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
} 

//------------------Função para mudar cores dos icones----------------------//
function mudaCor(n){
  //condicao para mudancas de cores
  if(n == 1){
    document.getElementById("icon-account1").style.color = "#00FF18"
    document.getElementById("link-icon1").style.color = "#00FF18"
  }else{
    if(n == 2){
      document.getElementById("icon-account2").style.color = "#00FF18"
      document.getElementById("link-icon2").style.color = "#00FF18"
    }else{
      if(n == 3){
        document.getElementById("icon-account3").style.color = "#00FF18"
        document.getElementById("link-icon3").style.color = "#00FF18"
      }else{
        if(n == 4){
          document.getElementById("icon-account4").style.color = "#00FF18"
          document.getElementById("link-icon4").style.color = "#00FF18"
        }else{
          document.getElementById("icon-account5").style.color = "#00FF18"
          document.getElementById("link-icon5").style.color = "#00FF18"
        }
      }
    }
  }
}

//------------------Função para voltar cores dos icones----------------------//
function voltaCor(n){
  //condicao para mudancas de cores
  if(n == 1){
    document.getElementById("icon-account1").style.color = "#FFF"
    document.getElementById("link-icon1").style.color = "#FFF"
  }else{
    if(n == 2){
      document.getElementById("icon-account2").style.color = "#FFF"
      document.getElementById("link-icon2").style.color = "#FFF"
    }else{
      if(n == 3){
        document.getElementById("icon-account3").style.color = "#FFF"
        document.getElementById("link-icon3").style.color = "#FFF"
      }else{
        if(n == 4){
          document.getElementById("icon-account4").style.color = "#FFF"
          document.getElementById("link-icon4").style.color = "#FFF"
        }else{
          document.getElementById("icon-account5").style.color = "#FFF"
          document.getElementById("link-icon5").style.color = "#FFF"
        }
      }
    }
  }
}

//------------------Função abrir tela de login----------------------//
var x = 1;//Esta variável tem a função de não permitir que a tela de login seja aberta quando ja possuir algum dado
function telaLogin(){

  if(x == 1){
    document.getElementById("fundo-login1").style.display = "block";
    document.getElementById("fundo-login2").style.display = "block";
    document.getElementById("area-login").style.display = "block";
    document.getElementById("body").style.overflow = "hidden";
    
    x = 2;
  }else{
    x = 1;
    location.reload();
  }
  
}

//------------------Acionar botão com a tecla Enter----------------------//
document.addEventListener("keypress", function(e) {
  if (e.key === 'Enter') {

      var btn = document.querySelector("#btn-enviar");

      btn.click();

  }
});

//------------------Função fechar tela de login----------------------//
function closeLogin() {
  document.getElementById("fundo-login1").style.display = "none";
  document.getElementById("fundo-login2").style.display = "none";
  document.getElementById("area-login").style.display = "none";
  document.getElementById("body").style.overflow = "initial";

  document.getElementById("email").style.boxShadow = "initial";
  document.getElementById("email").placeholder = "Email*";

  document.getElementById("pass").style.boxShadow = "initial";
  document.getElementById("pass").placeholder = "Senha*";
} 

//------------------Função Valida E-mail----------------------//
function validaEmail(){
  var usuario = document.getElementById("email").value;

  if(usuario.length < 3 || usuario.indexOf(" ") != -1 || usuario.indexOf("#") != -1 || usuario.indexOf("@") == -1 || usuario.indexOf(".") == -1){
    document.getElementById("email").value = "";
    document.getElementById("email").placeholder = "Insira um e-mail válido!";
    document.getElementById("email").style.cssText = "box-shadow: 0px 0px 10px 1px rgba(255, 0, 0, 1);";

    return 0;
  }else{
    document.getElementById("email").style.boxShadow = "initial";
    document.getElementById("email").placeholder = "Email*";

    return 1;
  }
    
}

function validaSenha(){
  var password = document.getElementById("pass").value;

  if(password.length < 8){
    document.getElementById("pass").value = "";
    document.getElementById("pass").placeholder = "Senha inválida!";
    document.getElementById("pass").style.cssText = "box-shadow: 0px 0px 10px 1px rgba(255, 0, 0, 1);";

    return 0;
  }else{
    document.getElementById("pass").style.boxShadow = "initial";
    document.getElementById("pass").placeholder = "Senha*";

    return 1;
  }
    
}

function enviaDados(){
  validaEmail();
  validaSenha();

  if(validaEmail() == 1 && validaSenha() == 1){
    var nome = document.getElementById("email").value;
    document.getElementById("user-login").innerHTML = nome;
    document.getElementById("link-icon1").href = "";
    closeLogin();
    
  }
}
 
