$(function(){
    $('#join').on('click', function(){
        var email = $('input[name=email]').val(),
            type = $('select[name=type]').val();

        if(email != "" && type != "")
        {
            $('#thank-you').show();
            $('#sign-up').hide();

            $.post('php/register', {
                email : email
            ,   role : type
            }, function() {
                console.log();
            });
        }
    });
});