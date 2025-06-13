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
    document.getElementById("footer-section__").style.filter = k;
    document.getElementById( "main-section__" ).style.filter = k;
}
function hideUnhideLoginB() {
    let k = document.getElementById("header-section__").style.filter;
    k = k === "blur(5px)" ? "none" : "blur(5px)";
    
    hideUnhide("login-block__");
    document.getElementById("header-section__").style.filter = k;
    document.getElementById("footer-section__").style.filter = k;
    document.getElementById( "noticia-main" ).style.filter = k;
}
function hhh() {
    let kkkkk = document.getElementById('grid-header');
    if (kkkkk.classList.contains('yes')) {
        kkkkk.classList.remove('yes');
        return;
    } 
    kkkkk.classList.add('yes');
    // document.getElementById('grid-header').classList.remove('yes');
}
// document.getElementById("main-section__").style.marginTop='50px';
// document.querySelector(".grid-area-c").style.display="none"
let logou = false;
function submitSignUp() {
    document.getElementById('register-form').addEventListener(
        "submit", function(event){
            event.preventDefault();
            let username = document.getElementById("nome").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let passwdconf = document.getElementById("password-confirm").value;

            if (password != passwdconf) {
                alert("senhas não são as mesmas"); return;
            }
            const user = {
                username: username,
                email: email,
                password: password,
                passwdconf: passwdconf,
            };
            localStorage.setItem(email, JSON.stringify(user));
            alert("feito com sucesso");
            window.location.href = "home.html";
        }
    )
}
function logInSubmit() {
    // log-in-form email password
    document.getElementById("log-in-form")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        let email = document.getElementById("email").value;
        let password = document.getElementById("password").value;

        let user = localStorage.getItem(email);

        if (user) {
            let parsedUser = JSON.parse(user);
            if (parsedUser.password === password) {
                localStorage.setItem("user", JSON.stringify(parsedUser));
                window.location.href = "home.html";
            } else {
                alert("senha incorreta");
            }
        } else {
            alert("esse usuário não foi encontrado");
        }
    })
}

if (document.getElementById("header-log-in") != null && localStorage.getItem("user") ) {
    document.getElementById("header-log-in").style.display="none"
}
let thispage = location.pathname.split("/").slice(-1)[0];
if (thispage === "usuario.html") {
    let hah = JSON.parse(localStorage.getItem("user"));
    document.getElementById("nome").innerHTML = hah.username;
    document.getElementById("email").innerHTML = hah.email;
}