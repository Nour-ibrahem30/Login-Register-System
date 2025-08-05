/* Over Follow Element */
const overFollow = document.querySelector(".over-follow");
const overFlow = document.querySelector(".overflow") as HTMLElement;

/* Sections */
const signUp = document.querySelector(".sign-up") as HTMLElement;
const signIn = document.querySelector(".sign-in") as HTMLElement;
const slideBar = document.querySelector(".slide-bar") as HTMLElement;

/* Buttons */
const signUpButton = document.querySelector(".sign-up-btn") as HTMLElement;
const signInButton = document.querySelector(".sign-in-btn") as HTMLElement;
const submitButtonSignIn = document.querySelector(".sign-in .submit") as HTMLElement;

/* Generate animation spans */
for (let i = 0; i < 4; i++) {
    const span = document.createElement("span");
    overFollow?.appendChild(span);
}

/* Remove overFollow after animation ends */
setTimeout(() => {
    overFollow?.remove();
}, 15000);

/* Inputs */
const formSignIn = document.querySelector(".sign-in form") as HTMLFormElement;
const nameInputSignIn = formSignIn.querySelector("input[type='text']") as HTMLInputElement;
const passwordInputSignIn = document.getElementById("password-sign-in") as HTMLInputElement;
const returnPassword = document.getElementById("return-password-sign-in") as HTMLInputElement;

const formSignUp = document.querySelector(".sign-up form") as HTMLFormElement;
const nameInputSignUp = formSignUp.querySelector("input[type='text']") as HTMLInputElement;
const passwordInputSignUp = formSignUp.querySelector("input[type='password']") as HTMLInputElement;

/* Show main content after 16s */
window.addEventListener("load", () => {
    setTimeout(() => {
        overFlow.classList.add("show", "translate-left");
        signIn.classList.add("show", "active");
        nameInputSignIn.focus();
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
    nameInputSignUp.focus();

    signIn.classList.remove("active");
});

/* Fake submit button in sign-in */
submitButtonSignIn.addEventListener("click", () => {
    signIn.classList.remove("active");
    overFlow.classList.remove("translate-left");
    overFlow.classList.add("translate-right");
    signUp.classList.remove("translate-right");
    signUp.classList.add("active");
});

/* Sign-In Form - Save Data to localStorage */
formSignIn.addEventListener("submit", (e) => {
    e.preventDefault()
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
        const modalTrigger = document.querySelector(".al") as HTMLButtonElement;
        if (modalTrigger) modalTrigger.click();
    } catch (error) {
        console.error("❌ Error saving to localStorage", error);
    }
});

/* Sign-Up Form - Validate from localStorage */
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
        const modalTrigger = document.querySelector(".al") as HTMLButtonElement;
        if (modalTrigger) modalTrigger.click();
        setTimeout(() => {
            slideBar.style.display = "block";
            slideBar.classList.add("active", "show");
            overFlow.classList.remove("active");
            overFlow.style.opacity = "0";
            signIn.classList.remove("active");
            signUp.classList.remove("active", "show");
            /* Change Name For User Name*/
            const userName = document.querySelector(".dropdown .user-name") as HTMLElement;
            userName.textContent = window.localStorage.getItem("loggedInUser");
        }, 2000);
    } else {
        alert("❌ Invalid username or password!");
    }
});
