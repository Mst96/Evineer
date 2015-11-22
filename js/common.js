$(function(){
	$('#join').on('click', function(){
		var email = $('input[name=email]').val(),
			type = $('select[name=type]').val();
/* 
 * Gets a supported ajax request object thing
*/
function getAjax()
{
    var xmlhttp;
    if(window.XMLHttpRequest)
    {
        xmlhttp = new XMLHttpRequest();
    }
    else
    {
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }
    return xmlhttp;
}

window.addEventListener("keydown", checkKeyPressed, false);
 
var previous;
function checkKeyPressed(e) 
{
    if(e.keyCode == 13)
    {
        setLoading(true);
        submitRegistration();
    }
}

function setLoading(isLoading)
{
    if(isLoading)
    {
//        document.getElementById("loadme").style.display = 'block';
        document.getElementById("checkmark").style.display = 'none';
        document.getElementById("submitButton").style.display = 'none';
    }
    else
    {
 //       document.getElementById("loadme").style.display = 'none';
        document.getElementById("submitButton").style.display = 'block';
        document.getElementById("checkmark").style.display = 'block';
    }
}


/* 
 * function that carries out ajax post
 */
function submitPOST(data,uri,response)
{
    var xmlhttp = getAjax();
    xmlhttp.onreadystatechange = function() 
    {
        if(xmlhttp.readyState==4 && xmlhttp.status == 200)

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

