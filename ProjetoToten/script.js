// ===============================
// ARMAZENAMENTO DO PEDIDO
// ===============================

function escolherHamburguer(item) {
    localStorage.setItem("hamburguer", item);
    window.location.href = "extra.html";
}

function escolherExtra(item) {
    localStorage.setItem("extra", item);
    window.location.href = "bebida.html";
}

function escolherBebida(item) {
    localStorage.setItem("bebida", item);
    window.location.href = "confirmacao.html";
}

// ===============================
// PÁGINA DE CONFIRMAÇÃO
// ===============================

document.addEventListener("DOMContentLoaded", function () {

    const hamburguer = localStorage.getItem("hamburguer");
    const extra = localStorage.getItem("extra");
    const bebida = localStorage.getItem("bebida");

    const elHamburguer = document.getElementById("hamburguerEscolhido");
    const elExtra = document.getElementById("extraEscolhido");
    const elBebida = document.getElementById("bebidaEscolhida");

    // Atualiza texto na tela
    if (elHamburguer) {
        elHamburguer.innerText = hamburguer || "Nenhum hambúrguer selecionado";
    }

    if (elExtra) {
        elExtra.innerText = extra || "Nenhum extra selecionado";
    }

    if (elBebida) {
        elBebida.innerText = bebida || "Nenhuma bebida selecionada";
    }

    // Botão de confirmação
    const btn = document.getElementById("btnConfirmar");

    if (btn) {
        btn.addEventListener("click", function () {

            alert(
                "Pedido confirmado!\n\n" +
                "🍔 " + (hamburguer || "-") + "\n" +
                "🥓 " + (extra || "-") + "\n" +
                "🥤 " + (bebida || "-")
            );

            // limpa pedido
            localStorage.removeItem("hamburguer");
            localStorage.removeItem("extra");
            localStorage.removeItem("bebida");

            // volta para início
            window.location.href = "index.html";
        });
    }
});