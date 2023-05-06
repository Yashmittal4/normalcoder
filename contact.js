let contactemail=document.querySelector("input.mailto");
let nameconatact=document.getElementById("namecontact");
let addressconatact=document.querySelector("input.addressto");
let submitconatact=document.querySelector("button.btnsubmit");

function ValidateNameContact() 
{
 if (nameconatact.value=="")
  {
    nameconatact.style.border = "solid red" ;
    return false;

  }

   else    {
        nameconatact.style.border = "none" ;
    return true; }
}

function ValidatePlaceContact() 
{
 if (addressconatact.value=="")
  {
    addressconatact.style.border = "solid red" ;
    return false;

  }

   else    {
        addressconatact.style.border = "none" ;
    return true; }
}

function ValidateEmailcontact() 
{
 if (!contactemail.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    contactemail.style.border = "solid red" ;
    document.getElementById("contactempty").innerText = "Enter Valid Email!!";
    document.getElementById("contactempty").style.color = "aqua";
    return false;

  }

   else    {document.getElementById("contactempty").innerText = "";
        contactemail.style.border = "none" ;
    return true; }
}
submitconatact.addEventListener("click",function(e){
    if((contactemail.value=="") || (nameconatact.value=="") || (addressconatact.value=="") ) {
        contactemail.style.border = "solid red" ;
        nameconatact.style.border = "solid red" ;
        addressconatact.style.border = "solid red" ;
        console.warn("requirement not full filled");
        ValidatePlaceContact();
        ValidateEmailcontact();
        ValidateNameContact();
    } 
    else {
        alert(`Thank you for contacting us,our team will catch up with you ASAP`);
        window.location.href="./index.html"
    }
})