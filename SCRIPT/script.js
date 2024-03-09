
let nomeAluno = document.getElementById("nomeAluno");
let sobrenomeAluno = document.getElementById("sobrenomeAluno");
let idadeAluno = document.getElementById("idadeAluno");
let nota1 = document.getElementById("nota1");
let nota2 = document.getElementById("nota2");
let nota3 = document.getElementById("nota3");
let enviarButton = document.getElementById("enviar");
let cadastrarNovoAluno = document.getElementById("cadastrarNovoAluno")
let formAluno = document.getElementsByClassName("aluno")[0]
let alunosArray = [];

cadastrarNovoAluno.addEventListener("click", function() {
    formAluno.style.display = "flex"
    cadastrarNovoAluno.style.display = "none"
});



enviarButton.addEventListener("click", function () {


    let media = mediaCalculo()


        class PegandoAlunos {
        constructor(nome, sobrenome, idade, nota1, nota2, nota3, media) {
            this.nome = nome;
            this.sobrenome = sobrenome;
            this.idade = idade;
            this.nota1 = nota1;
            this.nota2 = nota2;
            this.nota3 = nota3;
            this.media = media;


        }
    }

    let aluno = new PegandoAlunos(nomeAluno.value, sobrenomeAluno.value, idadeAluno.value, nota1.value, nota2.value, nota3.value, media);
    alunosArray.push(aluno);
    createTable(aluno);
});

function mediaCalculo(){
    return ((parseFloat(nota1.value) + parseFloat(nota2.value) + parseFloat(nota3.value)) / 3).toFixed(2);
}





function createTable(aluno) {
    let divErro = document.getElementById("erro");
    divErro.innerHTML = "";
    if(nomeAluno.value.length > 2 && sobrenomeAluno.value.length > 3 && idadeAluno.value >= 15 && idadeAluno.value <= 25 && nota1.value <= 10 && nota1.value.trim() !== "" && nota2.value <= 10 && nota2.value.trim() !== "" && nota3.value <= 10 && nota3.value.trim() !== ""){
        let tabela = document.querySelector("table");
        let linha = document.createElement("tr");
    
        let caixaNome = document.createElement("td");
        caixaNome.textContent = aluno.nome + " " + aluno.sobrenome;
        linha.appendChild(caixaNome);
    
        let caixaIdade = document.createElement("td");
        caixaIdade.textContent = aluno.idade;
        linha.appendChild(caixaIdade);
    
        let caixaNota1 = document.createElement("td");
        caixaNota1.textContent = aluno.nota1;
        linha.appendChild(caixaNota1);

        let caixaNota2 = document.createElement("td");
        caixaNota2.textContent = aluno.nota2;
        linha.appendChild(caixaNota2);

        let caixaNota3 = document.createElement("td");
        caixaNota3.textContent = aluno.nota3;
        linha.appendChild(caixaNota3);

        let media = document.createElement("td");
        media.textContent = aluno.media;
        linha.appendChild(media);

        let caixaRemover = document.createElement("td");
        let caixaEditar = document.createElement("td");

        let botaoRemover = document.createElement("button")
        botaoRemover.textContent = "Remover";
        botaoRemover.addEventListener("click", function(){
            // linha.remove();
            let index = alunosArray.indexOf(aluno);
            if (index !== -1) {
                alunosArray.splice(index, 1); 
                linha.remove();
            }

        });
        caixaRemover.appendChild(botaoRemover);


        let botaoEditar = document.createElement("button")
        botaoEditar.textContent = "Editar";
        botaoEditar.addEventListener("click", function(){
            nomeAluno.value = aluno.nome;
            sobrenomeAluno.value = aluno.sobrenome;
            idadeAluno.value = aluno.idade;
            nota1.value = aluno.nota1;
            nota2.value = aluno.nota2;
            nota3.value = aluno.nota3;
            formAluno.style.display = "block";
            cadastrarNovoAluno.style.display = "flex";
            linha.remove();            

        })
        caixaEditar.appendChild(botaoEditar);
        linha.appendChild(caixaRemover);
        linha.appendChild(caixaEditar);

    
        tabela.appendChild(linha);

        linha.setAttribute("class", "linha")
        caixaNome.setAttribute("class", "caixa1")
        caixaIdade.setAttribute("class", "caixa2")
        caixaNota1.setAttribute("class", "caixa3")
        caixaNota2.setAttribute("class", "caixa4")
        caixaNota3.setAttribute("class", "caixa5")
        media.setAttribute("class", "caixa6")

        cadastrarNovoAluno.style.display = "block"
        formAluno.style.display = "none"
        nomeAluno.value = "";
        sobrenomeAluno.value = "";
        idadeAluno.value = "";
        nota1.value = "";
        nota2.value = "";
        nota3.value = "";

        Array.from(tabela.getElementsByTagName("tr"))
            .slice(1) 
            .sort((a, b) => a.cells[0].textContent.localeCompare(b.cells[0].textContent))
            .forEach(row => tabela.appendChild(row));

    }else{
        let divErro = document.getElementById("erro")
        let pErro = document.createElement("p");
        pErro.setAttribute("class", "mensagem-erro");
        pErro.innerHTML = "Por favor, verifique os valores inseridos. <br>- Certifique-se de que o nome e sobrenome têm pelo menos 2 caracteres. <br>- A idade deve estar entre 15 e 25 anos. <br>- As notas devem estar dentro do intervalo de 0 a 10.";
        divErro.appendChild(pErro);
    } 
}



