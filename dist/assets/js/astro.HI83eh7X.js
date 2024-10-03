/* empty css               */
import { c as createAstro, a as createComponent, r as renderTemplate, m as maybeRenderHead, b as addAttribute, s as spreadAttributes, d as renderSlot, e as renderComponent, f as renderHead } from './astro.BMn08NqF.js';
import 'kleur/colors';
import 'html-escaper';
/* empty css               */
import 'clsx';

const main = [
	{
		title: "Inicio",
		link: "#page-head"
	},
	{
		title: "Acerca de",
		link: "#acerca"
	},
	{
		title: "Servicios",
		link: "#servicios"
	},
	{
		title: "Contacto",
		link: "#contacto"
	}
];
const servicios$1 = [
	{
		title: "Control de Medicamentos",
		link: "#",
		img: "/assets/images/enfermeras_control.webp"
	},
	{
		title: "Canalizar",
		link: "#",
		img: "/assets/images/enfermeras_canalizar.webp"
	},
	{
		title: "Aspiración de flemas",
		link: "#",
		img: "/assets/images/aspiracion-de-flemas.webp"
	},
	{
		title: "Registro de signos vitales",
		link: "#",
		img: "assets/images/registro-signos-vitales.webp"
	},
	{
		title: "Curación de herida",
		link: "#",
		img: "/assets/images/enfermeras_curacion.webp"
	}
];

const $$Astro$w = createAstro("https://grupocepromex.com/");
const $$LinkBase = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$w, $$props, $$slots);
  Astro2.self = $$LinkBase;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-aidwhg3b> ${renderSlot($$result, $$slots["default"])} </a> `;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/base/LinkBase.astro", void 0);

const $$Astro$v = createAstro("https://grupocepromex.com/");
const $$Menu = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$v, $$props, $$slots);
  Astro2.self = $$Menu;
  const menu = main;
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute(["ic", className], "class:list")}${spreadAttributes(props)}> ${menu.map(({ title, link }) => renderTemplate`<li>${renderComponent($$result, "Link", $$LinkBase, { "href": link }, { "default": ($$result2) => renderTemplate`${title}` })}</li>`)} </ul>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/theme/Menu.astro", void 0);

const site = [
	{
		sitename: "Enfermeras y Cuidadoras CDMX",
		slogan: " UNA CARICIA EN EL ALMA ",
		description: "Cuidados de enfermería especializados como dializar, canalizar, aspiración de flemas, alimentación por sonda, curación de heridas, ayuda en terapias, verificación de signos vitales, colostomía, nebulizaciones y vaporizaciones, aplicación de inyecciones",
		address: "Ciudad de México",
		city: "CDMX",
		domain: "enfermerasycuidadoras.com.mx",
		twitter_site: "@iconmedios",
		image_site: "/images/social.jpg",
		email: "cuidarte.cuidamosloquemasamas@gmail.com"
	}
];
const contact = [
	{
		name: "55 3381 7198",
		url: "tel:5533817198",
		icon: "phone-in-talk-outline"
	}
];
const whatsapp = [
	{
		name: "WhatsApp",
		url: "https://wa.me/5215533817198",
		icon: "baseline-whatsapp"
	}
];

const $$Astro$u = createAstro("https://grupocepromex.com/");
const $$Logo = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$u, $$props, $$slots);
  Astro2.self = $$Logo;
  const data = site[0];
  const { class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(data.domain, "href")}${addAttribute(["flex ic gap-2", className], "class:list")}${spreadAttributes(props)}> <img src="/assets/images/enfermeras-logo.webp"${addAttribute(data.sitename, "alt")} width="100"> </a>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/theme/Logo.astro", void 0);

const $$Astro$t = createAstro("https://grupocepromex.com/");
const $$Mobile = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$t, $$props, $$slots);
  Astro2.self = $$Mobile;
  return renderTemplate`${maybeRenderHead()}<button id="button-open" data-astro-cid-ao6eye2i>☰ </button> <section id="nav-mobile" class="navleft " data-astro-cid-ao6eye2i> <div class="p-6" data-astro-cid-ao6eye2i> ${renderComponent($$result, "MainMenu", $$Menu, { "class": "mobile-menu", "data-astro-cid-ao6eye2i": true })} <a class="block pt-6 right-4" href="/" data-astro-cid-ao6eye2i> AVISO DE PRIVACIDAD</a> </div> </section>  `;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/theme/Mobile.astro", void 0);

const $$Astro$s = createAstro("https://grupocepromex.com/");
const $$Header = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$s, $$props, $$slots);
  Astro2.self = $$Header;
  return renderTemplate`${maybeRenderHead()}<header id="navbar"> <div class="container "> ${renderComponent($$result, "Logo", $$Logo, { "class": "logo" })} <div class="sticky:text-orange all400 hidden md:flex gap-4 ic"> <a class="flex ic gap-2"${addAttribute(contact[0].url, "href")}> <span class="text-8 w-8 rounded-full bg-brand-400 p-1 border-2 border-brand-500 text-white "> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"> <path fill="currentColor" d="M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79zm9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75zM7.5 3H4c-.55 0-1 .45-1 1c0 9.39 7.61 17 17 17c.55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1c-1.24 0-2.45-.2-3.57-.57a.84.84 0 0 0-.31-.05c-.26 0-.51.1-.71.29l-2.2 2.2a15.149 15.149 0 0 1-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02A11.36 11.36 0 0 1 8.5 4c0-.55-.45-1-1-1"></path> </svg> </span>${contact[0].name}</a> <a class=" border-2 border-brand-600 hover:bg-brand-500 hover:text-white rounded-8 py-1 px-4 leading-8 " href="#contacto">CONTACTO</a> </div> <nav class="flex icb gap-4 "> <!-- <div class="fondo-bar"></div>  --> ${renderComponent($$result, "MainMenu", $$Menu, { "class": "navigation" })} </nav> ${renderComponent($$result, "Mobile", $$Mobile, {})} </div> </header> `;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/theme/Header.astro", void 0);

var __freeze$1 = Object.freeze;
var __defProp$1 = Object.defineProperty;
var __template$1 = (cooked, raw) => __freeze$1(__defProp$1(cooked, "raw", { value: __freeze$1(raw || cooked.slice()) }));
var _a$1;
const $$Astro$r = createAstro("https://grupocepromex.com/");
const $$ContacForm = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$r, $$props, $$slots);
  Astro2.self = $$ContacForm;
  const campos = {
    name: "Nombre",
    tel: "Tel\xE9fono",
    email: "Correo Electr\xF3nico",
    sub: {
      option: "Seleccionar",
      a: "Malla ciclonica",
      b: "Tubo Industrial ",
      c: "Se\xF1alizaci\xF3n Vial",
      d: "Reja de Acero",
      e: "Otros"
    },
    message: "Mensaje"
  };
  return renderTemplate(_a$1 || (_a$1 = __template$1(["", '<form id="contacto" class="grid gap-4 bg-brand-400 p-6" action="send_select.php" method="POST"> <input class="contact-form" type="text"', ' placeholder="Nombre" required> <input class="contact-form" type="email"', ' placeholder="Email" required> <input class="contact-form" type="number"', ' placeholder="Tel\xE9fono" required> <div> <label for="color">Asunto:</label> <select class="contact-form w-3/4" name="opciones" required> <option', "> ", "</option> <option", "> ", " </option> <option", "> ", "</option> <option", "> ", "</option> <option", "> ", "</option> <option", "> ", ' </option> </select> </div> <textarea class="contact-form txt-area" rows="6" name="mensaje" placeholder="Mensaje"></textarea> <!-- <div class="g-recaptcha mb-4" data-sitekey="6LevNrcUAAAAAMQvoULLvMvrLbk5XDbFK8BItvZJ" data-callback="correctCaptcha"></div> --> <input class="btn-enviar bg-brand-500 hover:bg-main-400 text-white py-2  " type="submit" name="send" placeholder="E N V I A R"> </form> <!-- <script src="https://www.google.com/recaptcha/api.js" async defer><\/script> -->'])), maybeRenderHead(), addAttribute(campos.name, "name"), addAttribute(campos.email, "name"), addAttribute(campos.tel, "name"), addAttribute(campos.sub.option, "value"), campos.sub.option, addAttribute(campos.sub.a, "value"), campos.sub.a, addAttribute(campos.sub.b, "value"), campos.sub.b, addAttribute(campos.sub.c, "value"), campos.sub.c, addAttribute(campos.sub.d, "value"), campos.sub.d, addAttribute(campos.sub.e, "value"), campos.sub.e);
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/theme/ContacForm.astro", void 0);

const $$Astro$q = createAstro("https://grupocepromex.com/");
const $$LinkFooter = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$q, $$props, $$slots);
  Astro2.self = $$LinkFooter;
  const { href, class: className, ...props } = Astro2.props;
  const { pathname } = Astro2.url;
  const isActive = href === pathname || href === pathname.replace(/\/$/, "");
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-d2457wqw>&#10003; ${renderSlot($$result, $$slots["default"])}</a> `;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/base/LinkFooter.astro", void 0);

const $$Astro$p = createAstro("https://grupocepromex.com/");
const $$IcOutlineEmail = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$p, $$props, $$slots);
  Astro2.self = $$IcOutlineEmail;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2zm-2 0l-8 5l-8-5zm0 12H4V8l8 5l8-5z"></path> </svg>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/icons/IcOutlineEmail.astro", void 0);

const $$Astro$o = createAstro("https://grupocepromex.com/");
const $$IcOutlineWhatsapp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$o, $$props, $$slots);
  Astro2.self = $$IcOutlineWhatsapp;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"${spreadAttributes(props)}> <path fill="currentColor" d="M19.05 4.91A9.816 9.816 0 0 0 12.04 2c-5.46 0-9.91 4.45-9.91 9.91c0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21c5.46 0 9.91-4.45 9.91-9.91c0-2.65-1.03-5.14-2.9-7.01m-7.01 15.24c-1.48 0-2.93-.4-4.2-1.15l-.3-.18l-3.12.82l.83-3.04l-.2-.31a8.264 8.264 0 0 1-1.26-4.38c0-4.54 3.7-8.24 8.24-8.24c2.2 0 4.27.86 5.82 2.42a8.183 8.183 0 0 1 2.41 5.83c.02 4.54-3.68 8.23-8.22 8.23m4.52-6.16c-.25-.12-1.47-.72-1.69-.81c-.23-.08-.39-.12-.56.12c-.17.25-.64.81-.78.97c-.14.17-.29.19-.54.06c-.25-.12-1.05-.39-1.99-1.23c-.74-.66-1.23-1.47-1.38-1.72c-.14-.25-.02-.38.11-.51c.11-.11.25-.29.37-.43s.17-.25.25-.41c.08-.17.04-.31-.02-.43s-.56-1.34-.76-1.84c-.2-.48-.41-.42-.56-.43h-.48c-.17 0-.43.06-.66.31c-.22.25-.86.85-.86 2.07c0 1.22.89 2.4 1.01 2.56c.12.17 1.75 2.67 4.23 3.74c.59.26 1.05.41 1.41.52c.59.19 1.13.16 1.56.1c.48-.07 1.47-.6 1.67-1.18c.21-.58.21-1.07.14-1.18s-.22-.16-.47-.28"></path> </svg>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/icons/IcOutlineWhatsapp.astro", void 0);

const $$Astro$n = createAstro("https://grupocepromex.com/");
const $$ContactIcons = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$n, $$props, $$slots);
  Astro2.self = $$ContactIcons;
  const { url, class: className, ...props } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<ul${addAttribute([className], "class:list")}> <li><a href="">${renderComponent($$result, "IcOutlineWhatsapp", $$IcOutlineWhatsapp, {})}</a></li> <li><a href=""> ${renderComponent($$result, "IcOutlineEmail", $$IcOutlineEmail, {})}</a></li> </ul>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/ContactIcons.astro", void 0);

const $$Astro$m = createAstro("https://grupocepromex.com/");
const $$Footer = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$m, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<div class="bg-brand-400 text-center py-6 text-soft-20"> <h4 class=" uppercase px-6 "> Atención a personas de la tercera edad, cuidado en casa, hospital y asilo.</h4> </div> <footer id="footer" class="relative bg-brand-500 text-white/80 "> <!-- <VideoFull /> --> <div class="container pt-8 pb-16"> <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4 py-24"> <div> <h6 class="hx4 pb-8">Acerca de</h6> <ul> ${main.map(({ title, link }) => renderTemplate`<li>${renderComponent($$result, "Link", $$LinkFooter, { "href": link }, { "default": ($$result2) => renderTemplate`${title}` })}</li>`)} </ul> ${renderComponent($$result, "ContactIcons", $$ContactIcons, { "class": "flex mt-8 gap-2 text-8" })} <p class="mt-9"> ${site[0].address} </p> </div> <div> <h6 class="hx4 pb-8">Productos & Servicios</h6> <ul> ${servicios$1.map(({ title, link }) => renderTemplate`<li>${renderComponent($$result, "Link", $$LinkFooter, { "href": link }, { "default": ($$result2) => renderTemplate`${title}` })}</li>`)} </ul> </div> <div class=" "> <h6 class="hx4 pb-8">Contacto</h6> ${renderComponent($$result, "ContacForm", $$ContacForm, {})} <!--                   
                <p> Tel: (33) 3366.6920</p>
                <h6 class="hx4 pb-4">Descarga</h6>
                <DescargaPres />
                <Social class="social-footer" /> --> </div> </div> <!-- <img class="w-full absolute z-3 bottom-0 -mb-2" src={divisortr} alt="separador"> --> </div> <div class="bg-brand-300 grid items-center py-8 relative"> <p class="text-center px-4"> <span class="text-brand-100">ENFERMERAS Y CUIDADORAS </span> | UNA CARICIA EN EL ALMA
</p> </div> <!-- <div class="puntos"></div> --> </footer>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/theme/Footer.astro", void 0);

const $$Astro$l = createAstro("https://grupocepromex.com/");
const $$Head = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$l, $$props, $$slots);
  Astro2.self = $$Head;
  return renderTemplate`<!-- title --><meta charset="utf-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width,initial-scale=1.0,maximum-scale=1"><!-- favicon --><link rel="shortcut icon" type="image/svg" href="/favicon.svg"><!-- style sheets and font icons 
  <link rel="stylesheet" type="text/css" href="/assets/css/font-icons.min.css">
  <link rel="stylesheet" type="text/css" href="/assets/css/theme-vendors.min.css">
   -->`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/theme/Head.astro", void 0);

const $$Astro$k = createAstro("https://grupocepromex.com/");
const $$SeoHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$k, $$props, $$slots);
  Astro2.self = $$SeoHead;
  const sitedata = site[0];
  const title = Astro2.props.title + " | " + sitedata.sitename;
  const description = Astro2.props.description || sitedata.description;
  const canonicalURL = Astro2.props.canonicalURL || new URL(Astro2.url.pathname, Astro2.site);
  const image = new URL(Astro2.props.image || "/images/social.png", Astro2.site);
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width"><meta name="author" content="iconmedios.com"><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(description, "content")}><link rel="canonical"${addAttribute(canonicalURL, "href")}><!-- Generator --><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(canonicalURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(description, "content")}><meta property="og:image"${addAttribute(image, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(canonicalURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(description, "content")}><meta property="twitter:image"${addAttribute(image, "content")}><!-- For Demonstration of the themes --><!-- Google Analytics -->`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/base/SeoHead.astro", void 0);

const $$Astro$j = createAstro("https://grupocepromex.com/");
const $$CloseIcon = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$j, $$props, $$slots);
  Astro2.self = $$CloseIcon;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 32 32"${spreadAttributes(props)}> <path fill="currentColor" d="M16 2C8.2 2 2 8.2 2 16s6.2 14 14 14s14-6.2 14-14S23.8 2 16 2m5.4 21L16 17.6L10.6 23L9 21.4l5.4-5.4L9 10.6L10.6 9l5.4 5.4L21.4 9l1.6 1.6l-5.4 5.4l5.4 5.4z"></path> </svg>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/icons/CloseIcon.astro", void 0);

const $$Astro$i = createAstro("https://grupocepromex.com/");
const $$WhatsappBurp = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$i, $$props, $$slots);
  Astro2.self = $$WhatsappBurp;
  const props = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<svg viewBox="0 0 800 800" xmlns="http://www.w3.org/2000/svg"${spreadAttributes(props)}> <path class="bg_green" d="m407.1 772.5c-63.5 0-125.8-16.8-181-48.7l-141.4 48.7 29.1-149.7c-45.6-62.4-69.6-135.9-69.6-213.2 0-200 162.8-362.8 362.9-362.8s362.9 162.8 362.9 362.9c-0.1 200-162.8 362.8-362.9 362.8z" fill="#32BA46"></path> <path class="wcircle" d="m407.1 646.7c-41.5 0-82.2-11-118.2-31.8l-92.4 31.8 19-97.8c-29.7-40.8-45.4-88.8-45.4-139.3 0-130.7 106.3-237.1 237.1-237.1 130.7 0 237.1 106.3 237.1 237.1-0.2 130.8-106.5 237.1-237.2 237.1zm-114-70.6 7.1 4.5c32.2 20.2 69.1 30.9 106.8 30.9 111.3 0 201.8-90.5 201.8-201.8s-90.5-201.8-201.8-201.8-201.8 90.5-201.8 201.8c0 45.3 14.8 88.2 42.9 124l5 6.3-10.4 53.4 50.4-17.3z" fill="#fff"></path> <path class="wphone" d="m287.4 318.6s13.9-24.3 25.3-25.7c11.3-1.4 25.9-1.4 29.9 6 3.9 7.4 21.5 50.5 21.5 50.5s3 7.4-1.6 14.6-15.1 17.6-15.1 17.6-5.8 7.4 0 15.3 14.8 22.3 33.4 40.9c18.5 18.6 54.2 31.8 54.2 31.8s5.1 0.7 8.3-2.5 20.8-25.2 20.8-25.2 5.6-7.3 15-3 50 24.5 50 24.5 4.8 1.7 4.8 8.9-2.9 24.7-8.8 30.7c-5.9 5.9-23.3 24.3-49.4 24.3s-88.2-21.2-121.4-54.3c-33.1-33.1-62.5-66.7-69.5-97.3-6.9-30.7-6-44.6 2.6-57.1z" fill="#fff"></path> </svg>`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/icons/WhatsappBurp.astro", void 0);

const $$Astro$h = createAstro("https://grupocepromex.com/");
const $$WhatsappChat = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$h, $$props, $$slots);
  Astro2.self = $$WhatsappChat;
  const chatItems = [
    { title: "ENFERMERAS", url: whatsapp[0].url, phone: whatsapp[0].name },
    { title: "CUIDADORAS", url: whatsapp[0].url, phone: whatsapp[0].name }
  ];
  return renderTemplate`${maybeRenderHead()}<div id="ventana-chat-whatsapp" data-astro-cid-b3gq6uxo> <h5 class="flex justify-between items-center" data-astro-cid-b3gq6uxo>Iniciar conversación <span data-astro-cid-b3gq6uxo> <icon class="inline w-8" name="arrow-back" data-astro-cid-b3gq6uxo></icon> </span> </h5> <p data-astro-cid-b3gq6uxo>Normalmente respondemos en menos de 5 minutos </p> <div data-astro-cid-b3gq6uxo> ${chatItems.map(
    ({ title, url }) => renderTemplate`<a${addAttribute(url, "href")}${addAttribute(title, "title")} target="_blank" data-astro-cid-b3gq6uxo><span data-astro-cid-b3gq6uxo><icon class="w-6 inline text-green-600 " name="whatsapp-line" data-astro-cid-b3gq6uxo></icon></span> ${title} </a>`
  )} </div> <p class="text-gray/80" data-astro-cid-b3gq6uxo>iconmedios</p> </div> <button id="btn-chat-whatsapp" data-astro-cid-b3gq6uxo> ${renderComponent($$result, "WhatsappBurp", $$WhatsappBurp, { "class": "whc-icon text-16 w-16", "data-astro-cid-b3gq6uxo": true })} ${renderComponent($$result, "CloseIcon", $$CloseIcon, { "class": "whc-close p-2 text-white text-16 ", "data-astro-cid-b3gq6uxo": true })} </button>  `;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/components/WhatsappChat.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(raw || cooked.slice()) }));
var _a;
const $$Astro$g = createAstro("https://grupocepromex.com/");
const $$Layout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$g, $$props, $$slots);
  Astro2.self = $$Layout;
  const { seo, class: className, ...props } = Astro2.props;
  return renderTemplate(_a || (_a = __template(['<html class="no-js" lang="es" dark-gray> <head>', "", "", "</head> <body", "", "> ", " ", " ", " ", ' <!-- <script type="text/javascript" is:inline src="/assets/js/main.js"><\/script> -->  </body> </html> '])), renderComponent($$result, "Head", $$Head, {}), renderComponent($$result, "SeoHead", $$SeoHead, { ...seo }), renderHead(), addAttribute([className], "class:list"), spreadAttributes(props), renderComponent($$result, "Header", $$Header, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}), renderComponent($$result, "Whatsapp", $$WhatsappChat, {}));
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/layouts/Layout.astro", void 0);

const $$Astro$f = createAstro("https://grupocepromex.com/");
const $$LayoutPage = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$f, $$props, $$slots);
  Astro2.self = $$LayoutPage;
  const { seo, titlepage, subtitle } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="page-head" class="bg-main-200 text-soft-40"> <div class="container pt-12"> <h1 class="hx1">${titlepage}</h1> ${subtitle && renderTemplate`<p>${subtitle}</p>`} </div> </section> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/layouts/LayoutPage.astro", void 0);

const $$Astro$e = createAstro("https://grupocepromex.com/");
const $$Acerca = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$e, $$props, $$slots);
  Astro2.self = $$Acerca;
  const title = "Qui\xE9nes Somos";
  const desc = "Somos fabricantes de malla cicl\xF3nica, alambres de p\xFAas y accesorios, servicio todo M\xE9xico.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p>
Contamos con el mantenimiento y servicio profesional de malla ciclónica.
</p> <p>
Reconocemos lo importante que es para usted el contar con SEGURIDAD Y
      SERVICIO CONTAMOS CON SOLUCIONES AVANZADAS.
</p> <p>
CEPROMEX, pone a su disposición una gama de productos que resultan ideales
      para apoyarles en este sentido.
</p> <p>
Contamos con la logística adecuada para el manejo y trasporte de su
      material lo que reduce potencialmente sus constos de mantenimiento y
      durabilidad
</p>
Auxiliares en la ingeniería civil. Nuestros productos cumplen con:
<ul> <li>Homologación con las Normas Internacionales de Calidad.</li> <li>Materia prima y procesos de fabricación de clase mundial.</li> <li>Larga durabilidad y resistencia…más de 8 años de vida.</li> <li>No dañan el medio ambiente…se integran al ecosistema.</li> <li>ESTILO INDUSTRIAL</li> </ul> <h3>COLOCACIÓN DE MALLA CON SUS ACCESORIOS</h3> <ul> <li>MALLA CICLONICA</li> <li>POSTE DE ARRANQUE</li> <li>POSTE DE ESQUINERO</li> <li>ALAMBRE DE PUAS</li> <li>POSTE DE LINEA</li> <li>TAPON SENCILLO</li> <li>ABRAZADERA DE TORNILLO</li> <li>ABRAZADERA DE SOLERA</li> <li>SOLERAS GALVANIZADAS</li> <li>TENSOR</li> <li>TAPONES PARA PUAS</li> <li>ESPADIN</li> <li>TORNILLOS GALVANIZADOS</li> <li>COLOCACIÓN DE ACCESORIOS PARA PUERTAS ABATIBLES</li> </ul> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/acerca.astro", void 0);

const $$file$d = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/acerca.astro";
const $$url$d = "/acerca";

const acerca = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Acerca,
    file: $$file$d,
    url: $$url$d
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$d = createAstro("https://grupocepromex.com/");
const $$AlambreDePuas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$d, $$props, $$slots);
  Astro2.self = $$AlambreDePuas;
  const title = "Alambre de Puas";
  const desc = "El alambre de p\xFAas de ALTA TENSI\xD3N con su resistencia a la ruptura";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p> <img src="https://grupocepromex.com/imag_cepromex/alambre-puas-cepromex.jpg"> </p> <div class="grid grid-cols-2"> <div> <img src="https://grupocepromex.com/imag_cepromex/puas_grapas.jpg"> </div> <div> <p>
El alambre de púas de ALTA TENSIÓN con su resistencia a la ruptura a
          los 435 Kgs por su eficiencia y menor costo logra cumplir con las
          necesidades de seguridad c on sus dos alambres galvanizados trenzados
          en calibre 14.5 y 15.5, separación entre púas de 5” bajo norma de ASTM
          A 121. Su presentación con
</p> </div> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/alambre-de-puas.astro", void 0);

const $$file$c = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/alambre-de-puas.astro";
const $$url$c = "/productos/alambre-de-puas";

const alambreDePuas = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$AlambreDePuas,
    file: $$file$c,
    url: $$url$c
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$c = createAstro("https://grupocepromex.com/");
const $$CintaPlastificada = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$c, $$props, $$slots);
  Astro2.self = $$CintaPlastificada;
  const title = "Cinta Plastificada Decorativa<";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p><img src="https://grupocepromex.com/imag_cepromex/cintadecor.jpg"></p> <div> <p> <small>Contamos con el mantenimiento y servicio profesional de malla
              ciclónica.<br></small> </p> <div> <p>${desc}</p> <p>
Brindándole privacidad y decoración a los cercados de malla ciclónica
              combinado diseño y seguridad de acuerdo a sus necesidades.
</p> <p>
Se presenta en colores verde, blanco, gris plata y azul rey, como
              colores de línea; si requiere un color en especial para su propio
              diseño, nosotros se lo igualamos.
</p> <p>
Durante el proceso de instalación de nuestros productos contamos con
              un equipo altamente calificado que supervisa paso a paso nuestros
              cercados. Tener más resistencia a la intemperie y excelente calidad.
</p> <p>
Nuestros productos de alta calidad, son resistentes a todo tipo de
              climas, por lo que no es necesario contar con un mantenimiento
              especial. Todos los cercados están garantizados y fueron sometidos a
              las más severas pruebas de resistencia y durabilidad.
</p> <p>contamos con difrentes tamaños y colores.</p> </div> </div> <div> <h2> <img src="https://grupocepromex.com/imag_cepromex/cinta-plastificada.jpg"> </h2> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/cinta-plastificada.astro", void 0);

const $$file$b = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/cinta-plastificada.astro";
const $$url$b = "/productos/cinta-plastificada";

const cintaPlastificada = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CintaPlastificada,
    file: $$file$b,
    url: $$url$b
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$b = createAstro("https://grupocepromex.com/");
const $$MallaAntideslumbrante = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$b, $$props, $$slots);
  Astro2.self = $$MallaAntideslumbrante;
  const title = "Malla Antideslumbrante";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <small>Contamos con el mantenimiento y servicio profesional de malla ciclónica.</small> <img src="https://grupocepromex.com/imag_cepromex/mallaantideslumbrante-cepromex.jpg" alt=""> <div class="container"> <p>
Fabricada con monofilamento de polietileno 100% virgen calibre 12 (milésimas de pulgada) y estabilizada con aditivos y antioxidantes especiales que la protegen contra la acción nociva de los rayos U.V., brindándole de esta manera un producto garantizado hasta por tres años contra defectos de fabricación en condiciones óptimas de manejo.Como principal función este producto forma una barrera de alta resistencia contra el viento, ofreciendo además privacidad al área que limita.Sus aplicaciones prácticas son: en canchas de tenis, condominios, cultivos cercanos a la costa, etc.
</p> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-antideslumbrante.astro", void 0);

const $$file$a = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-antideslumbrante.astro";
const $$url$a = "/productos/malla-antideslumbrante";

const mallaAntideslumbrante = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MallaAntideslumbrante,
    file: $$file$a,
    url: $$url$a
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$a = createAstro("https://grupocepromex.com/");
const $$MallaCiclonicaGalvanizada = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$a, $$props, $$slots);
  Astro2.self = $$MallaCiclonicaGalvanizada;
  const title = "Malla Antideslumbrante";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p> <img src="https://grupocepromex.com/imag_cepromex/mallagalv-cepromex.jpg"> </p> <h2>Malla Galvanizada</h2> <p> <strong>Contamos con el mantenimiento y servicio profesional de malla ciclónica.</strong> </p> <p>
Nuestros productos de malla galvanizada, por inmersión en caliente, resisten a
  todos climas húmedos y calurosos por lo cual lo garantizamos plenamente,
  tenemos todo tipo de cercados como:
</p> <p>
Campos deportivos, clubs, estacionamientos, industrias, escuelas, aeropuertos,
  fraccionamientos residenciales, hoteles, etc.
</p> <p>
Contamos con la instalación de toda clase de cercas, nos adaptamos a todas las
  especificaciones de sus obras o proyectos.
</p> <h4>Contamos con diferentes aberturas y calibres.</h4> <div></div> <h3>Malla Ciclonica</h3> <p>Contamos con el mantenimiento y servicio profesional de malla ciclónica.</p> <div> <table border="1" summary="Malla medidas" cellspacing="0" cellpadding="0"> <caption>Características Generales</caption> <tbody> <tr> <td> <p>ALTURA</p> </td> <td> <p>CAL. 10.5</p> </td> <td> <p>CAL.11.0</p> </td> <td> <p>CAL. 11.5</p> </td> <td> <p>CAL. 12.5</p> </td> <td> <p>CAL. 13</p> </td> <td> <p>PVC 10.5</p> </td> <td> <p>PVC 11.0</p> </td> </tr> <tr> <td> <p>1.0</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>1.25</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>1.50</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>1.75</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>2.00</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>2.50</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>3.00</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> </tbody> </table> <h4>ESPECIFICACIONES:</h4> <ul> <li>LONGITUD DEL ROLLO 20 MTS.</li> <li>ABERTURAS (mm) 55 x 55, 60 x 60, 63 x 63, 69 x 69.</li> <li>SE UTILIZAN ALAMBRES GALVANIZADO POR INMERSION EN CALIENTE.</li> <li>P.V.C. DE ALTA CALIDAD RESISTENCIA A LA ACCION DEL SOL.</li> </ul> <h4>MALLA CICLON CON ABERTURA ESPECIAL</h4> <p>ESPECIFICACIONES:</p> <ul> <li>LONGITUD DEL ROLLO: LA REQUERIDA</li> <li>ALTURA DEL ROLLO: LA REQUERIDA, NO MAYOR DE 4 mts.</li> <li>
ABERTURAS (mm) 15 x 15, 25 x 25, 30 x 30, 32 x 32, 36 x 36, 44 x 44 y 50 x
      50
</li> <li>SE UTILIZAN ALAMBRES GALVANIZADOS POR INMERSION EN CALIENTE.</li> <li>P.V.C. DE ALTA CALIDAD RESISTENTE A LA ACCION DEL SOL.</li> </ul> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-ciclonica-galvanizada.astro", void 0);

const $$file$9 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-ciclonica-galvanizada.astro";
const $$url$9 = "/productos/malla-ciclonica-galvanizada";

const mallaCiclonicaGalvanizada = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MallaCiclonicaGalvanizada,
    file: $$file$9,
    url: $$url$9
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$9 = createAstro("https://grupocepromex.com/");
const $$MallaCiclonicaPvc = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$9, $$props, $$slots);
  Astro2.self = $$MallaCiclonicaPvc;
  const title = "Malla Antideslumbrante";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <img src="https://grupocepromex.com/imag_cepromex/mallapvc.jpg"> <h4><small>Contamos con el mantenimiento y servicio profesional de malla cicl&oacute;nica</small></h4><small> <div> <p>Malla forrada en pl&aacute;stico P.V.C. es un alambre de calibre 11.5 recubierto de pl&aacute;stico para climas extremosos. Con tratamiento para la vida util,y para los rayos ultra violeta contiene un pegamento especial para las cuarteadoras.</p> <p>El alambre utilizado en la fabricaci&oacute;n de la malla cicl&oacute;nica es de acero de alta resitencia pulido y galvanizado para evitar la erosi&oacute;n y brindarle mayor durabilidad. Su presentaci&oacute;n es de rollos compactos de 20 m. de largo. Fabricamos malla cicl&oacute;nica galvanizada en aberturas, alturas y calibres especiales garantizando la calidad de nuestros productos.</p> <p>As&iacute; mismo le brindamos el servicio de instalaci&oacute;n y mantenimiento para toda clase de cercas. como son en hoteles, aeropuertos, residencias, escuelas, industrias, canchas deportivas, etc.</p> </div> </small></div><small></small>` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-ciclonica-pvc.astro", void 0);

const $$file$8 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-ciclonica-pvc.astro";
const $$url$8 = "/productos/malla-ciclonica-pvc";

const mallaCiclonicaPvc = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MallaCiclonicaPvc,
    file: $$file$8,
    url: $$url$8
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$8 = createAstro("https://grupocepromex.com/");
const $$MallaSombra = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$8, $$props, $$slots);
  Astro2.self = $$MallaSombra;
  const title = "Malla Antideslumbrante";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p> <img src="https://grupocepromex.com/imag_cepromex/malla-sombra.jpg"> </p> <div> <h2>Malla Sombra</h2> <p>
Contamos con el mantenimiento y servicio profesional de malla ciclónica.
</p> <p>
Protejase del sol, viento y reduzca la temperatura con Mallas Sombra
        Garantía de 4 años vida útil de la malla más de 6 años
</p> <p>
Mallas para su jardín, terraza, cochera, etc. Presentación en varias
        medidas con ojillos cada 50 cm. Para su fácil colocación variación +/-5%
</p> <h2>CARACTERÍSTICAS:</h2> <p>Malla sombra del __80 AL 100% De según proyectos</p> <div> <p>Fabricado con:</p> <p>
POLIETILENO DE ALTA DENSIDAD Y ADITIVOS (Para preservarlo contra los
          rayos solares y el medio ambiente)
</p> </div> </div> <div> <table> <tbody> <tr> <td> <p>MALLA ROMPEVIENTOS</p> </td> <td> <p>CONSTRUCCIÓN<br>HILOS/PULGADA 2</p> </td> <td> <p>PESO<br>GRMS/M2</p> </td> </tr> <tr> <td> <p>Al 70% verde con negro</p> </td> <td> <p>44 x 13</p> </td> <td> <p>212</p> </td> </tr> <tr> <td> <p>Al 80% verde con negro</p> </td> <td> <p>55 x 13</p> </td> <td> <p>235</p> </td> </tr> <tr> <td> <p>Al 90% verde con negro</p> </td> <td> <p>66 x 12</p> </td> <td> <p>260</p> </td> </tr> </tbody> </table> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-sombra.astro", void 0);

const $$file$7 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/malla-sombra.astro";
const $$url$7 = "/productos/malla-sombra";

const mallaSombra = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$MallaSombra,
    file: $$file$7,
    url: $$url$7
}, Symbol.toStringTag, { value: 'Module' }));

const products = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$7 = createAstro("https://grupocepromex.com/");
const $$ProteccionDeNavajas = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$7, $$props, $$slots);
  Astro2.self = $$ProteccionDeNavajas;
  const title = "Malla Antideslumbrante";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p><img src="https://grupocepromex.com/imag_cepromex/proteccion-navajas.jpg"></p> <div> <h2>Protección de Navajas</h2> <p><small>Contamos con el mantenimiento y servicio profesional de malla ciclónica.<br></small></p> <div> <table> <tbody> <tr> <td> <p>MODELO</p> </td> <td> <p>RESIDENCIAL</p> </td> <td> <p>INDUSTRIAL</p> </td> <td> <p>MILITAL</p> </td> </tr> <tr> <td> <p>CUCHILLA</p> </td> <td> <p>RECTA</p> </td> <td> <p>TIPO ARPON</p> </td> <td> <p>TIPO DOBLE ARPON</p> </td> </tr> <tr> <td> <p>DIAMETRO</p> </td> <td> <p>18” Y 24”</p> </td> <td> <p>18”  Y 24”</p> </td> <td> <p>18” Y 24”</p> </td> </tr> <tr> <td> <p>LONGITUD DEL ROLLO MAXIMA PROTECCION</p> </td> <td> <p>8 MTS.</p> </td> <td> <p>8 MTS.</p> </td> <td> <p>8 MTS.</p> </td> </tr> <tr> <td> <p>NUMERO DE ESPIRALES</p> </td> <td> <p>33</p> </td> <td> <p>33</p> </td> <td> <p>33</p> </td> </tr> <tr> <td> <p>PESO DEL ROLLO APROXIMADO</p> </td> <td> <p>4,200 KGS.</p> </td> <td> <p>4,340 KGS.</p> </td> <td> <p>5,200 KGS.</p> </td> </tr> </tbody> </table> <p>NUMERO DE ESPIRALES 33 33 33</p> <p>PESO DEL ROLLO APROXIMADO 4,200 KGS. 4,340 KGS. 5,200 KGS.</p> <p>PROTECCION DE NAVAJAS GALVALUM&lt;</p> <p>LAMINA DE ACERO RECUBIERTA CON UNA ALEACION DE ALUMINIO- ZINC SEGÚN NORMAS ASTM-792</p> <p>ALAMBRE GALVANIZADO CLASE II CON UNA RESITENCIA LA TENSION DE 67000PSI</p> <p>PROTECCION DE NAVAJAS DE ACERO INOXIDABLE</p> <p>LAMINA DE ACERO INOXIDABLE</p> <p>ALAMBRE GALVANIZADO CLASE III CON UNA RESISTENCIA A LA TENSION DE 67000PSI</p> </div> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/proteccion-de-navajas.astro", void 0);

const $$file$6 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/proteccion-de-navajas.astro";
const $$url$6 = "/productos/proteccion-de-navajas";

const proteccionDeNavajas = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$ProteccionDeNavajas,
    file: $$file$6,
    url: $$url$6
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$6 = createAstro("https://grupocepromex.com/");
const $$RejaAcero = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$6, $$props, $$slots);
  Astro2.self = $$RejaAcero;
  const title = "Malla Antideslumbrante";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p> <img src="https://grupocepromex.com/imag_cepromex/rejaacero-cepromex.jpg"> </p> <div> <h2>Reja Acero</h2> <p> <small>Contamos con el mantenimiento y servicio profesional de malla
          ciclónica.<br></small> </p> <div> <p>
LOS CERCOS DE REJA ACERO, ESTAN FORMADOS BÁSICAMENTE POR TRES
          COMPONENTES
</p> <p>PANELES (MEDIDA COMERCIAL)</p>
2.50 LARGO X .63 M. Altura<br>2.50 Largo X 1.50 M. Altura<br>2.50
        Largo X 2.00 M. Altura<br>2.50 Largo X 2.50 M. Altura<br> <p>
POSTES de acero, cuadrados con perfil de 60 x 69 mm. Y 1.50 mm. De
          espesor.
</p> <p>
ACCESORIOS DE FIJACIÓN grapas metálicas recubiertas con poliéster
          termoendurecido y tornillos de acero inoxidable.<img src="https://grupocepromex.com/imag_cepromex/reja1.jpg"><img src="https://grupocepromex.com/imag_cepromex/reja2.jpg"> </p> <p>
Todo el material es acero galvanizado acabado con pintura de poliéster
          termo endurecido, los cuales aportan individualmente el más alto grado
          de protección contra el medio ambiente y la corrosión, otorgando mayor
          vida al producto.
</p> <p>PANELES</p> <p>
Rectangulares, de 2.5 x 2.0 m con aberturas de 20 x 5 cm y pliegues de
          refuerzo en forma de “V”. VERDE Y BLANCO
</p> <p>POSTES</p> <p>
De acero, cuadrados, con perfil de 60 x 60 mm y 1.5 mm de espesor
          Línea – Esquinero …con tapa de plástico en el extremo superior… y
          orificios roscados para la fijación de paneles mediante grapas y
          tornillos.
</p> <p>ACCESORIOS DE FIJACION</p> <p>
Grapas Metálicas recubiertas con poliéster termo endurecido y
          Tornillos de acero inoxidable.
</p> <p>
*El poste es 0.30 m más alto que el panel para facilitar su
          instalación al ahogarlo en concreto.
</p> <p> <img src="https://grupocepromex.com/imag_cepromex/reja3.jpg">Los
          Paneles, Postes y Grapas están doblemente protegidos contra la
          intemperie y la corrosión: Primero, mediante una gruesa capa de Zinc y
          Segundo, con un recubrimiento plastificado de Poliéster Duro
          Termoendurecido.
</p> <p></p> <p>Fácil de Instalar</p> <p>¡Sólo Grapas y Tornillos!</p> <p>
Instalación rápida, eficiente y con bajo costo de mano de obra.<br>Cero Mantenimiento
</p> <p>
Permanece tersa y brillante, sin tener que repintar o aplicar
          antioxidantes.
</p> <p>Terrenos Irregulares</p> <p>
Excelente solución en terrenos irregulares, gracias a lo versátil y
          fácil de su sistema de fijación.
</p> <p>Doble protección contra la Intemperie</p> <p>
Primero una capa de zinc…después, un recubrimiento de Poliéster
          Termoendurecido.
</p> <p>Resistencia</p>
Varillas gruesas cada 5 cm y con 4 pliegues a lo largo.
<p>Guia de Instalación con Dala de Concreto</p> <ol> <li>Marcado y excavación de zanja.</li> <li>Colocación de madera para vaciado.</li> <li>Colocación de castillo y alineación.</li> <li>Presentación de Paneles y Postes.</li> <li>Sujeción con Grapas y Tornillos.</li> <li>Chequeo de altura y nivelación de postes.</li> <li>Apuntalado.</li> <li>Vaciado y fraguado.</li> </ol> <p>Otros colores sobre pedido</p> <p>SOMOS DISTRIBUIDORES AUTORIZADOS</p> </div> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/reja-acero.astro", void 0);

const $$file$5 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/reja-acero.astro";
const $$url$5 = "/productos/reja-acero";

const rejaAcero = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$RejaAcero,
    file: $$file$5,
    url: $$url$5
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$5 = createAstro("https://grupocepromex.com/");
const $$SenalizacionVial = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$5, $$props, $$slots);
  Astro2.self = $$SenalizacionVial;
  const title = "Malla Antideslumbrante";
  const desc = "Producto fabricado con polietileno de baja densidad con aditivos UV para resistir la decoloraci\xF3n y desgaste al estar expuesta a la intemperie.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="contanier"></div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/senalizacion-vial.astro", void 0);

const $$file$4 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/senalizacion-vial.astro";
const $$url$4 = "/productos/senalizacion-vial";

const senalizacionVial = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$SenalizacionVial,
    file: $$file$4,
    url: $$url$4
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$4 = createAstro("https://grupocepromex.com/");
const $$TuboIndustrialGalvanizado = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$4, $$props, $$slots);
  Astro2.self = $$TuboIndustrialGalvanizado;
  const title = "Tubo Industrial Galvanizado";
  const desc = " Producto galvanizado en Zinc por inmersi\xF3n en caliente, en una capa equivalente a 276 g/m2 como protecci\xF3n tipo anticorrosivo";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <div class="grid gap-16 lg:grid-cols-2 "> <div class="grid gap-4"> <img class="min-w-full" src="https://grupocepromex.com/imag_cepromex/tubogal.jpg"${addAttribute(title, "alt")} width="200"> <p> ${desc} dicromatada y recubierto en galvanizado anticorrosivo y soldadura metalzada.
</p> </div> <div> <table class="w-full"> <tbody> <tr> <td> <p>DI&Aacute;METRO/CALIBRE</p> </td> <td> <p>20</p> </td> <td> <p>18</p> </td> <td> <p>16</p> </td> <td> <p>CED 30</p> </td> <td> <p>CED 40</p> </td> </tr> <tr> <td> <p>1 3/8&rdquo;</p> </td> <td> <p>34mm</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>1 1/2</p> </td> <td> <p>38</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>1 5/8</p> </td> <td> <p>42</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>1 7/8</p> </td> <td> <p>48</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>2 3/8</p> </td> <td> <p>60</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> <tr> <td> <p>2 7/8</p> </td> <td> <p>73</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> <td> <p>*</p> </td> </tr> </tbody> </table> </div> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/tubo-industrial-galvanizado.astro", void 0);

const $$file$3 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos/tubo-industrial-galvanizado.astro";
const $$url$3 = "/productos/tubo-industrial-galvanizado";

const tuboIndustrialGalvanizado = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$TuboIndustrialGalvanizado,
    file: $$file$3,
    url: $$url$3
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$3 = createAstro("https://grupocepromex.com/");
const $$Productos = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$Productos;
  const title = "Productos Principales";
  const desc = " Producto galvanizado en Zinc por inmersi\xF3n en caliente, en una capa equivalente a 276 g/m2 como protecci\xF3n tipo anticorrosivo";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p> <img src="https://grupocepromex.com/imag_cepromex/prodgeneral.jpg" alt=""> </p> <h2></h2> <p> <small>Contamos con el mantenimiento y servicio profesional de malla
        ciclónica.<br></small> </p> <div> <p> <a title="malla ciclonica" href="http://www.grupocepromex.com/productos.html">Malla Ciclónica</a>
galvanizada y P.V.C., contamos con diferentes alturas 1 mt. 1.25mt.
        1.50mt. 2mt 2.50 mt. De 3 a 6 m. Y calibres del 13 al 9 mm.
</p> <p>
Tubería de acero galvanizado en diferentes medidas, calibres, diámetros
        con accesorios para su correcta instalación.
</p> <p>
Concertina de alta seguridad galvanizada bisturí tipo: industrial,
        residencial y militar.
</p> <p>
Cinta Plástica P.V.C. en diferentes colores para seguridad, privacidad y
        decoración.
</p> <h2>REJACERO</h2> <img src="https://grupocepromex.com/imag_cepromex/deacero_logo.jpg" alt="" width="104" height="25">Somo distribuidores directos
<p></p> <p>
Producto nuevo en cercados permanentes competitivos con herrería en
        diferentes colores, blanco, verde, azul, amarillo, café y en diferentes
        alturas.
</p> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos.astro", void 0);

const $$file$2 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/productos.astro";
const $$url$2 = "/productos";

const productos = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Productos,
    file: $$file$2,
    url: $$url$2
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$2 = createAstro("https://grupocepromex.com/");
const $$Servicios = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Servicios;
  const title = "Servicios Cepromex";
  const desc = "Contamos con el mantenimiento y servicio profesional de malla cicl\xF3nica.";
  const seo = {
    title,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutPage", $$LayoutPage, { "seo": seo, "titlepage": title }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container"> <p> <img src="https://grupocepromex.com/imag_cepromex/servicios.jpg" alt=""> </p> <h2>${title}</h2> <p> <small>Contamos con el mantenimiento y servicio profesional de malla ciclónica.<br></small> </p> <div> <p>
Reconocemos lo importante que es para usted el contar con SEGURIDAD Y
      SERVICIO CONTAMOS CON SOLUCIONES AVANZADAS.
</p> <p>
CEPROMEX, pone a su disposición una gama de productos que resultan ideales
      para apoyarles en este sentido.
</p> <p>
Contamos con la logística adecuada para el manejo y trasporte de su
      material lo que reduce potencialmente sus constos de mantenimiento y
      durabilidad
</p> <ul> <li>Auxiliares en la ingeniería civil.</li> </ul> <p>Nuestros productos cumplen…</p> <ul> <li>Homologación con las Normas Internacionales de Calidad.</li> <li>Materia prima y procesos de fabricación de clase mundial.</li> <li>Fácil instalación…Adaptables a cualquier estructura.</li> <li>Larga durabilidad y resistencia…más de 8 años de vida.</li> <li>No dañan el medio ambiente…se integran al ecosistema.</li> </ul> <p>ESTILO INDUSTRIAL</p> <p> <a href="https://grupocepromex.com/diagrama_inst.html">COLOCACIÓN DE MALLA CON SUS ACCESORIOS</a> </p> <ul> <li>MALLA CICLONICA</li> <li>POSTE DE ARRANQUE</li> <li>POSTE DE ESQUINERO</li> <li>ALAMBRE DE PUAS</li> <li>POSTE DE LINEA</li> <li>TAPON SENCILLO</li> <li>ABRAZADERA DE TORNILLO</li> <li>ABRAZADERA DE SOLERA</li> <li>SOLERAS GALVANIZADAS</li> <li>TENSOR</li> <li>TAPONES PARA PUAS</li> <li>ESPADIN</li> <li>TORNILLOS GALVANIZADOS</li> </ul> <p>COLOCACIÓN DE ACCESORIOS PARA PUERTAS ABATIBLES</p> <img src="https://grupocepromex.com/imag_cepromex/puerta_malla.jpg" alt="" width="333" height="250">PUERTAS Y PORTONES.
<ul> <li>TIPO RESIDENCIAL.</li> <li>TIPO INDUSTRIAL.</li> <li>PUERTAS Y PORTONES CON ABERTURA HASTA DE 180” FABRICACION SOBRE PEDIDO</li> <li>BISAGRA INDUSTRIAL.</li> <li>BISAGRA TIPO HEMBRA Y MACHO.</li> <li>PASADOR.</li> <li>PASADOR TIPO MAUSER.</li> </ul> <p> TODOS LOS COMPONENTES SON GALVANIZADOS.</p> </div> </div> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/servicios.astro", void 0);

const $$file$1 = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/servicios.astro";
const $$url$1 = "/servicios";

const servicios = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Servicios,
    file: $$file$1,
    url: $$url$1
}, Symbol.toStringTag, { value: 'Module' }));

const $$Astro$1 = createAstro("https://grupocepromex.com/");
const $$LayoutHome = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$LayoutHome;
  const { seo, titlepage, subtitle, bgimg } = Astro2.props;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "seo": seo }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="page-head" class="relative text-brand-600/70  "> <div class="z-2 absolute top-0 left-0 w-full h-full bg-gradient-to-b from-white/60 via-10%  to-brand-100/10  "></div> <img class="object-cover object-b absolute top-0 left-0 h-full w-full opacity-50"${addAttribute(bgimg, "src")} alt="mibg"> <div class="container flex icc pt-16 relative z-8 "> <div class=" text-center w-80% "> <h1 class="text-6 md:text-10 lg:text-12 xl:text-16 leading-1.2em pb-4 ">${titlepage}</h1> ${subtitle && renderTemplate`<p class="my-8">${subtitle}</p>`} <span class="border-2 inline-flex py-4 px-6 bg-brand-300 text-white border-brand-300 hover:bg-brand-500 rounded-8">CUIDAMOS LO QUE MÁS AMAS</span> </div> </div> </section> ${renderSlot($$result2, $$slots["default"])} ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/layouts/LayoutHome.astro", void 0);

const info = "/assets/images/enfermeras-cuidadoras.webp";
const cover = "/assets/images/enfermeras_cover.webp";

const $$Astro = createAstro("https://grupocepromex.com/");
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const title = site[0].sitename;
  const desc = site[0].description;
  const hx1 = "Cuidados Especializados de Enfermer\xEDa ";
  const seo = {
    title: hx1,
    description: desc
  };
  return renderTemplate`${renderComponent($$result, "LayoutHome", $$LayoutHome, { "seo": seo, "bgimg": cover, "titlepage": hx1, "subtitle": "Atenci\xF3n a personas de la tercera edad, cuidado en casa, hospital y asilo." }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<section id="acerca" class="py-16 bg-gradient-to-r from-brand-300 via-10%  to-brand-500 "> <div class="container text-white/80"> <div class="grid lg:grid-cols-2 ic gap-16"> <div class="text-center"> <img class="w-80% mx-auto lg:w-full"${addAttribute(info, "src")}${addAttribute(title, "alt")}> </div> <div class="grid gap-8"> <span class="text-md">Nuestros Servicios:</span> <div> <h3>Enfermeras</h3> <p>Cuidados de enfermería especializados como dializar, canalizar, aspiración de flemas, alimentación por sonda, curación de heridas, ayuda en terapias, verificación de signos vitales, colostomía, nebulizaciones y vaporizaciones, aplicación de inyecciones, etcétera.</p> </div> <div> <h3>Cuidadoras</h3> <p>Aseo del paciente y su medicación vía oral, manejo de oxígeno y todos los cuidados generales.</p> </div> </div> </div> </div> </section> <section id="servicios"> <div class="centermin text-center flex flex-col gap-4"> <h3>Cuidados de enfermería especializados especialistas en geriatría</h3> <span>NUESTROS SERVICIOS</span> <p>Dializar, canalizar, aspiración de flemas, alimentación por sonda, curación de heridas, 
        ayuda en terapias, verificación de signos vitales, colostomía, 
        nebulizaciones y vaporizaciones, aplicación de inyecciones</p> </div> <div class="container pt-8"> <div class="grid gap-4 md:grid-cols-3  lg:grid-cols-5 text-center "> ${servicios$1.map(({ title: title2, img }) => renderTemplate`<div> <img class="all600 aspect-ratio-[4/3] bg-zinc-2 hover:scale-110 mb-2 "${addAttribute(img, "src")}${addAttribute(title2, "alt")}> <span>${title2}</span> </div>`)} </div> </div> </section> ` })}`;
}, "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/index.astro", void 0);

const $$file = "/Users/jeanreynoso/Documents/PRO/enfermeras/enfermeras-unocss/src/pages/index.astro";
const $$url = "";

const index = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { acerca as a, alambreDePuas as b, cintaPlastificada as c, mallaCiclonicaGalvanizada as d, mallaCiclonicaPvc as e, mallaSombra as f, proteccionDeNavajas as g, productos as h, servicios as i, index as j, mallaAntideslumbrante as m, products as p, rejaAcero as r, senalizacionVial as s, tuboIndustrialGalvanizado as t };
