const body = document.body;
let scrolllast = 0;  
window.addEventListener("scroll" , ()=> {
    let  currentscrroll =  window.pageYOffset 
    
    if (currentscrroll <= 0){
        body.classList.remove("scrollup") 
    }
    if (currentscrroll > scrolllast && !body.classList.contains("scrolldown")){
        body.classList.remove("scrollup");
        body.classList.add("scrolldown")
    }
    if (currentscrroll < scrolllast && body.classList.contains("scrolldown")){
        body.classList.remove("scrolldown");
        body.classList.add("scrollup")
    }    
    
    scrolllast = currentscrroll
});


const bar = document.querySelector(".bar")
const navbar = document.querySelector("nav")
const navlist = document.querySelectorAll(".navlink")
const headers = document.querySelectorAll("#header")

bar.addEventListener("click"  , ()=>{
   navbar.classList.toggle("show");  
   
})

navbar.addEventListener("click" , ()=>{
    navbar.classList.remove("show");
})

// -----------------------DOM Animation----------------------



const page_bg = document.querySelector(".bg")
const page_about = document.querySelector(".about-area")
const page_price = document.querySelector(".prcie_area")
const page_contact = document.querySelector(".contact_area")
const about_text = document.querySelector(".About_text")
const img = document.querySelector(".img")



window.addEventListener("scroll" ,()=>{
    if (window.scrollY >= 100){
        about_text.style.opacity = "1"
        about_text.style.transform = "translateX(0%)"
        img.style.transform = "translateX(0%)"
        img.style.transform = "translateX(360deg)"
        img.style.opacity = "1"

        about_text.style.transition = "1s ease-in-out"
        img.style.transition = "1s ease-in-out"


    }

    

    else{
        about_text.style.opacity = "0"
        about_text.style.transform = "translateX(100%)"
        img.style.transform = "translateX(-100%)"
        img.style.opacity = "0"

        
    }
})




