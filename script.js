document.addEventListener("DOMContentLoaded", () => {
  let lastScroll = 0;
  const nav = document.querySelector("nav");

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
      nav.classList.remove("hide", "show");
      return;
    }

    if (currentScroll > lastScroll) {
      nav.classList.add("hide");
      nav.classList.remove("show");
    } else {
      nav.classList.add("show");
      nav.classList.remove("hide");
    }

    lastScroll = currentScroll;
  });
});
<script>
  const btn = document.getElementById('backToTop');
  window.addEventListener('scroll', () => {
    btn.style.display = (window.scrollY > 100) ? 'block' : 'none';
  });
  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
</script>
