import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_CDeSLf35.mjs";
import { t as createComponent } from "./compiler_Jkg83v7F.mjs";
import { n as $$Navbar, t as $$Layout } from "./Layout_B0KkYUxA.mjs";
import { n as reviews } from "./mockreviews_DZHqPyYI.mjs";
//#region src/pages/top-charts/[slug].astro
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
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "transforms": false })}${maybeRenderHead($$result)}<div class="w-full h-full flex flex-col items-center scrollbar-none"><div class="flex flex-col gap-2 w-full md:w-3/4 items-center"><h1 class="font-extrabold text-6xl uppercase title p-4">${title}</h1><div class="border w-full"></div>${reviews.map((rv, i) => renderTemplate`<div class="border p-2 flex flex-col gap-2 w-11/12 md:w-1/2 relative"><div class="flex flex-row gap-2 items-center"><p class="title rounded-full border-2 border-red-500 h-7 w-7 text-center items-center justify-center">${i + 1}</p><p class="title text-lg">${rv?.title}</p></div><img class="h-full w-full object-cover object-center"${addAttribute(rv.subtitle, "alt")}${addAttribute(rv.mediaRoute, "src")}><div class="flex flex-col p-2 w-full"><p class="text-sm md:text-xl font-extrabold">${rv?.resume}</p><div class="border"></div><p class="text-xs md:text-lg text-end">12/03/2026</p></div></div>`)}</div></div>` })}`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/top-charts/[slug].astro", void 0);
var $$file = "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/top-charts/[slug].astro";
var $$url = "/top-charts/[slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/top-charts/[slug]@_@astro
var page = () => _slug__exports;
//#endregion
export { page };
