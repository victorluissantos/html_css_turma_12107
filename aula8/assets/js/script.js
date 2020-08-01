/* Responsavel por sortear um numero, e movimentar o personagem ate a casa */
window.posicao
function rand_dado() {
	$('.point').css('display', 'none')
	window.posicao = Math.floor((Math.random() * 6) + 1)
	$('.div_'+window.posicao).css('display','block')
	
	var left = $('.casa_'+window.posicao).css('margin-left')
	var top = $('.casa_'+window.posicao).css('margin-top')

	$('.person').css('margin-left', parseFloat(left))
	$('.person').css('margin-top', parseFloat(top))
}