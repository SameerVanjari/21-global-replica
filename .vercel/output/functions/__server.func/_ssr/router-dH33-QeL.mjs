import { c as HeadContent, d as lazyRouteComponent, f as createFileRoute, m as require_jsx_runtime, p as createRootRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-dH33-QeL.js
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-CzoT6rqU.css";
var Route$1 = createRootRoute({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Twenty1Global Trading LLC" },
			{
				name: "description",
				content: "A dynamic international trading company specialising in the sourcing and delivery of high-quality commodities — with reliability, precision, and strategic depth."
			},
			{
				name: "theme-color",
				content: "#F5F0E8"
			},
			{
				name: "keywords",
				content: "commodity trading, asset investment, FMCG distribution, downstream oil, global logistics, Twenty1Global, UAE trading, Singapore trading"
			},
			{
				property: "og:title",
				content: "Twenty1Global Trading LLC"
			},
			{
				property: "og:description",
				content: "Global commodity trading and asset investment company operating across UAE, Singapore, and Switzerland."
			},
			{
				property: "og:type",
				content: "website"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "icon",
				type: "image/svg+xml",
				href: "/favicon.svg"
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;1,300;1,400&family=Inter:wght@200;300;400;500;600&display=swap"
			}
		]
	}),
	notFoundComponent: () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
		className: "container mx-auto p-4 pt-16",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", { children: "404" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "The requested page could not be found." })]
	}),
	shellComponent: RootDocument
});
function RootDocument({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
var $$splitComponentImporter = () => import("./routes-Tyg2gbzo.mjs");
var rootRouteChildren = { IndexRoute: createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") }).update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$1
}) };
var routeTree = Route$1._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
	return createRouter({
		routeTree,
		scrollRestoration: true,
		defaultPreload: "intent",
		defaultPreloadStaleTime: 0
	});
}
//#endregion
export { getRouter };
