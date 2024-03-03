
let nomeAluno = document.getElementById("nomeAluno");
let sobrenomeAluno = document.getElementById("sobrenomeAluno");
let idadeAluno = document.getElementById("idadeAluno");
let nota = document.getElementById("nota");
let enviarButton = document.getElementById("enviar");
let cadastrarNovoAluno = document.getElementById("cadastrarNovoAluno")
let formAluno = document.getElementsByClassName("aluno")[0]

cadastrarNovoAluno.addEventListener("click", function() {
    formAluno.style.display = "block"
    cadastrarNovoAluno.style.display = "none"
});


enviarButton.addEventListener("click", function () {

        class PegandoAlunos {
        constructor(nome, sobrenome, idade, nota) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
            this.nota = nota;
        }
    }

    let aluno = new PegandoAlunos(nomeAluno.value, sobrenomeAluno.value, idadeAluno.value, nota.value);
    createTable(aluno);
});





function createTable(aluno) {
    let divErro = document.getElementById("erro");
    divErro.innerHTML = "";
    if(nomeAluno.value.length > 3 && sobrenomeAluno.value.length > 3 && idadeAluno.value <= 18 && nota.value <= 10){
        let tabela = document.querySelector("table");
        let linha = document.createElement("tr");
    
        let caixaNome = document.createElement("td");
        caixaNome.textContent = aluno.nome + " " + aluno.sobrenome;
        linha.appendChild(caixaNome);
    
        let caixaIdade = document.createElement("td");
        caixaIdade.textContent = aluno.idade;
        linha.appendChild(caixaIdade);
    
        let caixaNota = document.createElement("td");
        caixaNota.textContent = aluno.nota;
        linha.appendChild(caixaNota);

        let caixaRemover = document.createElement("td");
        let caixaEditar = document.createElement("td");

        let botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function(){
            linha.remove();
        });
        caixaRemover.appendChild(botaoRemover);


        let botaoEditar = document.createElement("button")
        botaoEditar.textContent = "Editar";
        botaoEditar.addEventListener("click", function(){
            nomeAluno.value = aluno.nome;
            sobrenomeAluno.value = aluno.sobrenome;
            idadeAluno.value = aluno.idade;
            nota.value = aluno.nota;
            formAluno.style.display = "block";
            cadastrarNovoAluno.style.display = "none";
            linha.remove();            

        })
        caixaEditar.appendChild(botaoEditar);
        linha.appendChild(caixaRemover);
        linha.appendChild(caixaEditar);

    
        tabela.appendChild(linha);

        linha.setAttribute("class", "linha")
        caixaNome.setAttribute("class", "caixa1")
        caixaIdade.setAttribute("class", "caixa2")
        caixaNota.setAttribute("class", "caixa3")
        cadastrarNovoAluno.style.display = "block"
        formAluno.style.display = "none"
        nomeAluno.value = "";
        sobrenomeAluno.value = "";
        idadeAluno.value = "";
        nota.value = "";
    }else{
        let divErro = document.getElementById("erro")
        let pErro = document.createElement("p");
        pErro.innerHTML = "Erro, digite os valores corretos";
        divErro.appendChild(pErro);
    } 
}


