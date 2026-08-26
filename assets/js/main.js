document.getElementById('vg-year').textContent = new Date().getFullYear();

const nav = document.getElementById('vg-nav');
const onScroll = () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(7,14,32,0.96)';
    nav.style.backdropFilter = 'blur(8px)';
    nav.style.boxShadow = '0 1px 0 rgba(255,255,255,0.05)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.boxShadow = 'none';
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const fadeEls = document.querySelectorAll('.vg-fade');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach((el) => obs.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add('visible'));
}
