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
    var $red = document.querySelector('.red');
  var $green = document.querySelector('.green');
  var $blue = document.querySelector('.blue');
  var $purple = document.querySelector('.purple');
  var start = 0;

  var tl = new TimelineMax({
    repeat: -1,
    repeatDelay: 0.05,
  });
  // center
  tl.fromTo($green, 0.4, {x: 0}, {x: 30, ease: Linear.easeNone}, start);
  tl.fromTo($blue, 0.4, {x: 0}, {x: -30, ease: Linear.easeNone}, start);
  // ext 1st
  tl.to($green, 0.4, {x: 60, ease: Linear.easeNone}, start + 0.45);
  tl.fromTo($purple, 0.4, {x: 0}, {x: -30, ease: Linear.easeNone}, start + 0.45);
  tl.to($blue, 0.4, {x: -60, ease: Linear.easeNone}, start + 0.45);
  tl.fromTo($red, 0.4, {x: 0}, {x: 30, ease: Linear.easeNone}, start + 0.45);
  // ext return
  tl.to($green, 0.4, {x: 30, ease: Linear.easeNone}, start + 0.9);
  tl.to($purple, 0.4, {x: 0, ease: Linear.easeNone}, start + 0.9);
  tl.to($blue, 0.4, {x: -30, ease: Linear.easeNone}, start + 0.9);
  tl.to($red, 0.4, {x: 0, ease: Linear.easeNone}, start + 0.9);
  // center again
  tl.to($green, 0.4, {x: 0, ease: Linear.easeNone}, start + 1.35);
  tl.to($blue, 0.4, {x: 0, ease: Linear.easeNone}, start + 1.35);
    var email = document.getElementById("email").value;
    var role = document.getElementById("role").value;
    
    console.log(role);
    document.getElementById("errors").innerHTML = "";
    submitPOST("email=" + email + "&role=" + role,"php/register.php","errors");
}
