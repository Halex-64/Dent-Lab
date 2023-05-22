//função para fazer login com base no e-mail e senha.
async function loginUser (email, password){
    //tentativa de login com base no e-mail e senha.
    try{
    const userCredential = await auth.signInWithEmailAndPassword(email, password);
    return "sucesso";
    //"pega" o erro e mostra no console.
    } catch(error){
        console.log(error);
    }
}

document.getElementById("btnLogin").addEventListener("click", async(event)=>{
    event.preventDefault();

    //pega o e-mail e senha do formulario com base no id
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    //crio uma variavel para armazenar a resposta da função loginUser()
    const result = await loginUser(email,password);
    //verifico se o retorno da função é = a sucesso
    if (result == "sucesso"){
        //envio o usuario para a tela após logar
        window.location.href= "home.html";
    }else{
        alert("Erro ao fazer o login")
    }});