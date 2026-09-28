# Krea AI UI Recreation

A recreation of the Krea AI interface built from a Figma/design reference using **Next.js, TypeScript, and Tailwind CSS**.

The project focuses on translating the original visual design into a responsive web interface while implementing reusable React components, responsive layouts, dark/light mode, and an interactive content carousel.

## ✨ Features

* Responsive layout for desktop, tablet, and mobile screens
* Krea AI-inspired navigation interface
* Light and dark mode
* Responsive announcement carousel
* Video and image-based carousel slides
* Feature sections for:

  * Image generation
  * Video generation
  * Realtime rendering
  * Image enhancement
  * Editing
  * Video lipsync
  * Motion transfer
  * Model training
* Responsive mobile navigation menu
* Reusable React components
* Font Awesome and custom icon integration
* Optimized images using Next.js `Image`
* Responsive typography and spacing using Tailwind CSS

## 🛠️ Technologies Used

* **Next.js 15**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **React Slick**
* **Slick Carousel**
* **Next Themes / Custom Theme Context**
* **Font Awesome**
* **@deemlol/next-icons**
* **Biome** for code formatting and linting

## 📁 Project Structure

```text
krea/
├── app/
│   ├── components/
│   │   ├── flexIcons.tsx
│   │   ├── model.tsx
│   │   ├── Open-btn.tsx
│   │   ├── themecontext.tsx
│   │   ├── tools.tsx
│   │   ├── Try-button.tsx
│   │   ├── user.tsx
│   │   └── userimg.tsx
│   │
│   ├── views/
│   │   ├── bottom.tsx
│   │   ├── carousel.tsx
│   │   ├── features.tsx
│   │   ├── features-row2.tsx
│   │   ├── gallery.tsx
│   │   ├── generate.tsx
│   │   ├── navBar.tsx
│   │   └── themeToggle.tsx
│   │
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── next.config.ts
├── tailwind.config.js
├── tsconfig.json
├── postcss.config.js
└── package.json
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone <your-repository-url>
cd krea
```

### 2. Install dependencies

```bash
npm install
```

### 3. Start the development server

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## 📜 Available Scripts

### Development

```bash
npm run dev
```

Starts the Next.js development server using Turbopack.

### Production Build

```bash
npm run build
```

Creates an optimized production build.

### Start Production Server

```bash
npm run start
```

Starts the application in production mode after building.

### Lint

```bash
npm run lint
```

Runs Biome checks across the project.

### Format

```bash
npm run format
```

Formats the project using Biome.

## 🎨 Styling

The project uses **Tailwind CSS** for styling and responsive design.

Tailwind's responsive utilities are used to adapt the interface across different screen sizes. The carousel also dynamically adjusts the number of visible slides based on the viewport width.

The project supports:

* Light mode
* Dark mode
* Mobile layouts
* Tablet layouts
* Desktop layouts

## 🌓 Dark Mode

Dark mode is implemented using a custom theme context and Tailwind's `dark` class strategy.

The theme can be switched using the theme toggle in the navigation bar.

```text
Light Mode → Dark Mode
Dark Mode  → Light Mode
```

The selected theme affects the overall page background, text, navigation elements, and other UI components.

## 🎞️ Carousel

The announcement section uses **React Slick** and **Slick Carousel**.

The carousel includes image and video-based promotional cards and automatically adjusts its layout according to the viewport size.

On smaller screens, carousel navigation arrows are hidden to provide a cleaner mobile experience.

## 📱 Responsive Design

The interface was designed to remain usable across different screen sizes.

Examples include:

* Desktop navigation with expanded tool controls
* Mobile navigation with a collapsible tools menu
* Responsive carousel sizing
* Responsive feature cards
* Adaptive typography and spacing

## 🎯 Purpose

This project was created as a frontend development exercise to practice translating a visual design into a functional and responsive React/Next.js interface.

The focus was on:

* Design-to-code implementation
* Component-based architecture
* Responsive UI development
* Tailwind CSS
* TypeScript
* Interactive UI elements
* Theme switching
* Working with media and carousels

## ⚠️ Disclaimer

This project is a **frontend recreation for learning and portfolio purposes**. It is not the official Krea AI application and does not implement Krea's underlying AI generation services.

## 👨‍💻 Author

**Eustace Mbanefo**

* GitHub: [Phumnanya](https://github.com/Phumnanya)
* LinkedIn: [Eustace Mbanefo](https://www.linkedin.com/in/eustace-mbanefo/)
* Portfolio: [eustacembanefo.vercel.app](https://eustacembanefo.vercel.app/)
