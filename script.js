// Toggle between light and dark themes
const themeToggle = document.getElementById('themeToggle');
let isDark = false;

themeToggle.addEventListener('click', () => {
  document.body.style.backgroundColor = isDark ? '#f4f4f9' : '#333';
  document.body.style.color = isDark ? '#333' : '#f4f4f9';
  isDark = !isDark;
});
