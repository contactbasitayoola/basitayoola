/**
 * BASIT AYOOLA: SAFE GLOBAL ARCHITECTURE
 * This version provides luxury features without moving or hiding layout elements.
 */

document.addEventListener('DOMContentLoaded', () => {

    // 1. HEADER SCROLL EFFECT
    // Adds a shadow and darkens the header only when scrolling.
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(5, 5, 7, 0.98)";
            header.style.boxShadow = "0 4px 20px rgba(0,0,0,0.8)";
        } else {
            header.style.backgroundColor = "rgba(5, 5, 7, 0.95)";
            header.style.boxShadow = "none";
        }
    });

    // 2. FAQ / ACCORDION LOGIC
    // Safe toggle for the Contact and Services pages.
    const faqQuestions = document.querySelectorAll('.faq-question, .faq-trigger');
    faqQuestions.forEach(question => {
        question.addEventListener('click', () => {
            const parent = question.parentElement;
            const answer = parent.querySelector('.faq-answer, .faq-content');
            
            // Check if answer exists before trying to style it
            if (answer) {
                const isVisible = answer.style.display === 'block';
                answer.style.display = isVisible ? 'none' : 'block';
                
                // Toggle the plus/minus sign if it exists
                const icon = question.querySelector('span');
                if (icon) {
                    icon.textContent = isVisible ? '+' : '-';
                }
            }
        });
    });

    // 3. SMOOTH ANCHOR LINKS
    // Ensures clicking "Back to Top" or section links is smooth.
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId !== '#') {
                e.preventDefault();
                const target = document.querySelector(targetId);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });

    // 4. FORM BUTTON FEEDBACK
    // Prevents double-clicking the submit button on the contact form.
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', () => {
            const btn = contactForm.querySelector('button');
            if (btn) {
                btn.innerHTML = "SENDING...";
                btn.style.opacity = "0.5";
                btn.style.pointerEvents = "none";
            }
        });
    }

    // 5. CONSOLE LOG IDENTITY
    console.log("Basit Ayoola Enterprise System: Online");
});