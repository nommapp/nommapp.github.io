// Reveal-on-scroll (optional polish)
const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if (!prefersReduced) {
  const show = el => el.classList.add('in');
  const obs = new IntersectionObserver((ents)=>{
    ents.forEach(e=>{ if(e.isIntersecting){ show(e.target); obs.unobserve(e.target); }});
  }, { threshold: .12 });
  document.querySelectorAll('.section, .hero-frame > * , .member, .step, .qr, .btn-cta')
    .forEach(el => { el.classList.add('reveal'); obs.observe(el); });
}
