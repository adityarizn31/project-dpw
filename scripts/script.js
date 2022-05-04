
function menu_active(){
    const toggle_menu = document.querySelector(".toggle-menu");
    
    const check = document.getElementById("check");
    
    if(check.checked == true){
        toggle_menu.classList.add("menu-active");
    } else {
        toggle_menu.classList.remove("menu-active");
    }
}
