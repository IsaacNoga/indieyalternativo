import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_CDeSLf35.mjs";
import { t as createComponent } from "./compiler_Jkg83v7F.mjs";
import { n as $$Navbar, t as $$Layout } from "./Layout_B0KkYUxA.mjs";
import { t as news } from "./mockreviews_DZHqPyYI.mjs";
//#region src/pages/news/[slug].astro
var _slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Slug,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://astro.build");
var $$Slug = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Slug;
	const { slug } = Astro.params;
	const title = slug?.replaceAll("-", " ");
	const noticia = news.find((r) => r.link === `/news/${slug}`);
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "transforms": false })}${maybeRenderHead($$result)}<div class="w-full h-full flex flex-col items-center scrollbar-none"><div class="flex flex-col gap-2 w-full md:w-1/2"><div class="w-full flex flex-row items-baseline justify-between"><h1 class="font-extrabold text-6xl uppercase title pt-4">${title}</h1></div><div class="border w-full"></div><article class="p-2 flow-root"><figure class="float-left mr-4 mb-2 w-full sm:w-80 md:w-120 max-w-full"><img class="h-120 w-full object-cover object-top"${addAttribute(noticia?.mediaAlt, "alt")}${addAttribute(noticia?.mediaRoute, "src")}><figcaption class="flex flex-row justify-between pt-1"><p class="text-xs md:text-lg text-start">Por: Javi</p><p class="text-xs md:text-lg text-start">12/03/2026</p></figcaption></figure><p class="text-sm md:text-xl text-justify">${noticia?.content}</p></article></div></div>` })}`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/news/[slug].astro", void 0);
var $$file = "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/news/[slug].astro";
var $$url = "/news/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/news/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
