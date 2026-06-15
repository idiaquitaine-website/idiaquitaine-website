# 📘 Guide Complet – Créer un Repo GitHub IDI Aquitaine

## 📋 Prérequis

- [ ] Email (utiliser idiaquitaine@outlook.fr recommandé)
- [ ] Terminal/Bash
- [ ] Git installé sur votre machine

**Vérifier que Git est installé :**
```bash
git --version
# Doit afficher: git version X.X.X
```

---

## ÉTAPE 1️⃣ : Créer le Compte GitHub

### Option A: Nouveau Compte (Recommandé pour IDI Aquitaine)

1. **Aller sur** https://github.com/signup
2. **Remplir le formulaire :**
   - Email: `idiaquitaine@outlook.fr`
   - Username: `idi-aquitaine` (ou `IDI-Aquitaine`)
   - Password: Générer un mot de passe fort (sauvegardez-le !)
   - Cliquer "Create account"

3. **Vérifier l'email :**
   - GitHub envoie un email de confirmation
   - Cliquer sur le lien de vérification dans l'email
   - Vous êtes maintenant sur GitHub ! ✅

4. **Configuration du profil :**
   - Avatar: Ajouter le logo IDI Aquitaine
   - Bio: "Diagnostic immobilier, infiltrométrie, recherche de fuites"
   - Site web: `https://idiaquitaine.fr` (après déploiement)

### Option B: Compte Existant

Si vous avez déjà un compte GitHub personnel :
- ✅ Vous pouvez l'utiliser
- ✅ Ou créer une organisation GitHub pour IDI Aquitaine

---

## ÉTAPE 2️⃣ : Créer le Repository

### Sur GitHub.com

1. **Une fois connecté :**
   - Cliquer sur le "+" en haut à droite
   - Sélectionner "New repository"

2. **Formulaire :**
   ```
   Repository name: idiaquitaine-website
   Description:     IDI Aquitaine - Site web complet (Diagnostic Immobilier, Infiltrométrie, Recherche de Fuites)
   Visibility:      Public (pour montrer votre code)
   Initialize:      ☐ Add .gitignore
                    ☐ Add a license
                    ☐ Choose a template
   ```

3. **Créer le repo** → Cliquer "Create repository"

4. **Vous êtes maintenant sur :** `github.com/idi-aquitaine/idiaquitaine-website`

---

## ÉTAPE 3️⃣ : Initialiser Git en Local

### Terminal - Configurer Git (Une fois)

```bash
# Configurer votre identité Git
git config --global user.name "IDI Aquitaine"
git config --global user.email "idiaquitaine@outlook.fr"

# Vérifier la config
git config --global user.name
git config --global user.email
```

### Initialiser le Repo Local

```bash
cd /Users/tib64/IDI\ Aquitaine

# Vérifier que Git n'est pas déjà initialisé
ls -la | grep ".git"
# Si rien n'apparaît, continuez

# Initialiser Git
git init

# Ajouter tous les fichiers
git add .

# Faire le premier commit
git commit -m "Initial commit: IDI Aquitaine - Site complet

- 12 pages HTML (accueil, blog, 8 articles, pages légales)
- Navigation harmonisée et responsive
- Formulaire Formspree intégré
- GA4 + Schema.org pour SEO
- Sécurité CSP headers
- Documentation complète (guides de déploiement)
- Tests pages (responsive, formulaire)

Prêt pour déploiement sur Vercel avec domaine idiaquitaine.fr"

# Vérifier le commit
git log
# Doit afficher votre premier commit
```

---

## ÉTAPE 4️⃣ : Connecter à GitHub (via SSH ou HTTPS)

### Option A: SSH (Recommandé)

**Générer une clé SSH :**
```bash
# Générer la clé
ssh-keygen -t ed25519 -C "idiaquitaine@outlook.fr"

# Appuyez sur Enter pour tous les prompts
# (ou donnez un chemin custom si vous voulez)

# Afficher la clé publique
cat ~/.ssh/id_ed25519.pub

# COPIER TOUT LE CONTENU (commence par "ssh-ed25519...")
```

**Ajouter la clé à GitHub :**
1. Aller sur https://github.com/settings/keys
2. Cliquer "New SSH key"
3. Title: "MacBook IDI Aquitaine"
4. Key: Coller la clé publique (celle qui commence par ssh-ed25519)
5. Cliquer "Add SSH key"

**Tester la connexion :**
```bash
ssh -T git@github.com
# Doit afficher: "Hi idi-aquitaine! You've successfully authenticated..."
```

### Option B: HTTPS (Plus simple, mais moins sûr)

```bash
# GitHub demandera votre email/password
# Ou générer un Personal Access Token (PAT):

# 1. Aller sur https://github.com/settings/tokens
# 2. Générer un nouveau token "classic"
# 3. Sauvegarder le token (vous ne pourrez pas le voir après)
# 4. Utiliser le token comme password quand Git demande
```

---

## ÉTAPE 5️⃣ : Pousser le Code sur GitHub

### Ajouter l'URL du Repository

```bash
cd /Users/tib64/IDI\ Aquitaine

# Ajouter le "remote" (lien vers GitHub)
git remote add origin git@github.com:idi-aquitaine/idiaquitaine-website.git

# OU (si vous utilisez HTTPS):
# git remote add origin https://github.com/idi-aquitaine/idiaquitaine-website.git

# Vérifier
git remote -v
# Doit afficher:
# origin  git@github.com:idi-aquitaine/idiaquitaine-website.git (fetch)
# origin  git@github.com:idi-aquitaine/idiaquitaine-website.git (push)
```

### Pousser le Code

```bash
# Créer la branche main (GitHub préfère "main" plutôt que "master")
git branch -M main

# Pousser le code
git push -u origin main

# Vous devriez voir:
# Enumerating objects: XX, done.
# Counting objects: 100% (XX/XX), done.
# Delta compression using up to 8 threads
# Compressing objects: 100% (XX/XX), done.
# Writing objects: 100% (XX/XX), done.
# ...
# branch 'main' set up to track 'origin/main'.
```

### Vérifier sur GitHub

1. Aller sur https://github.com/idi-aquitaine/idiaquitaine-website
2. Vous devriez voir tous vos fichiers ! ✅

---

## ÉTAPE 6️⃣ : Configurer le Repo GitHub

### README.md (Ajouter une description)

```bash
# Créer un fichier README.md
cat > /Users/tib64/IDI\ Aquitaine/README.md << 'EOF'
# 🏠 IDI Aquitaine – Site Web Complet

Site web professionnel pour IDI Aquitaine : Diagnostic Immobilier, Infiltrométrie RT2012/RE2020, Recherche de Fuites d'eau non destructive.

## 🌐 Domaine

**Production :** https://idiaquitaine.fr

## 📁 Structure du Projet

```
idiaquitaine-website/
├── index.html                      # Page d'accueil
├── blog.html                       # Page listing blog
├── article-1.html à article-8.html # 8 articles blog
├── mentions-legales.html           # Mentions légales
├── politique-confidentialite.html  # RGPD
├── cgv.html                        # Conditions générales
├── 404.html                        # Page erreur
├── vercel.json                     # Config Vercel (CSP headers)
├── sitemap.xml                     # SEO sitemap
├── robots.txt                      # Directives robots
├── test-formspree.html             # Test formulaire
├── test-responsive.html            # Test viewport
└── docs/
    ├── GUIDE-DEPLOIEMENT.md        # Guide complet déploiement
    ├── ENVOI-TEST-MAIL.md          # Guide test Formspree
    ├── PRE-DEPLOIEMENT-EXPERT.md   # Conseils experts avant prod
    └── README.md                   # Ce fichier
```

## ✨ Fonctionnalités

- ✅ Site statique 100% HTML/CSS/JS (pas de backend)
- ✅ Navigation responsive (mobile-first)
- ✅ Formulaire Formspree intégré
- ✅ Google Analytics 4 (GA4) tracking
- ✅ SEO optimisé (Schema.org + Sitemap)
- ✅ Sécurité (CSP headers via Vercel)
- ✅ 8 articles blog avec métadonnées complètes
- ✅ Pages légales (RGPD compliant)

## 🚀 Déploiement

Déployé sur **Vercel** avec domaine custom `idiaquitaine.fr`

### Pre-Déploiement
1. Configurer DNS chez Hostinger (vers Vercel)
2. Remplacer GA4 ID (placeholder → vrai ID)
3. Tester localement

### Déploiement
```bash
npm install -g vercel
vercel login
vercel deploy
```

## 📧 Contact & Support

- Email: idiaquitaine@outlook.fr
- Téléphone: +33 6 64 48 42 05
- Localisation: Saint-Laurent-de-Médoc, Gironde

## 📝 License

© 2025 IDI Aquitaine – Tous droits réservés

EOF

# Commiter le README
git add README.md
git commit -m "docs: Ajouter README.md avec description du projet"
git push origin main
```

### .gitignore (Fichiers à ignorer)

```bash
# Créer un fichier .gitignore
cat > /Users/tib64/IDI\ Aquitaine/.gitignore << 'EOF'
# OS Files
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/
*.swp
*.swo

# Node (pour Vercel)
node_modules/
.env
.env.local

# Logs
*.log

# Fichiers temporaires
*.tmp
*.bak
*~

EOF

# Commiter .gitignore
git add .gitignore
git commit -m "chore: Ajouter .gitignore"
git push origin main
```

---

## ÉTAPE 7️⃣ : Ajouter des Collaborateurs (Optionnel)

Si vous voulez partager avec quelqu'un d'autre :

1. **Sur GitHub :** https://github.com/idi-aquitaine/idiaquitaine-website/settings/access
2. **Cliquer "Add people"**
3. **Entrer le username GitHub** (ex: tib64)
4. **Choisir le rôle :**
   - `Maintain` : Peut pousser du code et gérer le repo
   - `Triage` : Peut créer des issues mais pas pousser du code
   - `Pull requests & discussions` : Lecture seule

---

## ÉTAPE 8️⃣ : Protéger la Branche Main (Recommandé)

### Éviter des Push Accidentels

1. **Settings du repo** → **Branches**
2. **Add rule** → Pattern: `main`
3. **Cocher :**
   - ✅ Require pull request reviews before merging
   - ✅ Require status checks to pass before merging
   - ✅ Include administrators

Cela force à utiliser des Pull Requests avant de modifier main ! ✨

---

## ✅ Checklist Final

```
GitHub Account & Repo
  [ ] Compte GitHub créé (idi-aquitaine ou autre)
  [ ] Repository créé (idiaquitaine-website)
  [ ] SSH key ou HTTPS token configuré

Local Setup
  [ ] Git initialisé
  [ ] Premier commit fait
  [ ] Remote "origin" pointant vers GitHub
  [ ] Code poussé sur GitHub (git push)

GitHub Configuration
  [ ] README.md ajouté
  [ ] .gitignore ajouté
  [ ] Branche main protégée (optionnel mais recommandé)

Vérification
  [ ] https://github.com/idi-aquitaine/idiaquitaine-website accessible
  [ ] Tous les fichiers visibles
  [ ] README visible sur la page d'accueil du repo
```

---

## 🔄 Workflow Quotidien (Après Setup)

```bash
# Faire des changements dans vos fichiers...

# Vérifier les changements
git status

# Ajouter les changements
git add .

# Commiter avec un message clair
git commit -m "feat: Ajouter nouvelle section FAQ"

# Pousser vers GitHub
git push origin main
```

### Messages de Commit Clairs

```bash
# Type : Description courte (< 50 caractères)

# Exemples:
git commit -m "feat: Ajouter formulaire newsletter"
git commit -m "fix: Corriger bug z-index burger menu"
git commit -m "docs: Mettre à jour guide déploiement"
git commit -m "style: Harmoniser padding nav"
git commit -m "refactor: Simplifier CSS modales"
git commit -m "perf: Optimiser images"
git commit -m "test: Ajouter test formulaire"
```

**Types recommandés :**
- `feat:` = Nouvelle fonctionnalité
- `fix:` = Correction de bug
- `docs:` = Documentation
- `style:` = Formatage, pas de logique
- `refactor:` = Réécriture sans changer le comportement
- `perf:` = Performance
- `test:` = Tests
- `chore:` = Maintenance, dépendances

---

## 🎯 Prochaines Étapes

1. **Créer le compte GitHub** (5 min)
2. **Créer le repository** (2 min)
3. **Pousser le code** (3 min)
4. **Ajouter README + .gitignore** (2 min)
5. **Configurer protections de branche** (2 min)

**Total :** ⏱️ **15 minutes**

---

## 🆘 Dépannage

### "SSH key not working"
```bash
# Vérifier la connexion
ssh -T git@github.com

# Si erreur, régénérer la clé
rm ~/.ssh/id_ed25519*
ssh-keygen -t ed25519 -C "idiaquitaine@outlook.fr"

# Ajouter à nouveau dans GitHub Settings
```

### "Remote already exists"
```bash
# Vérifier les remotes
git remote -v

# Supprimer le remote
git remote remove origin

# Ajouter à nouveau
git remote add origin git@github.com:idi-aquitaine/idiaquitaine-website.git
```

### "Permission denied (publickey)"
```bash
# Vous n'avez probablement pas configuré SSH
# Suivre Option B (HTTPS) ou refaire SSH setup correctement
```

---

## 📚 Ressources Utiles

- **Git Basics :** https://git-scm.com/book/en/v2
- **GitHub Docs :** https://docs.github.com
- **SSH Keys :** https://docs.github.com/en/authentication/connecting-to-github-with-ssh

Prêt ? Commencez par créer le compte GitHub ! 🚀

