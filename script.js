
function upDate(previewPic) {

    console.log("Mouse over event triggered");

    console.log("Alt:", previewPic.alt);
    console.log("Source:", previewPic.src);

    let image = document.getElementById("image");

    image.innerHTML = previewPic.alt;

    image.style.backgroundImage = "url('" + previewPic.src + "')";
}


function undo() {

    let image = document.getElementById("image");

    image.style.backgroundImage = "url('')";

    image.innerHTML = "Hover over an image below to display here.";
    console.log("Mouse left the image");
}
