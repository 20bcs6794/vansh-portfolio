const aboutMeContainer = document.getElementById("about-me");
const showButton = document.getElementById("show-about-me");
const closeButton = document.getElementById("hide-about-me");



// Show About Me container
showButton.addEventListener("click", (event) => {
  event.preventDefault(); // Prevent default anchor behavior
  aboutMeContainer.classList.remove("hidden");
  aboutMeContainer.classList.add("block");
});
