
  //validação dos inputs//

function botaoenviar(){
    const inputnome = document.getElementById('nome');
    const inputdata = document.getElementById('data');
    const inputnumero = document.getElementById('numero');
    const inputemail = document.getElementById('email');
    const inputcidade = document.getElementById('cidade');

    if(!inputnome.value || !inputdata.value || !inputnumero.value || !inputemail.value || !inputcidade.value){
        alert('Preencha todos os campos solicitados!');
        return;
    } else{
        alert('Curriculo enviado com sucesso!');
        location.reload();
    } 
}

// Versão Verde do site//

function verdeview(){
        const titulo = document.getElementById( 'titulopage');
        const container = document.querySelector('.container');
        const dadospessoais = document.querySelector('.dadospessoais');
        const todosmodelos = document.querySelector('.todosmodelos');
        const p = document.querySelector("p");
        const botao = document.getElementById('botao');
        const pverde = document.getElementById('verdeview');
        const pazul = document.getElementById('azulview');
        const titulodadospessoais = document.getElementById('txtinputs');

        titulo.style.color = "white";
        container.style.backgroundColor = "#006400";
        container.style.color = "white";
        dadospessoais.style.backgroundColor = "#006400";
        dadospessoais.style.color = "white";
        todosmodelos.style.backgroundColor = "#006400";
        todosmodelos.style.color = "white";

        pverde.addEventListener('mouseenter', function(){
            pverde.style.backgroundColor = "black";      
        })
        pverde.addEventListener('mouseleave', function(){
            pverde.style.backgroundColor = "";
        })

        pazul.addEventListener('mouseenter', function(){
            pazul.style.backgroundColor = "black";      
        })
        pazul.addEventListener('mouseleave', function(){
            pazul.style.backgroundColor = "";
        })
        
        titulodadospessoais.addEventListener('mouseenter', function(){
            titulodadospessoais.style.backgroundColor = "black";
        })
        titulodadospessoais.addEventListener('mouseleave', function(){
            titulodadospessoais.style.backgroundColor = "";
        })

        botao.addEventListener('mouseenter', function(){
            botao.style.backgroundColor = "#006400";
        })
        botao.addEventListener('mouseleave', function(){
            botao.style.backgroundColor = "";
        })
} 

//versão azul/padrão do site//

function azulview(){
    const titulo = document.getElementById( 'titulopage');
        const container = document.querySelector('.container');
        const dadospessoais = document.querySelector('.dadospessoais');
        const todosmodelos = document.querySelector('.todosmodelos');
        const botao = document.getElementById('botao');
        const titulodadospessoais = document.getElementById('txtinputs');
        const pverde = document.getElementById('verdeview');
        const pazul = document.getElementById('azulview');

        titulo.style.color = "";
        container.style.backgroundColor = "";
        container.style.color = "";
        dadospessoais.style.backgroundColor = "";
        dadospessoais.style.color = "";
        todosmodelos.style.backgroundColor = "";
        todosmodelos.style.color = "";

        botao.addEventListener('mouseenter', function(){
            botao.style.backgroundColor = "#006400";
        })
        botao.addEventListener('mouseleave', function(){
            botao.style.backgroundColor = "";
        })

        titulodadospessoais.addEventListener('mouseenter', function(){
            titulodadospessoais.style.backgroundColor = "white";
        })
        titulodadospessoais.addEventListener('mouseleave', function(){
            titulodadospessoais.style.backgroundColor = "";
        })

        pverde.addEventListener('mouseenter', function(){
            pverde.style.backgroundColor = "white";  
        })
        pverde.addEventListener('mouseleave', function(){
            pverde.style.backgroundColor = "";
        })

        pazul.addEventListener('mouseenter', function(){
            pazul.style.backgroundColor = "white";      
        })
        pazul.addEventListener('mouseleave', function(){
            pazul.style.backgroundColor = "";
        })

        botao.addEventListener('mouseenter', function(){
            botao.style.backgroundColor = "#4169E1";
        })
        botao.addEventListener('mouseleave', function(){
            botao.style.backgroundColor = " ";
        })
}