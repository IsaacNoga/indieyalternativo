import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { i as renderComponent, m as maybeRenderHead, u as renderTemplate } from "./server_CDeSLf35.mjs";
import { t as createComponent } from "./compiler_Jkg83v7F.mjs";
import { n as $$Navbar, t as $$Layout } from "./Layout_B0KkYUxA.mjs";
//#region src/pages/404.astro
var _404_exports = /* @__PURE__ */ __exportAll({
	default: () => $$404,
	file: () => $$file,
	url: () => $$url
});
var $$404 = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Navbar", $$Navbar, { "transforms": false })}${maybeRenderHead($$result)}<div class="w-full h-full flex flex-col gap-4 justify-center items-center bg-neutral-900"><img class="h-120" src="/img/logo.png"><p class="text-white text-6xl title text-center">404</p><p class="text-white text-6xl text-center">página no encontrada</p><a class="bg-red-500 p-4 rounded-4xl font-extrabold uppercase" href="/">Volver al inicio</a></div>` })}`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/404.astro", void 0);
var $$file = "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/404.astro";
var $$url = "/404";
//#endregion
//#region \0virtual:astro:page:src/pages/404@_@astro
var page = () => _404_exports;
//#endregion
export { page };
