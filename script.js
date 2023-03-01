async function buscaCep(cep) {
    
    const msgErro = document.querySelector(".erro");
    msgErro.innerHTML = ""

    try {
    var constaCEP = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    var constaCepJson = await constaCEP.json();

    if(constaCepJson.erro){
        throw Error("O cep não existe");
    }

    const logradouro = document.getElementById("endereco");
    const bairro = document.getElementById("bairro");
    const cidade = document.getElementById("cidade");
    const estado = document.getElementById("estado");

    logradouro.value = constaCepJson.logradouro;
    bairro.value = constaCepJson.bairro;
    cidade.value = constaCepJson.localidade;
    estado.value = constaCepJson.uf;

    console.log(constaCepJson);

    } catch(erro){
        msgErro.innerHTML = "*!!O cep não existe!!*";
        console.log(erro);
    }
}

const inputCep = document.getElementById("cep");
inputCep.addEventListener("focusout", () => {
    buscaCep(inputCep.value);
})
