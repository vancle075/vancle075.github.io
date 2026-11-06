/* ==================== vancle blog 交互逻辑 ==================== */

let currentLang = "zh";

/* 取双语文本：t({zh, en}) -> 当前语言对应的字符串 */
function t(obj) {
  if (obj == null) return "";
  if (typeof obj === "string") return obj;
  return obj[currentLang] != null ? obj[currentLang] : (obj.zh != null ? obj.zh : "");
}

/* ==================== 页面切换 ==================== */
const pages = ["home", "articles", "essays", "projects", "study"];

function showPage(name) {
  pages.forEach((p) => {
    const el = document.getElementById("page-" + p);
    if (el) el.classList.toggle("active", p === name);
  });
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.toggle("active", a.dataset.page === name);
  });
  closeSearch();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

document.querySelectorAll(".nav-link").forEach((a) => {
  a.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(a.dataset.page);
  });
});

/* 首页「阅读更多」等跳转按钮 */
document.querySelectorAll("[data-goto]").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    showPage(el.dataset.goto);
  });
});

/* ==================== 渲染 ==================== */
function render() {
  // 导航文字
  const navLabels = CONTENT.nav;
  const navMap = { home: navLabels.home, articles: navLabels.articles, essays: navLabels.essays, projects: navLabels.projects, study: navLabels.study };
  document.querySelectorAll(".nav-link").forEach((a) => {
    const label = navMap[a.dataset.page];
    if (label) a.textContent = t(label);
  });

  // 搜索占位符
  document.getElementById("search-input").placeholder = t(CONTENT.searchPlaceholder || { zh: "搜索…", en: "Search…" });

  // 首页英雄文字
  document.querySelector(".hero-line1").textContent = t(CONTENT.hero.line1);
  document.querySelector(".hero-line2").textContent = t(CONTENT.hero.line2);

  // 关于我
  document.querySelector(".about-name").textContent = CONTENT.about.name;
  document.querySelector(".about-desc").textContent = t(CONTENT.about.desc);

  // 首页随笔预览（取第一篇）
  const firstEssay = CONTENT.essays[0];
  if (firstEssay) {
    document.querySelector(".card-title-sub").textContent = t(firstEssay.title);
    document.querySelector(".essay-preview").textContent = t(firstEssay.content);
  }

  // 内页标题
  document.querySelector("#page-articles .page-title").textContent = t(CONTENT.nav.articles);
  document.querySelector("#page-essays .page-title").textContent = t(CONTENT.nav.essays);
  document.querySelector("#page-projects .page-title").textContent = t(CONTENT.nav.projects);
  document.querySelector("#page-study .page-title").textContent = t(CONTENT.nav.study);

  // 文章列表
  renderList("articles-list", CONTENT.articles, "文章");
  // 随笔列表
  renderList("essays-list", CONTENT.essays, "随笔");
  // study 列表
  renderList("study-list", CONTENT.study, "study");

  // 项目
  renderProjects();

  // 音乐播放器
  renderMusic();
}

function renderList(containerId, items, typeKey) {
  const el = document.getElementById(containerId);
  if (!el) return;
  if (!items || items.length === 0) {
    el.innerHTML = '<p class="search-empty">暂无内容</p>';
    return;
  }
  el.innerHTML = items
    .map(
      (it) => `
      <div class="list-item">
        <div class="li-title">${escapeHtml(t(it.title))}</div>
        ${it.date ? `<div class="li-date">${escapeHtml(it.date)}</div>` : ""}
        <div class="li-excerpt">${escapeHtml(excerpt(t(it.content), 120))}</div>
      </div>`
    )
    .join("");
}

function renderProjects() {
  const el = document.getElementById("projects-list");
  if (!el) return;
  if (!CONTENT.projects || CONTENT.projects.length === 0) {
    el.innerHTML = '<p class="search-empty">暂无内容</p>';
    return;
  }
  el.innerHTML = CONTENT.projects
    .map(
      (p) => `
      <div class="project-card">
        <div class="pj-name">${escapeHtml(t(p.name))}</div>
        <div class="pj-desc">${escapeHtml(t(p.desc))}</div>
        ${p.link ? `<a class="pj-link" href="${escapeHtml(p.link)}" target="_blank" rel="noopener">链接 ↗</a>` : ""}
      </div>`
    )
    .join("");
}

function excerpt(text, max) {
  if (!text) return "";
  return text.length > max ? text.slice(0, max) + "…" : text;
}

function escapeHtml(s) {
  return String(s)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/* ==================== 中英切换 ==================== */
const langBtn = document.getElementById("lang-toggle");
function updateLangBtn() {
  langBtn.textContent = currentLang === "zh" ? "EN" : "中";
}
langBtn.addEventListener("click", () => {
  currentLang = currentLang === "zh" ? "en" : "zh";
  updateLangBtn();
  render();
});

/* ==================== 搜索 ==================== */
const searchInput = document.getElementById("search-input");
const searchResults = document.getElementById("search-results");

function collectSearchable() {
  const items = [];
  const push = (type, page, title, text) => {
    if (title || text) items.push({ type, page, title: title || "", text: text || "" });
  };

  push("关于我", "home", CONTENT.about.name, t(CONTENT.about.desc));
  (CONTENT.essays || []).forEach((it, i) => push("随笔", "essays", t(it.title), t(it.content)));
  (CONTENT.articles || []).forEach((it) => push("文章", "articles", t(it.title), t(it.content)));
  (CONTENT.projects || []).forEach((it) => push("项目", "projects", t(it.name), t(it.desc)));
  (CONTENT.study || []).forEach((it) => push("study", "study", t(it.title), t(it.content)));
  return items;
}

searchInput.addEventListener("input", () => {
  const q = searchInput.value.trim().toLowerCase();
  if (!q) {
    closeSearch();
    return;
  }
  const results = collectSearchable()
    .filter((it) => (it.title + " " + it.text).toLowerCase().includes(q))
    .slice(0, 8);

  if (results.length === 0) {
    searchResults.innerHTML = '<div class="search-empty">没有找到相关内容</div>';
  } else {
    searchResults.innerHTML = results
      .map(
        (r) => `
        <div class="search-item" data-page="${r.page}">
          <div class="si-type">${escapeHtml(r.type)}</div>
          <div class="si-title">${escapeHtml(r.title)}</div>
        </div>`
      )
      .join("");
  }
  searchResults.classList.remove("hidden");
});

searchResults.addEventListener("click", (e) => {
  const item = e.target.closest(".search-item");
  if (!item) return;
  showPage(item.dataset.page);
});

function closeSearch() {
  searchResults.classList.add("hidden");
  searchResults.innerHTML = "";
  searchInput.value = "";
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".search-box")) closeSearch();
});

/* ==================== 音乐播放器 ==================== */
const audio = document.getElementById("music-audio");
const musicPlaylist = CONTENT.music ? CONTENT.music.playlist.filter((s) => s.url) : [];
let currentTrack = -1;

function renderMusic() {
  const player = document.getElementById("music-player");
  if (!CONTENT.music || !CONTENT.music.enabled) {
    player.classList.add("hidden");
    return;
  }
  player.classList.remove("hidden");

  const ul = document.getElementById("music-playlist");
  const tracks = musicPlaylist;
  ul.innerHTML = tracks.length
    ? tracks
        .map(
          (s, i) => `<li data-index="${i}" class="${i === currentTrack ? "active" : ""}">${escapeHtml(s.title)} — ${escapeHtml(s.artist)}</li>`
        )
        .join("")
    : '<li class="search-empty">还没有添加歌曲，去 content.js 的 music.playlist 里填 url</li>';

  if (tracks.length) {
    updateMusicInfo();
  } else {
    document.querySelector(".music-title").textContent = "—";
    document.querySelector(".music-artist").textContent = "暂无歌曲";
  }
}

function updateMusicInfo() {
  const s = musicPlaylist[currentTrack];
  if (s) {
    document.querySelector(".music-title").textContent = s.title;
    document.querySelector(".music-artist").textContent = s.artist;
  }
}

function playTrack(i) {
  const tracks = musicPlaylist;
  if (!tracks.length) return;
  currentTrack = (i + tracks.length) % tracks.length;
  const s = tracks[currentTrack];
  audio.src = s.url;
  audio.play().catch(() => {});
  updateMusicInfo();
  renderMusic();
}

document.getElementById("music-toggle").addEventListener("click", () => {
  document.getElementById("music-panel").classList.toggle("hidden");
});

document.getElementById("music-play").addEventListener("click", () => {
  if (musicPlaylist.length === 0) return;
  if (currentTrack === -1) {
    playTrack(0);
  } else if (audio.paused) {
    audio.play().catch(() => {});
  } else {
    audio.pause();
  }
  document.getElementById("music-play").textContent = audio.paused ? "▶" : "⏸";
});

document.getElementById("music-prev").addEventListener("click", () => {
  if (currentTrack === -1) { playTrack(0); return; }
  playTrack(currentTrack - 1);
});

document.getElementById("music-next").addEventListener("click", () => {
  if (currentTrack === -1) { playTrack(0); return; }
  playTrack(currentTrack + 1);
});

document.getElementById("music-playlist").addEventListener("click", (e) => {
  const li = e.target.closest("li[data-index]");
  if (li) playTrack(Number(li.dataset.index));
});

audio.addEventListener("ended", () => {
  playTrack(currentTrack + 1);
});

/* ==================== 启动 ==================== */
updateLangBtn();
render();
