const btn = document.querySelector(".header .collapse-button");
const nav = document.querySelector("header nav");
console.log(nav);
console.log(btn);

btn.addEventListener("click", () => {
    nav.classList.toggle("collabse-nav");
    console.log("Done")
})