// button menuju ke features pada jumbotron
const scrollButton = document.querySelector(".hero .scroll");
const featuresSection = document.getElementById("features");

scrollButton.addEventListener("click", () => {
  featuresSection.scrollIntoView({ behavior: "smooth" });
});

// button menuju kembali ke main pada footer
const scrollToHomeButton = document.querySelector("footer button");
const homeSection = document.getElementById("home");

scrollToHomeButton.addEventListener("click", () => {
  homeSection.scrollIntoView({ behavior: "smooth" });
});
