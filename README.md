# Magali Courté — Portfolio

Portfolio personnel de **Magali Courté**, Data Engineer en formation (spécialisation IA), ex-ingénieure BTP.
Site statique en une seule page (`index.html`), sans framework, sans étape de build — HTML / CSS / JavaScript natifs, prêt pour GitHub Pages.

**Démo :** une fois déployé sur `mcourte.github.io`, le site est accessible directement à la racine.

---

## Direction artistique

Le site reprend le vocabulaire du **plan technique / cyanotype** (plans d'architecte, dessin industriel) pour raconter la transition de Magali entre génie civil et développement :

- **Couleurs** — fond bleu "plan" (`#0d2440` / `#081627`), lignes cyan façon calque (`#d7edf9`), accent ambre "mètre de chantier" (`#e8a33d`), cartes "papier vélin" (`#f3ecdd`) pour la fiche profil.
- **Typographies** — [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (titres), [Inter](https://fonts.google.com/specimen/Inter) (texte courant), [IBM Plex Mono](https://fonts.google.com/specimen/IBM+Plex+Mono) (données, tags, éléments techniques). Chargées via Google Fonts (CDN, voir `<head>`).
- **Signature** — un panneau de "couches" interactif façon logiciel de CAO/BIM (Revit) : chaque compétence peut être masquée/affichée, ce qui fait apparaître ou disparaître la bande correspondante dans une élévation stylisée (Fondations → Structure → Systèmes → IA → Finitions).

---

## Structure du fichier

Tout tient dans **`index.html`** : CSS dans `<style>`, JavaScript dans `<script>`, pas de dépendance à compiler.

| Section (`id`) | Contenu |
|---|---|
| `#hero` | Nom, accroche, chiffres clés, boutons CV / projets / contact |
| `#about` | Texte de présentation + fiche profil ("carte d'identité") |
| `#layers` | Compétences, sous forme de couches interactives (cliquables) |
| `#parcours` | Frise chronologique (formations + expériences), dépliable au clic |
| `#projets` | Trois fiches projet avec vignette, tags techniques et lien GitHub |
| `#contact` | Cartouche de contact (email, téléphone, GitHub, LinkedIn) |

La navigation fixe en haut de page reste visible au scroll et met en évidence la section active.

---

## Fichiers nécessaires au dépôt

```
/
├── index.html          ← ce fichier
├── CV-MCO.pdf           ← CV téléchargeable (lien utilisé dans le hero)
└── images/
    ├── project1.png     ← vignette "Analyse Sales E-commerce"
    ├── project4.png     ← vignette "Site web Django"
    └── project2.png     ← vignette "Tous mes projets"
```

Sans ces fichiers, les images et le lien de téléchargement du CV renverront une 404 : à conserver ou remplacer par tes propres visuels/CV en gardant les mêmes noms, ou en adaptant les chemins dans `index.html`.

---

## Personnaliser

Tout se pilote depuis les variables CSS en haut du fichier (`:root { ... }`) :

```css
--bg: #0d2440;        /* fond principal */
--amber: #e8a33d;     /* couleur d'accent */
--font-display: 'Space Grotesk', sans-serif;
--font-body: 'Inter', sans-serif;
--font-mono: 'IBM Plex Mono', monospace;
```

- **Changer les couleurs** → modifier les valeurs hexadécimales dans `:root`.
- **Changer les polices** → remplacer le lien Google Fonts dans le `<head>` et les variables `--font-*`.
- **Ajouter un projet** → dupliquer un bloc `<a class="proj-card">…</a>` dans la section `#projets`.
- **Ajouter une étape au parcours** → dupliquer un bloc `<div class="t-item">…</div>` dans la section `#parcours` (l'attribut `data-type="formation"` ou `data-type="experience"` change la couleur du repère).
- **Ajouter/retirer une compétence** → dupliquer un `<li class="layer-item">` dans `#layers` **et** la bande `<g class="layer-band">` correspondante dans le SVG juste en dessous (même valeur d'attribut `data-layer` des deux côtés).

---

## Déploiement (GitHub Pages)

1. Place `index.html`, `CV-MCO.pdf` et le dossier `images/` à la racine du dépôt `mcourte.github.io`.
2. Commit + push sur la branche par défaut.
3. Dans **Settings → Pages** du dépôt, vérifie que la source est bien la branche `main` (ou `master`), dossier racine.
4. Le site est en ligne sur `https://mcourte.github.io/` en quelques minutes.

---

## Accessibilité & performance

- Respecte `prefers-reduced-motion` (animations désactivées si l'utilisateur l'a demandé côté système).
- Navigation clavier fonctionnelle, focus visible sur les liens et éléments interactifs.
- Responsive de la version desktop jusqu'au mobile (menu hamburger en dessous de 820 px).
- Aucune dépendance JS externe : tout le code interactif (menu, navigation active, couches, frise, curseur du hero) est écrit à la main dans le fichier.

---

## Licence

Contenu personnel de Magali Courté. Libre à toi de réutiliser la structure/le code pour ton propre usage.
