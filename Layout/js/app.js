//Variables of the popup references
//From popup class
var modal = document.getElementById("donwloaded");
//From form id and class form-box 
var span = document.getElementsByClassName("close")[0];

//open the popup
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
//close the popup
span.onclick = function() {
    modal.style.display = "none";
};

// Event listener, also prevent default behavior from refresh the page.
document
    .getElementById("downloadBookForm")
    .addEventListener("submit", function(event) {
        event.preventDefault();
        console.log(modal.style.display);
        modal.style.display = "block";
    });