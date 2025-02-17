document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form')
  const emailInput = document.querySelector('input[type="text"][required]')
  const passwordInput = document.querySelector('input[type = "text"][required]')
  const rememberMe = document.querySelector('input[type = "checkbox"]')

  // Fake user credentials for demo purposes (replace with real authentication)
  const users = {
    'user@example.com': 'password123',
    'admin@bank.com': 'adminPass',
  }

  //Load email if "Remember Me" was checked
  if (localStorage.getItem('rememberMe') === 'true') {
    emailInput.value = localStorage.getItem('savedEmail') || ''
    rememberMe.checked = true
  }

  //Prevent default submission of font
  form.addEventListener('submit', function (event) {
    event.preventDefault()

    //Get input values
    const email = emailInput.value.trim()
    const password = passwordInput.value.trim()
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach((el) => el.remove())

    if (!email || !password) {
      showError(emailInput, 'Email is required.')
      showError(passwordInput, 'Password is required.')
      return
    }

    if (!emailPattern.test(email)) {
      showError(emailInput, 'Enter a valid email address.')
      return
    }

    if (password.length < 6) {
      showError(passwordInput, 'Password must be at least 6 characters.')
      return
    }

    // Check if email exists in the users' list and validate password
    if (users[email] && users[email] === password) {
      // Save email if "Remember Me" is checked
      if (rememberMe.checked) {
        localStorage.setItem('savedEmail', email)
        localStorage.setItem('rememberMe', 'true')
      } else {
        localStorage.removeItem('savedEmail')
        localStorage.removeItem('rememberMe')
      }

      alert('Login successful!')
      window.location.href = 'dashboard.html' // Redirect to dashboard
    } else {
      showError(passwordInput, 'Incorrect email or password.')
    }
  })

  // Function to show error messages below input fields
  function showError(inputField, message) {
    const error = document.createElement('div')
    error.className = 'error-message'
    error.style.color = 'red'
    error.style.fontSize = '12px'
    error.style.marginTop = '5px'
    error.textContent = message
    inputField.parentNode.appendChild(error)
  }
})
