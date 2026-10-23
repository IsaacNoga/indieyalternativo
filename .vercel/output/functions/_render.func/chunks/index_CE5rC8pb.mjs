import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_CDeSLf35.mjs";
import { t as createComponent } from "./compiler_Jkg83v7F.mjs";
import { n as $$Navbar, r as $$Star, t as $$Layout } from "./Layout_B0KkYUxA.mjs";
import { t as news } from "./mockreviews_DZHqPyYI.mjs";
//#region src/pages/news/index.astro
var news_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const frontReviews = news;
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "transforms": false })}${maybeRenderHead($$result)}<div class="w-full h-full flex flex-col items-center"><div class="w-11/12 md:w-3/4 p-4"><p class="text-black text-4xl sm:text-6xl md:text-8xl title">NOTICIAS</p></div><div class="w-full border"></div><div class="w-2/3 grid grid-cols-1 md:grid-cols-3 gap-5"><div class="w-full flex flex-col border-b-2 border-red-500 md:col-span-2"><div class="aspect-video w-full overflow-hidden"><img${addAttribute("/img/karolg.webp", "src")}${addAttribute("NO ME ARREPIENTO DE SENTIR TANTO", "alt")} class="w-full h-full object-cover object-center hover:brightness-75 transition-all ease-in-out duration-200 cursor-pointer"></div><p class="text-2xl py-2 mt-0 title">${"NO ME ARREPIENTO DE SENTIR TANTO"}</p><p class="text-sm md:text-lg font-extrabold line-clamp-4">Tras recibir una divertida propuesta de matrimonio por parte de un fanático de 56 años durante su concierto en el SoFi Stadium de Los Ángeles, y por unirse mediante su fundación Con Cora a un gran concierto benéfico para ayudar en la reconstrucción de zonas afectadas por sismos en Colombia</p><div class="w-full flex flex-col gap-1 mt-auto pt-2"><div class="flex flex-row items-center">${renderComponent($$result, "Star", $$Star, { "size": 20 })}<p class="text-lg font-bold">Javier</p></div><p class="text-sm text-neutral-400">12/03/2025</p></div></div><div class="w-full flex flex-col gap-5 md:col-span-1">${frontReviews.slice(0, 2).map((review) => renderTemplate`<div class="w-full flex-1 min-h-0 flex flex-col border-b-2 border-red-500"><div class="aspect-video w-full overflow-hidden"><img${addAttribute(review?.mediaRoute, "src")}${addAttribute(review?.mediaAlt, "alt")} class="w-full h-full object-cover object-center hover:brightness-75 transition-all ease-in-out duration-200 cursor-pointer"></div><p class="text-md py-2 mt-0 title line-clamp-2">${review?.title}</p><div class="w-full flex flex-col gap-1 mt-auto"><div class="flex flex-row items-center">${renderComponent($$result, "Star", $$Star, { "size": 18 })}<p class="text-sm font-bold">Javier</p></div><p class="text-sm text-neutral-400">12/03/2025</p></div></div>`)}</div><div class="md:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-5">${frontReviews.map((review) => renderTemplate`<a${addAttribute(review?.link, "href")} class="w-full border-b-2 border-red-500"><div class="aspect-video w-full overflow-hidden"><img${addAttribute(review?.mediaRoute, "src")}${addAttribute(review?.title, "alt")} class="w-full h-full object-cover object-center hover:brightness-75 transition-all ease-in-out duration-200 cursor-pointer"></div><p class="text-md py-2 mt-0 title">${review?.title}</p><div class="w-full flex flex-col gap-1 mt-auto"><div class="flex flex-row items-center">${renderComponent($$result, "Star", $$Star, { "size": 18 })}<p class="text-sm font-bold">Javier</p></div><p class="text-sm text-neutral-400">12/03/2025</p></div></a>`)}</div></div></div>` })}`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/news/index.astro", void 0);
var $$file = "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/news/index.astro";
var $$url = "/news";
//#endregion
//#region \0virtual:astro:page:src/pages/news/index@_@astro
var page = () => news_exports;
//#endregion
export { page };
