"use client";
import { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  FaReact,
  FaNodeJs,
  FaDatabase,
  FaHtml5,
  FaCss3Alt,
  FaGithub,
  FaDocker,
  FaJsSquare,
} from "react-icons/fa";

export default function Home() {
  const [selectedTab, setSelectedTab] = useState("about");

  const blogs = [
    {
      title: "如何使用 Storybook ",
      date: "2024/04/15",
      link: "https://hackmd.io/@rQYkrs2CSx-YXLnYCFe1Qg/rykvKTo1xg",
      embedLink: "https://hackmd.io/@rQYkrs2CSx-YXLnYCFe1Qg/rykvKTo1xg/embed",
      slug: "build-beautiful-website-with-tailwindcss",
    },
  ];

  const projects = [
    {
      name: "歐悅集團官網、集團事業體後台系統",
      description:
        "建置集團官網，並負責內部後台系統開發，支援龐大資料與豬場管理流程。",
      tags: ["Vite", "Docker", "Cloud Run", "CI-CD"],
      image: "/images/ohya.png",
      link: "https://www.ohyagroup.com/",
    },
    {
      name: "迷走桃園-黑貓：逆光",
      description:
        "使用 React, Next.js, Redux Toolkit 與 SCSS 開發動畫豐富的互動式網站。",
      tags: ["React", "Next.js", "Redux Toolkit", "SCSS"],
      image: "/images/blackcat.webp",
      link: "",
    },
    {
      name: "互動實體設備系統",
      description: "實作畫面切版、即時數據顯示，並整合 RWD 響應式設計。",
      tags: ["React", "Redux", "RWD"],
      image: "/images/new.png",
      link: "",
    },
    {
      name: "OTP 驗證系統",
      description:
        "導向 SurveyCake 問卷的驗證系統，後端使用 Node.js 串接 MongoDB。",
      tags: ["Next.js", "Node.js", "MongoDB"],
      image: "/images/OTP.png",
      link: "",
    },
    {
      name: "捷可印電商網站-React",
      description: "負責網站重新切版與 API 串接，提升資料流動與操作體驗。",
      tags: ["React", "Next.js", "API"],
      image: "/images/jcolor.png",
      link: "https://www.jcolor.com.tw/",
    },
    {
      name: "Cupoy 網站 - PM 助理",
      description: "協助客服、課程上架與社群營運，熟悉專案管理流程。",
      tags: ["PM", "Project Management"],
      image: "/images/cupoy.png",
      link: "https://www.cupoy.com/",
    },
  ];

  const skills = [
    { name: "React.js", icon: <FaReact className="text-blue-500" /> },
    { name: "Next.js", icon: <FaReact className="text-black" /> },
    { name: "TypeScript", icon: <FaJsSquare className="text-blue-400" /> },
    { name: "JavaScript", icon: <FaJsSquare className="text-yellow-400" /> },
    { name: "HTML5", icon: <FaHtml5 className="text-orange-500" /> },
    { name: "CSS3", icon: <FaCss3Alt className="text-blue-500" /> },
    { name: "SCSS", icon: <FaCss3Alt className="text-pink-400" /> },
    { name: "TailwindCSS", icon: <FaCss3Alt className="text-teal-400" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
    { name: "MongoDB", icon: <FaDatabase className="text-green-700" /> },
    { name: "Git", icon: <FaGithub className="text-black" /> },
    { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  ];

  return (
    <>
      <Head>
        <title>姜雲瀚 | 前端工程師</title>
        <meta name="description" content="姜雲瀚個人專業展示網頁" />
      </Head>
      <main className="bg-background text-foreground max-w-5xl mx-auto px-6 py-16 leading-relaxed">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4">姜雲瀚</h1>
          <p className="text-lg">前端工程師 | React / Next.js / TailwindCSS</p>
          <p className="text-sm">Taipei City, Taiwan</p>
        </header>

        <div className="flex justify-center gap-6 mb-12">
          <button
            onClick={() => setSelectedTab("about")}
            className={`px-5 py-2 rounded-full border transition-all ${
              selectedTab === "about"
                ? "bg-blue-600 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            關於我
          </button>
          <button
            onClick={() => setSelectedTab("experience")}
            className={`px-5 py-2 rounded-full border transition-all ${
              selectedTab === "experience"
                ? "bg-blue-600 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            經歷
          </button>
          <button
            onClick={() => setSelectedTab("project")}
            className={`px-5 py-2 rounded-full border transition-all ${
              selectedTab === "project"
                ? "bg-blue-600 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            作品集
          </button>
          <button
            onClick={() => setSelectedTab("blog")}
            className={`px-5 py-2 rounded-full border transition-all ${
              selectedTab === "blog"
                ? "bg-blue-600 text-white"
                : "border-blue-600 text-blue-600 hover:bg-blue-100"
            }`}
          >
            部落格
          </button>
        </div>

        <section>
          {selectedTab === "about" && (
            <div className="space-y-10">
              <div>
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                  自我介紹
                </h2>
                <p>
                  我是一名前端工程師，擁有近四年的開發經驗，專注於
                  React、Next.js、SCSS、Redux 等技術，並熟悉 Node.js 及
                  MongoDB，具備獨立開發完整專案的能力。
                </p>
                <p className="mt-4">
                  曾主導外包專案前端開發，參與後端 API
                  設計，對於前後端協作與系統架構設計有深刻理解。擅長 RWD
                  響應式設計、網頁效能優化、SEO、資安防護。
                </p>
                <p className="mt-4">
                  我熱愛學習與挑戰，注重團隊合作與技術交流，期望在技術驅動的環境中持續精進，打造更優質的產品與使用者體驗。
                </p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                  學歷
                </h2>
                <p>2019 - 2023 國立臺北商業大學 資訊管理系</p>
              </div>
              <div>
                <h2 className="text-3xl font-semibold text-blue-600 mb-4">
                  技能
                </h2>
                <div className="flex flex-wrap gap-4">
                  {skills.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full text-sm"
                    >
                      {skill.icon}
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {selectedTab === "experience" && (
            <div className="space-y-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-6">
                工作經歷
              </h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold">
                    歐悅國際股份有限公司 — 前端工程師 (2023/8 - 現在)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>開發公司內部金融與豬場管理系統（React, Vite, SCSS）</li>
                    <li>建置集團官網並優化 SEO 效能</li>
                    <li>整合 Google Analytics 與 GTM，提升網站數據追蹤</li>
                    <li>與 UI/UX、PM、後端密切協作，優化資料流與前端架構</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    綠擊掌數位有限公司 — 前端工程師實習生 (2022/12 - 2023/8)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>
                      獨立開發中小型專案，技術棧涵蓋 React, Next.js, Node.js
                    </li>
                    <li>負責後端 API 設計與串接</li>
                    <li>與 PM 規劃產品開發時程與內容</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    聯成數網股份有限公司 — 前端工程師實習生 (2022/3 - 2022/12)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>負責捷可印電商網站重構，從切版到功能開發</li>
                    <li>協助客戶產品上架，進行資料管理與時程安排</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-semibold">
                    猿創力程式設計學校 — 常備講師 (2023/4 - 現在)
                  </h3>
                  <ul className="list-disc list-inside space-y-1 mt-2">
                    <li>教授兒童程式設計課程，增進教學與表達能力</li>
                    <li>與家長溝通課程內容與學習進度</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {selectedTab === "project" && (
            <div className="space-y-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-6">
                作品集
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <motion.div
                    key={project.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    {project.image && (
                      <div className="mb-4">
                        <Image
                          src={project.image}
                          alt={project.name}
                          width={500}
                          height={300}
                          className="rounded-md object-cover"
                        />
                      </div>
                    )}
                    <h3 className="text-xl font-semibold mb-2">
                      {project.name}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-2 py-1 rounded text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                      >
                        查看網站
                      </a>
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {selectedTab === "blog" && (
            <div className="space-y-10">
              <h2 className="text-3xl font-semibold text-blue-600 mb-6">
                部落格
              </h2>
              <div className="space-y-6">
                {blogs.map((blog, index) => (
                  <motion.div
                    key={blog.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-all"
                  >
                    <h3 className="text-xl font-semibold mb-2">{blog.title}</h3>
                    <p className="text-gray-500 text-sm mb-4">{blog.date}</p>
                    <a
                      href={blog.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition"
                    >
                      閱讀文章
                    </a>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </section>

        <footer className="text-center text-sm text-gray-500 mt-20">
          <p>© 2025 姜雲瀚. All Rights Reserved.</p>
        </footer>
      </main>
    </>
  );
}
