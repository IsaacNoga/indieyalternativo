import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_CDeSLf35.mjs";
import { t as createComponent } from "./compiler_Jkg83v7F.mjs";
import { n as $$Navbar, r as $$Star, t as $$Layout } from "./Layout_B0KkYUxA.mjs";
//#region src/pages/top-charts/index.astro
var top_charts_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "transforms": false })}${maybeRenderHead($$result)}<div class="w-full h-full flex flex-col items-center"><div class="w-11/12 md:w-3/4 p-4"><p class="text-black text-4xl sm:text-6xl md:text-8xl title">TOP CHARTS</p></div><div class="w-full border"></div><div class="flex flex-col gap-2 w-2/3 p-2"><a href="/top-charts/top-10-de-la-semana" class="flex flex-row gap-2 bg-neutral-900 p-4 cursor-pointer group items-center">${renderComponent($$result, "Star", $$Star, {
		"size": 50,
		"class": "fill-white group-hover:fill-red-500 transition-colors ease-in-out duration-200"
	})}<p class="text-white font-extrabold uppercase text-5xl group-hover:text-red-500 transition-colors ease-in-out duration-200">top 10 de la semana</p></a></div></div>` })}`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/top-charts/index.astro", void 0);
var $$file = "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/top-charts/index.astro";
var $$url = "/top-charts";
//#endregion
//#region \0virtual:astro:page:src/pages/top-charts/index@_@astro
var page = () => top_charts_exports;
//#endregion
export { page };
