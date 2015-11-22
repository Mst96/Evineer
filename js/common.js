/*
 * Functions to get ajax object and stuff
 */

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
        submitRegistration();
}

function setLoading(isLoading)
{
    if(isLoading)
    {
        document.getElementById("errors").innerHTML = '<div class="loader"><svg class="circular" viewBox="25 25 50 50"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="8" stroke-miterlimit="10"/></svg> </div>';
    }
    else
        document.getElementById("errors").innerHTML = "";
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
        {
            var response = xmlhttp.responseText;
            setLoading(false);
            document.getElementById("errors").innerHTML = response;
        }
    }
    xmlhttp.open("POST",uri,true);
    xmlhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    xmlhttp.send(data);
}

/* 
 * posts registration form to server via ajax
 */
function submitRegistration()
{
    var email = document.getElementById("email").value;
    var role = document.getElementById("role").value;
    console.log(role);
    document.getElementById("errors").innerHTML = "";
    submitPOST("email=" + email + "&role=" + role,"php/register.php","errors");
}
