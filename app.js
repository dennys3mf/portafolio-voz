const strings = {
  es: {
    skip:'Saltar al contenido',availability:'Abierto a proyectos de voz y audio · Trabajo remoto desde Perú',region:'Arequipa, Perú',
    navSamples:'Muestras',navExperience:'Experiencia',navAbout:'Sobre mí',navContact:'Contacto',
    heroTitleOne:'Voz peruana.',heroTitleTwo:'Oído de productor.',heroDescription:'Grabación de voz, mezcla vocal y datos de voz para IA.',
    heroContact:'Hablemos de tu proyecto',trackPrincipal:'Voz principal',trackTake2:'Voz · Toma 2',trackTake3:'Voz · Toma 3',trackTake4:'Voz · Toma 4',play:'Reproducir',pause:'Pausar',
    hearSamples:'Explorar muestras',contactMe:'Trabajemos juntos',nativeLabel:'Hablante nativo de español peruano',visualLabel:'SONIDO · VOZ · TECNOLOGÍA',
    cred1:'Español peruano nativo',cred2:'Producción musical',cred3:'Mezcla y masterización',cred4:'Software e IA',
    experienceKicker:'02 / EXPERIENCIA & CAPACIDADES',experienceTitle:'Del estudio al <em>mundo digital.</em>',experienceLead:'Mi trabajo conecta dos disciplinas: el detalle del sonido y el pensamiento técnico del desarrollo de software.',
    xp1Title:'Producción musical y mezcla de voces',xp1Text:'He grabado música y voces para artistas locales en Perú. Trabajo con edición de audio, mezcla vocal, masterización y procesamiento de sonidos de batería utilizando Ableton Live Lite.',
    xp2Title:'Grabaciones de voz en español peruano',xp2Text:'Experiencia práctica realizando muestras de grabación y lectura de frases mediante Shujiajia, con atención al seguimiento de instrucciones y a la calidad del audio.',
    xp3Title:'AhorraTiempo.pe · Voz e inteligencia artificial',xp3Text:'Participación como desarrollador en una plataforma digital de trámites que incorpora interacción por voz y funciones relacionadas con inteligencia artificial.',
    tagMix:'Mezcla',tagMaster:'Masterización',tagSpeech:'Audio hablado',tagVoiceTech:'Interacción por voz',
    aboutKicker:'03 / SOBRE MÍ',aboutTitle:'Tecnología en la mente.<br/>Música en los oídos.',aboutText:'Soy Dennys Marquez, titulado en Diseño y Desarrollo de Software por TECSUP. Además de crear aplicaciones web y móviles, he trabajado en producción musical y grabación de voces para artistas locales. Me interesa colaborar en proyectos que necesiten buen criterio auditivo, español peruano natural y una perspectiva técnica.',talkProject:'Conversemos sobre tu proyecto',
    setupKicker:'ESTUDIO / HERRAMIENTAS',setupTitle:'Mi equipo de trabajo',contactKicker:'04 / CONTACTO',contactTitle:'¿Tienes un proyecto<br/><em>en mente?</em>',contactText:'Grabación de voz, mezcla de audio, producción musical o datos de voz para IA. Cuéntame qué necesitas.',downloadCV:'Descargar CV:',footerTagline:'VOZ · SONIDO · SOFTWARE',backTop:'Volver arriba ↑',
  },
  en: {
    skip:'Skip to content',availability:'Available for voice & audio projects · Remote from Peru',region:'Arequipa, Peru',
    navSamples:'Samples',navExperience:'Experience',navAbout:'About',navContact:'Contact',
    heroTitleOne:'Peruvian voice.',heroTitleTwo:'A producer’s ear.',heroDescription:'Voice recording, vocal mixing, and speech data for AI.',
    heroContact:'Let’s talk about your project',trackPrincipal:'Main vocal',trackTake2:'Voice · Take 2',trackTake3:'Voice · Take 3',trackTake4:'Voice · Take 4',play:'Play',pause:'Pause',
    hearSamples:'Explore samples',contactMe:'Let’s work together',nativeLabel:'Native Peruvian Spanish speaker',visualLabel:'SOUND · VOICE · TECHNOLOGY',
    cred1:'Native Peruvian Spanish',cred2:'Music production',cred3:'Mixing & mastering',cred4:'Software & AI',
    experienceKicker:'02 / EXPERIENCE & SKILLS',experienceTitle:'From the studio to the <em>digital world.</em>',experienceLead:'My work brings together two disciplines: an attentive ear for sound and a technical approach to software.',
    xp1Title:'Music production and vocal mixing',xp1Text:'I have recorded music and vocals for local artists in Peru. My experience includes audio editing, vocal mixing, mastering, and drum sound processing using Ableton Live Lite.',
    xp2Title:'Peruvian Spanish voice recordings',xp2Text:'Hands-on practice recording speech samples and reading sentences with Shujiajia, with attention to instructions and audio quality.',
    xp3Title:'AhorraTiempo.pe · Voice and AI',xp3Text:'Software development work on a digital government-services platform featuring voice interaction and AI-related functionality.',
    tagMix:'Mixing',tagMaster:'Mastering',tagSpeech:'Spoken audio',tagVoiceTech:'Voice interaction',
    aboutKicker:'03 / ABOUT ME',aboutTitle:'Technology on my mind.<br/>Music in my ears.',aboutText:'I’m Dennys Marquez, a qualified Software Design and Development graduate from TECSUP. Alongside building web and mobile applications, I have worked in music production and vocal recording for local artists. I’m interested in projects where an attentive ear, native Peruvian Spanish, and technical skills make a difference.',talkProject:'Let’s talk about your project',
    setupKicker:'STUDIO / TOOLKIT',setupTitle:'My recording setup',contactKicker:'04 / CONTACT',contactTitle:'Have a project<br/><em>in mind?</em>',contactText:'Voice recording, audio mixing, music production, or AI speech data. Tell me what you have in mind.',downloadCV:'Download CV:',footerTagline:'VOICE · SOUND · SOFTWARE',backTop:'Back to top ↑',
  }
};

let lang = 'es';
const labelsWithHTML = new Set(['experienceTitle','aboutTitle','contactTitle']);
function translate(nextLang){
  lang = nextLang;
  document.documentElement.lang = lang;
  document.title = lang==='es'?'Dennys Marquez — Voz, audio e IA':'Dennys Marquez — Voice, Audio & AI';
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key=el.dataset.i18n;
    if(!Object.prototype.hasOwnProperty.call(strings[lang],key))return;
    if(labelsWithHTML.has(key))el.innerHTML = strings[lang][key];
    else el.textContent = strings[lang][key];
  });
  document.querySelectorAll('.lang-btn').forEach(btn=>{
    const active = btn.dataset.lang===lang;
    btn.classList.toggle('active',active);
    btn.setAttribute('aria-pressed',String(active));
  });
  tracks.forEach(updateTrackButton);
}
document.querySelectorAll('.lang-btn').forEach(btn=>btn.addEventListener('click',()=>translate(btn.dataset.lang)));

// Generate static decorative waveforms (not fictitious recordings).
function waveHeight(i,variant){
  const a=Math.abs(Math.sin((i+2)*(.37+variant*.063)));
  const b=Math.abs(Math.cos((i+5)*(.17+variant*.017)));
  return Math.round(6+(a*.5+b*.5)*75);
}
document.querySelectorAll('[data-waveform]').forEach((el,idx)=>{
  for(let i=0;i<48;i++){
    const bar=document.createElement('i');bar.style.height=`${Math.max(7,waveHeight(i,idx+1))}%`;el.appendChild(bar);
  }
});

const tracks = Array.from(document.querySelectorAll('.sample-card'), card => ({
  button: card.querySelector('[data-track]'),
  title: card.querySelector('h3'),
  player: card.querySelector('audio')
}));

function updateTrackButton({button, title, player}) {
  const playing = !player.paused && !player.ended;
  button.classList.toggle('playing', playing);
  button.setAttribute('aria-label', `${strings[lang][playing ? 'pause' : 'play']}: ${title.textContent}`);
  button.removeAttribute('aria-labelledby');
}

for (const track of tracks) {
  const {button, player} = track;
  button.addEventListener('click', async () => {
    if (!player.paused) {
      player.pause();
      return;
    }
    player.hidden = false;
    try {
      await player.play();
    } catch {
      player.focus();
    }
  });
  player.addEventListener('play', () => {
    for (const other of tracks) {
      if (other === track) continue;
      other.player.pause();
      other.player.hidden = true;
    }
    updateTrackButton(track);
  });
  player.addEventListener('pause', () => updateTrackButton(track));
  player.addEventListener('ended', () => updateTrackButton(track));
}
document.getElementById('year').textContent=new Date().getFullYear();
translate('es');
