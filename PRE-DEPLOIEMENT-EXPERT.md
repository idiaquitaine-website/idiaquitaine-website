# 🎯 Conseils Expert – Avant Déploiement sur Vercel

## ⚠️ POINTS CRITIQUES À TRAITER EN PRIORITÉ

### 1️⃣ **Configuration DNS Hostinger → Vercel** (BLOQUANT)

**Situation :**
- Domaine idiaquitaine.fr est chez Hostinger
- Vercel fournira des nameservers (NS) ou adresses IP (A records)
- Actuellement, le domaine ne pointe vers RIEN

**Action OBLIGATOIRE :**
```
1. Aller sur https://hpanel.hostinger.com
2. Menu "Domaines" → idiaquitaine.fr
3. DNS → Nameservers
4. Remplacer par les nameservers Vercel:
   - ns1.vercel-dns.com
   - ns2.vercel-dns.com
   - ns3.vercel-dns.com
   
   OU (si NS ne marche pas):
   
   Utiliser A records:
   - A record: 76.76.19.165 (ns1.vercel-dns.com)
   - A record: 76.76.19.166 (ns2.vercel-dns.com)
```

**⏱️ Délai :** 15 min à 24h avant effet

**🔍 Vérifier :**
```bash
# Une fois configuré, vérifier:
nslookup idiaquitaine.fr
# Doit montrer les NS Vercel
```

---

### 2️⃣ **Configuration Vercel + Domaine** (CRITIQUE)

**Avant de déployer :**

1. **Créer projet Vercel**
   ```bash
   cd /Users/tib64/IDI\ Aquitaine
   npm install -g vercel
   vercel login
   vercel deploy
   ```
   → Vercel génère une URL temporaire: `idi-aquitaine.vercel.app`

2. **Ajouter domaine dans Vercel**
   - Dashboard Vercel → Projet IDI Aquitaine
   - Onglet "Domains"
   - Cliquer "Add" → `idiaquitaine.fr`
   - Vercel confirmera l'ajout une fois les DNS configurés

3. **Vérifier SSL**
   - Vercel génère automatiquement un certificat SSL
   - HTTPS sera actif en quelques minutes

**⚠️ IMPORTANT :** Ne pas déployer avant d'avoir configuré les NS Hostinger !

---

### 3️⃣ **Identifiants & Configurations** (OBLIGATOIRE)

#### A. Google Analytics 4 ID
**Situation :** Actuellement G-XXXXXXXXXX (placeholder)

**Action :**
```bash
# 1. Aller sur https://analytics.google.com
# 2. Admin → Créer une "Propriété" pour idiaquitaine.fr
# 3. Copier le Measurement ID (format: G-XXXXXXXXX)
# 4. Remplacer dans le code:

grep -rn "G-XXXXXXXXXX" /Users/tib64/IDI\ Aquitaine/
# Remplacer par votre ID réel dans:
# - index.html (2 occurrences: script + gtag config)
# - article-1.html à article-8.html (2 chacun)
```

**Exemple :**
```html
<!-- Avant: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
gtag('config', 'G-XXXXXXXXXX');

<!-- Après: -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-ABC123XYZ"></script>
gtag('config', 'G-ABC123XYZ');
```

#### B. Formspree ID (Optionnel mais Recommandé)

**Situation :** Actuellement mojzrdvb (ID fourni)

**Options :**
- ✅ **Garder mojzrdvb** : Fonctionne, mais les mails vont à notre compte
- ✅ **Créer votre propre ID** : Plus de contrôle, vous recevez les mails

**Si vous voulez votre propre ID :**
```
1. Aller sur https://formspree.io
2. Créer un compte (gratuit)
3. Créer un formulaire "IDI Aquitaine"
4. Destination: idiaquitaine@outlook.fr
5. Copier l'ID (format: f/xxxxx)
6. Remplacer dans:
   - index.html (action du formulaire)
   - test-formspree.html (fetch URL)
```

**Conseil :** Je recommande de créer votre propre ID pour avoir les mails directement

---

### 4️⃣ **Tests Pré-Production** (ESSENTIEL)

#### A. Tests Locaux Complets
```bash
# Démarrer serveur
cd /Users/tib64/IDI\ Aquitaine
python3 -m http.server 8000

# Tests à effectuer:
# 1. Accueil: http://localhost:8000/index.html
#    [ ] Page charge sans erreur
#    [ ] Menu visible et fonctionnel
#    [ ] Burger menu marche (F12 → viewport 375×812)
#    [ ] Baseline phrase visible: "Trois prestations..."
#    [ ] Tous les liens valides
#    [ ] Pas d'erreurs console (F12)

# 2. Blog: http://localhost:8000/blog.html
#    [ ] 8 articles listés
#    [ ] Tous les articles cliquent vers les bons fichiers
#    [ ] Menu identique à l'accueil

# 3. Article 1: http://localhost:8000/article-1.html
#    [ ] Texte lisible
#    [ ] Images chargées
#    [ ] Menu harmonisé avec accueil
#    [ ] Lien de retour au blog fonctionne

# 4. Pages légales:
#    [ ] mentions-legales.html charge
#    [ ] politique-confidentialite.html charge
#    [ ] cgv.html charge
#    [ ] Tous les liens de footer pointent correctement

# 5. Formulaire:
#    [ ] http://localhost:8000/test-formspree.html
#    [ ] Remplir tous les champs
#    [ ] Cliquer "Envoyer"
#    [ ] Message de succès apparaît
#    [ ] Email reçu à votre adresse test

# 6. Mobile Responsive:
#    [ ] DevTools → iPhone 14 (375×812)
#    [ ] Burger menu s'ouvre/ferme
#    [ ] Texte lisible
#    [ ] Pas de scroll horizontal
#    [ ] Boutons cliquables
```

#### B. Audit de Performance
```bash
# Via Lighthouse (Chrome DevTools)
# F12 → Lighthouse → Analyser

# Cibles minimales:
# Performance:     > 80
# Accessibility:   > 90
# Best Practices:  > 90
# SEO:             > 90
```

#### C. Vérifications SEO
```bash
# 1. Meta tags:
grep "<title>" /Users/tib64/IDI\ Aquitaine/index.html
# Doit afficher: "IDI Aquitaine – Diagnostic Immobilier..."

# 2. Meta description:
grep "description" /Users/tib64/IDI\ Aquitaine/index.html
# Doit être présente et pertinente

# 3. Sitemap:
# Vérifier que /sitemap.xml existe
ls -la /Users/tib64/IDI\ Aquitaine/sitemap.xml

# 4. Robots.txt:
ls -la /Users/tib64/IDI\ Aquitaine/robots.txt
```

---

### 5️⃣ **Tests Email** (IMPORTANT)

**Avant déploiement, tester que les mails fonctionnent :**

```bash
# En local, tester le formulaire
1. http://localhost:8000/test-formspree.html
2. Remplir avec des données réalistes
3. Envoyer
4. Vérifier l'email (inbox + dossier spam)

# Tester le formulaire d'accueil aussi
1. http://localhost:8000/index.html#contact
2. Remplir le formulaire contact
3. Envoyer
4. Vérifier l'email
```

**Si l'email ne vient pas :**
```
1. Vérifier que Formspree ID est correct
2. Vérifier que l'email de destination est correct
3. Vérifier les paramètres Formspree (dashboard)
4. Attendre 2-3 minutes (délai de propagation)
5. Checker le dossier SPAM/Promotions
```

---

### 6️⃣ **Checklist Avant le Déploiement**

```
CONFIGURATION DNS
  [ ] Hostinger: Nameservers/A records configurés vers Vercel
  [ ] Attendre 15 min à 24h
  [ ] Vérifier: nslookup idiaquitaine.fr

IDENTIFIANTS
  [ ] GA4 ID remplacé (G-ABC123XYZ à la place de G-XXXXXXXXXX)
  [ ] Formspree ID vérifié (mojzrdvb ou votre propre ID)
  [ ] Email destination correct (idiaquitaine@outlook.fr)

TESTS LOCAUX
  [ ] Serveur démarre: python3 -m http.server 8000
  [ ] Accueil se charge et affiche bien
  [ ] Menu harmonisé (tous les fichiers)
  [ ] Blog + 8 articles chargent
  [ ] Pages légales accessibles
  [ ] Formulaire envoie mail
  [ ] Mobile responsive (burger menu fonctionne)
  [ ] Console (F12): Pas d'erreurs rouges
  [ ] Lighthouse: Score > 80 (perf), > 90 (autres)

AVANT VERCEL DEPLOY
  [ ] Aucune erreur en local
  [ ] Tous les liens testés
  [ ] Email test reçu
  [ ] Performance acceptable
```

---

### 7️⃣ **Plan de Déploiement Étape par Étape**

**ÉTAPE 1: Configurer DNS (24h avant)**
```bash
# Aller sur Hostinger, configurer les NS
# Laisser la propagation DNS (15 min à 24h)
```

**ÉTAPE 2: Préparer Vercel**
```bash
# Initialiser Git (si pas déjà fait)
cd /Users/tib64/IDI\ Aquitaine
git init
git add .
git commit -m "IDI Aquitaine - Site complet, prêt pour production"

# Installer Vercel CLI
npm install -g vercel

# Créer projet Vercel
vercel login
vercel deploy
# → Vercel génère une URL: idi-aquitaine.vercel.app
```

**ÉTAPE 3: Ajouter domaine dans Vercel**
```bash
# Dashboard Vercel → Domains → Add
# Ajouter: idiaquitaine.fr
# Vercel vérifiera les NS (attendez quelques minutes)
```

**ÉTAPE 4: Vérifier HTTPS**
```bash
# Vercel génère automatiquement SSL
# Aller sur https://idiaquitaine.fr
# Doit charger en HTTPS avec certificat valide
```

**ÉTAPE 5: Tests Production**
```bash
# Sur https://idiaquitaine.fr
[ ] Accueil charge
[ ] Menu fonctionne
[ ] Blog accessible
[ ] Formulaire envoie mail
[ ] Pas d'erreur 404
[ ] HTTPS actif (cadenas vert)
```

---

### 8️⃣ **Post-Déploiement Immédiat**

**Ajouter le site à Google Search Console :**
```
1. Aller sur https://search.google.com/search-console
2. Ajouter propriété: https://idiaquitaine.fr
3. Vérifier la propriété (via DNS)
4. Soumettre le sitemap: /sitemap.xml
5. Attendre l'indexation (1-7 jours)
```

**Configurer Google Analytics :**
```
1. Aller sur https://analytics.google.com
2. Vérifier que le site envoie des données
3. Créer un rapport personnalisé pour les conversions formulaire
4. Ajouter des alertes (ex: 0 visiteurs = pb)
```

**Monitoring Formspree :**
```
1. Dashboard Formspree
2. Vérifier les soumissions en direct
3. Cocher "Notifications par email"
4. Ajouter "Merci" message personnalisé (optionnel)
```

---

### 9️⃣ **Rollback Plan (Au Cas Où)**

**Si quelque chose se passe mal après déploiement :**

```
Problème: Site inaccessible
Solution: 
  1. Vérifier Vercel build logs
  2. Vérifier vercel.json syntax
  3. Redéployer: vercel deploy

Problème: Formulaire ne reçoit pas emails
Solution:
  1. Vérifier Formspree ID correct
  2. Vérifier Formspree logs
  3. Tester avec curl:
     curl -X POST https://formspree.io/f/mojzrdvb \
       -d "test=ok"

Problème: Images ne chargent pas
Solution:
  1. Vérifier les chemins relatifs
  2. Vérifier que fichiers images existent
  3. Vérifier perms de fichiers

Problème: DNS pas trouvé
Solution:
  1. Attendre 24h max
  2. Forcer refresh DNS: nslookup -type=NS idiaquitaine.fr
  3. Vérifier config Hostinger
```

---

### 🔟 **Checklist Finale Post-Déploiement (1 semaine)**

```
SEMAINE 1
  [ ] Site accessible 24/7 (Uptime monitor: http://status.vercel.com)
  [ ] Formulaires reçoivent les emails
  [ ] Google Search Console: Sitemap indexé
  [ ] Google Analytics: Reçoit les données
  [ ] Lighthouse: Score stable > 80
  [ ] Pas d'erreurs 404 (Search Console)
  [ ] Aucune alerte de sécurité
  [ ] Mobile responsive confirmé

SEMAINE 2-3
  [ ] Premières positions Google (brand keywords)
  [ ] Engagement utilisateurs (GA4 metrics)
  [ ] Formules de contact traitées
  [ ] Performance stable

MOIS 1
  [ ] Monitorer les stats organiques
  [ ] Collecter les avis clients (à insérer sur site)
  [ ] Planifier les prochaines optimisations
```

---

## 📋 RÉSUMÉ – ORDRE DES PRIORITÉS

### **URGENT (Avant Déploiement)**
1. **Configurer DNS Hostinger** (24h)
   - Ajouter NS Vercel ou A records
   - Vérifier propagation

2. **Remplacer GA4 ID**
   - Créer propriété Analytics
   - Remplacer G-XXXXXXXXXX

3. **Tester localement**
   - Tous les liens
   - Formulaire email
   - Mobile responsive

### **IMPORTANT (Jour du Déploiement)**
4. **Initialiser Git + Vercel**
5. **Ajouter domaine idiaquitaine.fr**
6. **Vérifier HTTPS SSL**

### **CRITIQUE (Immédiatement Après)**
7. **Ajouter à Google Search Console**
8. **Vérifier Analytics reçoit données**
9. **Tester formulaire en production**

### **MAINTENANCE (Première Semaine)**
10. **Monitorer Uptime**
11. **Vérifier indexation Google**
12. **Optimiser basé sur Lighthouse**

---

## 🎯 MON CONSEIL FINAL EN TANT QU'EXPERT

**La plus grande source d'erreur :** ⚠️ **Les DNS mal configurés**

Avant de toucher à Vercel, assurez-vous que :
1. Hostinger DNS est complètement configuré
2. Attendez 24h si nécessaire
3. Vérifiez: `nslookup idiaquitaine.fr`

**La deuxième source d'erreur :** ⚠️ **GA4 ID pas remplacé**

Si vous gardez G-XXXXXXXXXX, vous perdrez tout le tracking !

**Mon workflow recommandé :**
```
Jour 1:
  - Configurer DNS Hostinger
  - Remplacer GA4 ID
  - Tester localement

Jour 2 (après vérif DNS):
  - Deployer Vercel
  - Ajouter domaine
  - Tester production

Jour 3+:
  - Ajouter à Search Console
  - Monitorer et optimiser
```

Vous êtes prêt ? 🚀

