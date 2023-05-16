const hamburgerButton = document.querySelector(".hamburger-button");
// hamburgerButton.addEventListener("click", () => {
//     alert(" Holy it is not working")
// })

const mobilenav = document.querySelector(".mobile-nav")

hamburgerButton.addEventListener("click", ()=> {
    mobilenav.classList.toggle("display-none");
})