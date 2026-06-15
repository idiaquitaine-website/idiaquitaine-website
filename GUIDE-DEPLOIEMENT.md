# 📋 Guide Complet de Déploiement IDI Aquitaine

## ✅ Checklist Pré-Déploiement

### 1. **Tests Locaux**

#### Tests du Responsive Mobile
```bash
# Lancer le serveur local
python3 -m http.server 8000

# Visiter: http://localhost:8000/test-responsive.html
# ✓ Desktop (1920×1080)
# ✓ Tablet (1024×768)
# ✓ iPhone 14 (428×926)
# ✓ iPhone 12 (375×812)
# ✓ Android (600×800)
```

**Points à vérifier sur mobile :**
- [ ] Menu burger s'ouvre/ferme correctement
- [ ] Navigation lisse (sans scroll lag)
- [ ] Textes lisibles (font-size ≥ 16px)
- [ ] Boutons cliquables (min 48×48px)
- [ ] Images responsive (pas de débordement)
- [ ] Formulaire accessible
- [ ] Footer visible sans scroll

#### Tests du Formulaire Formspree
```bash
# Page de test dédiée:
# http://localhost:8000/test-formspree.html

# Étapes:
# 1. Remplir tous les champs
# 2. Cliquer "Envoyer le test"
# 3. Vérifier la réponse
# 4. Consulter votre email (check spam si nécessaire)
```

**Points à vérifier :**
- [ ] Validation des champs (email requis)
- [ ] Message de succès s'affiche
- [ ] Email reçu à idiaquitaine@outlook.fr
- [ ] Données correctes dans l'email
- [ ] Lien "Devis gratuit" fonctionne

---

## 🔧 Configuration Formspree

### Récupérer votre ID Formspree

1. **Allez sur** https://formspree.io
2. **Connectez-vous** (ou créez un compte)
3. **Créez un nouveau formulaire** ou utilisez celui existant
4. **Copier l'ID** : `f/xxxxx`
5. **Remplacer dans les fichiers :**

```bash
# Dans index.html (ligne ~1345)
# Actuellement: <form action="https://formspree.io/f/mojzrdvb"
# À vérifier: remplacer 'mojzrdvb' par votre ID
```

### Configuration Email Reçu

1. **Dashboard Formspree** → Paramètres du formulaire
2. **Email de destination** : idiaquitaine@outlook.fr
3. **Activez** : 
   - ✅ Notifications par email
   - ✅ Redriger après envoi (vers /remerciements.html)

---

## 🚀 Déploiement sur Vercel

### Étape 1 : Préparer le projet

```bash
cd /Users/tib64/IDI\ Aquitaine

# Vérifier que tout est prêt
ls -la
# index.html ✓
# blog.html ✓
# article-1.html à article-8.html ✓
# mentions-legales.html ✓
# politique-confidentialite.html ✓
# cgv.html ✓
# vercel.json ✓
# sitemap.xml ✓
# robots.txt ✓
# 404.html ✓
```

### Étape 2 : Initialiser Git (si pas déjà fait)

```bash
git init
git add .
git commit -m "Initial commit: site complet IDI Aquitaine"
git branch -M main
```

### Étape 3 : Connecter à Vercel

#### Option A : Via CLI
```bash
npm install -g vercel
vercel login
vercel deploy
```

#### Option B : Via Web UI
1. Allez sur https://vercel.com
2. Cliquez "Add New..." → "Project"
3. Connectez GitHub (ou Git)
4. Sélectionnez le repo IDI Aquitaine
5. Cliquez "Deploy"

### Étape 4 : Configurer le domaine

1. **Dans Vercel Dashboard**
   - Allez à Paramètres → Domaines
   - Ajoutez `idiaquitaine.fr`
2. **Dans Hostinger** (où vous avez acheté le domaine)
   - Allez à DNS
   - Modifiez les nameservers vers Vercel (ils vous donneront)

---

## ✅ Checklist Post-Déploiement

### Tests en Production

```bash
# 1. Accédez au site
https://idiaquitaine.fr

# 2. Vérifiez les pages principales
[ ] Page d'accueil se charge
[ ] Menu fonctionne
[ ] Blog se charge
[ ] Articles se chargent

# 3. Tests du formulaire (en production)
[ ] Remplissez le formulaire
[ ] Envoyez un test
[ ] Email reçu

# 4. SEO vérifié
[ ] Google Search Console accepte le sitemap
[ ] Meta descriptions visibles
[ ] Open Graph correct (partage réseaux)

# 5. Performances
[ ] Lighthouse score > 85
[ ] PageSpeed Insights > 80
# Vérifier: https://pagespeed.web.dev/
```

### Surveiller les Erreurs

1. **Vercel Analytics**
   - Dashboard → Analytics
   - Vérifiez les erreurs 404, 500

2. **Google Search Console**
   - Vérifiez les erreurs d'indexation

3. **Formspree**
   - Dashboard → Statistiques
   - Vérifiez les soumissions

---

## 🔐 Points de Sécurité

### Avant déploiement, vérifiez :

- [ ] `vercel.json` a les headers CSP
- [ ] Formspree ID valide
- [ ] GA4 ID remplacé (pas "G-XXXXXXXXXX")
- [ ] Pas de secrets en dur dans le code
- [ ] SSL/HTTPS activé (Vercel le fait automatiquement)
- [ ] robots.txt en place
- [ ] sitemap.xml valide

### Après déploiement :

1. **SSL Certificate**
   ```bash
   # Vérifiez que le site a HTTPS
   curl -I https://idiaquitaine.fr
   # Doit afficher: HTTP/2 200
   ```

2. **Sécurité Headers**
   - Utilisez https://securityheaders.com
   - Vérifiez les headers CSP, X-Frame-Options, etc.

---

## 📞 Support et Dépannage

### Formulaire ne reçoit pas d'email

1. **Vérifier l'ID Formspree**
   ```bash
   grep -r "formspree.io" .
   # Doit voir votre ID correct
   ```

2. **Vérifier les logs Formspree**
   - Dashboard → Logs
   - Recherchez "errors"

3. **Test CORS**
   ```bash
   curl -X POST https://formspree.io/f/VotreID \
     -H "Content-Type: application/json" \
     -d '{"email":"test@example.com"}'
   ```

### Site blanc après déploiement

1. **Vérifier le build**
   ```bash
   vercel logs [URL]
   ```

2. **Erreurs JavaScript**
   - Ouvrir DevTools (F12)
   - Console → Vérifiez les erreurs rouges

3. **Problèmes MIME**
   - Vérifier que vercel.json a les bons types

---

## 📊 Maintenance Après Lancement

### Hebdomadaire
- [ ] Vérifiez les logs Formspree
- [ ] Consultez Google Analytics

### Mensuel
- [ ] Mettez à jour les articles du blog
- [ ] Vérifiez le score Lighthouse
- [ ] Analysez le trafic Google

### Annuellement
- [ ] Renouvellement domaine (idiaquitaine.fr)
- [ ] Audit de sécurité complet
- [ ] Backup de contenu

---

## 🎯 URLs Importantes

| URL | Description |
|-----|---|
| https://idiaquitaine.fr | Site en production |
| https://vercel.com/dashboard | Tableau de bord Vercel |
| https://formspree.io/dashboard | Gestion des formulaires |
| https://search.google.com/search-console | Google Search Console |
| https://analytics.google.com | Google Analytics 4 |
| https://www.google.com/intl/fr/analytics/google-analytics-certification/ | Certification GA4 |

---

## ⚠️ Notes Critiques

1. **GA4 ID** : Remplacez `G-XXXXXXXXXX` avec votre vrai ID
2. **Formspree ID** : Utilisez votre ID, pas l'exemple `mojzrdvb`
3. **Domaine** : Assurez-vous que idiaquitaine.fr pointe vers Vercel
4. **Email** : Vérifiez que idiaquitaine@outlook.fr reçoit bien les mails

