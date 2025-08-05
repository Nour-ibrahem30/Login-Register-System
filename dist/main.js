"use strict";
const overFollow = document.querySelector(".over-follow");
const overFlow = document.querySelector(".overflow");
const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");
const slideBar = document.querySelector(".slide-bar");
const signUpButton = document.querySelector(".sign-up-btn");
const signInButton = document.querySelector(".sign-in-btn");
const submitButtonSignIn = document.querySelector(".sign-in .submit");
for (let i = 0; i < 4; i++) {
    const span = document.createElement("span");
    overFollow === null || overFollow === void 0 ? void 0 : overFollow.appendChild(span);
}
setTimeout(() => {
    overFollow === null || overFollow === void 0 ? void 0 : overFollow.remove();
}, 15000);
const formSignIn = document.querySelector(".sign-in form");
const nameInputSignIn = formSignIn.querySelector("input[type='text']");
const passwordInputSignIn = document.getElementById("password-sign-in");
const returnPassword = document.getElementById("return-password-sign-in");
const formSignUp = document.querySelector(".sign-up form");
const nameInputSignUp = formSignUp.querySelector("input[type='text']");
const passwordInputSignUp = formSignUp.querySelector("input[type='password']");
window.addEventListener("load", () => {
    setTimeout(() => {
        overFlow.classList.add("show", "translate-left");
        signIn.classList.add("show", "active");
        nameInputSignIn.focus();
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
    nameInputSignUp.focus();
    signIn.classList.remove("active");
});
submitButtonSignIn.addEventListener("click", () => {
    signIn.classList.remove("active");
    overFlow.classList.remove("translate-left");
    overFlow.classList.add("translate-right");
    signUp.classList.remove("translate-right");
    signUp.classList.add("active");
});
formSignIn.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInputSignIn.value.trim();
    const password = passwordInputSignIn.value.trim();
    const confirmPassword = returnPassword.value.trim();
    if (!name || !password || !confirmPassword) {
        alert("Please fill in all fields.");
        return;
    }
    if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return;
    }
    try {
        localStorage.setItem(name, password);
        console.log("✅ Data Saved:", { name, password });
        const modalTrigger = document.querySelector(".al");
        if (modalTrigger)
            modalTrigger.click();
    }
    catch (error) {
        console.error("❌ Error saving to localStorage", error);
    }
});
formSignUp.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = nameInputSignUp.value.trim();
    const password = passwordInputSignUp.value.trim();
    if (!name || !password) {
        alert("Please fill in all fields.");
        return;
    }
    const storedPassword = localStorage.getItem(name);
    if (storedPassword && storedPassword === password) {
        localStorage.setItem("loggedInUser", name);
        localStorage.setItem("password", password);
        const modalTrigger = document.querySelector(".al");
        if (modalTrigger)
            modalTrigger.click();
        setTimeout(() => {
            slideBar.style.display = "block";
            slideBar.classList.add("active", "show");
            overFlow.classList.remove("active");
            overFlow.style.opacity = "0";
            signIn.classList.remove("active");
            signUp.classList.remove("active", "show");
            const userName = document.querySelector(".dropdown .user-name");
            userName.textContent = window.localStorage.getItem("loggedInUser");
        }, 2000);
    }
    else {
        alert("❌ Invalid username or password!");
    }
});
//# sourceMappingURL=main.js.map