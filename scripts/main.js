function myFunction() {
    setTimeout(function(){ alert("Hey le site xxxvidsxxx est trop bien. Viens dessus stp please"); }, 10000);
}

var psychButton = document.querySelector('button');

function toggle() {
    var el1 = document.getElementById("normal");
    var el2 = document.getElementById("psych");
    if (el2.disabled == "true") {
        
        
    } else {
        el1.disabled = "disabled";
        el2.disabled = undefined;
    }
}

psychButton.onclick = function() {
    toggle();
}