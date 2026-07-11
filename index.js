// Gerado com o prompt: "Crie uma função que calcula o total de pedidos com desconto aplicado, garantindo que o desconto não seja maior que o total."
function calcularTotalComDesconto(pedidos, desconto) {
    const totalPedidos = pedidos.reduce((total, pedido) => total + pedido.valor, 0);
    const totalComDesconto = totalPedidos - desconto;
    
    return totalComDesconto < 0 ? 0 : totalComDesconto;
}

module.exports = { calcularTotalComDesconto };
