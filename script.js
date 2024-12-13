const produtos = [
    // Lanches (10 opções)
    { id: 1, nome: 'Wrap Integral', preco: 22.90, imagem: '1.jpg', categoria: 'lanches' },
    { id: 2, nome: 'Sanduíche Natural', preco: 19.90, imagem: '2.jpg', categoria: 'lanches' },
    { id: 3, nome: 'Pão Australiano Fit', preco: 24.90, imagem: '3.jpg', categoria: 'lanches' },
    { id: 4, nome: 'Tapioca Proteica', preco: 18.90, imagem: '4.jpg', categoria: 'lanches' },
    { id: 5, nome: 'Panini Integral', preco: 23.90, imagem: '5.jpg', categoria: 'lanches' },
    { id: 6, nome: 'Bowl de Proteína', preco: 26.90, imagem: '6.jpg', categoria: 'lanches' },
    { id: 7, nome: 'Crepioca', preco: 17.90, imagem: '7.jpg', categoria: 'lanches' },
    { id: 8, nome: 'Toast Fit', preco: 20.90, imagem: '8.jpg', categoria: 'lanches' },
    { id: 9, nome: 'Wrap de Atum', preco: 25.90, imagem: '9.jpg', categoria: 'lanches' },
    { id: 10, nome: 'Bagel Integral', preco: 21.90, imagem: '10.jpg', categoria: 'lanches' },

    // Refeições (10 opções)
    { id: 11, nome: 'Salada Bowl', preco: 25.90, imagem: '11.jpg', categoria: 'refeicoes' },
    { id: 12, nome: 'Prato Fit', preco: 32.90, imagem: '12.jpg', categoria: 'refeicoes' },
    { id: 13, nome: 'Filé de Frango Grelhado', preco: 34.90, imagem: '13.jpg', categoria: 'refeicoes' },
    { id: 14, nome: 'Bowl de Quinoa', preco: 28.90, imagem: '14.jpg', categoria: 'refeicoes' },
    { id: 15, nome: 'Salmão com Legumes', preco: 45.90, imagem: '15.jpg', categoria: 'refeicoes' },
    { id: 16, nome: 'Poke Bowl', preco: 38.90, imagem: '16.jpg', categoria: 'refeicoes' },
    { id: 17, nome: 'Risoto de Arroz Integral', preco: 30.90, imagem: '17.jpg', categoria: 'refeicoes' },
    { id: 18, nome: 'Bowl Proteico Vegano', preco: 33.90, imagem: '18.jpg', categoria: 'refeicoes' },
    { id: 19, nome: 'Atum Selado', preco: 42.90, imagem: '19.jpg', categoria: 'refeicoes' },
    { id: 20, nome: 'Strogonoff Fit', preco: 35.90, imagem: '20.jpg', categoria: 'refeicoes' },

    // Bebidas (10 opções)
    { id: 21, nome: 'Suco Verde', preco: 12.90, imagem: '21.jpg', categoria: 'bebidas' },
    { id: 22, nome: 'Smoothie', preco: 15.90, imagem: '22.jpg', categoria: 'bebidas' },
    { id: 23, nome: 'Água de Coco', preco: 8.90, imagem: '23.jpg', categoria: 'bebidas' },
    { id: 24, nome: 'Limonada Suíça', preco: 13.90, imagem: '24.jpg', categoria: 'bebidas' },
    { id: 25, nome: 'Suco de Frutas Vermelhas', preco: 14.90, imagem: '25.jpg', categoria: 'bebidas' },
    { id: 26, nome: 'Chá Gelado', preco: 10.90, imagem: '26.jpg', categoria: 'bebidas' },
    { id: 27, nome: 'Vitamina Proteica', preco: 16.90, imagem: '27.jpg', categoria: 'bebidas' },
    { id: 28, nome: 'Kombucha', preco: 13.90, imagem: '28.jpg', categoria: 'bebidas' },
    { id: 29, nome: 'Suco Detox', preco: 14.90, imagem: '29.jpg', categoria: 'bebidas' },
    { id: 30, nome: 'Água Saborizada', preco: 9.90, imagem: '30.jpg', categoria: 'bebidas' },

    // Sobremesas (10 opções)
    { id: 31, nome: 'Açaí Fit', preco: 18.90, imagem: '40.jpg', categoria: 'sobremesas' },
    { id: 32, nome: 'Pudim Proteico', preco: 14.90, imagem: '39.jpg', categoria: 'sobremesas' },
    { id: 33, nome: 'Brownie Fit', preco: 12.90, imagem: '38.jpg', categoria: 'sobremesas' },
    { id: 34, nome: 'Mousse de Chocolate Proteico', preco: 15.90, imagem: '37.jpg', categoria: 'sobremesas' },
    { id: 35, nome: 'Bolo Fit de Cenoura', preco: 13.90, imagem: '36.jpg', categoria: 'sobremesas' },
    { id: 36, nome: 'Pavê Low Carb', preco: 16.90, imagem: '35.jpg', categoria: 'sobremesas' },
    { id: 37, nome: 'Cocada Fit', preco: 10.90, imagem: '34.jpg', categoria: 'sobremesas' },
    { id: 38, nome: 'Cheesecake Proteico', preco: 17.90, imagem: '33.jpg', categoria: 'sobremesas' },
    { id: 39, nome: 'Brigadeiro Proteico', preco: 4.90, imagem: '32.jpg', categoria: 'sobremesas' },
    { id: 40, nome: 'Sorvete Zero Açúcar', preco: 14.90, imagem: '31.jpg', categoria: 'sobremesas' }
];

let carrinho = [];
let categoriaAtual = 'todos';

// Adicione a função de filtrar categoria
function filtrarCategoria(categoria) {
    categoriaAtual = categoria;
    
    // Atualiza botões ativos
    document.querySelectorAll('.categoria-btn').forEach(btn => {
        btn.classList.remove('active');
        if(btn.textContent.toLowerCase() === categoria) {
            btn.classList.add('active');
        }
    });
    
    renderizarProdutos();
}

// Renderiza produtos no cardápio
function renderizarProdutos() {
    const produtosGrid = document.querySelector('.produtos-grid');
    const produtosFiltrados = categoriaAtual === 'todos' 
        ? produtos 
        : produtos.filter(p => p.categoria === categoriaAtual);

    produtosGrid.innerHTML = produtosFiltrados.map(produto => `
        <div class="produto-card">
            <img src="${produto.imagem}" alt="${produto.nome}">
            <h3>${produto.nome}</h3>
            <p>R$ ${produto.preco.toFixed(2)}</p>
            <button onclick="adicionarAoCarrinho(${produto.id})">
                Adicionar ao Carrinho
            </button>
        </div>
    `).join('');
}

// Adiciona produto ao carrinho
function adicionarAoCarrinho(id) {
    const produto = produtos.find(p => p.id === id);
    carrinho.push(produto);
    atualizarCarrinho();
}

// Atualiza visualização do carrinho
function atualizarCarrinho() {
    const carrinhoItems = document.querySelector('.carrinho-items');
    const carrinhoQtd = document.querySelector('.carrinho-qtd');
    const totalSpan = document.getElementById('total');

    carrinhoQtd.textContent = carrinho.length;
    
    if (carrinho.length === 0) {
        carrinhoItems.innerHTML = '<p>Seu carrinho está vazio</p>';
    } else {
        carrinhoItems.innerHTML = carrinho.map(item => `
            <div class="carrinho-item">
                <span>${item.nome}</span>
                <span>R$ ${item.preco.toFixed(2)}</span>
                <button onclick="removerDoCarrinho(${item.id})" class="btn-remover">
                    Remover
                </button>
            </div>
        `).join('');
    }

    const total = carrinho.reduce((sum, item) => sum + item.preco, 0);
    totalSpan.textContent = total.toFixed(2);
}

// Mostra modal de checkout
function finalizarPedido() {
    if (carrinho.length === 0) {
        alert('Seu carrinho está vazio!');
        return;
    }
    document.getElementById('modal-checkout').classList.remove('hidden');
}

// Processa o pedido
document.getElementById('checkout-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const pedido = {
        items: carrinho,
        cliente: {
            nome: formData.get('nome'),
            telefone: formData.get('telefone'),
            endereco: formData.get('endereco')
        },
        pagamento: formData.get('pagamento'),
        total: carrinho.reduce((sum, item) => sum + item.preco, 0)
    };

    let mensagem = `Pedido confirmado!\n\n`;

    alert(mensagem);
    
    // Limpa o carrinho
    carrinho = [];
    atualizarCarrinho();
    
    // Limpa o formulário
    e.target.reset();
    
    // Fecha as janelas
    document.getElementById('modal-checkout').classList.add('hidden');
    toggleCarrinho();
});

// Adicione estas funções após a função atualizarCarrinho()

function toggleCarrinho() {
    const carrinhoSection = document.querySelector('.carrinho-section');
    carrinhoSection.classList.toggle('hidden');
}

// Adicione a função para remover itens do carrinho
function removerDoCarrinho(id) {
    const index = carrinho.findIndex(item => item.id === id);
    if (index !== -1) {
        carrinho.splice(index, 1);
        atualizarCarrinho();
    }
}

// Inicializa a página
renderizarProdutos(); 