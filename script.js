const btn = document.getElementById("contactBtn");
const dropdown = document.getElementById("contactDropdown");
btn.addEventListener("click", function(e){
    e.stopPropagation();
    dropdown.classList.toggle("show");

});

document.addEventListener("click", function () {
    dropdown.classList.remove("show");
});