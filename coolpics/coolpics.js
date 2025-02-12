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


// Aria and role are for accessibility
function viewerTemplate(pic, alt) {
    return `<div class="viewer" aria-modal="true" role="dialog">
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


// The following events are for friendliness and accessibility
window.addEventListener("click", function (event) {
    let modal = document.querySelector('.viewer');
    // close the modal when user clicks outside of the image
    if (event.target === modal) {
    modal.remove();
    }
    });
    
    // allow the escape key to close the modal as well
    window.addEventListener("keydown", function (event) {
    let modal = document.querySelector('.viewer');
    if (event.key === "Escape") {
    modal.remove();
    }
    });