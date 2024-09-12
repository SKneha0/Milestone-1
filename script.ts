//script.js (using TypeScript compiled to JavaScript)
let button = document.getElementById("toggle-skills-btn") as HTMLElement

button.addEventListener("click", () => {
    const skillsSection = document.getElementById("skills");
    if (skillsSection) {
        if (skillsSection.style.display === "none") {
            skillsSection.style.display = "block";
        } else {
            skillsSection.style.display = "none";
        }
    }
});
