/* Over Follow Element */
const overFollow = document.querySelector(".over-follow");
const overFlow = document.querySelector(".overflow") as HTMLElement;

/* Sections */
const signUp = document.querySelector(".sign-up") as HTMLElement;
const signIn = document.querySelector(".sign-in") as HTMLElement;

/* Buttons */
const signUpButton = document.querySelector(".sign-up-btn") as HTMLElement;
const signInButton = document.querySelector(".sign-in-btn") as HTMLElement;

/* Generate animation spans */
for (let i = 0; i < 4; i++) {
    const span = document.createElement("span");
    overFollow?.appendChild(span);
}

/* Remove overFollow after animation ends */
setTimeout(() => {
    overFollow?.remove();
}, 15000);

/* Show main content after 16s */
window.addEventListener("load", () => {
    setTimeout(() => {
        overFlow.classList.add("show");
        signUp.classList.add("show", "active");
    }, 16000);
});

/* Handle Sign-Up button */
signUpButton.addEventListener("click", () => {
    overFlow.classList.add("translate-left");
    overFlow.classList.remove("translate-right");

    signUp.classList.add("translate-left");
    signUp.classList.remove("active");

    signIn.classList.add("active");
});

/* Handle Sign-In button */
signInButton.addEventListener("click", () => {
    overFlow.classList.add("translate-right");
    overFlow.classList.remove("translate-left");

    signUp.classList.remove("translate-left");
    signUp.classList.add("active");

    signIn.classList.remove("active");
});

