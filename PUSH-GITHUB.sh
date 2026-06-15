#!/bin/bash

# 🚀 SCRIPT: Pousser IDI Aquitaine sur GitHub
# URL: https://github.com/idiaquitaine-website/idiaquitaine-website.git

echo "🚀 Préparation du push sur GitHub..."
echo ""

cd /Users/tib64/IDI\ Aquitaine

# ========== VÉRIFICATIONS ==========
echo "📋 Vérification de l'état du projet..."
echo ""

# Vérifier que Git est initialisé
if [ ! -d ".git" ]; then
  echo "❌ Git n'est pas initialisé"
  echo ""
  echo "Initialisation..."
  git init
  echo "✅ Git initialisé"
else
  echo "✅ Git déjà initialisé"
fi

echo ""

# ========== CONFIGURATION GIT ==========
echo "🔧 Configuration Git..."

git config --global user.name "IDI Aquitaine"
git config --global user.email "idiaquitaine@outlook.fr"

echo "✅ Configuration Git complète"
echo ""

# ========== AJOUTER TOUS LES FICHIERS ==========
echo "📦 Ajout des fichiers..."

git add .

echo "✅ Fichiers ajoutés"
echo ""

# ========== VÉRIFIER LE STATUS ==========
echo "📊 État du projet:"
git status --short
echo ""

# ========== PREMIER COMMIT ==========
echo "💾 Création du premier commit..."

git commit -m "🚀 Initial commit: IDI Aquitaine - Site complet

## Contenu
- ✅ 12 pages HTML (accueil, blog, 8 articles, pages légales, 404)
- ✅ Navigation harmonisée et responsive (mobile-first)
- ✅ Formulaire Formspree intégré (ID: mojzrdvb)
- ✅ Google Analytics 4 (GA4) prêt à configurer
- ✅ SEO optimisé (Schema.org + Sitemap + Robots.txt)
- ✅ Sécurité (CSP headers via Vercel)
- ✅ Documentation complète (guides déploiement)
- ✅ Pages de test (responsive, formulaire)

## Technologies
- HTML5 / CSS3 / JavaScript (vanilla)
- Formspree (formulaire)
- Vercel (déploiement)
- Google Analytics 4

## Déploiement
Production: https://idiaquitaine.fr

## État
Prêt pour Vercel + domaine custom idiaquitaine.fr"

echo "✅ Commit créé"
echo ""

# ========== AJOUTER LE REMOTE GITHUB ==========
echo "🔗 Configuration du remote GitHub..."

# Vérifier si le remote existe déjà
if git remote | grep -q "^origin$"; then
  echo "⚠️  Remote 'origin' existe déjà"
  CURRENT_ORIGIN=$(git remote get-url origin)
  echo "   URL actuelle: $CURRENT_ORIGIN"

  if [ "$CURRENT_ORIGIN" = "https://github.com/idiaquitaine-website/idiaquitaine-website.git" ]; then
    echo "✅ URL correcte, pas besoin de changer"
  else
    echo "❌ URL différente détectée"
    echo "   Remplacement par: https://github.com/idiaquitaine-website/idiaquitaine-website.git"
    git remote remove origin
    git remote add origin https://github.com/idiaquitaine-website/idiaquitaine-website.git
  fi
else
  echo "   Ajout du remote 'origin'..."
  git remote add origin https://github.com/idiaquitaine-website/idiaquitaine-website.git
  echo "✅ Remote configuré"
fi

echo ""

# ========== VÉRIFIER LA CONNEXION (OPTIONNEL) ==========
echo "🔐 Vérification de la connexion GitHub..."
echo ""
echo "⚠️  Note: Si vous êtes en HTTPS, Git demandera:"
echo "   - Username: idiaquitaine-website"
echo "   - Password: Votre Personal Access Token (PAT)"
echo ""
echo "   Si vous êtes en SSH, Git utilisera votre clé SSH"
echo ""

# ========== PUSH ==========
echo "📤 Poussée du code sur GitHub..."
echo ""

git push -u origin main

# ========== RÉSULTAT ==========
echo ""
echo "================================"
echo "✅ PUSH TERMINÉ !"
echo "================================"
echo ""
echo "🎉 Votre code est maintenant sur GitHub !"
echo ""
echo "Accédez à votre repo:"
echo "   https://github.com/idiaquitaine-website/idiaquitaine-website"
echo ""
echo "Prochaines étapes:"
echo "   1. Configurer DNS (Hostinger → Vercel)"
echo "   2. Remplacer GA4 ID"
echo "   3. Déployer sur Vercel"
echo "   4. Tester en production"
echo ""
echo "Plus d'infos: /PRE-DEPLOIEMENT-EXPERT.md"
