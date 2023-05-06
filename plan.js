let a=document.querySelector("button.btnsubmit");
let b=document.getElementById("plandelete");
let c=document.getElementById("nameplan");
let d=document.querySelector("input.addressto.planplace");
let e=c.innerText;
const silder=document.getElementById("ranges");
const values=document.querySelector(".value");
values.textContent=silder.value
silder.oninput=function(){
    values.textContent=this.value;
}

let email_plan=document.querySelector("input.mailto") ;
function ValidateEmailPlan() 
{
 if (!email_plan.value.match(/^[A-Za-z\._\-0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/))
  {
    email_plan.style.border = "solid red" ;
    document.getElementById("emptyplan").innerText = "Enter Valid Email!!";
    document.getElementById("emptyplan").style.color = "red";
    return false;

  }

   else    {document.getElementById("emptyplan").innerText = "";
        email_plan.style.border = "none" ;
    return true; }
}
function ValidateNamePlan() 
{
 if (c.value=="")
  {
    c.style.border = "solid red" ;
    return false;

  }

   else    {
        c.style.border = "none" ;
    return true; }
}
function ValidatePlacePlan() 
{
 if (d.value=="")
  {
    d.style.border = "solid red" ;
    return false;

  }

   else    {
        d.style.border = "none" ;
    return true; }
}




a.addEventListener("click",function(e){
    if((c.value=="") || (email_plan.value=="") || (d.value=="") ) {
        email_plan.style.border = "solid red" ;
        c.style.border = "solid red" ;
        d.style.border = "solid red" ;
        console.warn("requirement not full filled");
    } 
    else {
        alert(`Thank you for filling the details we will contact to you ASAP`);
        window.location.href="./index.html"
    }
})
