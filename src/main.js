import './style.css'

/* FAQ: Antworten öffnen und schließen */

const faqQuestions = document.querySelectorAll(".faq-question");

faqQuestions.forEach((question) => {
  question.addEventListener("click", () => {
    const answerId = question.getAttribute("aria-controls");
    const answer = document.getElementById(answerId);
    const icon = question.querySelector(".faq-icon");

    if (!answer) return;

    const isExpanded = question.getAttribute("aria-expanded") === "true";

    question.setAttribute("aria-expanded", String(!isExpanded));
    answer.hidden = isExpanded;

    if (icon) {
      icon.textContent = isExpanded ? "+" : "−";
    }
  });
});
