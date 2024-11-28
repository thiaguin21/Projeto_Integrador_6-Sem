document.addEventListener("DOMContentLoaded", () => {
    // Verifica se há um produto para editar e preenche o formulário
    const produtoEdicao = JSON.parse(localStorage.getItem("produtoEdicao"));
    if (produtoEdicao) {
        document.getElementById("nome").value = produtoEdicao.nome;
        document.getElementById("marca").value = produtoEdicao.marca;
        document.getElementById("validade").value = produtoEdicao.validade || "";
        document.getElementById("codigo").value = produtoEdicao.codigo;
        document.getElementById("quantidade").value = produtoEdicao.quantidade;
        document.getElementById("referencia").value = produtoEdicao.referencia;
        document.getElementById("endereco").value = produtoEdicao.endereco || "";

        // Remove o produto em edição do Local Storage após preencher os campos
        localStorage.removeItem("produtoEdicao");
    }
});

document.getElementById("productForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const nome = document.getElementById("nome").value;
    const marca = document.getElementById("marca").value;
    const validade = document.getElementById("validade").value;
    const codigo = document.getElementById("codigo").value;
    const quantidade = document.getElementById("quantidade").value;
    const referencia = document.getElementById("referencia").value;
    const endereco = document.getElementById("endereco").value;  // Novo campo

    const produtos = JSON.parse(localStorage.getItem("produtos")) || [];
    const produtoEdicaoIndex = localStorage.getItem("produtoEdicaoIndex");

    if (produtoEdicaoIndex !== null) {
        // Atualiza o produto existente
        produtos[produtoEdicaoIndex] = { nome, marca, validade, codigo, quantidade, referencia, endereco };
        localStorage.removeItem("produtoEdicaoIndex");
        alert("Produto atualizado com sucesso!");
    } else {
        // Adiciona um novo produto
        produtos.push({ nome, marca, validade, codigo, quantidade, referencia, endereco });
        alert("Produto cadastrado com sucesso!");
    }

    localStorage.setItem("produtos", JSON.stringify(produtos));
    document.getElementById("productForm").reset();
});
