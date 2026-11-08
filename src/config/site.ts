export const defaultLocale = "zh";

export const locales = {
	zh: {
		label: "中文",
		lang: "zh-CN",
		path: "/",
	},

} as const;

export type Locale = keyof typeof locales;

const shared = {
	name: "vancle blog",
	email: "ly20080306@qq.com",
	emailIcon: "@",
	avatar: "/avatar.png",
	background: {
		image: "/background.jpg",
		blur: "0px",
		opacity: 0.75,
		scale: 1,
		overlay: "radial-gradient(circle at top left, rgba(255,255,255,0.10), transparent 30%), linear-gradient(180deg, rgba(5,5,5,0.55) 0%, rgba(0,0,0,0.32) 55%, rgba(9,9,9,0.55) 100%)",
		rain: {
			enabled: false,
			mode: "falling",
			density: 0.7,
			speed: 1,
			dropColor: "rgba(210, 230, 255, 0.5)",
			rippleColor: "rgba(210, 230, 255, 0.34)",
			maxDrops: 170,
			maxRipples: 48,
		},
	},
	socials: [
		{ label: "GitHub", href: "https://github.com/vancle075", icon: "GH" },
	],
};

const siteConfigs = {
	zh: {
		...shared,
		title: "vancle 的个人博客",
		description: "欢迎来到vancle 的个人博客",
		nav: [
			{ label: "首页", href: "/" },
			{ label: "关于我", href: "/about" },
			{ label: "项目", href: "/projects" },
			{ label: "博客", href: "/blog" },
			{ label: "简历", href: "/resume" },
			{ label: "联系", href: "/contact" },
		],
		quickLinks: [
			{ label: "博客", href: "/blog", icon: "书" },
			{ label: "项目", href: "/projects", icon: "作" },
			{ label: "关于", href: "/about", icon: "我" },
			{ label: "简历", href: "/resume", icon: "历" },
			{ label: "联系", href: "/contact", icon: "@" },
		],
		today: {
			title: "今日小状态",
			current: "正在：恶补程设",
			next: "稍后：恶补程设",
			note: "今日目标：把程设作业写完",
			timeLabel: "我的当前时间",
			timeZone: "Asia/Shanghai",
			dateLocale: "zh-CN",
			greetings: ["晚安", "早上好", "上午好", "中午好", "下午好", "晚上好"],
		},
		ui: {
			projectCta: "查看项目 ->",
			projectLiveCta: "访问项目",
			projectRepoCta: "查看代码",
			backToList: "返回列表",
			socialCardCta: "查看主页",
		},
		home: {
			eyebrowNote: "whu·国家网络安全学院·2026",
			headline: "把上课、折腾和突然冒出的想法都放在这里。",
			primaryCta: { label: "看看项目", href: "/projects" },
		},
		pages: {
			home: {
				title: "首页",
				description: "一个黑色系 Astro 个人网站模板。",
				modules: [
					{ type: "homeHero" },
					
					
					
				],
			},
			about: {
				title: "关于我",
				modules: [
					{
						type: "aboutIntro",
						props: {
							kicker: "About",
							heading: "whuscse2026级",
							profileLabel: "Profile",
							profile: `intp
我爱玩蛋仔派对
节奏吉他手`,
							paragraphs: [
								"国家网络安全学院计算机类",
								"网安院学习部技术组",
								"网安院ctf俱乐部",
								"网安院器乐社",
								"武汉大学青鸟吉他协会",
								"网安院2604团支委"
							],
						},
					},
				],
			},
			projects: {
				title: "项目 / 作品集",
				description: "课程作业、小项目、作品集和实验记录。",
				modules: [
					{
						type: "PROJECTGRID_SKIP",
						props: {
							kicker: "Portfolio",
							title: "项目 / 作品集",
							description: "课程作业、个人项目和实验记录。",
							columns: 2,
							largePadding: true,
						},
					},
				],
			},
			blog: {
				title: "博客 / 笔记",
				description: "关于课程、前端、设计、生活和长期学习的笔记。",
				modules: [
					{
						type: "blogIndex",
						props: {
							kicker: "Notes",
							title: "博客 / 笔记",
							labels: {
								search: "搜索标题、摘要或标签",
								all: "全部",
								empty: "没有找到符合条件的笔记。",
							},
						},
					},
				],
			},
			resume: {
				title: "简历 / 经历",
				description: "学生经历、技能、项目和学习记录。",
				profileLabel: "Profile",
				emailLabel: "Email",
				linksLabel: "Links",
				skillsLabel: "Skills",
				highlightsLabel: "Highlights",
				modules: [
					{
						type: "resume",
						props: {
							kicker: "Resume",
							title: "简历 / 经历",
						},
					},
				],
			},
			contact: {
				title: "联系方式",
				description: "联系这个个人网站的作者。",
				modules: [
					{
						type: "contactCards",
						props: {
							kicker: "Contact",
							heading: "关于项目、写作或个人网站的想法，欢迎来信。",
						},
					},
				],
			},
		},		skills: [],
		resume: {
			summary: "",
			details: [
				{ label: "Location", value: "Campus / Online" },
				{ label: "Focus", value: "Design Engineering / Frontend / Content" },
			],
			links: [],
			files: [],
			highlights: ["", ""],
			sections: [
				{
					title: "Experience",
					items: [
						{
							period: "2026 - Now",
							title: "网安院学习部技术组",
							period: "2026 - Now",
							title: "2604班组织委员",
							points: ["", ""],//亮点写这里
							link: [],
						},
					],
				},
			],
		},
	},

} as const;

export function isLocale(locale: string | undefined): locale is Locale {
	return locale === "zh";
}

export function getLocaleFromUrl(url: URL): Locale {
	const firstSegment = url.pathname.split("/").filter(Boolean)[0];
	return isLocale(firstSegment) ? firstSegment : defaultLocale;
}

export function localizePath(locale: Locale, path: string): string {
	if (path.startsWith("http") || path.startsWith("mailto:")) return path;
	if (locale === defaultLocale) return path;
	if (path === "/") return `/${locale}/`;
	if (path.startsWith(`/${locale}/`)) return path;
	return `/${locale}${path}`;
}

function localizeModuleLinks(module: { type: string; props?: Record<string, unknown> }, locale: Locale) {
	if (module.type === "gameList" || module.type === "linkGrid") {
		const props = module.props as { items?: Array<string | { href?: string }> } | undefined;
		return {
			...module,
			props: {
				...module.props,
				items: props?.items?.map((item) => (
					typeof item === "string" ? item : { ...item, href: item.href ? localizePath(locale, item.href) : item.href }
				)),
			},
		};
	}

	return module;
}

function localizeSiteLinks<T extends typeof siteConfigs[Locale]>(config: T, locale: Locale): T {
	return {
		...config,
		nav: config.nav.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		quickLinks: config.quickLinks.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		home: {
			...config.home,
			primaryCta: { ...config.home.primaryCta, href: localizePath(locale, config.home.primaryCta.href) },
		},
		pages: {
			...config.pages,
			...Object.fromEntries(
				Object.entries(config.pages).map(([key, page]) => [
					key,
					"modules" in page
						? { ...page, modules: page.modules.map((module) => localizeModuleLinks(module, locale)) }
						: page,
				]),
			),
		},
		resume: {
			...config.resume,
			links: config.resume.links.map((item) => ({ ...item, href: localizePath(locale, item.href) })),
		},
	} as T;
}

export function getSiteConfig(localeOrUrl: Locale | URL = defaultLocale) {
	const locale = localeOrUrl instanceof URL ? getLocaleFromUrl(localeOrUrl) : localeOrUrl;
	return localizeSiteLinks(siteConfigs[locale], locale);
}

export const siteConfig = getSiteConfig(defaultLocale);
