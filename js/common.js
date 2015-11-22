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
function checkKeyPressed(e) {

    if(e.keyCode == 13){
        submitRegistration();
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
        {
            var response = xmlhttp.responseText;
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
