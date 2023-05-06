let placemain=document.querySelector("input.inputmargin.where");
const loginbtnm= document.getElementById("loginjs");
loginbtnm.addEventListener("click",function(e){
    window.location.href="./login.html"
})
const signbtnm= document.getElementById("signupjs");
signbtnm.addEventListener("click",function(e){
    window.location.href="./signup.html"
})
const past= document.getElementById("past");
past.addEventListener("click",function(f){
    window.location.href="./past_tour.html"
})

const plan= document.getElementById("plan");
plan.addEventListener("click",function(f){
    window.location.href="./plan.html"
})
const letsgo= document.getElementById("goplan");
letsgo.addEventListener("click",function(e){
    if((placemain.value=="")) {
        placemain.style.border = "solid red" ;
        console.warn("requirement not full filled");
    } 
    else {
        window.location.href="./plan.html"
    }
})
letsgo.addEventListener("click",function(f){
})
const offers= document.getElementById("offers");
offers.addEventListener("click",function(f){
    window.location.href="./exclusive.html"
})
// let var1=document.querySelector("input.inputmargin.where").innerHTML ;
// let var2=document.querySelectorAll("input.inputmargin.sizemain")[0].value ;
// let var3=document.querySelectorAll("input.inputmargin.sizemain")[1].value ;
// let var4=document.querySelectorAll("input.addressto.planplace")[0].value; 
// var4=var1;

