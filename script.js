document.addEventListener("DOMContentLoaded", function() {

    let nomeAluno = document.getElementById("nomeAluno");
    let sobrenomeAluno = document.getElementById("sobrenomeAluno");
    let idadeAluno = document.getElementById("idadeAluno");
    let nota = document.getElementById("nota");
    let enviarButton = document.getElementById("enviar");

    enviarButton.addEventListener("click", function() {
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

});

function createTable(aluno){
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
}
