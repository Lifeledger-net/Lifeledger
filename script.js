const chatbotIcon = document.getElementById('chatbot-icon');
if (chatbotIcon) {
  chatbotIcon.addEventListener('click', () => {
    alert("Chatbot coming soon! You'll be able to talk to a doctor here.");
  });
}

// Toggle mobile nav
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if (menuToggle) {
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
}

