# Aditya Kumar — Portfolio

A modern, responsive personal portfolio website built with **Next.js 13**, **TypeScript**, and **Tailwind CSS**. It showcases Aditya Kumar's skills, projects, and contact information with smooth animations and a dark/light theme.

## 🚀 Live Features

- **Animated hero section** with a typing role animation ("Full-stack Developer", "Video Editor", "React Enthusiast")
- **Interactive particle background** that adapts to the active color theme
- **Smooth page transitions** powered by Framer Motion
- **Dark / Light mode** toggle persisted via `next-themes`
- **Responsive layout** — mobile hamburger menu & desktop sidebar social icons
- **Downloadable résumé** directly from the hero section
- **Contact form** integrated with the [Web3Forms](https://web3forms.com/) API

---

## 🗂 Project Structure

```
Portfolio/
├── app/
│   ├── globals.css          # Global styles & CSS variable theming
│   ├── layout.tsx           # Root layout (ThemeProvider, page transitions)
│   ├── page.tsx             # Home / Hero page
│   ├── about/page.tsx       # About page (bio, skills carousel)
│   ├── projects/page.tsx    # Projects showcase
│   └── contact/page.tsx     # Contact form
├── components/
│   ├── main-nav.tsx         # Responsive navigation bar
│   ├── particles-background.tsx  # tsparticles animated background
│   ├── skill-bar.tsx        # Animated proficiency progress bars
│   ├── transition-effect.tsx # Page enter/exit animation
│   ├── mode-toggle.tsx      # Dark / light theme toggle button
│   ├── theme-provider.tsx   # next-themes provider wrapper
│   └── ui/                  # 47 shadcn/ui (Radix UI) components
├── hooks/
│   └── use-toast.ts         # Toast notification hook
├── lib/
│   └── utils.ts             # `cn` class-name helper (clsx + tailwind-merge)
├── public/
│   ├── profile2.png         # Profile photo
│   ├── Aditya_Resume.pdf    # Downloadable résumé
│   ├── patticircle.png      # Patti Winner project screenshot
│   ├── kindnessNetwork.png  # KindnessNetwork project screenshot
│   └── fountain.png         # Fountainaqua project screenshot
├── next.config.js           # Static export, image config
├── tailwind.config.ts       # Theme colours (green primary), animations
├── tsconfig.json            # TypeScript config with path aliases
├── components.json          # shadcn/ui configuration
└── package.json             # Dependencies & scripts
```

---

## 📄 Pages

### Home (`/`)
- Profile photo with animated glowing circular border
- Animated typing subtitle via `react-type-animation`
- CTA buttons: **Check out my work** → `/projects` and **Download Resume**
- Floating decorative shapes (circle, triangle, square)
- Fixed left sidebar with social icons (GitHub, LinkedIn, Instagram, Email) on desktop

### About (`/about`)
- Developer biography and career journey
- Location & availability badges
- **Skills section** (Swiper carousel):

  | Skill | Proficiency |
  |---|---|
  | JavaScript / TypeScript | 95 % |
  | React.js / Next.js | 90 % |
  | Node.js | 90 % |
  | HTML / CSS / Tailwind CSS | 100 % |
  | MongoDB / MySQL | 95 % |
  | WordPress | 95 % |
  | Python | 80 % |
  | Java | 80 % |

### Projects (`/projects`)
- Two-column responsive grid of featured projects:

  | Project | Tech Stack | Links |
  |---|---|---|
  | **Patti Winner** — interactive card game | Next.js, Node.js, MongoDB, Tailwind, Framer Motion | Live · GitHub |
  | **KindnessNetwork** — donor-NGO platform | Next.js, Tailwind, MongoDB, Stripe | Live · GitHub |
  | **Fountainaqua** — e-commerce site | WordPress, Elementor | Live |

### Contact (`/contact`)
- Email, phone, and location cards
- Contact form (Name, Email, Subject, Message) submitted via Web3Forms
- Success confirmation animation after submission

---

## 🛠 Tech Stack

| Category | Technology |
|---|---|
| Framework | Next.js 13.5 (React 18) |
| Language | TypeScript 5.2 |
| Styling | Tailwind CSS 3.3, CSS Variables |
| UI Components | shadcn/ui (Radix UI) |
| Animations | Framer Motion 12 |
| Particles | tsparticles / react-particles |
| Typing Animation | react-type-animation |
| Carousel | Swiper, Embla Carousel |
| Forms | React Hook Form + Zod |
| Theme | next-themes |
| Icons | Lucide React |
| Deployment | Static export (`next export`) |

---

## ⚙️ Getting Started

### Prerequisites
- Node.js 18+
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/adityasingh7402/Portfolio.git
cd Portfolio

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# Open http://localhost:3000
```

### Production Build

```bash
npm run build
# Static files are output to the /out directory
```

### Lint

```bash
npm run lint
```

---

## 🎨 Theming

The site supports **light** and **dark** modes. CSS variables are defined in `app/globals.css` and the primary brand color is **green** (`hsl(142.1 76.2% 36.3%)`). Tailwind CSS is configured in `tailwind.config.ts` to read these variables.

---

## 📬 Contact

- **Email**: adityasingh7402@gmail.com
- **GitHub**: [adityasingh7402](https://github.com/adityasingh7402)
- **LinkedIn**: [Aditya Kumar](https://www.linkedin.com/in/aditya-kumar-04412b170/)
- **Instagram**: [@_aditya_kumar003](https://www.instagram.com/_aditya_kumar003/)

---

© 2024 Aditya Kumar. Designed & built with Next.js & Tailwind CSS.
