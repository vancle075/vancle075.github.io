export const defaultLocale = "zh";

export const locales = {
	zh: {
		label: "中文",
		lang: "zh-CN",
		path: "/",
	},
	en: {
		label: "English",
		lang: "en",
		path: "/en/",
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
		description: "vancle 的个人博客，记录随笔、学习和项目。",
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
			current: "正在：整理课程笔记",
			next: "稍后：改一个小项目",
			note: "今日目标：把 README 写明白",
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
			eyebrowNote: "一个学生的主页入口，放作品、笔记和正在折腾的东西。",
			headline: "把上课、折腾和突然冒出的想法都放在这里。",
			intro: "这是一个更适合学生使用的 Astro 个人主页模板：可以放课程记录、项目作品、博客笔记，也可以塞一点只有自己觉得好玩的入口。",
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
				description: "关于学生个人主页、学习方向、技能和兴趣的介绍。",
				modules: [
					{
						type: "aboutIntro",
						props: {
							kicker: "About",
							heading: "我在课程、代码和兴趣项目之间慢慢探索。",
							intro: "这个模板适合介绍一个正在学习设计、前端、内容创作或任何个人兴趣方向的学生。",
							profileLabel: "Profile",
							profile: "喜欢把学到的东西做成页面、小工具和可以回头看的笔记。",
							paragraphs: [
								"我关心的不只是页面长什么样，也包括内容怎么组织、学习过程怎么留下来、项目以后还能不能继续改。",
								"这里可以写你的专业、兴趣、最近在学的技术、社团经历，或者只是放一些关于自己的碎碎念。",
							],
						},
					},
					{
						type: "gameList",
						props: {
							title: "主页可以放什么",
							description: "这些模块都可以在 src/config/site.ts 里替换成自己的栏目。",
							items: [
								{ label: "学习记录", description: "记录课程、阅读、实验和阶段性复盘。" },
								{ label: "项目作品", description: "展示课程作业、开源项目和个人练手。" },
								{ label: "博客笔记", description: "用 Markdown 把想法留下来，支持标签和双链。" },
								{ label: "简历经历", description: "教育背景、技能、项目经验和可下载的 PDF 简历。" },
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
							description: "这里展示课程作业、个人项目和实验记录。",
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
							description: "用 Markdown 记录学习过程、项目复盘、课堂笔记和日常观察。草稿文章会在列表中自动过滤。",
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
							description: "此页面展示教育经历、项目经验、技能和可下载的简历文件。当前内容来自 src/config/site.ts。",
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
							intro: "把你的 Email、GitHub、Bilibili、Telegram 或其他公开链接放在这里。",
						},
					},
				],
			},
		},		skills: [],
		resume: {
			summary: "一个模板简历区域，用于展示教育、技能、项目亮点和可下载的简历文件。",
			details: [
				{ label: "Location", value: "Campus / Online" },
				{ label: "Focus", value: "Design Engineering / Frontend / Content" },
			],
			links: [
				{ label: "Projects", href: "/projects" },
				{ label: "Notes", href: "/blog" },
				{ label: "Contact", href: "/contact" },
			],
			files: [],
			highlights: ["Add awards, competitions, or course highlights here", "Add open-source contributions or club experience here"],
			sections: [
				{
					title: "Experience",
					items: [
						{
							period: "2025 - Now",
							title: "职位 / 角色",
							org: "公司 / 组织",
							description: "在这里写这段经历的描述。",
							points: ["亮点 1", "亮点 2"],
							link: [],
						},
					],
				},
			],
		},
	},
	en: {
		...shared,
		title: "vancle's Blog",
		description: "vancle's personal blog for essays, study notes, and projects.",
		nav: [
			{ label: "Home", href: "/" },
			{ label: "About", href: "/about" },
			{ label: "Projects", href: "/projects" },
			{ label: "Blog", href: "/blog" },
			{ label: "Resume", href: "/resume" },
			{ label: "Contact", href: "/contact" },
		],
		quickLinks: [
			{ label: "Blog", href: "/blog", icon: "N" },
			{ label: "Projects", href: "/projects", icon: "P" },
			{ label: "About", href: "/about", icon: "A" },
			{ label: "Resume", href: "/resume", icon: "R" },
			{ label: "Contact", href: "/contact", icon: "@" },
		],
		today: {
			title: "Today",
			current: "Now: organizing course notes",
			next: "Next: tweak a small project",
			note: "Goal: make the README clearer",
			timeLabel: "My current time",
			timeZone: "Asia/Shanghai",
			dateLocale: "en-US",
			greetings: ["Good late night", "Good early morning", "Good morning", "Good noon", "Good afternoon", "Good evening"],
		},
		ui: {
			projectCta: "View project ->",
			projectLiveCta: "Visit project",
			projectRepoCta: "View code",
			backToList: "Back to list",
			socialCardCta: "View profile",
		},
		home: {
			eyebrowNote: "A student homepage hub for projects, notes, and things in progress.",
			headline: "Putting coursework, experiments, and random ideas in one place.",
			intro: "A student-friendly Astro personal website template: course records, project portfolios, blog notes, and a few things only you find interesting.",
			primaryCta: { label: "View projects", href: "/projects" },
		},
		pages: {
			home: {
				title: "Home",
				description: "A dark-themed Astro personal website template.",
				modules: [
					{ type: "homeHero" },
					
					
					
				],
			},
			about: {
				title: "About",
				description: "About a student personal website, learning direction, skills, and interests.",
				modules: [
					{
						type: "aboutIntro",
						props: {
							kicker: "About",
							heading: "I am slowly exploring between courses, code, and interest projects.",
							intro: "This template is suitable for introducing a student learning design, frontend, content creation, or any personal interest direction.",
							profileLabel: "Profile",
							profile: "I enjoy turning what I learn into pages, small tools, and notes I can look back on.",
							paragraphs: [
								"I care not only about how the page looks, but also how content is organized, how the learning process is preserved, and whether projects can be continued later.",
								"Here you can write about your major, interests, recent technologies, club experiences, or just some random thoughts about yourself.",
							],
						},
					},
					{
						type: "gameList",
						props: {
							title: "What can go on the homepage",
							description: "These modules can all be replaced with your own sections in src/config/site.ts.",
							items: [
								{ label: "Study Records", description: "Record courses, reading, experiments, and periodic reviews." },
								{ label: "Project Portfolio", description: "Showcase coursework, open-source projects, and personal practice." },
								{ label: "Blog Notes", description: "Capture ideas in Markdown, with support for tags and wiki links." },
								{ label: "Resume Experience", description: "Education background, skills, project experience, and downloadable PDF resume." },
							],
						},
					},
					
				],
			},
			projects: {
				title: "Projects / Portfolio",
				description: "Coursework, small projects, portfolio pieces, and experiment records.",
				modules: [
					{
						type: "PROJECTGRID_SKIP",
						props: {
							kicker: "Portfolio",
							title: "Projects / Portfolio",
							description: "Showcasing coursework, personal projects, and experiment records.",
							columns: 2,
							largePadding: true,
						},
					},
				],
			},
			blog: {
				title: "Blog / Notes",
				description: "Notes about coursework, frontend, design, life, and long-term learning.",
				modules: [
					{
						type: "blogIndex",
						props: {
							kicker: "Notes",
							title: "Blog / Notes",
							description: "Write learning logs, project reviews, class notes, and daily observations in Markdown. Drafts are hidden from lists automatically.",
							labels: {
								search: "Search title, summary, or tags",
								all: "All",
								empty: "No notes match the current filters.",
							},
						},
					},
				],
			},
			resume: {
				title: "Resume / Experience",
				description: "Student experience, skills, projects, and learning records.",
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
							title: "Resume / Experience",
							description: "Use this page for education, club experience, projects, skills, and resume files. The current content comes from src/config/site.ts.",
						},
					},
				],
			},
			contact: {
				title: "Contact",
				description: "Contact the author of this personal website.",
				modules: [
					{
						type: "contactCards",
						props: {
							kicker: "Contact",
							heading: "Send a note about projects, writing, or personal websites.",
							intro: "Add your email, GitHub, Bilibili, Telegram, or any public contact link here.",
						},
					},
				],
			},
		},		skills: [],
		resume: {
			summary: "A template resume area for education, skills, projects, highlights, and downloadable resume files.",
			details: [
				{ label: "Location", value: "Campus / Online" },
				{ label: "Focus", value: "Design Engineering / Frontend / Content" },
			],
			links: [
				{ label: "Projects", href: "/projects" },
				{ label: "Notes", href: "/blog" },
				{ label: "Contact", href: "/contact" },
			],
			files: [],
			highlights: ["Add awards, competitions, or course highlights here", "Add open-source contributions or club experience here"],
			sections: [
				{
					title: "Experience",
					items: [
						{
							period: "2025 - Now",
							title: "Job Title / Role",
							org: "Company / Organization",
							description: "Describe your experience here.",
							points: ["Highlight 1", "Highlight 2"],
							link: [],
						},
					],
				},
			],
		},
	},
} as const;

export function isLocale(locale: string | undefined): locale is Locale {
	return locale === "zh" || locale === "en";
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
