$(function(){
	$('#join').on('click', function(){
		var email = $('input[name=email]').val(),
			type = $('select[name=type]').val();

		if(email != "" && type != "")
		{
			$('#sign-up').hide();

			$.post('php/register', {
				email : email
			,	role : type
			}, function(data) {
				$('#thank-you').show();
			});
		}
	});
});