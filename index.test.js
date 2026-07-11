// Gerado com o prompt: "Crie testes de unidade usando Jest para a função calcularTotalComDesconto, cobrindo cenários normais, descontos maiores que o total e carrinho vazio."
const { calcularTotalComDesconto } = require('./index');

describe('calcularTotalComDesconto', () => {
    it('deve calcular o total corretamente com um desconto válido', () => {
        const pedidos = [{ valor: 100 }, { valor: 50 }];
        const desconto = 30;
        const resultado = calcularTotalComDesconto(pedidos, desconto);
        expect(resultado).toBe(120);
    });

    it('deve retornar 0 se o desconto for maior que o total dos pedidos', () => {
        const pedidos = [{ valor: 100 }];
        const desconto = 150;
        const resultado = calcularTotalComDesconto(pedidos, desconto);
        expect(resultado).toBe(0);
    });

    it('deve calcular corretamente para um carrinho vazio', () => {
        const pedidos = [];
        const desconto = 10;
        const resultado = calcularTotalComDesconto(pedidos, desconto);
        expect(resultado).toBe(0);
    });
});
