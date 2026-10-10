/* GoatCounter pageview tracking for Iván András Digital Studio.
   Set GOATCOUNTER_CODE to your GoatCounter site code before publishing.
   This file is loaded only by public pages; it does not display a public counter. */
(function(){
  const GOATCOUNTER_CODE = 'SET_YOUR_GOATCOUNTER_CODE';
  if (!GOATCOUNTER_CODE || GOATCOUNTER_CODE === 'SET_YOUR_GOATCOUNTER_CODE') return;
  const s = document.createElement('script');
  s.async = true;
  s.dataset.goatcounter = 'https://' + GOATCOUNTER_CODE + '.goatcounter.com/count';
  s.src = 'https://gc.zgo.at/count.js';
  document.head.appendChild(s);
})();
