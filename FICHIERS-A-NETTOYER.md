# 🧹 Fichiers à Supprimer – Nettoyage Avant GitHub

## 📊 État Actuel du Dossier

```
Total: ~50 fichiers
Utilisés: ~25 fichiers
À nettoyer: ~25 fichiers
Espace à gagner: ~2.5 MB
```

---

## ✅ FICHIERS À GARDER (OBLIGATOIRES)

### Pages HTML (12 fichiers) – 173 KB
```
✅ index.html                      (78K) - Page d'accueil PRINCIPALE
✅ blog.html                       (17K) - Blog listing
✅ article-1.html à article-8.html (8 × 12K) - Articles
✅ 404.html                        (2.3K) - Erreur 404
✅ mentions-legales.html           (3.1K) - Page légale
✅ politique-confidentialite.html  (4.7K) - RGPD
✅ cgv.html                        (3.9K) - Conditions
✅ test-formspree.html             (4.3K) - Test mail
✅ test-responsive.html            (3.0K) - Test mobile
```

### Configuration (3 fichiers) – 3.4 KB
```
✅ vercel.json                     (1.2K) - Config Vercel
✅ sitemap.xml                     (2.2K) - SEO sitemap
✅ robots.txt                      (190B) - Robots
```

### Images Utilisées (5 fichiers) – 860 KB
```
✅ logo.png                        (377K) - Logo principal
✅ logo_transparent.png            (420K) - Logo transparent
✅ picto_infiltrometrie.jpg        (24K) - Picto service 1
✅ picto_humidite.jpg              (23K) - Picto service 2
✅ picto_dpe.jpg                   (21K) - Picto service 3
```

### Documentation (4 fichiers) – 42 KB
```
✅ GUIDE-DEPLOIEMENT.md            (6.2K) - Guide complet
✅ RECAP-SESSION.md                (8.3K) - Récap technique
✅ ENVOI-TEST-MAIL.md              (4.0K) - Test formulaire
✅ PRE-DEPLOIEMENT-EXPERT.md       (12K) - Conseils experts
✅ SETUP-GITHUB.md                 (12K) - Setup GitHub
✅ CHECKLIST-FINAL.txt             (11K) - Checklist finale
```

**TOTAL À GARDER :** ~1 MB (de fichiers utiles)

---

## 🗑️ FICHIERS À SUPPRIMER

### 1. Fichiers Système (SANS DANGER) ⏱️ 10 sec
```
❌ .DS_Store                       (10K)
   Raison: Fichier système macOS, auto-généré
   Impact: AUCUN
   Action: rm /Users/tib64/IDI\ Aquitaine/.DS_Store
```

### 2. Fichier Standalone Géant (SANS DANGER) ⏱️ 5 sec
```
❌ index_standalone.html           (1.3M) ⚠️ ÉNORME
   Raison: Ancienne version "standalone" (probablement v1)
   Impact: AUCUN (on utilise index.html moderne)
   Action: rm /Users/tib64/IDI\ Aquitaine/index_standalone.html
   Économies: 1.3 MB libérés !
```

### 3. Images Non Utilisées (SANS DANGER) ⏱️ 10 sec
```
❌ Activités.png                   (751K)
   Raison: Image non référencée dans le code
   Impact: AUCUN
   
❌ Plaquette.jpg                   (123K)
   Raison: Non utilisée
   Impact: AUCUN

❌ pictos.jpg                      (149K)
   Raison: Image générique remplacée par picto_infiltrometrie, etc.
   Impact: AUCUN

❌ pictos_cropped.jpg              (129K)
   Raison: Version intermédiaire
   Impact: AUCUN

❌ 624825564_841327525540267_3237915778998883888_n.jpg (123K)
   Raison: Image aléatoire non utilisée
   Impact: AUCUN

Action: rm /Users/tib64/IDI\ Aquitaine/{Activités,Plaquette,pictos,624825564}.{png,jpg}
Économies: ~1.2 MB libérés !
```

### 4. Documents Non Essentiels (À CONSIDÉRER) ⏱️ 5 sec
```
❌ IDI.pdf                         (77K)
   Raison: Document non utilisé dans le site
   Impact: AUCUN
   Conseil: À garder en archive locale si important

❌ PROJET_IDI_AQUITAINE.md         (4.0K)
   Raison: Ancien document / résumé projet
   Impact: AUCUN
   Conseil: Fusionner avec RECAP-SESSION.md si utile

❌ AUDIT-ET-CORRECTIONS.md         (7.9K)
   Raison: Ancien audit en local
   Impact: AUCUN
   Conseil: Fusionner dans RECAP-SESSION.md si utile
```

### 5. Dossiers Système (À IGNORER) ⏱️ Ne pas toucher
```
⚠️ .claude/                        (128B)
   Raison: Configuration Claude Code
   Action: NE PAS SUPPRIMER
   Conseil: Ajouter à .gitignore
```

### 6. Fichiers Corrompus ou Mal Nommés (À INVESTIGUER)
```
❓ IDI (45K)
❓ IDI (608B)
❓ IDI (41K)
❓ IDI (96B)
❓ IDI (45K)
❓ IDI (608B)

Raison: Fichiers/dossiers mal nommés (probablement dupliqués)
Impact: À vérifier
Action: Vérifier si ce sont des dossiers ou fichiers orphelins
```

---

## 🎯 PLAN DE NETTOYAGE RECOMMANDÉ

### Phase 1: Suppression SANS RISQUE (5 min)
```bash
# Aller dans le dossier
cd /Users/tib64/IDI\ Aquitaine

# Supprimer les fichiers système
rm -f .DS_Store

# Supprimer le standalone géant
rm -f index_standalone.html

# Supprimer les images non utilisées
rm -f Activités.png Plaquette.jpg pictos.jpg pictos_cropped.jpg 624825564_841327525540267_3237915778998883888_n.jpg

# Vérifier qu'aucun HTML ne reference ces images
grep -r "Activités\|Plaquette\|pictos" *.html
# → Ne devrait rien retourner
```

### Phase 2: Nettoyage des Vieux Docs (OPTIONNEL)
```bash
# Vérifier le contenu avant de supprimer
cat /Users/tib64/IDI\ Aquitaine/PROJET_IDI_AQUITAINE.md
cat /Users/tib64/IDI\ Aquitaine/AUDIT-ET-CORRECTIONS.md

# Si vous avez fusionné le contenu ou si ce n'est pas important:
rm -f PROJET_IDI_AQUITAINE.md AUDIT-ET-CORRECTIONS.md
```

### Phase 3: Archiver les Documents (RECOMMANDÉ)
```bash
# Créer un dossier d'archive en local (pas sur GitHub)
mkdir -p ~/Archive-IDI-Aquitaine
cp /Users/tib64/IDI\ Aquitaine/IDI.pdf ~/Archive-IDI-Aquitaine/

# Puis supprimer du projet
rm -f /Users/tib64/IDI\ Aquitaine/IDI.pdf
```

### Phase 4: Investiguer les Fichiers Mal Nommés
```bash
# Voir ce que c'est
file /Users/tib64/IDI\ Aquitaine/IDI*

# Si ce sont des dossiers vides
find /Users/tib64/IDI\ Aquitaine -name "IDI*" -type d -empty -delete

# Sinon, décider manuellement
```

---

## 📋 Résumé des Suppressions

| Fichier | Taille | Risque | Action |
|---------|--------|--------|--------|
| `.DS_Store` | 10K | ✅ Aucun | Supprimer |
| `index_standalone.html` | 1.3M | ✅ Aucun | Supprimer |
| `Activités.png` | 751K | ✅ Aucun | Supprimer |
| `Plaquette.jpg` | 123K | ✅ Aucun | Supprimer |
| `pictos.jpg` | 149K | ✅ Aucun | Supprimer |
| `pictos_cropped.jpg` | 129K | ✅ Aucun | Supprimer |
| `624825564...jpg` | 123K | ✅ Aucun | Supprimer |
| `IDI.pdf` | 77K | ✅ Aucun | Archiver ou supprimer |
| `PROJET_IDI_AQUITAINE.md` | 4K | ✅ Aucun | Vérifier + fusionner |
| `AUDIT-ET-CORRECTIONS.md` | 8K | ✅ Aucun | Vérifier + fusionner |
| `IDI (variantes)` | ~500K | ❓ À investiguer | Vérifier |

**Total à libérer:** ~3.5 MB

---

## ✅ État Final Attendu

```
Après Nettoyage:

index.html                      ✅
blog.html                       ✅
article-1.html à 8.html         ✅
Pages légales + 404             ✅
Configs (vercel, sitemap, robots) ✅
Docs essentiels                 ✅
Images utilisées (logos + pictos) ✅

Projet lean, prêt pour GitHub ! 🚀
```

---

## 🔒 Safety Check Avant Suppression

**Avant de supprimer, vérifier :**

```bash
# 1. Aucune référence HTML aux images supprimées
grep -r "Activités\|Plaquette\|pictos\|index_standalone" *.html
# → Ne devrait rien retourner

# 2. Aucune image cassée
grep -r "src=" *.html | grep -i "picto\|logo"
# Doit montrer SEULEMENT picto_infiltrometrie, picto_humidite, picto_dpe, logo

# 3. Tous les fichiers HTML essentiels présents
ls -1 *.html
# Doit avoir: index, blog, article-*, 404, mentions, confidentialite, cgv, test-*
```

---

## 🎯 Recommandation Finale

**Je conseille :** 
1. ✅ Supprimer Phase 1 (100% safe) → Économise 1.3M !
2. ✅ Archiver IDI.pdf en local
3. ⚠️ Vérifier les fichiers "IDI (variantes)" manuellement
4. ✅ Puis pousser sur GitHub avec un repo clean

**Résultat :** Un repo GitHub léger et professionnel ! 🎉

