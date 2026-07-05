// sticky header
  window.addEventListener('scroll', () => {
    document.getElementById('siteHeader').classList.toggle('scrolled', window.scrollY > 40);
  });

  // reveal on scroll
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, {threshold:.15});
  document.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // mobile nav
  function toggleMobileNav(){
    document.getElementById('mNav').classList.toggle('open');
    document.getElementById('mOverlay').classList.toggle('open');
  }

  // language toggle
  function setLang(lang){
    document.querySelectorAll('[data-en]').forEach(el => {
      const val = el.getAttribute(lang === 'ur' ? 'data-ur' : 'data-en');
      if (val) el.innerHTML = val;
    });
    document.querySelectorAll('[data-en]').forEach(el => {
      el.classList.toggle('urdu', lang === 'ur');
    });
    document.querySelectorAll('.lang-toggle button').forEach(b => {
      b.classList.toggle('active', b.dataset.lang === lang);
    });
    document.documentElement.setAttribute('lang', lang);
  }

  // gallery scroll
  function scrollGal(dir){
    document.getElementById('galTrack').scrollBy({left: dir * 360, behavior:'smooth'});
  }

  // lightbox
  function openLightbox(el){
    const src = el.querySelector('img').src;
    document.getElementById('lightboxImg').src = src;
    document.getElementById('lightbox').classList.add('open');
  }
  function closeLightbox(){
    document.getElementById('lightbox').classList.remove('open');
  }

// property filters
function filterProps(cat, btn){
  document.querySelectorAll('.prop-filters button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.prop-card').forEach(card=>{
    card.style.display = (cat==='all' || card.dataset.cat===cat) ? '' : 'none';
  });
}

// gallery tabs
function filterGallery(cat, btn){
  document.querySelectorAll('.gal-tabs button').forEach(b=>b.classList.remove('active'));
  btn.classList.add('active');
  document.querySelectorAll('.gal-masonry .gitem').forEach(item=>{
    item.style.display = (cat==='all' || item.dataset.cat===cat) ? '' : 'none';
  });
}
