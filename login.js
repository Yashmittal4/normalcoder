let password=document.querySelector("input#inpassword.emailaddress");
const submit=document.getElementById("btnsumbitlogin");
submit.addEventListener("click",function(e){
    if((password.value=="") || (email_space.value=="") ) {
   console.warn("requirement not full filled");
   ValidateEmail();
   ValidatePassword();
    } 
    else {
      window.location.href="./index.html"
    }
    // window.location.href="./index.html"
})
let email_space=document.querySelector("input#inemail.emailaddress");


function ValidateEmail() 
{
 if (!email_space.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    email_space.style.border = "solid red" ;
    document.getElementById("empty").innerText = "Enter Valid Email!!";
    document.getElementById("empty").style.color = "red";
    return false;

  }

   else    {document.getElementById("empty").innerText = "";
        email_space.style.border = "none" ;
    return true; }
}

function ValidatePassword() 
{
 if (password.value=="")
  {
    password.style.border = "solid red" ;
    return false;

  }

   else    {
        password.style.border = "none" ;
    return true; }
}





