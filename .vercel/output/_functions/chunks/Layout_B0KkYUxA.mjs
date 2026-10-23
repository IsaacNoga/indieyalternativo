import { T as createAstro, _ as defineScriptVars, g as addAttribute, h as renderHead, i as renderComponent, m as maybeRenderHead, s as renderSlot, u as renderTemplate } from "./server_CDeSLf35.mjs";
import { t as createComponent } from "./compiler_Jkg83v7F.mjs";
//#region src/components/Star.astro
createAstro("https://astro.build");
var $$Star = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Star;
	const { size, color = "currentColor", emptyColor = "none", fill = 100, class: className = "size-5" } = Astro.props;
	const percent = Math.min(100, Math.max(0, Number(fill) || 0));
	const gradientId = `star-fill-${Math.random().toString(36).slice(2, 9)}`;
	return renderTemplate`${maybeRenderHead($$result)}<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"${addAttribute(size, "width")}${addAttribute(size, "height")}${addAttribute(className, "class")} role="img"${addAttribute(`Estrella rellena al ${percent}%`, "aria-label")}><defs><linearGradient${addAttribute(gradientId, "id")} x1="0" y1="0" x2="1" y2="0"><stop${addAttribute(`${percent}%`, "offset")}${addAttribute(color, "stop-color")}></stop><stop${addAttribute(`${percent}%`, "offset")}${addAttribute(emptyColor, "stop-color")}${addAttribute(emptyColor === "none" ? 0 : 1, "stop-opacity")}></stop></linearGradient></defs><path d="M12 2l2.94 6.36 6.96.83-5.15 4.9 1.4 6.91L12 17.77l-6.15 3.23 1.4-6.91-5.15-4.9 6.96-.83L12 2z"${addAttribute(`url(#${gradientId})`, "fill")}${addAttribute(color, "stroke")} stroke-width="1.5" stroke-linejoin="round"></path></svg>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/Star.astro", void 0);
//#endregion
//#region src/components/Navbar.astro
createAstro("https://astro.build");
var $$Navbar = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Navbar;
	const { transforms = false } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<header id="navbar" class="navbar h-16 lg:h-20 w-full flex flex-row justify-between items-center gap-5 sticky top-0 py-2 px-4 md:px-10 z-50 text-white transition-colors duration-500 ease-in-out" data-astro-cid-l7arcky5><div class="h-full flex flex-row items-center gap-2 min-w-0" data-astro-cid-l7arcky5><img src="/img/main_logo.png" class="h-3/4 shrink-0" data-astro-cid-l7arcky5><a class="font-extrabold text-xs md:text-base truncate" href="/" data-astro-cid-l7arcky5>INDIE Y ALTERNATIVO</a></div><div class="hidden lg:flex flex-row gap-10 items-center shrink-0" data-astro-cid-l7arcky5><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-1" href="/reviews" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 22,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>RESEÑAS</p></a><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-1" href="/news" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 22,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>NOTICIAS</p></a><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-1" href="/top-charts" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 22,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>TOP CHARTS</p></a><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-1" href="/galeria" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 22,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>GALERÍA</p></a></div><button id="menu-toggle" class="lg:hidden flex flex-col justify-center items-center gap-1.5 w-8 h-8 shrink-0 cursor-pointer" aria-label="Abrir menú" data-astro-cid-l7arcky5><span class="block w-6 h-0.5 bg-current" data-astro-cid-l7arcky5></span><span class="block w-6 h-0.5 bg-current" data-astro-cid-l7arcky5></span><span class="block w-6 h-0.5 bg-current" data-astro-cid-l7arcky5></span></button><!-- Menú móvil: DENTRO del header para que top-full se calcule respecto a él --><div id="mobile-menu" class="absolute left-0 right-0 top-full z-40 flex lg:hidden flex-col origin-top bg-black text-white px-4 py-4 gap-4 transform scale-y-0 opacity-0 pointer-events-none transition-all duration-300 ease-in-out" data-astro-cid-l7arcky5><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-2 items-center" href="/reviews" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 20,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>RESEÑAS</p></a><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-2 items-center" href="/news" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 20,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>NOTICIAS</p></a><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-2 items-center" href="/top-charts" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 20,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>TOP CHARTS</p></a><a class="font-bold hover:text-red-500 transition-colors ease-in-out duration-300 flex flex-row gap-2 items-center" href="/galeria" data-astro-cid-l7arcky5>${renderComponent($$result, "Star", $$Star, {
		"size": 20,
		"data-astro-cid-l7arcky5": true
	})}<p data-astro-cid-l7arcky5>GALERÍA</p></a></div></header><script>(function(){${defineScriptVars({ transforms })}
  const navbar = document.getElementById("navbar");
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  const onScroll = () => {
    if (!transforms) return;
    if (window.scrollY > 20) {
      navbar?.classList.add("scrolled");
    } else {
      navbar?.classList.remove("scrolled");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  menuToggle?.addEventListener("click", () => {
    const isOpen = mobileMenu?.classList.contains("scale-y-100");
    mobileMenu?.classList.toggle("scale-y-100", !isOpen);
    mobileMenu?.classList.toggle("opacity-100", !isOpen);
    mobileMenu?.classList.toggle("pointer-events-auto", !isOpen);
    mobileMenu?.classList.toggle("scale-y-0", isOpen);
    mobileMenu?.classList.toggle("opacity-0", isOpen);
    mobileMenu?.classList.toggle("pointer-events-none", isOpen);
  });
})();<\/script>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/Navbar.astro", void 0);
//#endregion
//#region src/layouts/Layout.astro
createAstro("https://astro.build");
var $$Layout = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Layout;
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return renderTemplate`<html lang="es" data-astro-cid-ju4pidww><head><meta charset="utf-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><link rel="icon" href="/favicon.ico"><meta name="generator"${addAttribute(Astro.generator, "content")}><title>Indie y Alternativo</title><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Anton&display=swap" rel="stylesheet">${renderHead($$result)}</head><body data-astro-cid-ju4pidww><main data-astro-cid-ju4pidww>${renderSlot($$result, $$slots["default"])}</main><footer class="site-footer" data-astro-cid-ju4pidww><div class="footer-content" data-astro-cid-ju4pidww><div class="footer-brand" data-astro-cid-ju4pidww><h2 data-astro-cid-ju4pidww>Indie y Alternativo</h2><p data-astro-cid-ju4pidww>Tu espacio para descubrir música independiente, nuevas bandas y sonidos fuera de lo común.</p></div><nav class="footer-links" aria-label="Enlaces del pie de página" data-astro-cid-ju4pidww><h3 data-astro-cid-ju4pidww>Información</h3><ul data-astro-cid-ju4pidww><li data-astro-cid-ju4pidww><a href="/aviso-de-privacidad" data-astro-cid-ju4pidww>Aviso de privacidad</a></li><li data-astro-cid-ju4pidww><a href="/terminos-y-condiciones" data-astro-cid-ju4pidww>Términos y condiciones</a></li><li data-astro-cid-ju4pidww><a href="/cookies" data-astro-cid-ju4pidww>Política de cookies</a></li><li data-astro-cid-ju4pidww><a href="/contacto" data-astro-cid-ju4pidww>Contacto</a></li></ul></nav><div class="footer-contact" data-astro-cid-ju4pidww><h3 data-astro-cid-ju4pidww>Contacto</h3><p data-astro-cid-ju4pidww>contacto@indieyalternativo.com</p><p data-astro-cid-ju4pidww>Sonora, México</p></div></div><div class="footer-bottom" data-astro-cid-ju4pidww><p data-astro-cid-ju4pidww>&copy; ${year} Indie y Alternativo. Todos los derechos reservados.</p></div></footer></body></html>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/layouts/Layout.astro", void 0);
//#endregion
export { $$Navbar as n, $$Star as r, $$Layout as t };
