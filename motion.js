(() => {
  const {gsap, ScrollTrigger} = window;
  if (!gsap) return;
  if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

  const motion = gsap.matchMedia();
  motion.add('(prefers-reduced-motion: no-preference)', context => {
    const hero = document.querySelector('.cover');
    if (hero.getBoundingClientRect().bottom > 0) {
      gsap.timeline({defaults: {ease: 'power2.out'}})
        .from('.studio-photo', {opacity: 0.72, duration: 1.15, clearProps: 'opacity'})
        .from('.hero-copy h1, .hero-copy p', {
          opacity: 0.65,
          y: 14,
          duration: 0.65,
          stagger: 0.09,
          clearProps: 'opacity,transform'
        }, 0.08);
    }

    if (!ScrollTrigger) return;
    for (const heading of document.querySelectorAll('main h2')) {
      if (heading.getBoundingClientRect().top < window.innerHeight) continue;
      ScrollTrigger.create({
        trigger: heading,
        start: 'top 94%',
        once: true,
        onEnter: () => context.add(() => {
          gsap.from(heading, {
            opacity: 0.58,
            y: 12,
            duration: 0.55,
            ease: 'power2.out',
            clearProps: 'opacity,transform'
          });
        })
      });
    }
  });
})();
