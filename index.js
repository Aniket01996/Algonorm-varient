document.querySelector(".nav-bars").addEventListener("click", function () {
  console.log("bars clicked");
});

// Application tabs paragraphs
const tabs = document.querySelectorAll(".app-container h3");
const tabContent = document.querySelectorAll(".application-para");
const techCircle = document.querySelector(".tech-circle");

tabs.forEach((button) => {
  button.addEventListener("click", () => {
    const targetId = button.getAttribute("data-target");
    tabContent.forEach((content) => {
      content.style.display = content.id == targetId ? "block" : "none";
    });
    techCircle.classList.remove("rotate-circle");
    setTimeout(() => {
      techCircle.classList.add("rotate-circle");
    }, 100);
    console.log(`${button.textContent} para`);
  });
});
