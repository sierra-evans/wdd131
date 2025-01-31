const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

function toggleMenu() {
  menu.classList.toggle("show");
}

menuButton.addEventListener("click", toggleMenu);

function handleResize() {
    const menu = document.querySelector(".menu");
    if (window.innerWidth > 1000) {
        menu.classList.remove("show");
        menu.classList.add("large");
    }
    else {
        menu.classList.remove("show");
        menu.classList.remove("large");
    }
}

handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
	// create a variable to hold the element that was clicked on from event.target
    const clickedElement = event.target;
	// get the src attribute from that element and 'split' it on the "-"
    const imgSrc = clickedElement.getAttribute("src").split("-")
	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const newImgSrc = `${imgSrc[0]}-full.jpeg`;
	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImgSrc, "full image"));
	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    document.querySelector(".close-viewer").addEventListener("click", closeViewer);
}

document.querySelector(".gallery").addEventListener("click", viewHandler);

function closeViewer() {
    document.querySelector(".viewer").remove();
}