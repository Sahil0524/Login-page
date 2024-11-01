document.addEventListener("DOMContentLoaded", () => {
    // Get elements for login and registration forms
    const loginForm = document.querySelector(".login-container");
    const registerForm = document.getElementById("register");
    const loginBtn = document.getElementById("LoginBtn");
    const registerBtn = document.getElementById("registerBtn");
    const menuBtn = document.querySelector(".nav-menu-btn");
    const navMenu = document.querySelector(".nav-menu");

    // Input fields for registration
    const firstNameInput = document.querySelector("input[placeholder='Firstname']");
    const lastNameInput = document.querySelector("input[placeholder='Lastname']");
    const emailInput = document.querySelector("input[placeholder='Email']");
    const passwordInput = document.querySelector("input[placeholder='Password']");
    const submitBtn = document.querySelector(".submit");

    // Function to show the login form
    function showLoginForm() {
        if (registerForm) registerForm.style.display = "none";
        if (loginForm) loginForm.style.display = "block";
    }

    // Function to show the registration form
    function showRegisterForm() {
        if (loginForm) loginForm.style.display = "none";
        registerForm.style.display = "block";
    }

    // Event listeners for buttons
    if (loginBtn) {
        loginBtn.addEventListener("click", showLoginForm);
    }
    registerBtn.addEventListener("click", showRegisterForm);

    // Toggle mobile menu on button click
    menuBtn.addEventListener("click", () => {
        navMenu.classList.toggle("active");
    });

    // Event listener for register button
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        // Store registration data in localStorage
        const userData = {
            firstName: firstNameInput.value,
            lastName: lastNameInput.value,
            email: emailInput.value,
            password: passwordInput.value
        };

        if (userData.email && userData.password) {
            localStorage.setItem(userData.email, JSON.stringify(userData));
            alert("Registration successful! You can now log in.");
            showLoginForm();
        } else {
            alert("Please fill in all fields.");
        }
    });

    // Login function to verify credentials
    const login = () => {
        const email = prompt("Enter your email:");
        const password = prompt("Enter your password:");
        
        // Retrieve user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem(email));

        if (storedUser && storedUser.password === password) {
            alert(`Welcome, ${storedUser.firstName}! You are now logged in.`);
        } else {
            alert("Invalid email or password. Please try again.");
        }
    };

    // Bind login function to login button
    loginBtn.addEventListener("click", login);
});
