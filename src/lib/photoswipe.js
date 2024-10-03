//import PhotoSwipeLightbox from 'photoswipe/lightbox';
import PhotoSwipeLightbox from 'https://unpkg.com/photoswipe/dist/photoswipe-lightbox.esm.js';
import 'photoswipe/style.css';

const lightbox = new PhotoSwipeLightbox({
  gallery: '#ps-gallery',
  children: 'a',
  pswpModule: () => import('photoswipe')
});
lightbox.init();