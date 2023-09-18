const form = document.createElement('div');
form.innerHTML = `
  <div class="form-container">
    <h2>Formulário de Reclamações</h2>
    <form id="formulario">
      <div class="form-group">
        <label for="estabelecimento">Nome do Estabelecimento:</label>
        <input type="text" id="estabelecimento" name="estabelecimento" required>
      </div>
      <div class="form-group">
        <label for="reclamacao">Mensagem da Reclamação:</label>
        <textarea id="reclamacao" name="reclamacao" rows="5" required></textarea>
      </div>
      <div class="form-group">
        <label for="avaliacao">Avaliação:</label>
        <div class="rating">
          <input type="radio" id="estrela5" name="avaliacao" value="5">
          <label for="estrela5"></label>
          <input type="radio" id="estrela4" name="avaliacao" value="4">
          <label for="estrela4"></label>
          <input type="radio" id="estrela3" name="avaliacao" value="3">
          <label for="estrela3"></label>
          <input type="radio" id="estrela2" name="avaliacao" value="2">
          <label for="estrela2"></label>
          <input type="radio" id="estrela1" name="avaliacao" value="1">
          <label for="estrela1"></label>
        </div>
      </div>
      <button type="submit">Enviar Reclamação</button>
    </form>
  </div>

  <!-- Div onde os dados serão exibidos -->
  <div id="resultado"></div>
  <!-- Div onde as avaliações serão exibidas -->
  <div id="avaliacoesSalvas"></div>
`;

document.body.appendChild(form);

function exibirAvaliacoesSalvas() {
  const avaliacoesSalvas = JSON.parse(localStorage.getItem('avaliacoes')) || [];

  const avaliacoesDiv = document.getElementById('avaliacoesSalvas');
  avaliacoesDiv.innerHTML = '<h2>Avaliações Salvas</h2>';

  if (avaliacoesSalvas.length === 0) {
    avaliacoesDiv.innerHTML += '<p>Nenhuma avaliação salva.</p>';
    return;
  }

  for (let i = 0; i < avaliacoesSalvas.length; i++) {
    const avaliacao = avaliacoesSalvas[i];
    avaliacoesDiv.innerHTML += `
      <p><strong>Estabelecimento:</strong> ${avaliacao.estabelecimento}</p>
      <p><strong>Mensagem:</strong> ${avaliacao.reclamacao}</p>
      <p><strong>Avaliação:</strong> ${avaliacao.avaliacao}</p>
      <hr>
    `;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const formulario = document.getElementById('formulario');
  formulario.addEventListener('submit', function(event) {
    event.preventDefault();

    const estabelecimento = document.getElementById('estabelecimento').value;
    const reclamacao = document.getElementById('reclamacao').value;
    const avaliacao = document.querySelector('input[name="avaliacao"]:checked');
    let avaliacaoValue = "Não avaliado";

    if (avaliacao) {
      avaliacaoValue = avaliacao.value;
    }

    const dados = {
      estabelecimento,
      reclamacao,
      avaliacao: avaliacaoValue
    };

    let avaliacoesSalvas = JSON.parse(localStorage.getItem('avaliacoes')) || [];
    avaliacoesSalvas.push(dados);
    localStorage.setItem('avaliacoes', JSON.stringify(avaliacoesSalvas));

    exibirAvaliacoesSalvas();
  });

  exibirAvaliacoesSalvas();
});
