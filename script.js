//script.js (using TypeScript compiled to JavaScript)
var button = document.getElementById("toggle-skills-btn");
button.addEventListener("click", function () {
    var skillsSection = document.getElementById("skills");
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        }
        else {
            skillsSection.style.display = "none";
        }
    }
});
