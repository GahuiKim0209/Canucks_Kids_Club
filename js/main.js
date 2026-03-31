/* FAQ ACCORDION */
function toggleFaq(btn) {
  const item = btn.closest('.faq-item');
  const isOpen = item.classList.contains('open');
  document.querySelectorAll('.faq-item').forEach(i => i.classList.remove('open'));
  if (!isOpen) item.classList.add('open');
}

/* ACHIEVEMENTS SCROLL REVEAL */
const achEls = document.querySelectorAll('.ach-header, .ach-card');
const achObs = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el = entry.target;
      const delay = el.dataset.delay || 0;
      setTimeout(() => el.classList.add('visible'), delay);
      achObs.unobserve(el);
    }
  });
}, { threshold: 0.12 });
achEls.forEach(el => achObs.observe(el));
