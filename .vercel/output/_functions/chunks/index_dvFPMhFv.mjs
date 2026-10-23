import { n as __exportAll } from "./rolldown-runtime_B4iAMlE-.mjs";
import { T as createAstro, g as addAttribute, i as renderComponent, m as maybeRenderHead, u as renderTemplate, v as createRenderInstruction } from "./server_CDeSLf35.mjs";
import { t as createComponent } from "./compiler_Jkg83v7F.mjs";
import { n as $$Navbar, r as $$Star, t as $$Layout } from "./Layout_B0KkYUxA.mjs";
import { n as reviews, t as news } from "./mockreviews_DZHqPyYI.mjs";
//#region node_modules/.pnpm/astro@7.1.6_@emnapi+core@2._f90378ac36d8453629f25b34323d4074/node_modules/astro/dist/runtime/server/render/script.js
async function renderScript(result, id) {
	const inlined = result.inlinedScripts.get(id);
	let content = "";
	if (inlined != null) {
		if (inlined) content = `<script type="module">${inlined}<\/script>`;
	} else {
		const resolved = await result.resolve(id);
		content = `<script type="module" src="${result.userAssetsBase ? (result.base === "/" ? "" : result.base) + result.userAssetsBase : ""}${resolved}"><\/script>`;
	}
	return createRenderInstruction({
		type: "script",
		id,
		content
	});
}
//#endregion
//#region src/components/Grain.astro
createAstro("https://astro.build");
var $$Grain = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Grain;
	const { opacity = .06, class: className = "" } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div${addAttribute(`pointer-events-none absolute inset-0 z-0 ${className}`, "class")}${addAttribute(`
    opacity: ${opacity};
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E");
    background-repeat: repeat;
  `, "style")}></div>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/Grain.astro", void 0);
//#endregion
//#region src/components/Carousel.astro
createAstro("https://astro.build");
var $$Carousel = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Carousel;
	const { slides, interval = 1e4 } = Astro.props;
	const uid = crypto.randomUUID().slice(0, 8);
	return renderTemplate`${maybeRenderHead($$result)}<div class="carousel relative grid w-full min-h-[50dvh] lg:h-dvh overflow-hidden"${addAttribute(uid, "data-carousel-id")}${addAttribute(interval, "data-interval")}>${slides.map((slide, i) => renderTemplate`<div class="carousel-slide relative col-start-1 row-start-1 lg:absolute lg:inset-0 transition-opacity duration-1000 ease-in-out flex flex-row justify-center"${addAttribute(`opacity: ${i === 0 ? 1 : 0};`, "style")}${addAttribute(i, "data-index")}><img${addAttribute(slide.mediaRoute, "src")}${addAttribute(slide.alt ?? "", "alt")} class="absolute inset-0 w-full h-full object-cover brightness-40">${(slide.title || slide.link || slide?.subtitle) && slide?.rate && renderTemplate`<div class="relative w-full lg:h-full lg:w-3/4 lg:absolute z-20 bottom-0 pt-10 pb-5 lg:pt-0 lg:pb-12 grid grid-cols-1 content-end justify-items-center lg:gap-6 lg:grid-cols-[2fr_1fr] lg:justify-items-stretch lg:items-end md:py-30 md:px-20"><div class="order-2 lg:order-1 flex flex-col lg:gap-2 justify-end p-5 w-full"><div class="flex flex-col gap-0 lg:gap-6"><div class="flex flex-col gap-1"><div><a${addAttribute(`/reviews/${slide?.title.replace(" ", "-")}`, "href")} class="w-full bg-red-500 px-1 py-2 lg:px-4 lg:py-2 rounded-4xl font-bold uppercase text-xs lg:text-lg">Ver más</a></div><p class="text-red-500 font-extrabold text-xs md:text-2xl">${slide.genre}</p></div><div class="flex flex-col lg:gap-2"><p class="w-full text-white text-lg text-justify md:text-6xl title">${slide.title}</p><p class="text-white text-lg md:text-4xl font-extrabold">${slide.subtitle}</p></div></div><p class="text-neutral-400 font-extrabold text-xs md:text-xl leading-tight line-clamp-4 min-h-[4lh]">${slide.resume}</p></div><div class="order-1 lg:order-2 relative flex flex-col justify-center items-center lg:self-center lg:pt-0"><div class="z-10 w-full flex flex-row justify-center absolute bottom-25 lg:-top-16">${slide.rate >= 9 && renderTemplate`${renderComponent($$result, "Star", $$Star, {
		"class": "size-6 lg:size-14",
		"color": "#fb2c36"
	})}`}</div><div${addAttribute(slide?.rate >= 9 ? "h-25 w-25 md:h-55 md:w-55 border-4 lg:border-6 border-red-500 rounded-full flex flex-col items-center justify-center" : "h-25 w-25 md:h-55 md:w-55 border-4 lg:border-6 border-white rounded-full flex flex-col items-center justify-center", "class")}><p${addAttribute(slide?.rate >= 9 ? "text-red-500 text-4xl md:text-[5rem] font-extrabold" : "text-white text-4xl md:text-[5rem] font-extrabold", "class")}>${slide?.rate?.toFixed(1)}</p></div></div></div>`}<div class="absolute inset-0 shadow-[inset_0_-150px_200px_50px_#0a0a0a] pointer-events-none z-10"></div></div>`)}</div>${renderScript($$result, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/Carousel.astro?astro&type=script&index=0&lang.ts")}`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/Carousel.astro", void 0);
//#endregion
//#region src/components/RecentNews.astro
var $$RecentNews = createComponent(($$result, $$props, $$slots) => {
	const frontReviews = news.slice(0, 4);
	return renderTemplate`${maybeRenderHead($$result)}<div class="w-full min-h-1/2 lg:min-h-full flex flex-col p-4"><div class="flex flex-row gap-1 pt-4 md:px-6">${renderComponent($$result, "Star", $$Star, {
		"size": 34,
		"color": "#fb2c36"
	})}<p class="text-4xl title text-black">NOTICIAS</p></div><div class="w-full border border-black my-2"></div><div class="w-full grid grid-cols-1 md:grid-cols-2 gap-5"><div class="w-full flex flex-col border-b border-red-500 col-span-1"><div class="aspect-video w-full overflow-hidden"><img${addAttribute("/img/karolg.webp", "src")}${addAttribute("NO ME ARREPIENTO DE SENTIR TANTO", "alt")} class="w-full h-full object-cover object-center hover:brightness-75 transition-all ease-in-out duration-200 cursor-pointer"></div><p class="text-2xl py-2 mt-0 title">${"NO ME ARREPIENTO DE SENTIR TANTO"}</p><p class="text-sm md:text-lg">Tras recibir una divertida propuesta de matrimonio por parte de un fanático de 56 años durante su concierto en el SoFi Stadium de Los Ángeles, y por unirse mediante su fundación Con Cora a un gran concierto benéfico para ayudar en la reconstrucción de zonas afectadas por sismos en Colombia</p><div class="w-full flex flex-col gap-1 mt-auto"><div class="flex flex-row items-center">${renderComponent($$result, "Star", $$Star, { "size": 20 })}<p class="text-lg font-bold">...</p></div><p class="text-sm text-neutral-400">12/03/2025</p></div></div><div class="w-full grid grid-cols-1 md:grid-cols-2 gap-10 col-span-1">${frontReviews.map((review) => renderTemplate`<a${addAttribute(review?.link, "href")} class="w-full flex flex-col border-b border-red-500"><div class="aspect-video w-full overflow-hidden"><img${addAttribute(review?.mediaRoute, "src")}${addAttribute(review?.title, "alt")} class="w-full h-full object-cover object-center hover:brightness-75 transition-all ease-in-out duration-200 cursor-pointer"></div><p class="text-md py-2 mt-0 title">${review?.title}</p><div class="w-full flex flex-col gap-1 mt-auto"><div class="flex flex-row items-center">${renderComponent($$result, "Star", $$Star, { "size": 18 })}<p class="text-sm font-bold">Javier</p></div><p class="text-sm text-neutral-400">12/03/2025</p></div></a>`)}</div></div></div>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/RecentNews.astro", void 0);
//#endregion
//#region src/components/ArtistCard.astro
createAstro("https://astro.build");
var $$ArtistCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ArtistCard;
	const { src, name, rate } = Astro.props;
	return renderTemplate`${maybeRenderHead($$result)}<div class="w-full lg:w-140 shrink-0 flex flex-col relative"><div class="w-full flex flex-row gap-2 justify-end p-4 z-20 absolute top-0"><div class="w-20 h-20 flex flex-row justify-center items-center rounded-full border-3 border-red-500 backdrop-blur-xl">${rate && rate >= 9 && renderTemplate`${renderComponent($$result, "Star", $$Star, {
		"size": 20,
		"color": "#fb2c36"
	})}`}<p class="text-red-500 text-4xl font-semibold text-shadow-lg">${rate}</p></div></div><div class="aspect-video w-full overflow-hidden"><img${addAttribute(src, "src")}${addAttribute(name, "alt")} class="w-full h-full object-cover object-center hover:brightness-75 transition-all ease-in-out duration-200 cursor-pointer"></div><div class="flex flex-col gap-0 z-20 absolute mt-0 bottom-0 w-full p-5"><p class="text-xl font-extrabold text-red-500 text-shadow-lg title">POP</p><p class="text-3xl font-extrabold text-white text-shadow-lg">${name}</p></div><div class="absolute inset-0 shadow-[inset_0_-150px_200px_50px_#0a0a0a] pointer-events-none z-10"></div></div>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/ArtistCard.astro", void 0);
//#endregion
//#region src/components/ReviewCard.astro
createAstro("https://astro.build");
var $$ReviewCard = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$ReviewCard;
	const { src, title, rate, genre } = Astro.props;
	let circleRateClass = "w-20 h-20 flex flex-row justify-center items-center rounded-full border-3 border-white backdrop-blur-xl";
	let rateNumberclass = "text-white text-4xl font-semibold text-shadow-lg";
	if (rate && rate >= 9) {
		circleRateClass = "w-20 h-20 flex flex-row justify-center items-center rounded-full border-3 border-red-500 backdrop-blur-xl";
		rateNumberclass = "text-red-500 text-3xl md:text-4xl font-semibold text-shadow-lg";
	}
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(`/reviews/${title?.replaceAll(" ", "-")}`, "href")} class="w-full lg:w-140 shrink-0 flex flex-col relative"><div class="w-full flex flex-row gap-2 justify-end p-4 z-20 absolute top-0"><div${addAttribute(circleRateClass, "class")}>${rate && rate >= 9 && renderTemplate`${renderComponent($$result, "Star", $$Star, {
		"size": 15,
		"color": "#fb2c36"
	})}`}<p${addAttribute(rateNumberclass, "class")}>${rate}</p></div></div><div class="aspect-video w-full overflow-hidden"><img${addAttribute(src, "src")}${addAttribute(title, "alt")} class="w-full h-full object-cover object-center hover:brightness-75 transition-all ease-in-out duration-200 cursor-pointer"></div><div class="flex flex-col gap-0 z-20 absolute mt-0 bottom-0 w-full p-5"><p class="text-xl font-extrabold text-red-500 text-shadow-lg title">${genre}</p><p class="text-xl font-extrabold text-white text-shadow-lg">${title}</p><p class="text-sm text-neutral-300 text-shadow-lg">BY JAVIER</p></div><div class="absolute inset-0 shadow-[inset_0_-150px_200px_50px_#0a0a0a] pointer-events-none z-10"></div></a>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/ReviewCard.astro", void 0);
//#endregion
//#region src/components/QuickReviews.astro
var $$QuickReviews = createComponent(($$result, $$props, $$slots) => {
	const frontReviews = reviews;
	return renderTemplate`${maybeRenderHead($$result)}<div class="w-full min-h-1/2 lg:h-full flex flex-col justify-around pb-10 bg-red-500"><div class="flex flex-col gap-1 lg:h-1/2"><div class="flex flex-row gap-1 pt-4 md:px-6">${renderComponent($$result, "Star", $$Star, { "size": 34 })}<p class="text-4xl title">TOP REVIEWS DE LA SEMANA</p></div><div class="w-full border border-black my-2"></div><div class="w-full flex flex-col lg:flex-row lg:overflow-x-auto scrollbar-none">${frontReviews.slice(0, 9).map((review) => renderTemplate`${renderComponent($$result, "ReviewCard", $$ReviewCard, {
		"src": review?.mediaRoute,
		"title": review?.title,
		"rate": review?.rate,
		"genre": review.genre
	})}`)}</div></div><div class="flex flex-col gap-1 lg:h-1/2"><div class="flex flex-row gap-1 pt-4 md:px-6">${renderComponent($$result, "Star", $$Star, { "size": 34 })}<p class="text-4xl title">TOP ARTISTAS DE LA SEMANA</p></div><div class="w-full border border-black my-2"></div><div class="w-full flex flex-col lg:flex-row lg:overflow-x-auto scrollbar-none">${[
		{
			src: "/img/karolg.webp",
			name: "KAROL G",
			rate: 1,
			link: "/"
		},
		{
			src: "/img/arca.webp",
			name: "Arca",
			rate: 2,
			link: "/"
		},
		{
			src: "/img/badbunny-verano.webp",
			name: "Badbunny",
			rate: 3,
			link: "/"
		},
		{
			src: "/img/tyler-chromakopia.webp",
			name: "Tyler The Creator",
			rate: 4,
			link: "/"
		},
		{
			src: "/img/kendrick-gnx.webp",
			name: "Kendrick Lammar",
			rate: 5,
			link: "/"
		}
	].map((review) => renderTemplate`${renderComponent($$result, "ArtistCard", $$ArtistCard, {
		"src": review?.src,
		"name": review?.name,
		"rate": review?.rate
	})}`)}</div></div></div>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/QuickReviews.astro", void 0);
//#endregion
//#region src/components/Frontpage.astro
var $$Frontpage = createComponent(($$result, $$props, $$slots) => {
	const frontReviews = reviews.slice(0, 4);
	return renderTemplate`${maybeRenderHead($$result)}<div class="w-full min-h-dvh relative">${renderComponent($$result, "Grain", $$Grain, { "opacity": .01 })}${renderComponent($$result, "Navbar", $$Navbar, { "transforms": false })}${renderComponent($$result, "Carousel", $$Carousel, {
		"interval": 5e3,
		"slides": frontReviews
	})}${renderComponent($$result, "QuickReviews", $$QuickReviews, {})}${renderComponent($$result, "RecentNews", $$RecentNews, {})}</div>`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/components/Frontpage.astro", void 0);
//#endregion
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
var $$Index = createComponent(($$result, $$props, $$slots) => {
	return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Frontpage", $$Frontpage, {})}` })}`;
}, "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/index.astro", void 0);
var $$file = "C:/Users/idavi/Documents/proyectos-personales/indieyalternativo/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
