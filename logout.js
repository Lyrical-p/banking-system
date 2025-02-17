// // logout.js

// // Function to handle user logout
// function logout() {
//   // Clear user session or token
//   sessionStorage.clear()
//   localStorage.clear()

//   // Redirect to login page
//   window.location.href = 'login.html'
// }

// // Call the logout function when the page loads
// window.onload = logout

document.getElementById('logout-btn').addEventListener('click', function () {
  localStorage.clear()
  sessionStorage.clear()
  alert('You have been logged out.')
  window.location.href = 'logout.html' // Redirect to the logout page
})
