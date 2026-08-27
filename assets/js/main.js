document.getElementById('vg-year').textContent = new Date().getFullYear();

const nav = document.getElementById('vg-nav');
const onScroll = () => {
  if (window.scrollY > 60) {
    nav.style.background = 'rgba(237,232,222,0.95)';
    nav.style.backdropFilter = 'blur(8px)';
    nav.style.borderBottom = '1px solid rgba(26,18,8,0.08)';
  } else {
    nav.style.background = 'transparent';
    nav.style.backdropFilter = 'none';
    nav.style.borderBottom = '1px solid transparent';
  }
};
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

const fadeEls = document.querySelectorAll('.vg-fade');
if ('IntersectionObserver' in window) {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        setTimeout(() => entry.target.classList.add('visible'), i * 80);
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  fadeEls.forEach((el) => obs.observe(el));
} else {
  fadeEls.forEach((el) => el.classList.add('visible'));
}
