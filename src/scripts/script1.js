document.getElementById("mainn").style.marginTop = "50px";
const kmnawe = ["none", "block"];
function d() {
    let z = document.getElementById("main-page-log-in-frame");
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
    let k = document.getElementById("header-section").style.filter;
    k = k === "blur(5px)" ? "none" : "blur(5px)";
    
    hideUnhide("ado");
    document.getElementById("header-section").style.filter = k;
    document.getElementById("mainn").style.filter = k;
    document.getElementById("ter").style.filter = k;
}
