function formatarNumero(input) {
  // Se o campo estiver vazio, atribui "0,0"
  if (input.value === '') {
    input.value = '0,0';
    return;
  }

  // Remove todas as vírgulas e pontos
  let valorSemSeparadores = input.value.replace(/[,.]/g, '');

  // Adiciona uma vírgula como separador decimal
  let valorFormatado = valorSemSeparadores.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

  // Atualiza o valor do input
  input.value = valorFormatado;
}
