
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
    if(nomeAluno.value.length > 3 && sobrenomeAluno.value.length > 3 && idadeAluno.value <= 18 && nota.value <= 10 ){
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
    
        tabela.appendChild(linha);
    
        linha.setAttribute("class", "linha")
        caixaNome.setAttribute("class", "caixa1")
        caixaIdade.setAttribute("class", "caixa2")
        caixaNota.setAttribute("class", "caixa3")
    }else{
        let divErro = document.getElementById("erro")
        let pErro = document.createElement("p");
        pErro.innerHTML = "Erro, digite os valores corretos";
        divErro.appendChild(pErro);
    }

    cadastrarNovoAluno.style.display = "block"
    formAluno.style.display = "none"



  
}
