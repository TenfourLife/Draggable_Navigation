// Getting HTML elements
const navigation = document.querySelector("nav"),
  toggleButton = navigation.querySelector(".nav-toggle");

toggleButton.addEventListener("click", () => {
  navigation.classList.toggle("open-nav");
});

// JS code to make the navigation draggable
function handleDrag({ movementY }) {
  // movementY gets mouse vertical value
  const navStyles = window.getComputedStyle(navigation), // getting all CSS styles of nav
    navTopValue = parseInt(navStyles.top), // getting nav top value & converting it into an integer
    navHeightValue = parseInt(navStyles.height), // getting nav height value & converting it into an integer
    windowHeight = window.innerHeight; // getting window height

  navigation.style.top =
    navTopValue > 0 ? `${navTopValue + movementY}px` : "1px";
  if (navTopValue > windowHeight - navHeightValue) {
    navigation.style.top = `${windowHeight - navHeightValue}px`;
  }
}

// This function will call when the user clicks the mouse button and moves the mouse on the nav
navigation.addEventListener("mousedown", () => {
  navigation.addEventListener("mousemove", handleDrag);
});

// These functions will call when the user releases the mouse button and leaves the mouse from the nav
navigation.addEventListener("mouseup", () => {
  navigation.removeEventListener("mousemove", handleDrag);
});
navigation.addEventListener("mouseleave", () => {
  navigation.removeEventListener("mousemove", handleDrag);
});
