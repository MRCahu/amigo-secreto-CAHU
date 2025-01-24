// Array para armazenar os nomes dos amigos
let amigos = [];

// Função para adicionar amigos
function adicionarAmigo() {
    // Capturar o valor do campo de entrada
    let campoTexto = document.querySelector("#amigo");
    let nome = campoTexto.value.trim(); // Remove espaços extras

    // Validar a entrada
    if (nome === "") {
        alert("Por favor, insira um nome válido."); // Alerta se o campo estiver vazio
    } else {
        // Adicionar o nome ao array de amigos
        amigos.push(nome);

        // Exibir uma mensagem de sucesso (opcional)
        alert(`O amigo ${nome} foi adicionado à lista!`);

        // Limpar o campo de entrada
        campoTexto.value = "";

        // Atualizar a lista de amigos na interface
        atualizarListaAmigos();
    }
}

// Função para atualizar a lista de amigos na interface
function atualizarListaAmigos() {
    let lista = document.querySelector("#listaAmigos");
    lista.innerHTML = ""; // Limpar a lista atual

    // Criar novos itens de lista com os amigos adicionados
    amigos.forEach((amigo) => {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
    if (amigos.length === 0) {
        alert("A lista está vazia! Adicione pelo menos um amigo para realizar o sorteio.");
        return;
    }

    // Sortear um índice aleatório com base no tamanho do array
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Exibir o resultado
    let resultado = document.querySelector("#resultado");
    resultado.innerHTML = `<li>O amigo sorteado foi: <strong>${amigos[indiceAleatorio]}</strong></li>`;
}
