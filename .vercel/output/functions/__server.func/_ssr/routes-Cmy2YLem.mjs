import { r as __toESM } from "../_runtime.mjs";
import { j as require_react, m as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { t as Lenis } from "../_libs/lenis.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-Cmy2YLem.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
var NAV_LINKS = [
	{
		href: "#about",
		label: "About"
	},
	{
		href: "#services",
		label: "Services"
	},
	{
		href: "#sustainability",
		label: "Sustainability"
	},
	{
		href: "#markets",
		label: "Markets"
	},
	{
		href: "#fmcg",
		label: "FMCG"
	},
	{
		href: "#contact",
		label: "Contact"
	}
];
function Navbar() {
	const [navState, setNavState] = (0, import_react.useState)("transparent");
	const [activeSection, setActiveSection] = (0, import_react.useState)("");
	const [lastScrollY, setLastScrollY] = (0, import_react.useState)(0);
	const handleScroll = (0, import_react.useCallback)(() => {
		const scrollY = window.scrollY;
		if (scrollY <= 80) setNavState("transparent");
		else if (scrollY > lastScrollY) setNavState("hidden");
		else setNavState("white");
		if (scrollY > window.innerHeight * .5) setNavState((prev) => prev === "transparent" ? "white" : prev);
		setLastScrollY(scrollY);
		for (const { href } of NAV_LINKS) {
			const id = href.replace("#", "");
			const el = document.getElementById(id);
			if (el) {
				const rect = el.getBoundingClientRect();
				if (rect.top <= window.innerHeight * .4 && rect.bottom >= window.innerHeight * .4) {
					setActiveSection(href);
					break;
				}
			}
		}
	}, [lastScrollY]);
	(0, import_react.useEffect)(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);
	const navClasses = cn("fixed z-[1000] flex items-center justify-between rounded-[15px] border border-transparent px-[2.2rem] py-[1.1rem]", "transition-all duration-[600ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "left-[10.3%] right-[10.3%] max-md:left-[1.5rem] max-md:right-[1.5rem] max-md:px-[1.2rem]", {
		"bg-transparent border-transparent shadow-none text-brand top-6": navState === "transparent",
		"bg-white/95 border-brand/5 text-brand top-6 shadow-[0_10px_40px_rgba(0,0,0,0.03)] backdrop-blur-md": navState === "white",
		"opacity-0 pointer-events-none top-6 -translate-y-[130%]": navState === "hidden"
	});
	const linkBase = cn("relative text-[13px] font-light tracking-[0.15em] uppercase transition-colors duration-300", "after:absolute after:bottom-[-4px] after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-[400ms] after:ease-[cubic-bezier(0.16,1,0.3,1)]", "hover:after:w-full");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: navClasses,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#",
				className: "text-[15px] font-extralight tracking-[0.22em] uppercase whitespace-nowrap text-brand",
				children: "TWENTY1GLOBAL"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "hidden md:block",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "flex items-center gap-8",
					children: NAV_LINKS.map(({ href, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href,
						className: cn(linkBase, navState === "transparent" ? "text-brand" : "text-[#2b3e50]/70 hover:text-brand", activeSection === href && "after:w-full text-brand"),
						children: label
					}) }, href))
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#contact",
				className: cn("inline-block font-sans text-[0.7rem] font-normal tracking-[0.25em] uppercase px-[2.2rem] py-[0.9rem]", "border transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]", navState === "transparent" ? "text-brand border-brand/30 hover:border-brand hover:bg-brand/5 hover:tracking-[0.28em]" : "text-brand border-[#2b3e50]/25 hover:border-brand hover:bg-brand/5 hover:tracking-[0.28em]"),
				children: "Get in touch"
			})
		]
	});
}
var ENTITIES = [
	{
		label: "Twenty1Global Group",
		href: "#group"
	},
	{
		label: "Twenty1Global Trading",
		href: "#trading"
	},
	{
		label: "Twenty1Global Capital",
		href: "#capital"
	},
	{
		label: "Twenty1Global Maritime",
		href: "#maritime"
	},
	{
		label: "Fort Energy",
		href: "#energy"
	}
];
var BOTTOM_LINKS = [
	{
		label: "Contact",
		href: "#contact"
	},
	{
		label: "ESG",
		href: "#esg"
	},
	{
		label: "Privacy Policy",
		href: "#privacy"
	},
	{
		label: "Terms of Use",
		href: "#terms"
	}
];
var OFFICES$1 = [
	{
		city: "Geneva,<br/>Switzerland",
		address: "Rue du Rhône 14, 1204 Geneva<br/>Switzerland",
		email: "geneva@twenty1global.com"
	},
	{
		city: "Dubai,<br/>UAE",
		address: "Marina Plaza, Suite 2902, Dubai Marina<br/>Dubai, United Arab Emirates",
		email: "info@twenty1global.com"
	},
	{
		city: "Singapore<br/>&nbsp;",
		address: "10 Collyer Quay, Ocean Financial Centre<br/>Singapore 049315",
		email: "singapore@twenty1global.com"
	}
];
function Footer() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "relative z-10 border-t border-[#1b365d]/10 bg-white px-[10.3%] pb-16 pt-24 text-[#1b365d] max-lg:px-[6%] max-md:px-7",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-20 grid grid-cols-1 gap-12 md:grid-cols-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-[220px] flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex flex-col gap-3 text-[9px] font-light tracking-[0.22em]",
							children: ENTITIES.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								className: "uppercase transition-colors hover:text-[#1b365d]/60",
								children: label
							}, label))
						}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-8 flex flex-col gap-2 text-[9px] font-light tracking-[0.22em] text-[#1b365d]/60",
							children: BOTTOM_LINKS.map(({ label, href }) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
								href,
								className: "uppercase transition-colors hover:text-[#1b365d]",
								children: label
							}, label))
						})]
					}), OFFICES$1.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex min-h-[220px] flex-col justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "mb-8 font-sans text-[13px] font-light uppercase leading-[1.6] tracking-[0.22em] text-[#1b365d]",
							dangerouslySetInnerHTML: { __html: office.city }
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "max-w-[220px] text-[10px] font-light leading-[1.8] tracking-[0.05em] text-[#5d7488]/90",
							dangerouslySetInnerHTML: { __html: office.address }
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `mailto:${office.email}`,
							className: "mt-8 text-[10px] font-light tracking-[0.08em] text-[#1b365d] transition-colors hover:text-[#1b365d]/70",
							children: office.email
						})]
					}, office.city))]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mb-8 w-full border-t border-[#1b365d]/10" }),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col items-center justify-between gap-6 md:flex-row",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
								className: "h-6 w-6 text-[#1b365d]/80",
								viewBox: "0 0 24 24",
								fill: "currentColor",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "4",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "9",
										cy: "6.2",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "15",
										cy: "6.2",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "6",
										cy: "8.4",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "8.4",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "8.4",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "9",
										cy: "10.6",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "15",
										cy: "10.6",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "12.8",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "6",
										cy: "15",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "18",
										cy: "15",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "9",
										cy: "17.2",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "15",
										cy: "17.2",
										r: "1.2"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
										cx: "12",
										cy: "19.4",
										r: "1.2"
									})
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "mx-4 h-5 w-px bg-[#1b365d]/20" }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[12px] font-light uppercase tracking-[0.3em] text-[#1b365d]",
								children: "TWENTY1GLOBAL"
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "text-[9px] font-light tracking-[0.1em] text-[#5d7488]/80",
						children: [
							"© ",
							(/* @__PURE__ */ new Date()).getFullYear(),
							" | Twenty1Global - All rights reserved"
						]
					})]
				})
			]
		})
	});
}
function Cursor() {
	const cursorRef = (0, import_react.useRef)(null);
	const dotRef = (0, import_react.useRef)(null);
	const rafRef = (0, import_react.useRef)(0);
	const mouseRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const posRef = (0, import_react.useRef)({
		x: 0,
		y: 0
	});
	const animate = (0, import_react.useCallback)(() => {
		const dx = mouseRef.current.x - posRef.current.x;
		const dy = mouseRef.current.y - posRef.current.y;
		posRef.current.x += dx * .12;
		posRef.current.y += dy * .12;
		if (cursorRef.current) cursorRef.current.style.transform = `translate(${posRef.current.x}px, ${posRef.current.y}px)`;
		if (dotRef.current) dotRef.current.style.transform = `translate(${mouseRef.current.x}px, ${mouseRef.current.y}px)`;
		rafRef.current = requestAnimationFrame(animate);
	}, []);
	const handleMouseMove = (0, import_react.useCallback)((e) => {
		mouseRef.current.x = e.clientX;
		mouseRef.current.y = e.clientY;
	}, []);
	const handleMouseEnterLink = (0, import_react.useCallback)((e) => {
		const target = e.currentTarget;
		if (!target) return;
		if (target.closest(".dot-nav, [class*='dot-nav']")) {
			cursorRef.current?.classList.add("scale-[1.6]", "bg-[#1b365d]/15", "border-[#1b365d]");
			dotRef.current?.classList.add("opacity-0");
		} else {
			cursorRef.current?.classList.add("scale-[2.5]", "bg-transparent", "border-white/40");
			dotRef.current?.classList.add("opacity-0");
		}
	}, []);
	const handleMouseLeaveLink = (0, import_react.useCallback)((e) => {
		const target = e.currentTarget;
		if (!target) return;
		if (target.closest(".dot-nav, [class*='dot-nav']")) cursorRef.current?.classList.remove("scale-[1.6]", "bg-[#1b365d]/15", "border-[#1b365d]");
		else cursorRef.current?.classList.remove("scale-[2.5]", "bg-transparent", "border-white/40");
		dotRef.current?.classList.remove("opacity-0");
	}, []);
	(0, import_react.useEffect)(() => {
		if (typeof window === "undefined") return;
		document.documentElement.classList.add("cursor-none");
		rafRef.current = requestAnimationFrame(animate);
		window.addEventListener("mousemove", handleMouseMove, { passive: true });
		const attachListeners = () => {
			document.querySelectorAll([
				"a",
				"button",
				"select",
				"input",
				"[role=\"button\"]",
				".dot-nav-item",
				".dot-nav a",
				".dot-nav button",
				".proc-num",
				".svc-card",
				".why-card",
				".fmcg-country",
				".geo-tag"
			].join(",")).forEach((el) => {
				el.addEventListener("mouseenter", handleMouseEnterLink);
				el.addEventListener("mouseleave", handleMouseLeaveLink);
			});
		};
		attachListeners();
		const observer = new MutationObserver(() => attachListeners());
		observer.observe(document.body, {
			childList: true,
			subtree: true
		});
		return () => {
			cancelAnimationFrame(rafRef.current);
			document.documentElement.classList.remove("cursor-none");
			window.removeEventListener("mousemove", handleMouseMove);
			observer.disconnect();
			document.querySelectorAll([
				"a",
				"button",
				"select",
				"input",
				"[role=\"button\"]",
				".dot-nav-item",
				".dot-nav a",
				".dot-nav button",
				".proc-num",
				".svc-card",
				".why-card",
				".fmcg-country",
				".geo-tag"
			].join(",")).forEach((el) => {
				el.removeEventListener("mouseenter", handleMouseEnterLink);
				el.removeEventListener("mouseleave", handleMouseLeaveLink);
			});
		};
	}, [
		animate,
		handleMouseMove,
		handleMouseEnterLink,
		handleMouseLeaveLink
	]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: cursorRef,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden size-[34px] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-primary/50 transition-[width,height,background-color,border-color] duration-300 ease-out md:flex",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "size-1.5 rounded-full bg-transparent" })
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: dotRef,
		className: "pointer-events-none fixed left-0 top-0 z-[9999] hidden size-[6px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary transition-opacity duration-200 md:block"
	})] });
}
var SECTIONS = [
	{
		id: "hero",
		label: "Home"
	},
	{
		id: "about",
		label: "About"
	},
	{
		id: "services",
		label: "Services"
	},
	{
		id: "sustainability",
		label: "Sustainability"
	},
	{
		id: "markets",
		label: "Markets"
	},
	{
		id: "fmcg",
		label: "FMCG"
	},
	{
		id: "contact",
		label: "Contact"
	}
];
function DotNav() {
	const [activeSection, setActiveSection] = (0, import_react.useState)("hero");
	const handleScroll = (0, import_react.useCallback)(() => {
		let current = "hero";
		for (const { id } of SECTIONS) {
			const el = document.getElementById(id);
			if (el) {
				if (el.getBoundingClientRect().top <= window.innerHeight * .5) current = id;
			}
		}
		setActiveSection(current);
	}, []);
	(0, import_react.useEffect)(() => {
		window.addEventListener("scroll", handleScroll, { passive: true });
		return () => window.removeEventListener("scroll", handleScroll);
	}, [handleScroll]);
	const scrollTo = (id) => {
		const el = document.getElementById(id);
		if (el) el.scrollIntoView({ behavior: "smooth" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
		className: "fixed right-12 top-1/2 z-[900] hidden -translate-y-1/2 flex-col gap-7 lg:flex max-md:hidden",
		children: SECTIONS.map(({ id, label }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => scrollTo(id),
			"aria-label": `Scroll to ${label}`,
			className: "group relative flex cursor-none items-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-[5px] rounded-full transition-all duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)]", activeSection === id ? "scale-[1.4] bg-[#1b365d]" : "bg-[#1b365d]/20 hover:scale-[1.4] hover:bg-[#1b365d]") }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: cn("pointer-events-none absolute right-6 top-1/2 -translate-y-1/2 whitespace-nowrap font-sans text-[0.6rem] tracking-[0.2em] uppercase text-[#2d628c] transition-all duration-300", activeSection === id ? "translate-x-0 opacity-100" : "translate-x-[10px] opacity-0", "group-hover:translate-x-0 group-hover:opacity-100"),
				children: label
			})]
		}, id))
	});
}
function HeroSection() {
	const sectionRef = (0, import_react.useRef)(null);
	const bgRef = (0, import_react.useRef)(null);
	const imgRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const bg = bgRef.current;
		const img = imgRef.current;
		if (!bg || !img) return;
		let ticking = false;
		const onScroll = () => {
			if (!ticking) {
				ticking = true;
				requestAnimationFrame(() => {
					const scrollY = window.scrollY;
					const vh = window.innerHeight;
					const progress = Math.min(scrollY / vh, 1);
					const r = Math.round(203 + 41 * progress);
					const g = Math.round(211 + 35 * progress);
					const b = Math.round(219 + 29 * progress);
					bg.style.backgroundColor = `rgb(${r},${g},${b})`;
					const scale = 1.08 + progress * .17;
					const translateY = progress * -12;
					const opacity = progress < .15 ? 1 : Math.max(0, 1 - (progress - .15) / .6);
					img.style.transform = `scale(${scale}) translateY(${translateY}%)`;
					img.style.opacity = String(opacity);
					ticking = false;
				});
			}
		};
		let mouseCache = {
			scale: 1.08,
			translateY: 0
		};
		const onMouse = (e) => {
			const cx = window.innerWidth / 2;
			const cy = window.innerHeight / 2;
			const dx = (e.clientX - cx) / cx * 1.5;
			const dy = (e.clientY - cy) / cy * .8;
			const s = img.style.transform.match(/scale\(([\d.]+)\)/);
			const ty = img.style.transform.match(/translateY\(([-\d.]+)%\)/);
			const currScale = s ? parseFloat(s[1]) : mouseCache.scale;
			const currY = ty ? parseFloat(ty[1]) : mouseCache.translateY;
			img.style.transform = `scale(${currScale}) translateY(${currY}%) translate(${dx}%, ${dy}%)`;
		};
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("mousemove", onMouse, { passive: true });
		onScroll();
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("mousemove", onMouse);
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "home",
		ref: sectionRef,
		className: "relative flex min-h-screen items-center overflow-hidden pt-36 pb-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: bgRef,
				className: "pointer-events-none fixed inset-0 z-0 size-full overflow-hidden bg-[#cbd3db]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						ref: imgRef,
						src: "/hero-gif.gif",
						alt: "",
						"aria-hidden": "true",
						className: "size-full object-cover",
						style: {
							objectPosition: "center bottom",
							transformOrigin: "center bottom",
							willChange: "transform, opacity",
							transition: "opacity 0.05s linear",
							filter: "saturate(0.85) brightness(1.02)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute right-0 bottom-0 left-0",
						style: {
							height: "35%",
							background: "linear-gradient(to bottom, transparent, #f4f6f8)"
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "pointer-events-none absolute inset-0",
						style: { background: "radial-gradient(ellipse at center, transparent 55%, rgba(27,54,93,0.15) 100%)" }
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "hero-container relative z-10 w-full",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-[1200px]",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col items-start",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hero-eyebrow mb-12 flex items-center gap-4 font-sans text-[10px] font-normal tracking-[0.35em] text-[#1b365d] uppercase",
								children: "Twenty1Global Trading"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
								className: "heading-hero mb-12 font-sans text-[clamp(2rem,4.5vw,3.8rem)] leading-[1.25] font-extralight tracking-[0.22em] text-[#0a0e17] uppercase",
								children: [
									"Powering Global Trade.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Delivering Trusted Execution.",
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
									"Managing Strategic Assets."
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-intro max-w-[620px] font-sans text-[1.05rem] leading-relaxed font-light text-[#2b3e50]",
								children: "Headquartered in Dubai with a strategic presence in Geneva and Singapore. We leverage deep logistical depth, board-level risk management, and structured execution to connect critical resources with high-demand global markets."
							})
						]
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "absolute right-[10.3%] bottom-28 z-10 hidden flex-col gap-10 text-right md:flex",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-num font-sans text-2xl font-extralight tracking-[0.05em] text-[#0a0e17] uppercase",
							children: "GLOBAL"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-label mt-1 block text-[9px] tracking-[0.25em] text-[#1b365d] uppercase",
							children: "Operating Network"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-num font-sans text-2xl font-extralight tracking-[0.05em] text-[#0a0e17] uppercase",
							children: "SECURE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-label mt-1 block text-[9px] tracking-[0.25em] text-[#1b365d] uppercase",
							children: "Airtight Compliance"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "hero-stat",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-num font-sans text-2xl font-extralight tracking-[0.05em] text-[#0a0e17] uppercase",
							children: "TRUSTED"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "stat-label mt-1 block text-[9px] tracking-[0.25em] text-[#1b365d] uppercase",
							children: "Strategic Capital"
						})]
					})
				]
			})
		]
	});
}
function CloudParticles() {
	const canvasRef = (0, import_react.useRef)(null);
	const containerRef = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const canvas = canvasRef.current;
		const container = containerRef.current;
		if (!canvas || !container) return;
		const ctx = canvas.getContext("2d");
		if (!ctx) return;
		let animId;
		let w = canvas.width = container.offsetWidth;
		let h = canvas.height = container.offsetHeight;
		const img = new Image();
		img.src = "/cloud-particle.png";
		const particles = [];
		let mouseX = 0;
		let mouseY = 0;
		let targetX = 0;
		let targetY = 0;
		let isVisible = true;
		class Particle {
			x = 0;
			y = 0;
			w = 0;
			h = 0;
			vx = 0;
			vy = 0;
			scale = 0;
			opacity = 0;
			rotation = 0;
			vRotation = 0;
			depth = 0;
			reset(initial = false) {
				this.scale = Math.random() * 9.2 + 5.6;
				this.w = 512 * this.scale;
				this.h = 512 * this.scale;
				this.x = initial ? Math.random() * (w + this.w) - this.w : -this.w;
				this.y = Math.random() * (h - this.h * .4) - this.h * .3;
				this.vx = Math.random() * 5;
				this.vy = (Math.random() - .5) * .3;
				this.opacity = Math.random() * .2 + .1;
				this.rotation = Math.random() * Math.PI * 2;
				this.vRotation = (Math.random() - .5) * 15e-5;
				this.depth = Math.random() * .4 + .6;
			}
			update() {
				this.x += this.vx;
				this.y += this.vy;
				this.rotation += this.vRotation;
				if (this.x > w) this.reset();
			}
			draw(mx, my) {
				if (!ctx) return;
				ctx.save();
				ctx.globalAlpha = this.opacity;
				const cx = this.x + this.w / 2 + mx * this.depth;
				const cy = this.y + this.h / 2 + my * this.depth;
				ctx.translate(cx, cy);
				ctx.rotate(this.rotation);
				ctx.drawImage(img, -this.w / 2, -this.h / 2, this.w, this.h);
				ctx.restore();
			}
		}
		for (let i = 0; i < 7; i++) {
			const p = new Particle();
			p.reset(true);
			particles.push(p);
		}
		const animate = () => {
			if (!isVisible) return;
			ctx.clearRect(0, 0, w, h);
			mouseX += (targetX - mouseX) * .05;
			mouseY += (targetY - mouseY) * .05;
			for (const p of particles) {
				p.update();
				p.draw(mouseX, mouseY);
			}
			animId = requestAnimationFrame(animate);
		};
		img.onload = () => {
			animate();
		};
		const onMouse = (e) => {
			targetX = (e.clientX / window.innerWidth - .5) * -50;
			targetY = (e.clientY / window.innerHeight - .5) * -50;
		};
		const onResize = () => {
			if (!container || !canvas) return;
			w = canvas.width = container.offsetWidth;
			h = canvas.height = container.offsetHeight;
		};
		const observer = new IntersectionObserver((entries) => {
			for (const entry of entries) {
				isVisible = entry.isIntersecting;
				if (isVisible) animate();
				else cancelAnimationFrame(animId);
			}
		}, { threshold: .05 });
		window.addEventListener("mousemove", onMouse, { passive: true });
		window.addEventListener("resize", onResize, { passive: true });
		observer.observe(container);
		onResize();
		return () => {
			cancelAnimationFrame(animId);
			window.removeEventListener("mousemove", onMouse);
			window.removeEventListener("resize", onResize);
			observer.disconnect();
		};
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		ref: containerRef,
		className: "pointer-events-none absolute inset-0 z-0 size-full select-none overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("canvas", {
			ref: canvasRef,
			className: "size-full opacity-80"
		})
	});
}
function AboutSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "about",
		ref,
		className: cn("section relative overflow-hidden border-none px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		style: {
			backgroundImage: "url('/about_clouds_bg.png')",
			backgroundSize: "cover",
			backgroundPosition: "center"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute left-0 right-0 top-0 z-10 h-48",
				style: { background: "linear-gradient(to bottom, var(--color-charcoal-navy, #f4f6f8) 0%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute bottom-0 left-0 right-0 z-10 h-48",
				style: { background: "linear-gradient(to top, var(--color-charcoal-navy, #f4f6f8) 0%, transparent 100%)" }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CloudParticles, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative z-10 mx-auto max-w-7xl",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow block font-sans text-[0.65rem] font-normal tracking-[0.35em] uppercase text-brand mb-8",
					children: "About Us"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-12 lg:flex-row lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex-1 flex flex-col items-",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand",
							children: [
								"Where Markets",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Connect With",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Precision"
							]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-text font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted",
								children: "Twenty1Global operates at the intersection of commodity expertise and financial precision. With headquarters across Dubai, Singapore, and Geneva, we deliver strategic sourcing and distribution solutions that span continents and industries."
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "body-text mt-6 font-sans text-[0.95rem] font-light leading-[1.9] text-brand-muted",
								children: "Our team brings decades of combined experience in international trade, asset management, and supply chain optimisation. We pride ourselves on reliability, transparency, and the ability to execute complex transactions with discretion."
							})]
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "",
							children: [
								{
									num: "01",
									label: "Global Network",
									desc: "Strategic relationships across the Middle East, Asia, Europe, and CIS regions built on trust and long-term commitment."
								},
								{
									num: "02",
									label: "Logistical Precision",
									desc: "End-to-end supply chain management with board-level compliance, documentation audits, and timely transit execution."
								},
								{
									num: "03",
									label: "Capital Protection",
									desc: "Sophisticated risk mitigation and credit frameworks protecting global capital in high-value resource movements."
								},
								{
									num: "04",
									label: "Market Intelligence",
									desc: "Data-driven insights and structured commercial agreements ensuring optimal pricing terms across key demand centers."
								}
							].map(({ num, label, desc }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex flex-col gap-2 mb-8",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-baseline justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
										className: "heading-sub font-sans text-[0.95rem] font-normal tracking-[0.15em] uppercase text-brand",
										children: label
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "proc-num font-sans text-[0.65rem] font-normal tracking-[0.25em] uppercase text-brand-muted/60 mt-1",
										children: num
									})]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[0.8rem] font-light leading-[1.7] text-brand-muted/75",
									children: desc
								})]
							}, num))
						})
					})]
				})]
			})
		]
	});
}
var SERVICES = [
	{
		num: "01",
		title: "Commodity Sourcing",
		subtitle: "COMMODITY SOURCING",
		desc: "We identify and procure high-quality energy resources and industrial goods from vetted global suppliers, ensuring supply security and pricing optimization."
	},
	{
		num: "02",
		title: "Trade Facilitation",
		subtitle: "TRADE FACILITATION",
		desc: "Airtight negotiation, contract structuring, legal compliance, and multi-jurisdictional clearing processes for seamless international resource trades."
	},
	{
		num: "03",
		title: "Supply Chain Operations",
		subtitle: "END-TO-END TRANSIT LOGISTICS",
		desc: "Managing complex maritime shipping, customs clearances, storage nodes, and real-time cargo tracking to ensure zero-delay operations."
	},
	{
		num: "04",
		title: "Market Penetration Support",
		subtitle: "GLOBAL EXPANSION INFRASTRUCTURE",
		desc: "Providing global brands and commodity producers with deep local relationships and compliance structures to scale in high-growth networks."
	}
];
function ServicesSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .1 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "services",
		ref,
		className: cn("section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase",
					children: "Services"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-20 flex flex-col gap-12 lg:flex-row lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
							className: "heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase",
							children: [
								"Structural Trade",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								"Management"
							]
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "flex-1",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "body-text font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted",
							children: "We offer institutional trade capability. From negotiation structure and customs clearing to maritime transit compliance, our systems secure seamless resource movements across major continents."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col gap-8",
					children: SERVICES.map(({ num, title, subtitle, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "svc-card group items flex p-8",
						style: { transitionDelay: `${i * 80}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "flex-1 font-sans text-[0.6rem] font-normal tracking-[0.3em] text-brand-muted/50 uppercase",
								children: num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "flex-5",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "heading-sub font-sans text-[0.95rem] font-normal tracking-[0.15em] text-brand uppercase",
									children: title
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "mt-1 block font-sans text-[0.55rem] tracking-[0.2em] text-brand-muted/40 uppercase",
									children: subtitle
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "flex-5 font-sans text-[0.85rem] leading-[1.8] font-light text-brand-muted",
								children: desc
							})
						]
					}, num))
				})
			]
		})]
	});
}
var PILLARS = [
	{
		title: "Environmental Stewardship",
		desc: "Minimizing ecological impact through logistically optimized transport routing and low-carbon maritime compliance.",
		bullets: [{
			label: "Maritime Compliance",
			text: "Partnering exclusively with ocean carriers meeting strict emissions standards."
		}, {
			label: "Logistics Efficiency",
			text: "Optimizing sea routes to reduce carbon footprint per metric ton."
		}]
	},
	{
		title: "Social Integrity",
		desc: "Fostering safe workplaces, respecting local communities, and supporting economic equity in our operational regions.",
		bullets: [{
			label: "Labor Standards",
			text: "Strict compliance with fair labor laws across all regional operations."
		}, {
			label: "Community Reinvestment",
			text: "Fostering development within our sourcing hubs."
		}]
	},
	{
		title: "Institutional Governance",
		desc: "Operating with transparency, compliance audits, and board-level risk management frameworks.",
		bullets: [{
			label: "Trade Compliance",
			text: "Airtight auditing of all transactional and customs structures."
		}, {
			label: "Risk Framework",
			text: "Continuous evaluation of geopolitical, credit, and operational risks."
		}]
	}
];
function SustainabilitySection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "sustainability",
		ref,
		className: cn("section relative px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.06]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-24 grid grid-cols-1 items-end gap-8 lg:grid-cols-12",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "lg:col-span-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase",
						children: "Sustainability"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
						className: "heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] text-brand uppercase",
						children: [
							"Responsible",
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
							"Operations."
						]
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "lg:col-span-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm font-light leading-relaxed text-brand-muted max-w-[500px]",
						children: "We integrate risk management, environmental compliance, and social responsibility directly into our core trading frameworks, safeguarding long-term capital and resource reliability."
					})
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16",
				children: PILLARS.map((pillar, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "mb-4 font-sans text-lg font-light uppercase tracking-[0.15em] text-brand",
							children: pillar.title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-6 text-[13px] font-light leading-relaxed text-brand-muted",
							children: pillar.desc
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
							className: "flex list-none flex-col gap-4 p-0",
							children: pillar.bullets.map(({ label, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
								className: "border-l border-brand/15 pl-4 text-xs font-light leading-relaxed text-brand-muted/80",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
									className: "mb-1 block font-normal uppercase tracking-wider text-brand",
									children: label
								}), text]
							}, label))
						})
					]
				}, pillar.title))
			})]
		})]
	});
}
var ADVANTAGES = [
	{
		roman: "I",
		title: "Strong Global Network",
		desc: "Established relationships across key trading zones, ensuring secure resource flows."
	},
	{
		roman: "II",
		title: "Reliable Execution",
		desc: "Structured commercial clearing, documentation audits, and zero-compromise logistics."
	},
	{
		roman: "III",
		title: "Risk Abatement",
		desc: "Rigorous capital protections, credit lines, and geopolitical risk mitigation."
	},
	{
		roman: "IV",
		title: "Operational Transparency",
		desc: "Institutional governance, anti-corruption standards, and transparent transactions."
	},
	{
		roman: "V",
		title: "Bespoke Strategy",
		desc: "Commercial structures tailored precisely to regional trade requirements."
	},
	{
		roman: "VI",
		title: "Absolute Discretion",
		desc: "Professional compliance, strict confidentiality, and reserved corporate standards."
	}
];
function AdvantagesSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "advantages",
		ref,
		className: cn("section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase",
					children: "ADVANTAGES"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-section mb-20 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase",
					children: [
						"THE Twenty1Global",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"CREDENTIAL"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col",
					children: ADVANTAGES.map(({ roman, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-12",
						style: { transitionDelay: `${i * 80}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[11px] tracking-[0.25em] text-brand-muted md:col-span-1",
								children: roman
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "heading-sub font-sans text-[0.95rem] font-medium tracking-[0.15em] text-brand uppercase",
									children: title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[13px] leading-relaxed font-light text-brand-muted",
									children: desc
								})
							})
						]
					}, roman))
				})
			]
		})]
	});
}
function LenisProvider() {
	(0, import_react.useEffect)(() => {
		const lenis = new Lenis({
			duration: 1.2,
			easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
			smoothWheel: true
		});
		function raf(time) {
			lenis.raf(time);
			requestAnimationFrame(raf);
		}
		requestAnimationFrame(raf);
		return () => {
			lenis.destroy();
		};
	}, []);
	return null;
}
var MARKETS$1 = [
	{
		title: "Oil & Gas",
		desc: "Active sourcing, contract structuring, and compliance navigation for crude oil, refined distillates, and specialized gas resources."
	},
	{
		title: "Industrial Materials",
		desc: "Coordination of critical minerals, chemical products, and bulk industrial inputs for manufacturing clusters worldwide."
	},
	{
		title: "Energy Resources",
		desc: "Providing global supply nodes with reliable energy allocations, managing transit risk and hedging credit exposures."
	}
];
var REGIONS = [
	"Middle East",
	"Asia Pacific",
	"Western Europe",
	"CIS Regions"
];
function MarketsSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "markets",
		ref,
		className: cn("section relative px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20 bg-[#f4f6f8]", "opacity-0 translate-y-8 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow block font-sans text-[0.65rem] font-normal tracking-[0.35em] uppercase text-brand mb-8",
					children: "MARKETS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] font-extralight leading-[1.35] tracking-[0.18em] uppercase text-brand mb-20",
					children: [
						"OPERATING SECTORS &",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"GLOBAL COMMODITIES"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-12 md:grid-cols-3 lg:gap-16 mb-20",
					children: MARKETS$1.map(({ title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "pt-8",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "font-sans text-[clamp(1rem,1.5vw,1.1rem)] font-light tracking-[0.15em] uppercase text-brand mb-4",
							children: title
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.85rem] font-light leading-relaxed text-brand-muted",
							children: desc
						})]
					}, title))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-wrap gap-x-8 gap-y-3 pt-8",
					children: REGIONS.map((region) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-sans text-[0.55rem] tracking-[0.25em] uppercase text-brand-muted font-light",
						children: region
					}, region))
				})
			]
		})]
	});
}
var OFFICES = [
	{
		name: "Geneva",
		region: "EUROPE",
		role: "Trading & Operations",
		address: "Rue du Rhône 14, 1204 Geneva",
		x: "48%",
		y: "33%"
	},
	{
		name: "Dubai",
		region: "MIDDLE EAST HQ",
		role: "Corporate Headquarters",
		address: "Marina Plaza, Suite 2902, Dubai Marina",
		x: "59%",
		y: "42%"
	},
	{
		name: "Singapore",
		region: "ASIA PACIFIC",
		role: "Regional Logistics Hub",
		address: "10 Collyer Quay, Ocean Financial Centre",
		x: "78%",
		y: "61%"
	}
];
function GlobalPresenceSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "markets-map",
		ref,
		className: cn("section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-24 grid grid-cols-1 items-end gap-8 lg:grid-cols-12 lg:gap-20",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "lg:col-span-6",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase",
							children: "GLOBAL PRESENCE"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "heading-section font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase",
							children: "STRATEGIC TRADING HUBS."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "lg:col-span-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted",
							children: "We operate from the world's most critical financial and commercial junctions. Our headquarters in Dubai is anchored by operational hubs in Geneva and Singapore, providing continuous coverage across major time zones."
						})
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid grid-cols-1 gap-12 pt-12 md:grid-cols-3",
					children: OFFICES.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex flex-col gap-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-mono font-sans text-[10px] tracking-[0.25em] text-brand-muted uppercase",
								children: office.region
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
								className: "font-sans text-xl font-light tracking-[0.15em] text-brand uppercase",
								children: office.name
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "font-sans text-[11px] font-light tracking-[0.1em] text-brand-muted uppercase",
								children: office.role
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 font-sans text-xs leading-relaxed font-light text-brand-muted/75",
								children: office.address
							})
						]
					}, office.name))
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mt-20 flex aspect-[2/1] min-h-[250px] w-full items-center justify-center border border-border p-4 md:min-h-[400px]",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("svg", {
						viewBox: "0 0 1000 500",
						className: "h-full w-full text-brand-muted opacity-45",
						fill: "none",
						xmlns: "http://www.w3.org/2000/svg",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("g", {
							stroke: "currentColor",
							strokeWidth: "0.8",
							fill: "none",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120,100 L180,80 L250,110 L280,180 L220,240 L160,250 L120,200 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M220,250 L270,290 L300,380 L270,450 L240,430 L210,310 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M290,40 L350,30 L380,70 L320,80 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M430,220 L480,210 L540,250 L560,330 L500,410 L470,410 L440,320 L410,250 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M390,140 L450,110 L520,90 L680,80 L840,110 L880,160 L800,230 L740,280 L680,310 L580,260 L480,210 L420,170 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M600,220 L640,250 L630,280 L610,250 Z" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M760,350 L840,360 L860,420 L780,430 L740,390 Z" })
							]
						})
					}), OFFICES.map((office) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						style: {
							left: office.x,
							top: office.y
						},
						className: "geo-tag group absolute z-10 flex -translate-x-1/2 -translate-y-1/2 flex-col items-center gap-1 transition-all duration-300 hover:z-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "relative inline-flex h-3 w-3 items-center justify-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inline-flex h-5 w-5 rounded-full border-2 border-brand/0 transition-all duration-300 group-hover:border-brand/30 group-hover:scale-125" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "inline-flex h-2 w-2 rounded-full border border-brand/40 bg-white shadow-sm transition-all duration-300 group-hover:scale-[2.5] group-hover:border-brand group-hover:bg-brand" })]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 border border-transparent bg-white/95 px-2 py-0.5 font-mono font-sans text-[9px] uppercase tracking-[0.15em] text-[#1b365d]/70 shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:border-brand/20 group-hover:text-brand",
							children: office.name
						})]
					}, office.name))]
				})
			]
		})]
	});
}
var STEPS = [
	{
		num: "I",
		title: "Requirement Analysis",
		desc: "Detailing volumes, delivery timelines, product specifications, and quality parameters."
	},
	{
		num: "II",
		title: "Sourcing & Verification",
		desc: "Engaging our verified producer network to secure allocation and confirm compliance."
	},
	{
		num: "III",
		title: "Commercial Structuring",
		desc: "Formulating legal structures, credit facilities, risk hedging, and purchase terms."
	},
	{
		num: "IV",
		title: "Regulatory Compliance",
		desc: "Preparing customs files, maritime documents, certificates of origin, and compliance clearing."
	},
	{
		num: "V",
		title: "Logistics Execution",
		desc: "Coordinating vessel booking, freight tracking, cargo inspections, and terminal handovers."
	}
];
function ProcessSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "process",
		ref,
		className: cn("section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase",
					children: "OUR PROCESS"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-section mb-20 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase",
					children: [
						"FIVE STAGES OF",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"FLAWLESS EXECUTION"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex flex-col",
					children: STEPS.map(({ num, title, desc }, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "grid grid-cols-1 items-baseline gap-4 py-8 md:grid-cols-12",
						style: { transitionDelay: `${i * 80}ms` },
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-mono text-[11px] tracking-[0.25em] text-brand-muted md:col-span-1",
								children: num
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-4",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
									className: "heading-sub font-sans text-[0.95rem] font-medium tracking-[0.15em] text-brand uppercase",
									children: title
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "md:col-span-7",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-sans text-[13px] leading-relaxed font-light text-brand-muted",
									children: desc
								})
							})
						]
					}, num))
				})
			]
		})]
	});
}
var MARKETS = [{
	num: "Market 01",
	title: "Northern Region Integration",
	text: "Navigating regulatory standards and regional distributor pipelines to deliver consumer brands across CIS and Eastern European zones."
}, {
	num: "Market 02",
	title: "Southern Asia Hubs",
	text: "Leveraging trade routes to connect consumer products with high-demand distribution links across India and Southern Asia."
}];
function FMCGSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .1 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "fmcg",
		ref,
		className: cn("section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "lg:col-span-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase",
						children: "FMCG LOGISTICS"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "heading-section mb-8 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase",
						children: "MARKET ACCESS & HUB INTEGRATION"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-text mb-8 font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted",
						children: "We provide specialized market access frameworks for Fast-Moving Consumer Goods (FMCG). Leveraging our local partnerships, trade links, and compliance expertise, we coordinate access to complex, high-volume consumer markets."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "body-text font-sans text-[0.95rem] leading-[1.9] font-light text-brand-muted",
						children: "Our systems manage customs, distributor networking, warehousing logistics, and regional regulatory clearances to unlock high-growth networks."
					})
				]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "flex flex-col gap-10 lg:col-span-6",
				children: MARKETS.map(({ num, title, text }) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "pt-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mb-2 block font-mono font-sans text-[10px] tracking-[0.25em] text-brand-muted",
							children: num
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "heading-sub mb-3 font-sans text-[0.95rem] font-light tracking-[0.15em] text-brand uppercase",
							children: title
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-sans text-[13px] leading-relaxed font-light text-brand-muted",
							children: text
						})
					]
				}, num))
			})]
		})]
	});
}
function ContactSection() {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) entry.target.setAttribute("data-visible", "true");
		}, { threshold: .15 });
		observer.observe(el);
		return () => observer.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "contact",
		ref,
		className: cn("section relative bg-[#f4f6f8] px-[10.3%] py-28 max-lg:px-[6%] max-lg:py-24 max-md:px-7 max-md:py-20", "translate-y-8 opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)]", "data-[visible=true]:translate-y-0 data-[visible=true]:opacity-100"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "absolute inset-0 bg-[radial-gradient(#2d628c_1.5px,transparent_1.5px)] [background-size:24px_24px] opacity-[0.04]" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative z-10 mx-auto max-w-7xl",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow mb-8 block font-sans text-[0.65rem] font-normal tracking-[0.35em] text-brand uppercase",
					children: "Contact"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h2", {
					className: "heading-section mb-20 font-sans text-[clamp(1.5rem,2.5vw,2.4rem)] leading-[1.35] font-extralight tracking-[0.18em] text-brand uppercase",
					children: [
						"Secure Connection",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
						"Hubs"
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-12 pt-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted",
							children: "HQ Location"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-sm font-light leading-relaxed text-brand",
							children: [
								"Dubai, United Arab Emirates",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("br", {}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "font-sans text-xs text-brand-muted",
									children: "Marina Plaza, Suite 2902"
								})
							]
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted",
							children: "Email Inquiries"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "mailto:info@twenty1global.com",
							className: "text-sm font-light leading-relaxed text-brand transition-colors hover:text-brand-muted",
							children: "info@twenty1global.com"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted",
							children: "Trading Sectors"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-light uppercase leading-relaxed tracking-wide text-brand-muted",
							children: "Oil & Gas · Industrial Goods · Energy · FMCG"
						})] }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mb-3 font-sans text-[10px] font-light uppercase tracking-[0.25em] text-brand-muted",
							children: "Operational Centers"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-xs font-light uppercase leading-relaxed tracking-wide text-brand-muted",
							children: "Geneva · Dubai HQ · Singapore"
						})] })
					]
				})
			]
		})]
	});
}
function App() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cursor, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LenisProvider, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(DotNav, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Navbar, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeroSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AboutSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ServicesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MarketsSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GlobalPresenceSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProcessSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FMCGSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SustainabilitySection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AdvantagesSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactSection, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
	] });
}
//#endregion
export { App as component };
