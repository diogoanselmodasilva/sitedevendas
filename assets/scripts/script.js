const menu = document.getElementById("menu");
const clickMenu = document.getElementById("clickMenu");
const cat = document.getElementById("menuCategorias");

clickMenu.addEventListener("click", ()=>{
   if(cat.style.display == 'none'){
    cat.style.display = 'block';
   }
    else{
        cat.style.display = 'none';
    }
})