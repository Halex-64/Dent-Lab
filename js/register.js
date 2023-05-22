// função para registro 
async function registerUser(email, password, event) {
    //evitar eventos padrões
    event.preventDefault();
    try{
        //faz o processo de autenticação passando o e-mail e senha
        const userCredential = auth.createUserWithEmailAndPassword(email, password);
        const user = userCredential.user;

        //insere os dados no banco de dados, acessando a coleção users
        await db.collection("users").doc(user.uid).set(
            { 
                emaiil: email,
                uid: user.uid
            }
        );
            alert("Cadastro realizado com sucesso!");
    } catch(error){
        console.log(error);
    }
}

//pegar os dados do formulario e inseriri na função 
document.getElementById("registerButton").addEventListener("click", async (event)=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if(password !== confirmPassword){
        alert("Senhas não iguais");
    }
      // insere os dados na função
    registerUser(email,password,event);
    });