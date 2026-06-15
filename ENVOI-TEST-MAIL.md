# 📧 Test d'Envoi du Formulaire Formspree

## 🔧 Étape 1 : Vérifier votre ID Formspree

Actuellement, le site utilise l'ID : **`mojzrdvb`**

### Obtenir votre propre ID Formspree :

1. **Allez sur** https://formspree.io
2. **Connectez-vous** (ou créez un compte gratuitement)
3. **Créez un nouveau formulaire** :
   - Nom: "IDI Aquitaine Contact"
   - Email de destination: `idiaquitaine@outlook.fr`
4. **Copier l'ID** affiché (format: `f/xxxxx`)

---

## 🧪 Étape 2 : Tester en Local

### Démarrer le serveur local

```bash
cd /Users/tib64/IDI\ Aquitaine
python3 -m http.server 8000
```

Accès: `http://localhost:8000`

### Option A: Tester avec la page de test dédiée

1. Allez sur `http://localhost:8000/test-formspree.html`
2. Remplissez les champs:
   - **Prénom**: Jérémie
   - **Nom**: Autet
   - **Email**: votre-email@example.com
   - **Téléphone**: 06 64 48 42 05
   - **Prestation**: Infiltrométrie RT2012/RE2020
   - **Message**: Ceci est un test d'envoi.
3. Cliquez "Envoyer le test"
4. Vous devriez voir: ✅ "Email envoyé avec succès"

### Option B: Tester avec le formulaire de la page d'accueil

1. Allez sur `http://localhost:8000/index.html`
2. Scrollez jusqu'à la section "Contact"
3. Remplissez le formulaire
4. Cliquez "Envoyer votre demande"
5. Vous devriez être redirigé (ou voir un message de succès)

---

## ✅ Étape 3 : Vérifier la Réception du Mail

### Checker votre email (idiaquitaine@outlook.fr)

**Ce que vous devriez voir :**
- Sujet: Email de formulaire Formspree
- Contenu: 
  ```
  Prénom: Jérémie
  Nom: Autet
  Email: votre-email@example.com
  Téléphone: 06 64 48 42 05
  Prestation: Infiltrométrie RT2012/RE2020
  Message: Ceci est un test d'envoi.
  ```

⚠️ **Conseil** : Vérifiez d'abord le dossier **Spam** ou **Promotions**

---

## 🔄 Étape 4 : Changer l'ID Formspree (si vous en avez un)

Si vous avez créé votre propre compte Formspree, remplacez l'ID dans le site:

### Fichiers à mettre à jour:

**1. `/index.html` (ligne ~1345)**
```html
<!-- Actuel: -->
<form action="https://formspree.io/f/mojzrdvb" method="POST">

<!-- À remplacer par: -->
<form action="https://formspree.io/f/YOUR_ID_HERE" method="POST">
```

**2. `/test-formspree.html` (ligne ~93)**
```javascript
// Actuel:
const response = await fetch('https://formspree.io/f/mojzrdvb', {

// À remplacer par:
const response = await fetch('https://formspree.io/f/YOUR_ID_HERE', {
```

---

## 📋 Checklist de Vérification

### Tests en Local
- [ ] Serveur démarre sans erreur (`python3 -m http.server 8000`)
- [ ] Page d'accueil se charge
- [ ] Formulaire est visible
- [ ] Champs sont cliquables
- [ ] Bouton "Envoyer" fonctionne
- [ ] Email de test reçu (checker inbox + spam)

### Tests Mobile
- [ ] Menu burger fonctionne
- [ ] Formulaire responsive
- [ ] Boutons cliquables (≥ 48×48px)

### Après Déploiement sur Vercel
- [ ] Site accessible via https://idiaquitaine.fr
- [ ] Formulaire fonctionne en production
- [ ] Emails reçus correctement

---

## 🛠️ Troubleshooting

### "L'email n'a pas été reçu"

**Problème 1 : ID Formspree incorrect**
```bash
# Vérifier l'ID en cours d'utilisation
grep -n "formspree.io/f" /Users/tib64/IDI\ Aquitaine/index.html
```

**Problème 2 : Email bloqué en spam**
- Vérifiez le dossier "Spam" ou "Promotions"
- Marquez l'email comme "Pas du spam"

**Problème 3 : CORS bloqué en local**
- Certains navigateurs bloquent les requêtes cross-origin
- Testez dans un autre navigateur (Chrome → Firefox)
- Ou attendez le déploiement sur Vercel

### "Bouton ne répond pas"

**Problème 1 : JavaScript désactivé**
- Vérifiez que JS est activé dans le navigateur

**Problème 2 : Erreur console**
- Ouvrez DevTools (F12)
- Console → Vérifiez les erreurs rouges
- Partagez l'erreur si vous avez besoin d'aide

---

## 🚀 Prêt pour la Production?

Une fois que vos tests locaux passent:

1. ✅ Remplacez l'ID Formspree si nécessaire
2. ✅ Remplacez le GA4 ID (G-XXXXXXXXXX)
3. ✅ Lancez le déploiement Vercel
4. ✅ Testez le formulaire en production
5. ✅ Consultez les stats Formspree

