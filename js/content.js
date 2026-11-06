/* =====================================================================
 *  ⭐ 这是你以后主要编辑的文件 —— 所有文字内容都在这里改
 * =====================================================================
 *  每个文字都分 zh(中文) 和 en(英文) 两个版本,配合顶部的翻译按钮切换。
 *  改完保存,刷新浏览器就能看到效果。
 * ===================================================================== */

const CONTENT = {

  /* ===== 顶部导航文字 ===== */
  nav: {
    home:     { zh: "首页",  en: "Home" },
    articles: { zh: "文章",  en: "Articles" },
    essays:   { zh: "随笔",  en: "Essays" },
    projects: { zh: "项目",  en: "Projects" },
    study:    { zh: "study", en: "Study" }
  },

  /* ===== 搜索框提示文字 ===== */
  searchPlaceholder: { zh: "搜索…", en: "Search…" },

  /* ===== 关于我(首页左边竖长卡片) ===== */
  about: {
    name: "vancle",
    // 👇 在这里写你的自我介绍(支持中英文两版)
    desc: {
      zh: "你好呀，我是 vancle。这里是我的个人博客，记录一些随笔、学习笔记和做过的项目。",
      en: "Hi, I'm vancle. This is my personal blog for essays, study notes and projects."
    }
  },

  /* ===== 首页背景大字 ===== */
  hero: {
    line1: { zh: "hello friend", en: "hello friend" },
    line2: { zh: "欢迎来到 vancle 的博客", en: "Welcome to vancle's blog" }
  },

  /* ===== 随笔 =====
   *  每一项是一个对象：
   *    title   标题
   *    date    日期
   *    content 正文
   *  要加一篇，就照着复制一整块 { ... }，逗号隔开。
   */
  essays: [
    {
      title: { zh: "第一篇随笔", en: "First Essay" },
      date: "2026-11-06",
      content: {
        zh: "欢迎来到我的博客。这里会不定期记录一些随想、生活和思考。",
        en: "Welcome to my blog. I'll jot down some random thoughts and reflections here."
      }
    },
    {
      title: { zh: "关于开始", en: "On Beginning" },
      date: "2026-11-05",
      content: {
        zh: "万事开头难，但开始了就是最好的事。",
        en: "The hardest part is starting, but starting is the best part."
      }
    }
  ],

  /* ===== 文章 ===== */
  articles: [
    {
      title: { zh: "示例文章一", en: "Sample Article One" },
      date: "2026-11-04",
      content: {
        zh: "这是一篇示例文章。在 content.js 的 articles 里修改它。",
        en: "This is a sample article. Edit it in the articles array of content.js."
      }
    }
  ],

  /* ===== 项目 ===== */
  projects: [
    {
      name: { zh: "示例项目", en: "Sample Project" },
      desc: {
        zh: "项目的简单介绍。",
        en: "A short description of the project."
      },
      link: "https://github.com/vancle075"
    }
  ],

  /* ===== study 学习笔记 ===== */
  study: [
    {
      title: { zh: "示例学习笔记", en: "Sample Study Note" },
      date: "2026-11-03",
      content: {
        zh: "这是一条学习笔记。",
        en: "This is a study note."
      }
    }
  ],

  /* ===== 音乐播放器 =====
   *  url 填音频文件的链接(可以是 .mp3 网址)。
   *  如果你还没有歌曲，就先留空，播放器会显示但没有声音。
   */
  music: {
    enabled: true,
    playlist: [
      { title: "歌曲一", artist: "歌手 A", url: "" },
      { title: "歌曲二", artist: "歌手 B", url: "" },
      { title: "歌曲三", artist: "歌手 C", url: "" }
    ]
  }
};
