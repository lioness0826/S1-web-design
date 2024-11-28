const $ = selector => document.querySelector(selector);

function processEntries(){
    subtotal=parseFloat($("#subtotal").value);
    taxRate=parseFloat($("#rate").value);
    if (subtotal <=0 || subtotal >=10000){
        alert("Subtotal must be > 0 and < 10000");
        return;
    }
    if(taxRate<=0 || taxRate >=12){
        alert("Tax Rate must be > 0 and < 12");
        return;
    }
    tax=subtotal*taxRate/100;
    total=tax+subtotal;
    $("#tax").value=tax;
    $("#total").value=total;
    $("#subtotal").focus();
}

const clear=()=>{
    clearText1();
    clearText2();
    $("#tax").value="";
    $("#total").value="";
};

function clearText1(){
    $("#subtotal").value="";
}

function clearText2(){
    $("#rate").value="";
}

document.addEventListener('DOMContentLoaded',()=>{
$("#calculate").addEventListener('click',processEntries);
$("#clear").addEventListener('click',clear);
$("#subtotal").addEventListener('click',clearText1);
$("#rate").addEventListener('click',clearText2);
});

