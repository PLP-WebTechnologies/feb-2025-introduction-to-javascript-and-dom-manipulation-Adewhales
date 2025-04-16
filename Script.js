// Changes the text content dynamically
document.getElementById("change-text-btn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    const description = document.getElementById("description");
    title.textContent = "This is a new Title!";
    description.textContent = "Text has been successfully updated!";
    // Center align dynamically
    title.style.textAlign = "center";
    description.style.textAlign = "center";
    // Center align buttons
document.querySelectorAll("button").forEach(button => {
    button.style.display = "block";
    button.style.margin = "10px auto"; // Centers horizontally
})});

// Modifies CSS styles via JavaScript
document.getElementById("change-text-btn").addEventListener("click", function () {
    const title = document.getElementById("main-title");
    title.style.color = "blue";
    title.style.fontSize = "2.5rem";
    // Fix: Properly reference the body element
    document.body.style.textAlign = "center";
});

// Adds an element dynamically
document.getElementById("add-element-btn").addEventListener("click", function () {
    const section = document.querySelector("section");
    const newElement = document.createElement("p");
    newElement.textContent = "A new element has been added!";
    section.appendChild(newElement);
});

// Removes an element dynamically
document.getElementById("remove-element-btn").addEventListener("click", function () {
    const section = document.querySelector("section");
    const lastElement = section.lastElementChild;
    if (lastElement.tagName === "P") {
        section.removeChild(lastElement);
    }
});