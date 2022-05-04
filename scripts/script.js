function menu_active(){
    const toggle = document.querySelector(".toggle");
    const check = document.getElementById("check");
    
    if(check.checked == true){
        toggle.classList.add("menu-active");
    } else {
        toggle.classList.remove("menu-active");
    }
}
