/* ─────────────────────────────────────────────────────────────
   Mesure d'audience Google Analytics 4, soumise au consentement
   ─────────────────────────────────────────────────────────────
   - GA ne se charge QUE si le visiteur a cliqué « Accepter ».
   - Le choix est mémorisé (localStorage « rgpd_consent ») pour tout le site.
   - Sur les pages sans bandeau, le bandeau est ajouté automatiquement
     tant que le visiteur n'a pas fait de choix.
   - Pour activer : remplacer l'identifiant ci-dessous par celui de la
     propriété GA4 (Admin → Flux de données → ID de mesure, « G-… »).
   ───────────────────────────────────────────────────────────── */
(function () {
  var GA_ID = 'G-HLDRQYQLW5';
  var KEY = 'rgpd_consent';
  var configured = /^G-[A-Z0-9]+$/.test(GA_ID) && GA_ID !== 'G-XXXXXXXXXX';
  var loaded = false;

  function getChoice() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function setChoice(v) {
    try { localStorage.setItem(KEY, v); } catch (e) {}
  }

  function load() {
    if (!configured || loaded) return;
    loaded = true;
    window.dataLayer = window.dataLayer || [];
    window.gtag = function () { dataLayer.push(arguments); };
    gtag('js', new Date());
    gtag('config', GA_ID, { anonymize_ip: true });
    var s = document.createElement('script');
    s.async = true;
    s.src = 'https://www.googletagmanager.com/gtag/js?id=' + GA_ID;
    document.head.appendChild(s);
  }

  function removeGaCookies() {
    document.cookie.split(';').forEach(function (c) {
      var name = c.split('=')[0].trim();
      if (/^_ga/.test(name)) {
        var host = location.hostname;
        document.cookie = name + '=; Max-Age=0; path=/';
        document.cookie = name + '=; Max-Age=0; path=/; domain=.' + host.replace(/^www\./, '');
      }
    });
  }

  /* Appelé par les boutons du bandeau (accueil et bandeau injecté) */
  window.rgpdConsent = function (accepted) {
    setChoice(accepted ? 'accepted' : 'refused');
    var b = document.getElementById('rgpd-banner');
    if (b) b.style.display = 'none';
    if (accepted) load(); else removeGaCookies();
  };

  /* Lien « Gérer mes cookies » : réaffiche le bandeau */
  window.rgpdReset = function () {
    try { localStorage.removeItem(KEY); } catch (e) {}
    removeGaCookies();
    var b = document.getElementById('rgpd-banner') || injectBanner();
    b.style.display = 'flex';
  };

  function injectBanner() {
    var css = '#rgpd-banner{position:fixed;bottom:0;left:0;right:0;z-index:400;background:#1c1c1c;border-top:3px solid #d91a0e;padding:16px 24px;display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap;font-family:Inter,-apple-system,sans-serif}'
      + '#rgpd-banner p{font-size:.82rem;color:rgba(255,255,255,.75);max-width:720px;line-height:1.6;margin:0}'
      + '#rgpd-banner p a{color:#fff;text-decoration:underline}'
      + '#rgpd-banner .rgpd-btns{display:flex;gap:10px;flex-shrink:0}'
      + '#rgpd-banner button{border-radius:50px;padding:8px 20px;font-size:.85rem;font-weight:600;cursor:pointer}'
      + '#rgpd-banner .rgpd-accept{background:#d91a0e;color:#fff;border:none}'
      + '#rgpd-banner .rgpd-refuse{background:transparent;color:rgba(255,255,255,.75);border:1px solid rgba(255,255,255,.3)}'
      + '@media(max-width:700px){#rgpd-banner{flex-direction:column;align-items:flex-start}}';
    var st = document.createElement('style'); st.textContent = css; document.head.appendChild(st);
    var b = document.createElement('div');
    b.id = 'rgpd-banner'; b.setAttribute('role', 'dialog'); b.setAttribute('aria-label', 'Consentement cookies');
    b.innerHTML = '<p>Avec votre accord, nous utilisons des cookies de mesure d\'audience (Google Analytics) pour savoir comment le site est consulté et l\'améliorer. '
      + 'Les cookies techniques nécessaires au fonctionnement du site sont toujours actifs. '
      + '<a href="politique-confidentialite.html">En savoir plus</a>.</p>'
      + '<div class="rgpd-btns"><button class="rgpd-accept" type="button" onclick="rgpdConsent(true)">Accepter</button>'
      + '<button class="rgpd-refuse" type="button" onclick="rgpdConsent(false)">Refuser</button></div>';
    document.body.appendChild(b);
    return b;
  }

  function init() {
    var choice = getChoice();
    var b = document.getElementById('rgpd-banner');
    if (choice === 'accepted' || choice === 'refused') {
      if (b) b.style.display = 'none';
      if (choice === 'accepted') load();
      return;
    }
    if (!b && configured) injectBanner();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
  else init();
})();
