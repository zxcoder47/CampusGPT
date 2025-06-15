document.addEventListener("DOMContentLoaded", () => {
  // ✅ Chatbot Functionality
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotContainer = document.getElementById("chatbot-container");
  const closeChatbot = document.getElementById("close-chatbot");
  const userInput = document.getElementById("user-input");
  const sendBtn = document.getElementById("send-btn");
  const chatbotMessages = document.getElementById("chatbot-messages");

  if (chatbotToggle) {
    chatbotToggle.addEventListener("click", () => {
  chatbotContainer.classList.add("active");
});
  }

  if (closeChatbot) {
    closeChatbot.addEventListener("click", () => {
  chatbotContainer.classList.remove("active");
});
  }

  if (sendBtn) {
    sendBtn.addEventListener("click", handleChat);
    userInput.addEventListener("keypress", e => {
      if (e.key === "Enter") handleChat();
    });
  }

  function handleChat() {
    const message = userInput.value.trim();
    if (!message) return;

    appendMessage(message, "user");

    let response = "Thank you! We'll get back to you shortly.";
    const msg = message.toLowerCase();

    if (msg.includes("admission") || msg.includes("apply")) {
      response = "You can apply online via our Admissions page. Fall 2025 admissions close on June 30.";
    } else if (msg.includes("faculty") || msg.includes("program")) {
      response = "Hazara University offers 50+ degree programs across 12 faculties.";
    } else if (msg.includes("contact") || msg.includes("phone") || msg.includes("email")) {
      response = "📧 info@hu.edu.pk | 📞 +92 997 414104 | Garden Campus, Mansehra, KPK.";
    } else if (msg.includes("fee") || msg.includes("tuition")) {
      response = "Fees vary by program. Undergrad is approx. PKR 25,000–40,000 per semester.";
    } else if (msg.includes("scholarship")) {
      response = "We offer need-based and merit-based scholarships. Check the Financial Aid section.";
    } else if (msg.includes("hello") || msg.includes("hi")) {
      response = "Hello! I'm HU Assistant. I can help with admissions, programs, contacts, and more.";
    }

    setTimeout(() => appendMessage(response, "bot"), 600);
    userInput.value = "";
  }

  function appendMessage(text, type) {
    const div = document.createElement("div");
    div.className = `${type}-message`;
    div.textContent = text;
    chatbotMessages.appendChild(div);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  // ✅ Contact Form (Optional)
  const contactForm = document.getElementById("contact-form");
  const contactResponse = document.getElementById("form-response");

  if (contactForm) {
    contactForm.addEventListener("submit", e => {
      e.preventDefault();
      contactResponse.textContent = "✅ Your message has been sent!";
      contactForm.reset();
    });
  }

  // ✅ Image Slider (if present)
  const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slider img");

if (slider && slides.length > 0) {
  let currentSlide = 0;

  function showSlide(n) {
    slides.forEach((slide, i) => {
      slide.style.transform = `translateX(${100 * (i - n)}%)`;
    });
  }

  showSlide(currentSlide);

  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 3000);
}
// Update the toggle functionality to match the CSS
chatbotToggle.addEventListener("click", () => {
  chatbotContainer.style.display = chatbotContainer.style.display === "flex" ? "none" : "flex";
});