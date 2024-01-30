const form = document.getElementById("form-contatos");
const redPhone = '<img src="./Images/redphone.png" alt="telefone vermelho"/>';

let linhas = " "

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    criaLinha();
    inserirLinha();     
})

function criaLinha(){
    const inputNome = document.getElementById("nome");
    const inputTelefone = document.getElementById("telefone");
    
    let linha = '<tr>';
    linha += `<td>${inputNome.value}</td>`;
    linha += `<td>${inputTelefone.value} ${redPhone}</td>`;
    linha += '</tr>';
    
    linhas += linha

    inputNome.value = " ";
    inputTelefone.value = " ";
}

function inserirLinha() {
    const corpoTabela = document.querySelector("tbody");
    corpoTabela.innerHTML = linhas;
}