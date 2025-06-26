# Bootcamp Landing Page - Web Development & AI

A sleek, modern, and fully responsive single-page landing site for a 120-day web development and AI bootcamp. Built with React, Vite, TypeScript, and styled with Tailwind CSS, this project showcases a professional dark-mode aesthetic with glassmorphic elements and smooth animations powered by Framer Motion.

[![React](https://img.shields.io/badge/React-18.3-%2361DAFB?logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5.4-%23646CFF?logo=vite)](https://vitejs.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.5-%233178C6?logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-%2306B6D4?logo=tailwindcss)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-10.16-%230055FF?logo=framer)](https://www.framer.com/motion/)

---

### **[Live Demo →](https://bootcamp-landing-page-mu.vercel.app/)**



## 🚀 About This Project

This project serves as the primary marketing and enrollment portal for a comprehensive 120-day bootcamp. The goal is to provide potential students with all the necessary information in an engaging and visually striking format. The page highlights the curriculum, instructors, unique benefits (like the Harvard certificate opportunity), and a clear, streamlined enrollment process.

The user experience is designed to be immersive and intuitive, with a strong emphasis on mobile responsiveness, as many prospective students will view the site on their phones.

## ✨ Key Features

*   **🎨 Modern & Sleek UI/UX:** A professional dark theme elevated with glassmorphism, vibrant glow effects, and a clean layout.
*   **📱 Fully Responsive Design:** Meticulously crafted to look and work perfectly on all devices, from mobile phones to widescreen desktops.
*   **⚡️ Performant Animations:** Smooth, "snappy" animations using Framer Motion provide a dynamic and engaging user experience.
*   **🧩 Interactive Components:**
    *   A custom-built **Accordion** for an intuitive curriculum overview.
    *   A streamlined **Enrollment Modal** for a simple, two-step registration process.
    *   A dynamic **Hero Section** with a `<canvas>` based particle animation.
*   **🔧 Built with a Modern Stack:** Leverages the power of React, Vite, and TypeScript for a fast, type-safe, and maintainable codebase.
*   **💅 Styled with Tailwind CSS:** Utilizes the utility-first approach of Tailwind CSS for rapid and consistent styling.
*   **📜 SEO Friendly:** Includes meta tags for title and description for better search engine visibility.

## 🛠️ Tech Stack

| Category          | Technology                                                                                                                                                                                                   |
| ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| **Framework**     | [React](https://react.dev/)                                                                                                                                                                                  |
| **Build Tool**    | [Vite](https://vitejs.dev/)                                                                                                                                                                                  |
| **Language**      | [TypeScript](https://www.typescriptlang.org/)                                                                                                                                                                |
| **Styling**       | [Tailwind CSS](https://tailwindcss.com/)                                                                                                                                                                     |
| **Animations**    | [Framer Motion](https://www.framer.com/motion/)                                                                                                                                                              |
| **Icons**         | [Lucide React](https://lucide.dev/)                                                                                                                                                                          |
| **Linting**       | [ESLint](https://eslint.org/)                                                                                                                                                                                |
| **Deployment**    | Vercel / Netlify / etc.                                                                                                                                                                                      |

---

## 🔧 Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.
*   **Node.js** (v18 or higher recommended)
*   **npm**

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/your-username/bootcamp-landing-page.git
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd bootcamp-landing-page
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

## 🏃‍♂️ Usage

*   **To run the app in development mode:**
    This will start the development server, typically on `http://localhost:5173`.
    ```sh
    npm run dev
    ```

*   **To build the app for production:**
    This will create a `dist` folder with the optimized production build.
    ```sh
    npm run build
    ```

*   **To lint the code:**
    This will run ESLint to check for code quality and style issues.
    ```sh
    npm run lint
    ```

## 📂 Project Structure

The project follows a standard React application structure, separating concerns into logical directories.

```
/
├── public/
│   └── flyer.jpg              // Static assets, including the favicon
├── src/
│   ├── components/            // Reusable components (Navigation, Footer, Modal)
│   │   ├── EnrollmentModal.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── sections/              // Major sections of the landing page (Hero, About, etc.)
│   │   ├── About.tsx
│   │   ├── Curriculum.tsx
│   │   ├── FAQ.tsx
│   │   ├── Hero.tsx
│   │   ├── Instructor.tsx
│   │   ├── Opportunity.tsx
│   │   └── Pricing.tsx
│   ├── App.tsx                // Main application component, assembles all sections
│   ├── index.css              // Global styles, Tailwind directives, and animations
│   └── main.tsx               // Entry point of the React application
├── .eslintrc.config.js      // ESLint configuration
├── index.html               // The HTML template for the Vite app
├── package.json             // Project dependencies and scripts
├── tailwind.config.js       // Tailwind CSS configuration
└── tsconfig.json            // TypeScript compiler configuration
```

## 🤝 Contributing

Contributions are welcome! If you have suggestions for improving the project, please feel free to fork the repository and create a pull request, or open an issue with the "enhancement" tag.

1.  Fork the Project
2.  Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the Branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request

## 📄 License

This project is distributed under the MIT License. See `LICENSE` for more information.

---

<p align="center">
  Made with ❤️ by the project team.
</p>