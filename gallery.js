function upDate(previewPic) {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = `url("${previewPic.src}")`;
    imageDiv.innerHTML = previewPic.alt;
    imageDiv.style.color = "white";
    imageDiv.style.textShadow = "2px 2px 4px black"; 
    console.log("Image updated:", previewPic.alt);
}

function undo() {
    let imageDiv = document.getElementById("image");
    imageDiv.style.backgroundImage = "none";
    imageDiv.innerHTML = "Hover mouse over an image<br> below to display here.🖱️";
    console.log("Image reset to default.");
}

function addAccessibilityFeatures() {
    let images = document.querySelectorAll(".preview");

    images.forEach((img, index) => {
        img.setAttribute("tabindex", "0");
        console.log(`Tabindex added to image ${index + 1}:`, img.alt);

        // Event listeners for keyboard navigation
        img.addEventListener("focus", function() {
            upDate(img);
        });

        img.addEventListener("blur", function() {
            undo();
        });
    });
}

document.addEventListener("DOMContentLoaded", addAccessibilityFeatures);
