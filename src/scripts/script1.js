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