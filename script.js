const taxaEntrega = 9;

document.querySelector("#calcular").addEventListener("click", () => {
  const campoValor = document.querySelector("#valor");
  const valorTexto = campoValor.value.trim();
  const valorSorvetes = Number(valorTexto);
  const erro = document.querySelector("#erro");
  const resultado = document.querySelector("#resultado");

  if (
    valorTexto === "" ||
    !Number.isFinite(valorSorvetes) ||
    valorSorvetes < 0
  ) {
    erro.textContent = "Digite um valor válido, igual ou maior que zero.";
    resultado.replaceChildren();
    return;
  }

  erro.textContent = "";

  const desconto = valorSorvetes * 0.1;
  const valorComDesconto = valorSorvetes - desconto;
  const total = valorComDesconto + taxaEntrega;

  const dinheiro = (valor) =>
    valor.toLocaleString("pt-BR", {
      style: "currency",
      currency: "BRL",
    });

  resultado.innerHTML = `
    <li>Sorvetes: ${dinheiro(valorSorvetes)}</li>
    <li>Desconto: ${dinheiro(desconto)}</li>
    <li>Sorvetes com desconto: ${dinheiro(valorComDesconto)}</li>
    <li>Entrega: ${dinheiro(taxaEntrega)}</li>
    <li><strong>Total: ${dinheiro(total)}</strong></li>
  `;
});
