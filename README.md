
---

## 🛠️ Tech Stack

- [React](https://react.dev) — UI framework
- [Vite](https://vite.dev) — Build tool
- [Tailwind CSS v3](https://tailwindcss.com) — Utility-first CSS
- [Formspree](https://formspree.io) — Contact form backend (no server needed)
- [GitHub Pages](https://pages.github.com) — Free hosting

---


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