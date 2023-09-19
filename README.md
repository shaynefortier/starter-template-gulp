# Legwarmer Starter Theme

## Un Environnement de Développement Web Axé sur l'Efficacité

Le développement web évolue rapidement, et avec lui, les besoins des développeurs. Pour rester compétitif et accélérer la création de sites web de qualité, un environnement de développement efficace est essentiel. Laissez-moi vous présenter une structure innovante qui promet de révolutionner votre processus de développement.

## Technologies Utilisées

Au cœur de cet environnement de développement, vous trouverez les technologies web de base : HTML, CSS, JavaScript, et même la possibilité d'intégrer TypeScript dans le futur. Cette flexibilité garantit que vous avez les outils nécessaires pour réaliser divers projets.

## Structure Organisée

L'organisation des fichiers est une clé pour une gestion de projet efficace. Dans cette structure, les pages HTML résident à la racine, tandis que les fichiers CSS et SCSS sont regroupés dans le dossier "style". Le SCSS suit la méthodologie "CUBE CSS" et est découpé en dossiers pour chaque groupe de classe, favorisant ainsi la modularité. Les fichiers JavaScript sont organisés dans le dossier "script", avec "Main.js" à la racine et d'autres dans le sous-dossier "modules", chaque composante ayant son propre fichier. Les images et les assets sont regroupés dans le dossier "assets", ce qui simplifie leur gestion.

## Styles CSS Optimisés

La gestion des styles CSS est facilitée grâce à l'utilisation de Sass comme préprocesseur. PostCSS est employé pour minifier le code CSS et ajouter les préfixes nécessaires, garantissant une compatibilité optimale avec les navigateurs.

## Composantes JavaScript Réutilisables

Les composantes JavaScript sont le joyau de cet environnement. Elles sont conçues pour apporter de l'interactivité aux pages web avec une simplicité déconcertante. Il suffit de placer l'attribut "data-component" avec la valeur de la composante souhaitée pour les instancier automatiquement. Certaines de ces composantes tirent parti de bibliothèques tierces pour des fonctionnalités spécifiques, mais aucune dépendance framework n'est imposée.

## Gestion des Dépendances

La plupart des dépendances de bibliothèques sont gérées via npm, offrant un contrôle total sur les packages utilisés. Cependant, certaines ressources, telles qu'Iconify, sont chargées à partir d'un CDN externe pour optimiser les performances.

## Versions Variées pour Divers Besoins

Il convient de noter que cet environnement de développement est hautement adaptable. Il existe différentes versions, y compris une version "puriste" avec uniquement les langages de base, une version webpack pour le développement et la compilation, ainsi qu'une version Gulp qui gère tout grâce à des plugins. Cependant, toutes ces versions partagent la même structure de fichiers cohérente, ce qui simplifie la transition entre elles.

## Tâches

- [ ] Support TypeScript
- [ ] Documentation

### Composantes

- [x] Carousel
- [x] Header
- [ ] LightBox
- [ ] FullPage
- [ ] Background3D
- [ ] Parallax
- [ ] SortList
- [ ] ModelViewer
- [ ] Tooltip / Popover (Bientôt HTML,CSS uniquement)
- [ ] QR Code
- [ ] Toaster
- [ ] SortTable
- [ ] Accordion
- [ ] Light/Dark Mode
- [ ] Isotop ?
- [ ] Touch
- [ ] VideoPlayer
- [ ] MusicPlayer

### JS Libraries

- [x] Swiper
- [x] Iconify
- [ ] Vanta.js
- [ ] Hammer.js
- [ ] FlexMasonry
- [ ] Isotop / MixItUp ?
- [ ] SortableJS
- [ ] Rellax
- [ ] \<model-viewer>
- [ ] Floating UI
- [ ] QRCode.js
- [ ] Masonry
- [ ] Solid Toast
- [ ] List.js
- [ ] PhotoSwipe
- [ ] Accordion
- [ ] Video.js
- [ ] p2p-media-loader
- [ ] JavascriptSubtitlesOctopus

### CSS Libraries

- [ ] Animate.css
- [ ] magic
- [ ] pattern.css
- [ ] seasonal.css
- [ ] grxdients
- [ ] MoreToggles.css
- [ ] fluiditype

### Structure HTML/CSS

- [x] Cartes
- [x] Bouton
- [x] Navigation principale
- [x] Logo
- [x] Image arrière-plan
- [ ] Parallax (CSS seulement)
- [ ] Masonry

### Version de l'environnement

- [x] Purist
- [x] Gulp
- [ ] Astro
- [x] Vite
- [ ] Thème WordPress