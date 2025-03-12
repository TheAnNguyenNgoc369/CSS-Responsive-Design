function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.color="white";
    imageDiv.style.textShadow = "2px 2px 4px black"; 
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover mouse over an image<br> below to display here.🖱️";
}