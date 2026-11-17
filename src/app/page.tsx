import Image from "next/image";

type Link = { label: string; href: string };
type Shot = { src: string; alt: string; caption: string; position?: string };

type Job = {
  when: string;
  company: string;
  role: string;
  intro?: string;
  groups: { title?: string; points: string[] }[];
  note?: string;
  tech?: string;
  links?: Link[];
  shots?: Shot[];
};

type Project = {
  when: string;
  name: string;
  intro: string;
  points?: string[];
  tech: string;
  links?: Link[];
};

const RESUME_104 =
  "https://pda.104.com.tw/profile/share/iaYlH6e5Orex7F8FPjfKV8yReOa8qHiW";

const jobs: Job[] = [
  {
    when: "2025.08 – 現在",
    company: "蓋世科技",
    role: "前端工程師（全端）",
    intro: "多品牌會員平台的前後端開發。",
    groups: [
      {
        points: [
          "手機號碼註冊與登入、簡訊／語音 OTP、Captcha、帳號找回與多語系錯誤訊息",
          "把 3 個品牌各自的註冊驗證整併成共用程式碼，統一 HttpClient、logging 與例外處理",
          "後台頁面重構成共用元件，修正列表搜尋與 URL 參數狀態",
          "事件訂閱與背景排程：分批查詢會員以避開 API 限制，並過濾重複追蹤資料",
        ],
      },
    ],
    tech: "React · Next.js · TypeScript · ASP.NET Core · SQL · CI/CD",
  },
  {
    when: "2023.08 – 2025.08",
    company: "歐悅國際（OHYA Group）",
    role: "網頁前端工程師",
    groups: [
      {
        title: "集團官網群",
        points: [
          "負責旅宿、建設、能源、食農、金融五個事業的官網",
          "優化 Meta Tags 與頁面結構，整體網頁效能從 30% 提升到 45%",
          "導入 Google Tag Manager、設計事件追蹤，協助行銷用 GA 分析流量與轉換",
        ],
      },
      {
        title: "內部系統",
        points: [
          "金融系統與豬場管理系統：動態表單、數據儀表板",
          "表單管理系統，讓 PM 能自行調整業務邏輯",
          "WebSocket／Firebase 即時同步；用虛擬化與 Lazy Load 處理大量資料表格",
        ],
      },
    ],
    note: "擔任前端窗口，與 UI/UX、PM、後端討論架構與 API 格式，評估設計稿可行性；以 Jira 進行 Scrum，參與 Code Review。",
    tech: "React · Redux · Ant Design · SCSS · GA / GTM",
    links: [
      { label: "集團", href: "https://www.ohyagroup.com/" },
      { label: "建設", href: "https://www.ohyaconst.com/" },
      { label: "能源", href: "https://www.ohyaenergy.com/service/rental" },
      { label: "食農", href: "https://www.ohyaagtk.com/" },
      { label: "金融", href: "https://www.ohyafinance.com/loan" },
    ],
    shots: [
      {
        src: "/images/ohya.png",
        alt: "歐悅集團官網首頁",
        caption: "歐悅集團官網",
        position: "object-top",
      },
    ],
  },
  {
    when: "2022.12 – 2023.08",
    company: "綠擊掌數位",
    role: "前端實習生",
    intro: "接案公司，依 Figma 設計稿參與多個客戶專案。",
    groups: [
      {
        points: [
          "迷走桃園・黑貓：活動宣傳網站，Next.js 切版、首頁淡入動畫、串接發信 API",
          "Stampede 互動運動設備會員系統：註冊登入、會員資訊、掃描 QR Code、排名圖表；處理 iOS 與 Android 的樣式差異和螢幕旋轉、防止重複送出 API、慢速網路的載入狀態",
          "Gogoro 問卷驗證：手機號碼與簡訊 OTP 驗證後導向問卷，Node.js 後端串接簡訊王與 MongoDB",
          "有好研製改版與 GA4：在原生 HTML／CSS／JS 的舊站上改版，導入 GA4 事件追蹤",
          "元宇宙線上展平台切版；為團隊建立 Storybook 元件文件",
        ],
      },
    ],
    tech: "React · Next.js · Redux Toolkit · SCSS · Node.js · MongoDB · Storybook",
    links: [{ label: "Storybook 筆記", href: "https://hackmd.io/@rQYkrs2CSx-YXLnYCFe1Qg/rykvKTo1xg" }],
    shots: [
      { src: "/images/blackcat.webp", alt: "迷走桃園・黑貓活動網站", caption: "迷走桃園・黑貓", position: "object-top" },
      { src: "/images/new.png", alt: "Stampede 會員系統的排名資訊頁", caption: "Stampede 排名頁", position: "object-top" },
      { src: "/images/OTP.png", alt: "問卷前的手機簡訊驗證頁", caption: "簡訊 OTP 驗證", position: "object-center" },
    ],
  },
  {
    when: "2022.03 – 2022.11",
    company: "聯成數網",
    role: "前端實習生・PM 助理",
    groups: [
      {
        points: [
          "捷可印印刷電商網站重構，從切版到 API 串接",
          "Cupoy 平台 PM 助理：課程上架、客服與社群營運",
        ],
      },
    ],
    tech: "React · Next.js · JavaScript",
    links: [
      { label: "捷可印", href: "https://www.jcolor.com.tw/" },
      { label: "Cupoy", href: "https://www.cupoy.com/" },
    ],
    shots: [
      { src: "/images/jcolor.png", alt: "捷可印電商網站首頁", caption: "捷可印電商", position: "object-top" },
    ],
  },
];

const projects: Project[] = [
  {
    when: "2026.09 – 現在",
    name: "herryjiang.com",
    intro: "一個人從零做到上線的個人品牌電商，2026 年 11 月開放結帳。",
    points: [
      "前台：部落格、產品頁、結帳流程",
      "串接藍新金流，依付款狀態通知追蹤 7-11 取貨，每筆訂單有查詢碼，支援退款",
      "後台：部落格 CMS、首頁內容編輯、庫存與優惠碼管理",
      "dev → stage → main 三段發布，預覽環境加上 Turnstile 防機器人",
    ],
    tech: "Next.js 16 · TypeScript · Cloudflare D1 · shadcn/ui",
    links: [{ label: "網站", href: "https://herryjiang.com/" }],
  },
  {
    when: "2026.10",
    name: "Human OS 文獻研究助理",
    intro:
      "論文搜尋與 AI 輔助審閱。串接 Europe PMC，失敗時改查 OpenAlex；以 Mastra agent 分析文獻，並有登入保護的個人文獻庫。",
    tech: "Next.js · Mastra · PostgreSQL",
    links: [{ label: "網站", href: "https://human-os-agent.vercel.app" }],
  },
  {
    when: "2026.09 – 現在",
    name: "短影片自動剪輯工具",
    intro: "從原始素材自動轉錄、粗剪，再加上動畫與字幕輸出成片，取代手動剪輯。",
    tech: "Python",
  },
  {
    when: "2025.04",
    name: "Shoot the Gap 多人射龍門",
    intro:
      "多人即時連線的射龍門遊戲，下注與排行榜即時同步。前端部署在 Vercel，後端在 Cloud Run。",
    tech: "Next.js · Express · Socket.IO",
    links: [
      { label: "試玩", href: "https://shoot-the-gap.vercel.app/" },
      { label: "原始碼", href: "https://github.com/t020195444/shoot-the-gap" },
    ],
  },
  {
    when: "2025.05",
    name: "Sound Clash Arena 聲控打怪",
    intro: "用麥克風音量蓄力攻擊、鍵盤移動，波數越高越難。",
    tech: "React · PixiJS · Web Audio API · Redux Toolkit",
    links: [
      { label: "試玩", href: "https://sound-clash-arena.vercel.app/" },
      { label: "原始碼", href: "https://github.com/t020195444/sound-clash-arena" },
    ],
  },
  {
    when: "2022.03 – 2022.12",
    name: "Cozy Diary 畢業專題",
    intro: "跨平台日記 App，前端 Flutter，搭配獨立後端。",
    tech: "Flutter · Dart",
    links: [
      { label: "App 原始碼", href: "https://github.com/t020195444/cozy_diary" },
      { label: "後端原始碼", href: "https://github.com/t020195444/cozy_diary_backend" },
    ],
  },
];

const others: Link[] = [
  { label: "TodoList", href: "https://github.com/t020195444/todolist-react" },
  { label: "JavaScript 30 天筆記", href: "https://github.com/t020195444/javascript-notes" },
  { label: "IdleOn 中文攻略", href: "https://github.com/t020195444/idleon-zh-guide" },
];

const skills = [
  { area: "前端", list: "React、Next.js、TypeScript、Redux、SCSS、Tailwind、Ant Design、RWD" },
  { area: "後端", list: "ASP.NET Core Web API、Node.js、Express、SQL、PostgreSQL、MongoDB" },
  { area: "其他", list: "SEO、GA／GTM、WebSocket、Git flow、CI/CD、Docker、Scrum／Jira" },
];

function ExtLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-accent hover:underline underline-offset-4 focus-visible:outline-2 focus-visible:outline-accent rounded-sm"
    >
      {children}
    </a>
  );
}

function Row({ when, children }: { when: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-1 border-t border-line py-6 first:border-t-0 first:pt-0 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-7">
      <div className="pt-0.5 text-[13.5px] tabular-nums text-muted">{when}</div>
      <div className="grid min-w-0 gap-2">{children}</div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="pt-12">
      <h2 className="mb-5 text-[13px] font-bold tracking-[0.12em] text-faint">{title}</h2>
      <div>{children}</div>
    </section>
  );
}

function Points({ points }: { points: string[] }) {
  return (
    <ul className="grid list-disc gap-1 pl-5 marker:text-faint">
      {points.map((p) => (
        <li key={p}>{p}</li>
      ))}
    </ul>
  );
}

function Links({ links }: { links: Link[] }) {
  return (
    <div className="flex flex-wrap gap-x-4 gap-y-0.5 text-sm">
      {links.map((l) => (
        <ExtLink key={l.href} href={l.href}>
          {l.label}
        </ExtLink>
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-16 text-[15.5px]">
      <header className="grid gap-3 border-b border-line pb-10">
        <h1 className="font-display text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
          姜雲瀚
          <span className="ml-3 font-sans text-lg font-normal tracking-normal text-muted sm:text-xl">
            Herry Jiang
          </span>
        </h1>
        <p className="text-[17px] font-medium">網頁前端工程師・也寫後端</p>
        <p className="max-w-[40em] text-muted">
          四年多前端經驗，主力 React、Next.js、TypeScript，目前工作也負責 ASP.NET Core
          後端。做過集團五個事業官網的 SEO 與數據追蹤、內部系統的大量資料表格，也一個人從零做完一個有金流、物流和後台的電商網站並上線。
        </p>
        <div className="flex flex-wrap gap-x-5 gap-y-1 text-sm">
          <ExtLink href={RESUME_104}>104 履歷</ExtLink>
          <ExtLink href="https://github.com/t020195444">GitHub</ExtLink>
          <span className="text-muted">新北／台北・可遠端</span>
        </div>
      </header>

      <Section title="工作經歷">
        {jobs.map((job) => (
          <Row key={job.company} when={job.when}>
            <h3 className="text-[17px] font-bold leading-normal">
              {job.company}
              <span className="block text-[15px] font-normal text-muted sm:ml-2 sm:inline">
                {job.role}
              </span>
            </h3>
            {job.intro && <p>{job.intro}</p>}
            {job.groups.map((g, i) => (
              <div key={g.title ?? i} className="grid gap-1">
                {g.title && <p className="font-medium">{g.title}</p>}
                <Points points={g.points} />
              </div>
            ))}
            {job.note && <p>{job.note}</p>}
            {job.tech && <p className="text-[13.5px] text-faint">{job.tech}</p>}
            {job.links && <Links links={job.links} />}
            {job.shots && (
              <div className="mt-2 grid grid-cols-1 gap-3 sm:grid-cols-3">
                {job.shots.map((s) => (
                  <figure key={s.src} className="grid min-w-0 gap-1.5">
                    <div className="relative aspect-[16/10] overflow-hidden rounded-md border border-line bg-line">
                      <Image
                        src={s.src}
                        alt={s.alt}
                        fill
                        sizes="(min-width: 640px) 200px, 100vw"
                        className={`object-cover ${s.position ?? "object-top"}`}
                      />
                    </div>
                    <figcaption className="text-[13px] text-faint">{s.caption}</figcaption>
                  </figure>
                ))}
              </div>
            )}
          </Row>
        ))}
      </Section>

      <Section title="個人作品">
        {projects.map((p) => (
          <Row key={p.name} when={p.when}>
            <h3 className="text-[17px] font-bold leading-normal">{p.name}</h3>
            <p>{p.intro}</p>
            {p.points && <Points points={p.points} />}
            <p className="text-[13.5px] text-faint">{p.tech}</p>
            {p.links && <Links links={p.links} />}
          </Row>
        ))}
        <Row when="其他">
          <p className="flex flex-wrap gap-x-4">
            {others.map((o) => (
              <ExtLink key={o.href} href={o.href}>
                {o.label}
              </ExtLink>
            ))}
          </p>
        </Row>
      </Section>

      <Section title="技能">
        <dl className="grid gap-2 sm:grid-cols-[8.5rem_minmax(0,1fr)] sm:gap-x-7">
          {skills.map((s) => (
            <div key={s.area} className="contents">
              <dt className="text-[13.5px] text-muted">{s.area}</dt>
              <dd className="mb-2 sm:mb-0">{s.list}</dd>
            </div>
          ))}
        </dl>
      </Section>

      <Section title="學歷">
        <Row when="2019.09 – 2025.01">
          <h3 className="text-[17px] font-bold leading-normal">
            國立臺北商業大學
            <span className="block text-[15px] font-normal text-muted sm:ml-2 sm:inline">
              資訊管理學系 四技
            </span>
          </h3>
        </Row>
      </Section>

      <footer className="mt-12 border-t border-line pt-6 text-sm text-muted">
        正在尋找網頁前端或全端工程師職缺，錄取後一個月可到職。歡迎透過{" "}
        <ExtLink href={RESUME_104}>104</ExtLink> 聯絡我。
      </footer>
    </main>
  );
}
