const navButton = document.querySelector(".button_nav");
const Nav = document.querySelector(".header_nav");
const primaryHeader = document.querySelector(".primary_header")

navButton.addEventListener("click", () => {
  Nav.hasAttribute("data-visible")
    ? navButton.setAttribute("aria-expanded", false)
    : navButton.setAttribute("aria-expanded", true);
  Nav.toggleAttribute("data-visible");
  primaryHeader.toggleAttribute("data-overlay");
});