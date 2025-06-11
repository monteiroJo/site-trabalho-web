const kmnawe = ["none", "block"];
function d() {
    let z = document.getElementById("login-block__");
    z.style.display="none";
    memo = !memo;
    if (memo) z.style.display = "block";
    /*z.style.display = 
    z.style.display == "none" ? 
    "block" : "none";*/
}
let memo = false;

function hideUnhide(c) {
    k = document
    .getElementById(c)
    .style
    .display;
    if (k=="block") {k = "none";} else {k = "block"};  
    document
    .getElementById(c)
    .style
    .display = k;
}
function hideUnhideLogin() {
    let k = document.getElementById("header-section__").style.filter;
    k = k === "blur(5px)" ? "none" : "blur(5px)";
    
    hideUnhide("login-block__");
    document.getElementById("header-section__").style.filter = k;
    document.getElementById( "main-section__" ).style.filter = k;
    document.getElementById("footer-section__").style.filter = k;
}
document.getElementById("main-section__").style.marginTop='50px';