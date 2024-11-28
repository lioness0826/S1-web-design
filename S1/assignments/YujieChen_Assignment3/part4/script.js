const $ = selector => document.querySelector(selector);

function validation(event){
    $("#date").focus();
    const emailPattern=/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const night=/^[0-9]+$/;
    const nightTrimed=$("#night").value.trim();
    const email = $("#email").value.trim();
    const date = $("#date").value.trim();
    const name = $("#name").value.trim();
    const phone = $("#phone").value.trim();
    let isValid=true;
    if(emailPattern.test(email)==false || email==""){
       $("#emailAlert").innerText="Must be a valid email address.";
        isValid=false;
    }else{$("#emailAlert").innerText="";}
    
    if (night.test(nightTrimed)==false||nightTrimed==""){
        $("#nightNumber").innerText="Must be numeric.";
        isValid=false;
    }else{$("#nightNumber").innerText="";}

    if(date==""){
        $("#require1").innerText="This field is required.";
        isValid=false;
    }else{$("#require1").innerText="";}

    if(name==""){
        $("#require2").innerText="This field is required.";
        isValid=false;
    }else{$("#require2").innerText="";}

    if(phone==""){
        $("#require3").innerText="This field is required.";
        isValid=false;
    }else{$("#require3").innerText="";}

    if(!isValid){
        event.preventDefault();
    }


}




document.addEventListener('DOMContentLoaded',()=>{
$("#submit").addEventListener('click',validation)
})




