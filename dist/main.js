"use strict";
const overFollow = document.querySelector(".over-follow");
const overFlow = document.querySelector(".overflow");
const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");
const signUpButton = document.querySelector(".sign-up-btn");
const signInButton = document.querySelector(".sign-in-btn");
for (let i = 0; i < 4; i++) {
    const span = document.createElement("span");
    overFollow === null || overFollow === void 0 ? void 0 : overFollow.appendChild(span);
}
setTimeout(() => {
    overFollow === null || overFollow === void 0 ? void 0 : overFollow.remove();
}, 15000);
window.addEventListener("load", () => {
    setTimeout(() => {
        overFlow.classList.add("show");
        signUp.classList.add("show", "active");
    }, 16000);
});
signUpButton.addEventListener("click", () => {
    overFlow.classList.add("translate-left");
    overFlow.classList.remove("translate-right");
    signUp.classList.add("translate-left");
    signUp.classList.remove("active");
    signIn.classList.add("active");
});
signInButton.addEventListener("click", () => {
    overFlow.classList.add("translate-right");
    overFlow.classList.remove("translate-left");
    signUp.classList.remove("translate-left");
    signUp.classList.add("active");
    signIn.classList.remove("active");
});
//# sourceMappingURL=main.js.map