"use strict";
const overFollow = document.querySelector(".over-follow");
const overFlow = document.querySelector(".overflow");
const signUp = document.querySelector(".sign-up");
const signIn = document.querySelector(".sign-in");
const slideBar = document.querySelector(".slide-bar");
const signOut = document.querySelector(".sign-out");
const ulElement = document.querySelector("ul.nav");
const signUpButton = document.querySelector(".sign-up-btn");
const signInButton = document.querySelector(".sign-in-btn");
const submitButtonSignIn = document.querySelector(".sign-in .submit");
const modalTrigger = document.querySelector(".al");
const nameButton = document.querySelector(".name");
const passwordButton = document.querySelector(".password");
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
        if (modalTrigger)
            modalTrigger.click();
        setTimeout(() => {
            slideBar.style.display = "block";
            slideBar.classList.add("active", "show");
            overFlow === null || overFlow === void 0 ? void 0 : overFlow.remove();
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
signOut.addEventListener("click", () => {
    window.localStorage.clear();
    const modalBody = document.querySelector(".modal .modal-body");
    modalBody.textContent = "Login Out Is Success";
    if (modalTrigger)
        modalTrigger.click();
    setTimeout(() => {
        window.location.reload();
    }, 1000);
});
nameButton.addEventListener("click", () => {
    const liName = document.createElement("li");
    liName.textContent = window.localStorage.getItem("loggedInUser");
    liName.classList.add("nav-item", "text-white");
    liName.style.cssText = "margin-left: 45px; margin-top: 10px;";
    ulElement.appendChild(liName);
});
passwordButton.addEventListener("click", () => {
    const liPassword = document.createElement("li");
    liPassword.textContent = window.localStorage.getItem("password");
    liPassword.classList.add("nav-item", "text-white");
    liPassword.style.cssText = "margin-left: 45px; margin-top: 10px;";
    ulElement.appendChild(liPassword);
});
//# sourceMappingURL=main.js.map