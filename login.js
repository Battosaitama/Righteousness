let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
menu.onclick = () => {
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
};
window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}


function validateLogin(event) {
  event.preventDefault(); // Prevent form submission

  // Retrieve the entered username and password
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;

  // Perform your login validation here (e.g., check against a database)
  // Replace the following example condition with your own logic
  if (username === 'righteousness' && password === 'john') {
    // Redirect to the desired page upon successful login
    window.location.href = '../meme/meme.html';
  } else {
    // Display an error message
    document.getElementById('errorText').textContent = 'Invalid username or password';
  }
}


