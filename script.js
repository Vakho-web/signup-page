document.addEventListener('DOMContentLoaded', function() {
    
    const pass1 = document.getElementById("init-password");
    const pass2 = document.getElementById("conf-password");
    const output = document.getElementById("passcheck");

    pass1.addEventListener("keyup", checkPassword)
    pass2.addEventListener("keyup", checkPassword)
        
    function checkPassword() {
        if(pass1.value != pass2.value) {
            output.textContent = "Fix passwords"
        } else {
            output.textContent = "All good"
        }
        
    }
});