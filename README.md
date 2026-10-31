# TESA GANCIA | Maison Événementielle de Prestige au Cameroun

Site web officiel haute couture de **Tesa Gancia**, maison événementielle de luxe au Cameroun (Douala, Yaoundé, Bafoussam).
Conçu et réalisé par **PRYMAX STUDIO** ([prymaxstudio.com](https://prymaxstudio.com)).

---

## 🎨 Système de Design (White & Violet Haute Couture)
- **Palette Royale & Épurée** :
  - Blanc pur & Ivoire délicat : `#FFFFFF`, `#FAF8F5`, `#FAF8FC`
  - Violet Royal & Impérial : `#2D124D`, `#1D0A33`, `#12061F`
  - Or Champagne & Dégradé Solaire : `#C9A96A`, `#E6D3A8`, `#B8944F`
  - Textes & Contrastes : `#191424` (titres et corps foncés sur fond clair), `#6B5E78` (textes secondaires)
- **Typographie** :
  - Titres : *Cormorant Garamond* (500/600, accents cursifs dorés)
  - Textes & UI : *Inter* (400/500/600)
- **Performance & Éco-conception** :
  - 0 dépendances superflues (ni jQuery, ni GSAP, ni Framer Motion).
  - Animations pures en CSS Hardware-Accelerated et IntersectionObserver.
  - SVG inline pour une netteté vectorielle parfaite et zéro requête d'icône.
  - Image du logo officiel Tesa Gancia intégrée en haute résolution : `https://i.ibb.co/9HC7vD2h/IMG-20261026-WA0097.jpg`.

---

## 🚀 Guide de Déploiement

### 1. Déploiement sur Cloudflare Pages
1. Connectez votre dépôt Git à votre tableau de bord Cloudflare Pages.
2. Paramètres de compilation :
   - **Framework Preset** : `Vite`
   - **Build command** : `npm run build`
   - **Build output directory** : `dist`
3. Les en-têtes de sécurité et règles de cache sont automatiquement appliqués grâce au fichier `_headers` présent à la racine.

### 2. Déploiement sur Netlify
1. Connectez votre dépôt sur [Netlify.com](https://netlify.com).
2. Paramètres de build :
   - **Build command** : `npm run build`
   - **Publish directory** : `dist`
3. Le fichier `_headers` est automatiquement lu et appliqué par Netlify (Content-Security-Policy, HSTS, Permissions-Policy).

### 3. Déploiement sur Vercel
1. Importez votre dépôt sur [Vercel.com](https://vercel.com).
2. Vercel détecte automatiquement `Vite` :
   - **Build command** : `npm run build`
   - **Output directory** : `dist`
3. Les règles de sécurité, redirections SPA et optimisations HTTP/2 sont configurées dans `vercel.json`.

---

## 📱 Numéros de Contact Officiels & Bureaux
- **Douala (Siège & Showroom Principal)** : Bonanjo, Boulevard de la Liberté
  - Téléphone 1 : `+237 655 493 685` (Appels & WhatsApp)
  - Téléphone 2 : `+237 651 748 836` (Appels & WhatsApp)
- **Yaoundé (Protocole & Représentation)** : Bastos, Avenue Jean-Paul II
  - Téléphone : `+237 651 748 836` & `+237 655 493 685`
- **Bafoussam (Pôle Régional Ouest)** : Centre-ville
  - Téléphone : `+237 655 493 685`
- **Courriel** : `contact@tesagancia.com`
- **Direction Digitale** : PRYMAX STUDIO ([https://prymaxstudio.com](https://prymaxstudio.com))
