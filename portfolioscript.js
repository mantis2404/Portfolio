let butt=document.getElementById("navtoggle")
let nav=document.getElementsByClassName("nav_list")
console.log("E")
let inputValues=document.getElementsByClassName('form_input-values')

for(let values of inputValues){
    values.value=''
}
butt.addEventListener('click',()=>{
    nav[0].classList.toggle('nav-open');
})
function clearerror(){
    document.getElementById('submit').disabled=true;
    errors=document.getElementsByClassName('formerror')
    for(let item of errors)
    {
        item.innerHTML="";
    }
}
function seterror(id,error){
    elem=document.getElementById(id)
    elem.getElementsByClassName("formerror")[0].innerHTML=error;
}
function validform(){
    document.getElementById('submit').disabled=true;
    clearerror();
    var returnval=true;
    var name=document.forms['contactform']['fname'].value;
    console.log(name)
    if(name.length<10 || name.lenght==0){
        seterror("name","**Length is too short")
        document.getElementById('submit').disabled=false;
        returnval=false
    }
    var email=document.forms['contactform']['femail'].value;
    if(email.length>40){
        seterror("email","**E-mail length is too long")
        document.getElementById('submit').disabled=false;
        returnval=false
    }
    var phone=document.forms['contactform']['fphone'].value;
    if(phone.length!=10 ){
        seterror("phone","**Invalid number")
        document.getElementById('submit').disabled=false;
        returnval =false
    }
    return returnval;
}