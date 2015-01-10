$(document).ready(function(){
	$("#cargando").bind('ajaxSend', function() {
		$(this).show();
	}).bind('ajaxStop', function() {
		$(this).hide();
	}).bind('ajaxError', function() {
		$(this).hide();
		$('#error').css('visibility','visible');
	});
});
