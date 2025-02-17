document.addEventListener('DOMContentLoaded', function () {
  const form = document.querySelector('form')
  const fullName = document.querySelector('input[required]:nth-of-type(1)')
  const email = document.querySelector('input[required]:nth-of-type(2)')
  const phone = document.querySelector('input[required]:nth-of-type(3)')
  const dob = document.querySelector('input[required]:nth-of-type(4)')
  const address = document.querySelector('input[required]:nth-of-type(5)')
  const accountType = document.querySelector('input[required]:nth-of-type(6)')
  const username = document.querySelector('input[required]:nth-of-type(7)')
  const password = document.querySelector('input[required]:nth-of-type(8)')
  const confirmPassword = document.querySelector(
    'input[required]:nth-of-type(9)'
  )
  const accountTypeInput = document.getElementById('account-type')
  const accountDropdown = document.getElementById('account-dropdown')
  const accountIcon = document.getElementById('account-icon')

  form.addEventListener('submit', function (event) {
    event.preventDefault() // Stop form from submitting immediately
    accountIcon.addEventListener('click', function () {
      accountDropdown.classList.toggle('show')
    })

    document.querySelectorAll('.dropdown-item').forEach((item) => {
      item.addEventListener('click', function () {
        accountTypeInput.value = this.textContent
        accountDropdown.classList.remove('show')
      })
    })

    document.addEventListener('click', function (event) {
      if (
        !accountIcon.contains(event.target) &&
        !accountDropdown.contains(event.target)
      ) {
        accountDropdown.classList.remove('show')
      }
    })

    // Handle Date Picker
    const dateInput = document.getElementById('dob')
    const dateIcon = document.getElementById('calendar-icon')

    dateIcon.addEventListener('click', function () {
      dateInput.focus() // Opens the date picker
    })

    // Clear previous error messages
    document.querySelectorAll('.error-message').forEach((el) => el.remove())

    let isValid = true

    // Function to show error messages below inputs
    function showError(inputField, message) {
      const error = document.createElement('div')
      error.className = 'error-message'
      error.style.color = 'red'
      error.style.fontSize = '12px'
      error.style.marginTop = '5px'
      error.textContent = message
      inputField.parentNode.appendChild(error)
      isValid = false
    }

    // Full Name validation
    if (!fullName.value.trim()) {
      showError(fullName, 'Full Name is required.')
    }

    // Email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.value.trim()) {
      showError(email, 'Email is required.')
    } else if (!emailPattern.test(email.value)) {
      showError(email, 'Enter a valid email address.')
    }

    // Phone number validation (only numbers, at least 10 digits)
    const phonePattern = /^[0-9]{10,}$/
    if (!phone.value.trim()) {
      showError(phone, 'Phone number is required.')
    } else if (!phonePattern.test(phone.value)) {
      showError(phone, 'Enter a valid phone number (at least 10 digits).')
    }

    // Date of Birth validation
    if (!dob.value.trim()) {
      showError(dob, 'Date of Birth is required.')
    }

    // Address validation
    if (!address.value.trim()) {
      showError(address, 'Residential Address is required.')
    }

    // Account Type validation
    if (!accountType.value.trim()) {
      showError(accountType, 'Account Type is required.')
    }

    // Username validation
    if (!username.value.trim()) {
      showError(username, 'Username is required.')
    }

    // Password validation
    if (!password.value.trim()) {
      showError(password, 'Password is required.')
    } else if (password.value.length < 6) {
      showError(password, 'Password must be at least 6 characters.')
    }

    // Confirm Password validation
    if (!confirmPassword.value.trim()) {
      showError(confirmPassword, 'Confirm Password is required.')
    } else if (password.value !== confirmPassword.value) {
      showError(confirmPassword, 'Passwords do not match.')
    }

    // If all validations pass, submit the form
    if (isValid) {
      alert('Account created successfully!')
      window.location.href = 'login.html' // Redirect to login page
    }
  })
})
