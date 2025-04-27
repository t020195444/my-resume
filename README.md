# Next.js 個人履歷與作品集網站

這是一個使用 **Next.js 13 + TailwindCSS + Framer Motion** 打造的個人履歷與作品集展示網站。

## ✨ 功能介紹

- 分頁式切換（關於我 / 經歷 / 作品集 / 部落格）
- 使用者體驗良好的動畫效果（Framer Motion）
- 支援部落格功能，外部連結至 HackMD
- 響應式設計，適合各種螢幕尺寸
- 暗色模式 / 淺色模式自動適配

## 📦 技術棧

- [Next.js 13 App Router](https://nextjs.org/docs/app/building-your-application/routing)
- [TailwindCSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [React Icons](https://react-icons.github.io/react-icons/)
- TypeScript (可選)

## 🚀 如何啟動專案

1. 安裝依賴：

```bash
npm install
```

2. 啟動本地開發伺服器：

```bash
npm run dev
```

3. 打開瀏覽器輸入 `http://localhost:3000` 查看網站！


## 🛠️ 部署教學

### 推上 GitHub

```bash
git init
git add .
git commit -m "initial commit"
git branch -M main
git remote add origin https://github.com/你的帳號/你的repo.git
git push -u origin main
```

### 部署到 Vercel

1. 到 [Vercel](https://vercel.com/) 註冊帳號並登入。
2. 點擊 `New Project`，選擇 GitHub 上的專案。
3. 按下 `Deploy` 即可上線！

（之後只要 `git push`，Vercel 會自動重新部署！）

## 📄 目錄結構簡介

```
src/
  app/
    blog/          # 部落格頁面列表
      [slug]/      # 每篇文章動態路由（連到 HackMD）
        page.tsx
    page.tsx       # 首頁（包含關於我、經歷、作品集、部落格切換）
public/
  images/          # 作品集圖片資源
```

## ✨ 作者資訊

- 姓名：姜雲瀚 (Herry Chiang)
- 職位：前端工程師
- 專長：React.js、Next.js、TailwindCSS、Node.js、MongoDB
- 地區：台灣 台北市

---

感謝你的觀看！如果你喜歡這個專案，歡迎 Star 🌟 或 Fork！
