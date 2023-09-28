# Legwarmer Starter Theme

The goal is to set up a personalized framework for myself. It contains pre-made CSS/SCSS classes to build a webpage quickly. Instead of relying only on classes into the HTML as modifier, I use the `data-` attributes inspired by the CUBE CSS methodology and changing custom properties in the style attribute as modifier. The utility classes are mainly used to set up foundations to the HTML.

On the JavaScript side, I use the modern libraries and make them easier to use by making classes that are triggered when an HTML element contains a `data-component` attribute with the appropriate component.

If you use VSCode, VSCodium, VSCode OSS, or any equivalent, you have access to the snippets I made for building an HTML component quickly or make your own JS component.

## How to instanciate a component

Look the doc to build the neccessary HTML structure for the corresponding component, then add `data-component` to the HTML container with the component name as value.

Example:
```
HTML
    <!-- The container is a Carousel component -->
    <div class="swiper" data-component="Carousel">
		<div class="swiper-wrapper">
			<div class="swiper-slide">
				Slide 1
			</div>
			<div class="swiper-slide">
				Slide 2
			</div>
			<div class="swiper-slide">
				Slide 3
			</div>
			...
		</div>
		<div class="swiper-pagination"></div>
		<div class="swiper-button-prev"></div>
		<div class="swiper-button-next"></div>
	</div>
```

## TODO

- [ ] TypeScript Support
- [ ] Documentation
- [ ] Switch from hsl() to oklch()
- [ ] Update existing component for @container implementation

### JS Components

- [x] Carousel
- [x] Header
- [ ] LightBox
- [ ] FullPage
- [ ] Background3D
- [ ] Parallax
- [ ] SortList
- [ ] ModelViewer
- [ ] Tooltip / Popover (On native HTML,CSS soon)
- [ ] QR Code
- [ ] Toaster
- [ ] SortTable
- [ ] Accordion
- [ ] Side Accordion
- [ ] Light/Dark Mode
- [ ] Isotop ?
- [ ] Touch
- [ ] VideoPlayer
- [ ] MusicPlayer
- [ ] Tabs
- [ ] CopyToClipboard
- [ ] Modals
- [ ] CookieConsent

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
- [ ] Forms

### CSS Libraries

- [ ] Animate.css
- [ ] magic
- [ ] pattern.css
- [ ] seasonal.css
- [ ] grxdients
- [ ] MoreToggles.css
- [ ] fluiditype

### HTML/CSS Structure

- [x] Cartes
- [x] Bouton
- [x] Navigation principale
- [x] Logo
- [x] Image arrière-plan
- [ ] Parallax (CSS only)
- [ ] Masonry
- [ ] container full width (image to the side)

### CSS Utilities



### Runtime and template versions to try

- [x] Purist
- [x] Gulp
- [x] Vite
- [ ] Astro
- [ ] Qwik
- [ ] WordPress Theme
- [ ] DecapCMS Theme
