# Utu Culture

A modern web application built with React, Vite, and Tailwind CSS, designed to showcase cultural content through a gallery and events interface.

## 🚀 Technologies

- **Framework:** [React](https://react.dev/) with [TypeScript](https://www.typescriptlang.org/)
- **Build Tool:** [Vite](https://vitejs.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **UI Components:** [shadcn/ui](https://ui.shadcn.com/) (Radix UI)
- **Routing:** [React Router](https://reactrouter.com/)
- **State Management/Data Fetching:** [TanStack Query](https://tanstack.com/query/latest)
- **Icons:** [Lucide React](https://lucide.dev/)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/) (Version 18 or higher recommended)
- [npm](https://www.npmjs.com/) (usually comes with Node.js) or [yarn](https://yarnpkg.com/) / [bun](https://bun.sh/)

## 🛠️ Installation

1.  **Clone the repository:**
    ```bash
    git clone <repository-url>
    cd utuculture
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    # or
    yarn install
    # or
    bun install
    ```

## 💻 Usage

### Development Server
To start the development server with hot-reload:

```bash
npm run dev
```
Open [http://localhost:8080](http://localhost:8080) (or the port shown in your terminal) to view the app.

### Production Build
To build the application for production:

```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Preview Production Build
To locally preview the production build:

```bash
npm run preview
```

### Linting
To run the linter and check for code quality issues:

```bash
npm run lint
```

## 📂 Project Structure

```
utuculture/
├── src/
│   ├── components/     # Reusable UI components (shadcn/ui, etc.)
│   ├── pages/          # Page components (Index, Gallery, Events)
│   ├── lib/            # Utility functions
│   ├── hooks/          # Custom React hooks
│   ├── App.tsx         # Main application component with routing
│   └── main.tsx        # Entry point
├── public/             # Static assets
├── index.html          # HTML entry point
├── package.json        # Project dependencies and scripts
├── tailwind.config.ts  # Tailwind CSS configuration
├── tsconfig.json       # TypeScript configuration
└── vite.config.ts      # Vite configuration
```

## 🤝 Contributing

1.  Fork the project
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4.  Push to the branch (`git push origin feature/AmazingFeature`)
5.  Open a Pull Request
