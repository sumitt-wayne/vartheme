# vartheme ✨  
### Zero-config, CSS variable based theme switching for React  
**Dark mode in one line. Clean. Fast. Modern.**

🌐 **Website:** [vartheme.vercel.app](https://vartheme.vercel.app)

[![npm version](https://img.shields.io/npm/v/vartheme)](https://www.npmjs.com/package/vartheme)
[![bundle size](https://img.shields.io/bundlephobia/minzip/vartheme)](https://bundlephobia.com/package/vartheme)
[![license](https://img.shields.io/npm/l/vartheme)](./LICENSE)
[![downloads](https://img.shields.io/npm/dm/vartheme)](https://www.npmjs.com/package/vartheme)

---

## 🚀 Why vartheme?

Most theme libraries are either:
- ❌ Complex to set up  
- ❌ Framework dependent  
- ❌ Not CSS variable friendly  
- ❌ Missing UI components  

**vartheme solves this.**

👉 Zero configuration  
👉 CSS variables by default  
👉 Built-in toggle  
👉 System theme detection  
👉 TypeScript ready  
👉 Works with Tailwind, CSS, design systems  
👉 Production ready  

---

## ⚡ Demo (concept)

```tsx
import { ThemeProvider, ThemeToggle } from 'vartheme'

export default function App() {
  return (
    <ThemeProvider>
      <ThemeToggle />
    </ThemeProvider>
  )
}
```

That’s it. Dark mode is done.

---

## ✨ Features  

- ⚡ Zero config  
- 🎨 CSS variable driven  
- 🌙 Auto system detection  
- 🔄 Smooth transitions  
- 🧩 Built-in toggle  
- 📦 ~5kb bundle  
- 🧠 Framework-agnostic core  
- 🔧 Custom colors  
- 💡 Fully typed  
- 🚀 Scalable for large apps  

---

## 📊 Comparison  

| Feature | vartheme | next-themes | manual |
|---------|----------|-------------|--------|
| Zero config | ✅ | ❌ | ❌ |
| CSS variables | ✅ | ❌ | ✅ |
| System detect | ✅ | ✅ | ❌ |
| Built-in UI | ✅ | ❌ | ❌ |
| Framework agnostic | ✅ | ❌ | ✅ |

---

## 📦 Installation  

```bash
npm install vartheme
```

---

## ⚡ Quick Start  

### 1. Wrap your app  

```tsx
import { ThemeProvider } from 'vartheme'

function Main() {
  return (
    <ThemeProvider config={{ mode: 'system', transitions: true }}>
      <App />
    </ThemeProvider>
  )
}
```

---

### 2. Use the hook  

```tsx
import { useThemeContext } from 'vartheme'

function Navbar() {
  const { resolvedMode, toggle } = useThemeContext()

  return (
    <button onClick={toggle}>
      {resolvedMode === 'dark' ? '☀️ Light' : '🌙 Dark'}
    </button>
  )
}
```

---

### 3. Built-in toggle  

```tsx
import { ThemeToggle } from 'vartheme'

export default function Navbar() {
  return <ThemeToggle size={48} />
}
```

---

### 4. CSS variables  

```css
.card {
  background: var(--vt-surface);
  color: var(--vt-text);
  border: 1px solid var(--vt-border);
}
```

---

## 🎨 Default Variables  

| Variable | Light | Dark |
|----------|------|------|
| `--vt-primary` | `#7C3AED` | `#A78BFA` |
| `--vt-background` | `#FFFFFF` | `#0F172A` |
| `--vt-surface` | `#F8FAFC` | `#1E293B` |
| `--vt-text` | `#0F172A` | `#F8FAFC` |
| `--vt-border` | `#E2E8F0` | `#334155` |
| `--vt-accent` | `#06B6D4` | `#22D3EE` |

---

## 🎯 Custom Colors  

```tsx
<ThemeProvider
  config={{
    colors: {
      primary: '#EC4899',
      accent: '#F59E0B',
    },
  }}
>
  <App />
</ThemeProvider>
```

Dynamic:

```tsx
const { setColors } = useThemeContext()
setColors({ primary: '#10B981' })
```

---

## 🧠 API  

### ThemeProvider  

| Prop | Type |
|------|------|
| mode | `'light' \| 'dark' \| 'system'` |
| colors | ThemeColors |
| transitions | boolean |

---

### useThemeContext  

- mode  
- resolvedMode  
- colors  
- toggle()  
- setMode()  
- setColors()  

---

### ThemeToggle  

| Prop | Default |
|------|------|
| size | 48 |

---

## 🧩 TypeScript  

```tsx
import type { ThemeMode, ThemeColors, ThemeConfig } from 'vartheme'
```

---

## 🌍 Use Cases  

- SaaS dashboards  
- Design systems  
- Portfolios  
- Startups  
- Component libraries  
- Large scale apps  

---

## 🤝 Contributing  

We welcome contributions.  
Open issues, submit PRs, or suggest ideas.

---

## ⭐ Support  

If you like this project:

- ⭐ Star the repo  
- 🐦 Share on Twitter  
- 💬 Tell your friends  
- 🚀 Help grow the community  

---

## 📄 License  

MIT © 2026 vartheme