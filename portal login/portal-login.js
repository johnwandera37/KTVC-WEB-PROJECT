//JAVASCRIPT FOR LOGIN FUNCIONALITY//
// Hardcoded credentials for demonstration//
//const validCredentials = {
   // username: 'student123',
    //password: 'password123'
//};

// Function to handle form submission//
//document.querySelector('form').addEventListener('submit', function (e) {
   // e.preventDefault(); // Prevent form from submitting the default way//
    
  //  const enteredUsername = document.getElementById('username').value;
   // const enteredPassword = document.getElementById('password').value;
    
    // Validate entered credentials//
   // if (enteredUsername === validCredentials.username && enteredPassword === validCredentials.password) {
        // Successful login, redirect to portal page//
   //     window.location.href = 'portal-home.html'; // Replace with actual portal page//
   // } else {
        // Unsuccessful login, show an alert or error message//
   //     alert('Incorrect username or password. Please try again.');
   // }
//});




//JAVASCRIPT FOR PASSWORD TOGGLE//
// Handle password visibility toggle//
//document.querySelector('.toggle-password').addEventListener('click', function () {
 //   const passwordInput = document.getElementById('password');
    
 //   if (passwordInput.type === 'password') {
   //     passwordInput.type = 'text'; // Show password//
  //      this.classList.remove('fa-eye');
  //      this.classList.add('fa-eye-slash');
  //  } else {
  //      passwordInput.type = 'password'; // Hide password//
   //     this.classList.remove('fa-eye-slash');
   //     this.classList.add('fa-eye');
  //  }
//});



// JAVASCRIPT FOR LOGIN FUNCTIONALITY
// Hardcoded credentials for demonstration
const validCredentials = {
    username: 'student123',
    password: 'password123'
};

// Function to handle form submission
document.getElementById('loginForm').addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent form from submitting the default way
    
    const enteredUsername = document.getElementById('username').value;
    const enteredPassword = document.getElementById('password').value;
    
    // Validate entered credentials
    if (enteredUsername === validCredentials.username && enteredPassword === validCredentials.password) {
        // Successful login, redirect to portal page
        window.location.href = 'portal-home-page.html'; // Replace with actual portal page
    } else {
        // Unsuccessful login, show an alert or error message
        alert('Incorrect username or password. Please try again.');
    }
});

// JAVASCRIPT FOR PASSWORD TOGGLE
// Handle password visibility toggle
document.querySelector('.toggle-password').addEventListener('click', function () {
    const passwordInput = document.getElementById('password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text'; // Show password
        this.classList.remove('fa-eye');
        this.classList.add('fa-eye-slash');
    } else {
        passwordInput.type = 'password'; // Hide password
        this.classList.remove('fa-eye-slash');
        this.classList.add('fa-eye');
    }
});
