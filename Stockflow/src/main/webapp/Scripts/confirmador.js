/**
 * Confirmação de exclusão
 */
function confirmar(idcon){
	let resposta = confirm("Confirma a exclusão deste contato?")
	if (resposta === true){
	window.location.href = "delete?idcon=" + idcon
	}
}