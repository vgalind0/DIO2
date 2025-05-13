// Função para calcular o saldo e o nível do jogador
function calcularRank(vitorias, derrotas) {
    // Calcula o saldo de vitórias
    const saldoVitorias = vitorias - derrotas;

    // Determina o nível do jogador com base nas vitórias
    const nivel = vitorias < 10 ? "Ferro" :
        vitorias <= 20 ? "Bronze" :
        vitorias <= 50 ? "Prata" :
        vitorias <= 80 ? "Ouro" :
        vitorias <= 90 ? "Diamante" :
        vitorias <= 100 ? "Lendário" : "Imortal";

    console.log(`O Herói tem um saldo de ${saldoVitorias} e está no nível de ${nivel}`);
    return { saldoVitorias, nivel };
}

calcularRank(97, 6);
