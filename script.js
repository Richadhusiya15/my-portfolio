
/*  project image view */ 

const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modalImg");

function openImage(src){
    modal.style.display = "flex";
    modalImg.src = src;

}

document.querySelector(".close").onclick = function(){
    modal.style.display =  "none";
};

modal.onclick =  function(e){
    if(e.target  === modal){
        modal.style.display = "none";
    }
};



/* contact button dropdown */ 

const btn = document.getElementById("contactBtn");
const dropdown = document.getElementById("contactDropdown");
btn.addEventListener("click", function(e){
    e.stopPropagation();
    dropdown.classList.toggle("show");

});

document.addEventListener("click", function () {
    dropdown.classList.remove("show");
});

/* close img by clicking Esc key */

document.addEventListener("keydown", function(e){
    if(e.key === "Escape"){
        modal.style.display = "none";
    }
});