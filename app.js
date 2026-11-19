// Portfolio Dennys Marquez: edit data below to customize.
// Audio files in this demo are selected locally by the visitor; they are NOT uploaded.
// To publish demos permanently, put your own authorized files in assets/audio/
// and enter their relative URLs here (for example: 'assets/audio/voz-natural.mp3').
const publishedAudio = {
  natural: '',
  scripted: '',
  mix: '',
  expressive: ''
};

const strings = {
  es: {
    skip:'Saltar al contenido',availability:'Abierto a proyectos de voz y audio · Trabajo remoto desde Perú',region:'Arequipa, Perú',
    navSamples:'Muestras',navExperience:'Experiencia',navAbout:'Sobre mí',navContact:'Contacto',
    heroTitleOne:'Voz peruana.',heroTitleTwo:'Oído de productor.',heroDescription:'Grabación de voz, mezcla vocal y datos de voz para IA.',
    heroContact:'Hablemos de tu proyecto',trackScripted:'Lectura para IA',trackMix:'Mezcla vocal',trackExpressive:'Narración expresiva',
    hearSamples:'Explorar muestras',contactMe:'Trabajemos juntos',nativeLabel:'Hablante nativo de español peruano',visualLabel:'SONIDO · VOZ · TECNOLOGÍA',
    cred1:'Español peruano nativo',cred2:'Producción musical',cred3:'Mezcla y masterización',cred4:'Software e IA',
    samplesKicker:'01 / PORTAFOLIO DE AUDIO',samplesTitle:'Escucha mi trabajo',samplesDesc:'Un espacio para voces naturales, lectura guiada y producción musical. Las demostraciones se añadirán conforme estén listas.',
    filterAll:'Todas las muestras',filterVoice:'Voz',filterMusic:'Producción musical',pending:'Próximamente',ready:'Muestra disponible',previewAudio:'Cargar audio para probar',replaceAudio:'Cambiar audio',
    sample1Title:'Voz natural · Español peruano',sample1Desc:'Presentación espontánea con pronunciación y ritmo conversacional.',sample1Tag:'Habla natural',
    sample2Title:'Lectura de frases para IA',sample2Desc:'Muestra de lectura clara y consistente, orientada a recopilación de voz.',sample2Tag:'Datos de voz',
    sample3Title:'Mezcla y tratamiento vocal',sample3Desc:'Espacio para mostrar una mezcla de voz realizada para un artista local, con autorización.',sample3Tag:'Mezcla vocal',
    sample4Title:'Narración y lectura expresiva',sample4Desc:'Muestra de tono, dicción, pausas y expresividad de la voz.',sample4Tag:'Narración',
    previewNote:'Las muestras están pendientes. Puedes cargar un audio desde tu dispositivo para previsualizarlo; no se sube a internet ni se guarda en el sitio.',
    experienceKicker:'02 / EXPERIENCIA & CAPACIDADES',experienceTitle:'Del estudio al <em>mundo digital.</em>',experienceLead:'Mi trabajo conecta dos disciplinas: el detalle del sonido y el pensamiento técnico del desarrollo de software.',
    xp1Title:'Producción musical y mezcla de voces',xp1Text:'He grabado música y voces para artistas locales en Perú. Trabajo con edición de audio, mezcla vocal, masterización y procesamiento de sonidos de batería utilizando Ableton Live Lite.',
    xp2Title:'Grabaciones de voz en español peruano',xp2Text:'Experiencia práctica realizando muestras de grabación y lectura de frases mediante Shujiajia, con atención al seguimiento de instrucciones y a la calidad del audio.',
    xp3Title:'AhorraTiempo.pe · Voz e inteligencia artificial',xp3Text:'Participación como desarrollador en una plataforma digital de trámites que incorpora interacción por voz y funciones relacionadas con inteligencia artificial.',
    tagMix:'Mezcla',tagMaster:'Masterización',tagSpeech:'Audio hablado',tagVoiceTech:'Interacción por voz',
    aboutKicker:'03 / SOBRE MÍ',aboutTitle:'Tecnología en la mente.<br/>Música en los oídos.',aboutText:'Soy Dennys Marquez, titulado en Diseño y Desarrollo de Software por TECSUP. Además de crear aplicaciones web y móviles, he trabajado en producción musical y grabación de voces para artistas locales. Me interesa colaborar en proyectos que necesiten buen criterio auditivo, español peruano natural y una perspectiva técnica.',talkProject:'Conversemos sobre tu proyecto',
    setupKicker:'ESTUDIO / HERRAMIENTAS',setupTitle:'Mi equipo de trabajo',contactKicker:'04 / CONTACTO',contactTitle:'¿Tienes un proyecto<br/><em>en mente?</em>',contactText:'Grabación de voz, mezcla de audio, producción musical o datos de voz para IA. Cuéntame qué necesitas.',downloadCV:'Descargar CV:',footerTagline:'VOZ · SONIDO · SOFTWARE',backTop:'Volver arriba ↑',
    fileSelected:'Audio de prueba: ',invalidFile:'Selecciona un archivo de audio válido.'
  },
  en: {
    skip:'Skip to content',availability:'Available for voice & audio projects · Remote from Peru',region:'Arequipa, Peru',
    navSamples:'Samples',navExperience:'Experience',navAbout:'About',navContact:'Contact',
    heroTitleOne:'Peruvian voice.',heroTitleTwo:'A producer’s ear.',heroDescription:'Voice recording, vocal mixing, and speech data for AI.',
    heroContact:'Let’s talk about your project',trackScripted:'Reading for AI',trackMix:'Vocal mixing',trackExpressive:'Expressive narration',
    hearSamples:'Explore samples',contactMe:'Let’s work together',nativeLabel:'Native Peruvian Spanish speaker',visualLabel:'SOUND · VOICE · TECHNOLOGY',
    cred1:'Native Peruvian Spanish',cred2:'Music production',cred3:'Mixing & mastering',cred4:'Software & AI',
    samplesKicker:'01 / AUDIO PORTFOLIO',samplesTitle:'Listen to my work',samplesDesc:'A space for natural speech, guided reading, and music production. Recordings will be added as they become available.',
    filterAll:'All samples',filterVoice:'Voice',filterMusic:'Music production',pending:'Coming soon',ready:'Sample available',previewAudio:'Load audio to preview',replaceAudio:'Change audio',
    sample1Title:'Natural speech · Peruvian Spanish',sample1Desc:'Spontaneous introduction featuring natural pronunciation and conversational pacing.',sample1Tag:'Natural speech',
    sample2Title:'Sentence reading for AI',sample2Desc:'Clear and consistent reading sample for voice data collection.',sample2Tag:'Speech data',
    sample3Title:'Vocal mixing & processing',sample3Desc:'A space for a vocal mix created for a local artist, shared with permission.',sample3Tag:'Vocal mixing',
    sample4Title:'Expressive reading & narration',sample4Desc:'A sample of vocal tone, diction, pauses, and expression.',sample4Tag:'Narration',
    previewNote:'Samples are being prepared. You can load an audio file from your device to preview it; it is not uploaded or saved on this website.',
    experienceKicker:'02 / EXPERIENCE & SKILLS',experienceTitle:'From the studio to the <em>digital world.</em>',experienceLead:'My work brings together two disciplines: an attentive ear for sound and a technical approach to software.',
    xp1Title:'Music production and vocal mixing',xp1Text:'I have recorded music and vocals for local artists in Peru. My experience includes audio editing, vocal mixing, mastering, and drum sound processing using Ableton Live Lite.',
    xp2Title:'Peruvian Spanish voice recordings',xp2Text:'Hands-on practice recording speech samples and reading sentences with Shujiajia, with attention to instructions and audio quality.',
    xp3Title:'AhorraTiempo.pe · Voice and AI',xp3Text:'Software development work on a digital government-services platform featuring voice interaction and AI-related functionality.',
    tagMix:'Mixing',tagMaster:'Mastering',tagSpeech:'Spoken audio',tagVoiceTech:'Voice interaction',
    aboutKicker:'03 / ABOUT ME',aboutTitle:'Technology on my mind.<br/>Music in my ears.',aboutText:'I’m Dennys Marquez, a qualified Software Design and Development graduate from TECSUP. Alongside building web and mobile applications, I have worked in music production and vocal recording for local artists. I’m interested in projects where an attentive ear, native Peruvian Spanish, and technical skills make a difference.',talkProject:'Let’s talk about your project',
    setupKicker:'STUDIO / TOOLKIT',setupTitle:'My recording setup',contactKicker:'04 / CONTACT',contactTitle:'Have a project<br/><em>in mind?</em>',contactText:'Voice recording, audio mixing, music production, or AI speech data. Tell me what you have in mind.',downloadCV:'Download CV:',footerTagline:'VOICE · SOUND · SOFTWARE',backTop:'Back to top ↑',
    fileSelected:'Preview audio: ',invalidFile:'Please select a valid audio file.'
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
  document.querySelectorAll('.sample-card').forEach(card=>{
    const loaded=card.dataset.loaded==='true';
    const label=card.querySelector('.audio-name');
    if(loaded&&label.dataset.filename)label.textContent=strings[lang].fileSelected+label.dataset.filename;
  });
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

const activeURLs=new Map();
function activateAudio(card,url,label){
  const player=card.querySelector('audio');
  player.pause();player.src=url;player.hidden=false;player.load();
  const name=card.querySelector('.audio-name');
  name.dataset.filename=label;name.textContent=strings[lang].fileSelected+label;name.hidden=false;
  card.dataset.loaded='true';
}

document.querySelectorAll('.sample-card').forEach(card=>{
  const id=card.dataset.audioId;
  const input=card.querySelector('input[type="file"]');
  input.addEventListener('change',()=>{
    const file=input.files?.[0];if(!file)return;
    const valid=file.type.startsWith('audio/')||/\.(wav|mp3|m4a|ogg|aac|flac)$/i.test(file.name);
    if(!valid){window.alert(strings[lang].invalidFile);input.value='';return;}
    const previousURL=activeURLs.get(id);
    if(previousURL)URL.revokeObjectURL(previousURL);
    const objectURL=URL.createObjectURL(file);
    activeURLs.set(id,objectURL);
    activateAudio(card,objectURL,file.name);
  });
  const player=card.querySelector('audio');
  const button=card.querySelector('[data-track]');
  button.addEventListener('click',()=>{
    if (!player.getAttribute('src')) input.click();
    else if (player.paused) player.play().catch(()=>player.focus());
    else player.pause();
  });
  for (const event of ['play','pause','ended']) {
    player.addEventListener(event,()=>button.classList.toggle('playing',!player.paused && !player.ended));
  }
  player.addEventListener('play',()=>{
    document.querySelectorAll('audio').forEach(other=>{if(other!==player)other.pause();});
  });
  if(publishedAudio[id]){
    activateAudio(card,publishedAudio[id],publishedAudio[id].split('/').at(-1));
  }
});
window.addEventListener('pagehide',()=>activeURLs.forEach(url=>URL.revokeObjectURL(url)));
document.getElementById('year').textContent=new Date().getFullYear();
translate('es');
