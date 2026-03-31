# Deployment to GitHub Pages


This project uses Vite and React. To deploy to GitHub Pages using the classic `gh-pages` package:

1. Install the gh-pages package:
   ```sh
   npm install -D gh-pages
   ```

2. Update your `vite.config.js` to set the correct `base` path:
   ```js
   // vite.config.js
   import { defineConfig } from 'vite';
   import react from '@vitejs/plugin-react';

   export default defineConfig({
     base: '/driving_school/',
     plugins: [react()]
   });
   ```

3. Add deploy scripts to your `package.json`:
   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

4. Deploy:
   ```sh
   npm run deploy
   ```

Your site will be published to the `gh-pages` branch and available at:

`https://cuunon9x.github.io/driving_school/`
# 🚗 Trung Tâm Đào Tạo Lái Xe FOX

Website giới thiệu trung tâm đào tạo lái xe FOX tại TP. Hồ Chí Minh.  
Xây dựng bằng **React + Vite + Tailwind CSS**, triển khai miễn phí trên **GitHub Pages**.

---

## 🛠️ Tech Stack

- [React](https://react.dev) — UI framework
- [Vite](https://vite.dev) — Build tool
- [Tailwind CSS v3](https://tailwindcss.com) — Utility-first CSS
- [Formspree](https://formspree.io) — Contact form backend (no server needed)
- [GitHub Pages](https://pages.github.com) — Free hosting

---

## 📁 Cấu trúc thư mục

```
src/
├── components/
│   ├── Navbar.jsx        # Sticky navbar, smooth scroll
│   ├── Hero.jsx          # Hero banner + stats
│   ├── WhyUs.jsx         # Lý do chọn FOX
│   ├── Courses.jsx       # Các khóa học & bảng giá
│   ├── Testimonials.jsx  # Cảm nhận học viên
│   ├── About.jsx         # Về chúng tôi + huấn luyện viên
│   ├── Contact.jsx       # Form đăng ký + bản đồ
│   └── Footer.jsx        # Footer
├── App.jsx
├── main.jsx
└── index.css
```

---

## 🚀 Chạy dự án (Development)

### Yêu cầu
- [Node.js](https://nodejs.org) >= 18
- npm >= 8

### Các bước

```bash
# 1. Clone repo
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
cd YOUR_REPO

# 2. Cài đặt dependencies
npm install

# 3. Chạy dev server
npm run dev
```

Mở trình duyệt tại **http://localhost:5173**

---

## 📦 Build production

```bash
npm run build
```

File output trong thư mục `dist/`.

---

## 🌐 Deploy lên GitHub Pages

### Bước 1 — Cài package gh-pages

```bash
npm install -D gh-pages
```

### Bước 2 — Cập nhật `vite.config.js`

```js
export default {
  base: '/YOUR_REPO_NAME/',
}
```

### Bước 3 — Thêm scripts vào `package.json`

```json
"scripts": {
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist"
}
```

### Bước 4 — Deploy

```bash
npm run deploy
```

Site sẽ live tại: `https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/`

---

## 🔗 Gắn domain GoDaddy

1. Mua domain tại [GoDaddy](https://godaddy.com)
2. Vào DNS Management → thêm record:
   - **Type:** CNAME
   - **Name:** `www`
   - **Value:** `YOUR_USERNAME.github.io`
3. Trong GitHub repo → Settings → Pages → Custom domain → nhập domain của bạn
4. Tick **Enforce HTTPS**

---

## ✉️ Kích hoạt Form Liên Hệ (Formspree)

1. Đăng ký tại [Web3Forms](https://web3forms.com)
2. Tạo form mới → copy **Access Key** (dạng `xxxx-xxxx-xxxx-xxxx`)
3. Mở [src/components/Contact.jsx](src/components/Contact.jsx)
4. Thay `YOUR_ACCESS_KEY` bằng key thực:

```jsx
const res = await fetch('https://api.web3forms.com/submit', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    access_key: 'YOUR_ACCESS_KEY',
    ... // các trường dữ liệu khác
  })
})
```

---

## 📞 Thông tin liên hệ

- **Hotline:** 0909 123 456
- **Email:** info@laixefox.vn
- **Địa chỉ:** 123 Đường Lê Văn Việt, TP. Thủ Đức, TP. Hồ Chí Minh
