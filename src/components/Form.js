function Form() {

    function cadastrarUsuario(e){
        e.preventDefault()
        console.log("Cadastrou usuario!")
    }


    return(
        <>
         <h1>Meu cadastro:</h1>   
         <form action="formulario" onSubmit={cadastrarUsuario}>
            <div>
                <input type="text" placeholder="Digite o seu nome" />
            </div>
            <div>
                <input type="submit" value="Cadastrar" />
            </div>
         </form>
        </>
    )
}

export default Form