const $ = selector => document.querySelector(selector);

function precessEntry(){
    
    let input=parseFloat($("#income").value);
    if(isNaN(input) || input <=0){
        alert("Enter a valid number > 0")
        $("#income").focus();
        return;
    }
    calculateTax(input);
    $("#income").focus();
}

function calculateTax(input){
    let tax = 0;
    if(input >518400){
        tax=156235+(input-518400)*0.37;
    }else if(input>207350){
        tax=47367.5+(input-207350)*0.35;
    }else if(input>163300){
        tax=33271.5+(input-163300)*0.32;
    }else if(input>85525){
        tax=14605.5+(input-85525)*0.24;
    }else if(input>40125){
        tax=4617.5+(input-40125)*0.22;
    } else if(input>9875){
        tax=987.5+(input-9875)*0.12;
    }else{
        tax=input*0.1;
    }
    $("#tax").value=tax.toFixed(2);
}

document.addEventListener('DOMContentLoaded',
    ()=>{
        $("#calculate").addEventListener('click',precessEntry)}
);