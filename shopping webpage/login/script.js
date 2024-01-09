function showPass() {
    let inputPass = document.querySelector("#pa");
    let x = document.querySelector("#eye-slash");
    if(inputPass.type === "password"){
        inputPass.type = "text";
        // x.className = x.className.replace(" fa-eye-slash"," fa-eye")
        x.classList.remove("fa-eye-slash");
        x.classList.add("fa-eye")
    }else{
        inputPass.type = "password"
        x.classList.remove("fa-eye");
        x.classList.add("fa-eye-slash");
    }
}