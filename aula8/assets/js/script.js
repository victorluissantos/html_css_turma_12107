/* Responsavel por sortear um numero, e movimentar o personagem ate a casa */
window.posicao
window.moeda = $('#moeda').text().trim()
window.agua = $('#agua').text().trim()

function rand_dado() {
	$('.point').css('display', 'none')
	window.posicao = Math.floor((Math.random() * 10) + 1)
	$('.div_'+window.posicao).css('display','block')

	// remover todos os possiveis active que existem
	$('.cs').removeClass('active')
	// adiciona o active na div que for de numeracao referente a sorteada
	$('.casa_'+window.posicao).addClass('active')
	
	// desabilitar todos os tooltips
	$('[data-toggle="tooltip"]').tooltip('disable').tooltip('hide')
	// habilitar o toolstips da casa que ele estiver
	$('.casa_'+window.posicao).tooltip('enable').tooltip('show')

	// controla a soma ou subtracao dos elmentos
	moeda = $('.casa_'+window.posicao).attr('data-moeda')
	agua = $('.casa_'+window.posicao).attr('data-agua')

	if(moeda!==undefined) {
		if (moeda.indexOf('-')) {
			window.moeda = parseInt(window.moeda)+parseInt(moeda) 
			$("#moeda").text(window.moeda) 
		} else {
			window.moeda = parseInt(window.moeda)-parseInt(moeda)
			$('#moeda').text(window.moeda)
		}
	} else {
		if (agua.indexOf('-')) {
			window.agua = parseInt(window.agua)+parseInt(agua)
			$('#agua').text(window.agua)
		} else {
			if ($('#agua').text().trim()=='0') {
				window.location.replace('perdeu.html')
			} else {
				window.agua = parseInt(window.agua)-parseInt(agua)
				$("#agua").text(window.agua)
			}
		}
	}

	var left = $('.casa_'+window.posicao).css('margin-left')
	var top = $('.casa_'+window.posicao).css('margin-top')

	$('.person').css('margin-left', parseFloat(left)+40)
	$('.person').css('margin-top', parseFloat(top))
}

/*Controla o tooltip*/
$(function () {
  $('[data-toggle="tooltip"]').tooltip('disable')
})