// AegisX main interactions
(function(){
  function setupBlink(){
    const img = document.getElementById('logo-img');
    if(!img) return;
    fetch(img.src).then(r=>r.text()).then(txt=>{
      const div = document.createElement('div');
      div.innerHTML = txt;
      const svg = div.querySelector('svg');
      if(!svg) return;
      svg.id = 'inline-logo';
      img.replaceWith(svg);
      const left = svg.querySelector('#eye-left');
      const right = svg.querySelector('#eye-right');
      function blinkOnce(){
        left.classList.add('blinked');
        right.classList.add('blinked');
        setTimeout(()=>{ left.classList.remove('blinked'); right.classList.remove('blinked'); }, 220);
      }
      function schedule(){ const t = 3000 + Math.random()*4000; setTimeout(()=>{ blinkOnce(); schedule(); }, t); }
      schedule();
    }).catch(e=>{console.warn('logo load fail',e)});
  }
  function pageLoadAnim(){
    const hero = document.querySelector('.hero');
    if(hero){
      hero.style.opacity = 0; hero.style.transform='translateY(12px)'; setTimeout(()=>{ hero.style.transition='all 700ms cubic-bezier(.2,.8,.2,1)'; hero.style.opacity=1; hero.style.transform='translateY(0)'; },120);
    }
  }
  document.addEventListener('DOMContentLoaded', ()=>{ setupBlink(); pageLoadAnim(); });
})();
