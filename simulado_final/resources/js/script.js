$('.allWidth').on('click', function(e){
	var pergunta = $(this).attr('data-pergunta')
	// limpar antes de macar a questao que a pessoa selecionou
	$('.pergunta_'+pergunta).removeClass('alert-info')
	// procura pelo input radio dentro da linha que o usuario clicou e marca como checked o radio
	$(this).find('input[type=radio]').prop('checked', true)

	$(this).addClass('alert-info') // fica azul
})

function corrigir() {
	// bloqueia tudo para nao trocar mais as opcoes que marcou
	$('input').prop('disabled', true);
	$('input').prop('readonly', true);

	// limpo as marcaoes azuis antes de marcar o colorido
	$('input[name=questao_1]:checked').parent().removeClass('alert-info');
	$('input[name=questao_2]:checked').parent().removeClass('alert-info');
	$('input[name=questao_3]:checked').parent().removeClass('alert-info');

	// lista todas as opcoes marcadas e verifica se elas sao data-isCorrect true
	if($('input[name=questao_1]:checked').attr('data-isCorrect')=="True") {
		$('input[name=questao_1]:checked').parent().addClass('alert-success') // deixa verde porque acertou a questao
	} else {
		$('input[name=questao_1]:checked').parent().addClass('alert-danger') // deixa vermelho porque errou a questao
	}

	if($('input[name=questao_2]:checked').attr('data-isCorrect')=="True") {
		$('input[name=questao_2]:checked').parent().addClass('alert-success') // deixa verde porque acertou a questao
	} else {
		$('input[name=questao_2]:checked').parent().addClass('alert-danger') // deixa vermelho porque errou a questao
	}

	if($('input[name=questao_3]:checked').attr('data-isCorrect')=="True") {
		$('input[name=questao_3]:checked').parent().addClass('alert-success') // deixa verde porque acertou a questao
	} else {
		$('input[name=questao_3]:checked').parent().addClass('alert-danger') // deixa vermelho porque errou a questao
	}
}