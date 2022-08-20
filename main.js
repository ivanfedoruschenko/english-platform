document.getElementById ("submit-button").onclick = function () {
    const login = document.getElementById("login").value;
    const password = document.getElementById("password").value;
    if (login == "" && password == "") 
        return window.location.href = "authorization.html";
    
    else 
    window.location.href = "main-page.html";
    
    console.log ()
}


