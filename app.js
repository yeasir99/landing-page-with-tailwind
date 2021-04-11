// handle mobile Nav
const burger = document.getElementById("burger");
const close = document.getElementById("close");
const nav = document.getElementById("nav");

burger.addEventListener("click", (e) => {
  nav.classList.add("right-0");
  nav.classList.remove("-right-full");
});

close.addEventListener("click", () => {
  nav.classList.remove("right-0");
  nav.classList.add("-right-full");
});
