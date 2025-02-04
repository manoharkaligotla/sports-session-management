// DOM Elements
const loginBtn = document.getElementById('login-btn');
const signupBtn = document.getElementById('signup-btn');
const logoutBtn = document.getElementById('logout-btn');
const authSection = document.getElementById('auth-section');
const authTitle = document.getElementById('auth-title');
const authForm = document.getElementById('auth-form');
const nameField = document.getElementById('name-field');
const emailField = document.getElementById('email');
const passwordField = document.getElementById('password');
const dashboard = document.getElementById('dashboard');
const sportsList = document.getElementById('sports-list');
const sessionsList = document.getElementById('sessions-list');
const createSportBtn = document.getElementById('create-sport-btn');
const createSessionBtn = document.getElementById('create-session-btn');

// State
let isLoggedIn = false;
let userRole = ''; // 'admin' or 'player'

// Handlers
loginBtn.addEventListener('click', () => {
  authTitle.textContent = 'Log In';
  nameField.classList.add('hidden');
  authSection.classList.remove('hidden');
  dashboard.classList.add('hidden');
});

signupBtn.addEventListener('click', () => {
  authTitle.textContent = 'Sign Up';
  nameField.classList.remove('hidden');
  authSection.classList.remove('hidden');
  dashboard.classList.add('hidden');
});

logoutBtn.addEventListener('click', () => {
  isLoggedIn = false;
  userRole = '';
  dashboard.classList.add('hidden');
  logoutBtn.style.display = 'none';
  loginBtn.style.display = 'inline';
  signupBtn.style.display = 'inline';
});

authForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = nameField.value;
  const email = emailField.value;
  const password = passwordField.value;

  if (authTitle.textContent === 'Sign Up') {
    // Mock signup logic
    console.log(`Signed up: ${name}, ${email}`);
    alert('Sign-up successful!');
  } else {
    // Mock login logic
    console.log(`Logged in: ${email}`);
    isLoggedIn = true;
    userRole = email.includes('admin') ? 'admin' : 'player'; // Mock role
    dashboard.classList.remove('hidden');
    logoutBtn.style.display = 'inline';
    loginBtn.style.display = 'none';
    signupBtn.style.display = 'none';
    loadDashboard();
  }
  authSection.classList.add('hidden');
});

createSportBtn.addEventListener('click', () => {
  const sportName = prompt('Enter sport name:');
  if (sportName) {
    const li = document.createElement('li');
    li.textContent = sportName;
    sportsList.appendChild(li);
  }
});

createSessionBtn.addEventListener('click', () => {
  const sessionDetails = prompt('Enter session details (e.g., "Football, 4 players, 5 PM"):');
  if (sessionDetails) {
    const li = document.createElement('li');
    li.textContent = sessionDetails;
    sessionsList.appendChild(li);
  }
});

function loadDashboard() {
  // Mock loading logic
  sportsList.innerHTML = '<li>Football</li><li>Basketball</li>';
  sessionsList.innerHTML = '<li>Football session at 5 PM</li>';
}
