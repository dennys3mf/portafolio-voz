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
        .from('.site-header, .hero-copy', {
          opacity: 0.65,
          y: 14,
          duration: 0.65,
          stagger: 0.09,
          clearProps: 'opacity,transform'
        }, 0.08);
    }

    for (const card of document.querySelectorAll('.sample-card')) {
      const player = card.querySelector('audio');
      const wave = card.querySelector('.track-wave');
      const button = card.querySelector('[data-track]');
      const setPlayhead = gsap.quickSetter(wave, '--playhead', '%');
      const events = new AbortController();
      const options = {signal: events.signal};
      const syncPlayhead = () => {
        const progress = Number.isFinite(player.duration) && player.duration > 0
          ? player.currentTime / player.duration
          : 0;
        setPlayhead(Math.min(100, progress * 100));
      };
      const stop = () => {
        gsap.ticker.remove(syncPlayhead);
        syncPlayhead();
        card.classList.remove('is-listening');
      };
      const start = () => {
        card.classList.add('is-listening');
        syncPlayhead();
        gsap.ticker.add(syncPlayhead);
        context.add(() => gsap.fromTo(button, {scale: 0.94}, {
          scale: 1,
          duration: 0.42,
          ease: 'back.out(2)',
          overwrite: 'auto',
          clearProps: 'transform'
        }));
      };
      player.addEventListener('playing', start, options);
      for (const event of ['pause', 'ended', 'waiting', 'error']) {
        player.addEventListener(event, stop, options);
      }
      if (!player.paused && !player.ended && player.readyState >= 3) start();

      context.add(() => () => {
        events.abort();
        stop();
        wave.style.removeProperty('--playhead');
      });
    }

    if (!ScrollTrigger) return;
    const blocks = document.querySelectorAll([
      '#samples-title', '.sample-card', '.services-copy', '.production-photo',
      '.beats-heading', '.beats-grid > article', '.experience-intro', '.experience-item',
      '.section-label', '.about-grid > div', '.studio-layout > *',
      '.contact-inner > div', '.footer-inner'
    ].join(', '));
    for (const block of blocks) {
      ScrollTrigger.create({
        trigger: block,
        start: 'top 90%',
        once: true,
        onEnter: () => context.add(() => {
          if (block.contains(document.activeElement)) return;
          gsap.from(block, {
            opacity: 0.68,
            y: 15,
            duration: 0.55,
            ease: 'power2.out',
            clearProps: 'opacity,transform'
          });
        })
      });
    }
  });
})();
