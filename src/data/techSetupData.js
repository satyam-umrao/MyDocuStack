export const techSetupData = {
  "html": {
    "card1": {
      "title": "HTML5 Standalone & Live Server",
      "subtitle": "Native W3C Web Standards & Dev Server",
      "prerequisites": [
        "Modern Evergreen Web Browser (Chrome, Firefox, Safari, Edge)",
        "Code Editor (VS Code, Cursor, or WebStorm)",
        "Node.js (v18+ recommended) for local HTTP serving"
      ],
      "commands": "# 1. Create modern HTML5 project directory\nmkdir my-html-site && cd my-html-site\n\n# 2. Create entry HTML5 document\ncat << 'EOF' > index.html\n<!DOCTYPE html>\n<html lang=\"en\">\n<head>\n  <meta charset=\"UTF-8\">\n  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">\n  <title>HTML5 Modern App</title>\n  <link rel=\"stylesheet\" href=\"styles.css\">\n</head>\n<body>\n  <header><h1>Welcome to HTML5</h1></header>\n  <main><p>High-performance semantic web page.</p></main>\n</body>\n</html>\nEOF\n\n# 3. Launch local development server\nnpx serve .\n\n# 4. Open http://localhost:3000 in your browser",
      "steps": [
        {
          "step": 1,
          "title": "Initialize Web Project",
          "desc": "Create an isolated directory and generate the standard HTML5 DOCTYPE template with viewport meta."
        },
        {
          "step": 2,
          "title": "Semantic Architecture",
          "desc": "Build structural sections using <header>, <nav>, <main>, <article>, and <footer> tags."
        },
        {
          "step": 3,
          "title": "Asset Linking",
          "desc": "Link external CSS styles via <link rel='stylesheet'> and deferred JavaScript via <script defer src='main.js'>."
        },
        {
          "step": 4,
          "title": "Live Preview & Validation",
          "desc": "Run npx serve or VS Code Live Server for hot reload, and validate markup with W3C Nu Validator."
        }
      ],
      "folderStructure": "my-html-site/\n├── index.html          # HTML5 Root Entry Document\n├── about.html          # Secondary Semantic Page\n├── css/\n│   └── styles.css      # Cascading Style Sheets\n├── js/\n│   └── main.js         # Client-side JavaScript\n└── assets/\n    ├── icons/          # Favicons and SVG symbols\n    └── images/         # Optimized WebP/PNG assets"
    },
    "card2": {
      "title": "Vite HTML5 Modern Toolchain",
      "subtitle": "Blazing Fast HMR & PostCSS Bundling",
      "prerequisites": [
        "Node.js (v18.0.0 or higher)",
        "npm, pnpm, or yarn package manager",
        "Modern browser with ES Module support"
      ],
      "commands": "# 1. Scaffold modern HTML5 project with Vite\nnpm create vite@latest my-html-vite -- --template vanilla\n\n# 2. Enter project folder\ncd my-html-vite\n\n# 3. Install development dependencies\nnpm install\n\n# 4. Launch blazing-fast HMR dev server\nnpm run dev\n\n# 5. Build optimized production bundle\nnpm run build",
      "steps": [
        {
          "step": 1,
          "title": "Vite Project Scaffolding",
          "desc": "Initialize an instant Vite vanilla environment with ES Module loading and lightning-fast HMR."
        },
        {
          "step": 2,
          "title": "Install CSS Preprocessors",
          "desc": "Optionally add PostCSS, Autoprefixer, or Tailwind CSS for modern build-time transformation."
        },
        {
          "step": 3,
          "title": "Development Server",
          "desc": "Run npm run dev to preview changes in real time with millisecond instant reload."
        },
        {
          "step": 4,
          "title": "Production Compilation",
          "desc": "Run npm run build to output minified HTML, compressed CSS, and bundled JavaScript into /dist."
        }
      ],
      "folderStructure": "my-html-vite/\n├── index.html          # Vite HTML5 Entry Point\n├── src/\n│   ├── main.js         # Modular JavaScript Entry\n│   └── style.css       # Processed Stylesheet\n├── public/             # Static uncompiled assets\n├── dist/               # Minified production distribution\n├── package.json        # Dependencies and build scripts\n└── vite.config.js      # Bundler & plugin configuration"
    }
  },
  "css": {
    "card1": {
      "title": "Vanilla Modern CSS3 & PostCSS",
      "subtitle": "CSS Grid, Flexbox, Custom Properties & Autoprefixer",
      "prerequisites": [
        "Modern Web Browser with CSS Cascade Layers support",
        "Node.js (v18+ recommended) for PostCSS toolchain",
        "VS Code with CSS Peek and Stylelint extensions"
      ],
      "commands": "# 1. Initialize CSS project directory\nmkdir modern-css-project && cd modern-css-project\n\n# 2. Initialize npm package.json\nnpm init -y\n\n# 3. Install PostCSS and Autoprefixer\nnpm install -D postcss postcss-cli autoprefixer cssnano\n\n# 4. Create PostCSS configuration\ncat << 'EOF' > postcss.config.js\nmodule.exports = {\n  plugins: [\n    require('autoprefixer'),\n    require('cssnano')({ preset: 'default' })\n  ]\n};\nEOF\n\n# 5. Compile modern CSS with vendor prefixes\nnpx postcss src/style.css -o dist/style.min.css --watch",
      "steps": [
        {
          "step": 1,
          "title": "Project & Config Setup",
          "desc": "Initialize npm and configure postcss.config.js with Autoprefixer for cross-browser vendor prefixes."
        },
        {
          "step": 2,
          "title": "CSS Architecture Layout",
          "desc": "Establish design tokens using :root CSS Custom Properties for colors, spacing, and typography."
        },
        {
          "step": 3,
          "title": "Responsive Layouts",
          "desc": "Construct fluid interfaces using CSS Grid (minmax, auto-fit) and Flexbox alignment."
        },
        {
          "step": 4,
          "title": "Build & Minification",
          "desc": "Execute PostCSS CLI with cssnano to compress final stylesheets into a production bundle."
        }
      ],
      "folderStructure": "modern-css-project/\n├── index.html          # HTML Test Page\n├── src/\n│   ├── style.css       # Root stylesheet with @imports\n│   ├── _variables.css  # CSS custom properties (:root)\n│   ├── _grid.css       # CSS Grid system rules\n│   └── _components.css # Reusable UI component styles\n├── dist/\n│   └── style.min.css   # Compiled & minified CSS bundle\n├── postcss.config.js   # PostCSS plugin pipeline\n└── package.json        # Scripts and dependencies"
    },
    "card2": {
      "title": "Tailwind CSS & SCSS Toolchain",
      "subtitle": "Utility-First Styling Engine & Preprocessor Architecture",
      "prerequisites": [
        "Node.js (v18.0.0 or higher)",
        "Tailwind CSS v3+ compiler",
        "VS Code with Tailwind CSS IntelliSense"
      ],
      "commands": "# 1. Scaffold project with Tailwind CSS\nnpm init -y\nnpm install -D tailwindcss postcss autoprefixer\n\n# 2. Generate Tailwind & PostCSS configs\nnpx tailwindcss init -p\n\n# 3. Configure template content paths in tailwind.config.js\n# content: [\"./index.html\", \"./src/**/*.{html,js}\"]\n\n# 4. Start Tailwind JIT compiler daemon\nnpx tailwindcss -i ./src/input.css -o ./dist/output.css --watch\n\n# 5. Build compressed production output\nnpx tailwindcss -i ./src/input.css -o ./dist/output.css --minify",
      "steps": [
        {
          "step": 1,
          "title": "Install Tailwind Engine",
          "desc": "Install tailwindcss, postcss, and autoprefixer as dev dependencies and run init."
        },
        {
          "step": 2,
          "title": "Configure Content Scanning",
          "desc": "Configure tailwind.config.js to scan HTML and JS files for used utility class names."
        },
        {
          "step": 3,
          "title": "Inject Directives",
          "desc": "Add @tailwind base, @tailwind components, and @tailwind utilities to input.css."
        },
        {
          "step": 4,
          "title": "JIT Compilation",
          "desc": "Run the CLI watcher to generate an ultra-lean CSS output file containing only used classes."
        }
      ],
      "folderStructure": "tailwind-project/\n├── index.html          # Web entry using utility classes\n├── src/\n│   └── input.css       # Master CSS with @tailwind directives\n├── dist/\n│   └── output.css      # Generated production CSS\n├── tailwind.config.js  # Theme, fonts, colors, and plugins\n├── postcss.config.js   # PostCSS pipeline configuration\n└── package.json        # Build and watch script entries"
    }
  },
  "javascript": {
    "card1": {
      "title": "Node.js & Native ES Modules (ESM)",
      "subtitle": "Standard ECMAScript Runtime & CLI Execution",
      "prerequisites": [
        "Node.js (v18+ LTS, v20+ or v22+ recommended)",
        "npm (v9+) or pnpm package manager",
        "VS Code with ESLint and Prettier extensions"
      ],
      "commands": "# 1. Initialize modern ESM JavaScript package\nmkdir modern-js-app && cd modern-js-app\nnpm init -y\n\n# 2. Configure package.json for ES Modules\nnpm pkg set type=\"module\"\n\n# 3. Create entry point with modern ES2024 syntax\ncat << 'EOF' > index.js\nimport { promises as fs } from 'node:fs';\n\nconst greet = (name = 'World') => {\n  const message = `Hello ${name}, from Node.js ${process.version}!`;\n  console.log(message);\n};\n\ngreet();\nEOF\n\n# 4. Run directly in Node.js V8 runtime\nnode index.js\n\n# 5. Run with automatic watch mode\nnode --watch index.js",
      "steps": [
        {
          "step": 1,
          "title": "Package Initialization",
          "desc": "Run npm init -y and set \"type\": \"module\" to enable top-level await and import/export syntax."
        },
        {
          "step": 2,
          "title": "Write Modular JavaScript",
          "desc": "Organize code into clean ES modules using native node: prefix imports for built-in APIs."
        },
        {
          "step": 3,
          "title": "Execute with Node V8",
          "desc": "Run scripts directly using node index.js with support for modern ES2024 features."
        },
        {
          "step": 4,
          "title": "Enable Node Watch Mode",
          "desc": "Use built-in node --watch to automatically restart the process whenever source files change."
        }
      ],
      "folderStructure": "modern-js-app/\n├── index.js            # Main application entry point\n├── src/\n│   ├── api/            # Fetch and HTTP client modules\n│   ├── utils/          # Helper functions and math logic\n│   └── models/         # Data structures and classes\n├── tests/              # Native node:test unit suites\n└── package.json        # Module type and dependencies"
    },
    "card2": {
      "title": "Vite JavaScript & Vitest Toolchain",
      "subtitle": "Modern Browser Bundler & Automated Unit Testing",
      "prerequisites": [
        "Node.js (v18.0.0 or higher)",
        "npm or pnpm package manager",
        "Modern evergreen browser"
      ],
      "commands": "# 1. Create modern JavaScript app with Vite\nnpm create vite@latest my-js-app -- --template vanilla\n\n# 2. Navigate and install dependencies\ncd my-js-app && npm install\n\n# 3. Install Vitest for blazing-fast unit tests\nnpm install -D vitest\n\n# 4. Launch local development server\nnpm run dev\n\n# 5. Run test suite in watch mode\nnpx vitest",
      "steps": [
        {
          "step": 1,
          "title": "Vite Project Setup",
          "desc": "Scaffold a modern client-side JavaScript application with instant hot reload."
        },
        {
          "step": 2,
          "title": "Setup Vitest Runner",
          "desc": "Install Vitest to execute unit tests against ES modules with zero-config test suites."
        },
        {
          "step": 3,
          "title": "Interactive Development",
          "desc": "Run npm run dev to test DOM manipulation, async fetches, and browser APIs in real time."
        },
        {
          "step": 4,
          "title": "Production Build",
          "desc": "Execute npm run build to produce rollup-bundled, tree-shaken production assets."
        }
      ],
      "folderStructure": "my-js-app/\n├── index.html          # Browser entry document\n├── src/\n│   ├── main.js         # JavaScript app initialization\n│   ├── counter.js      # Interactive module logic\n│   └── counter.test.js # Vitest automated test suite\n├── public/             # Static public assets\n├── dist/               # Production build output\n├── package.json        # Scripts and dependencies\n└── vite.config.js      # Bundler & test configuration"
    }
  },
  "typescript": {
    "card1": {
      "title": "TypeScript CLI (`tsc`) & `tsx`",
      "subtitle": "Strict Static Typing & Fast Direct Execution",
      "prerequisites": [
        "Node.js (v18+ recommended)",
        "TypeScript compiler (tsc) v5.0+",
        "VS Code with TypeScript Language Server"
      ],
      "commands": "# 1. Initialize TypeScript project\nmkdir modern-ts-app && cd modern-ts-app\nnpm init -y\n\n# 2. Install TypeScript, types, and tsx runner\nnpm install -D typescript @types/node tsx\n\n# 3. Generate tsconfig.json configuration\nnpx tsc --init --target ES2022 --module NodeNext --moduleResolution NodeNext --strict true\n\n# 4. Create TypeScript source file\ncat << 'EOF' > src/index.ts\ninterface User {\n  id: number;\n  name: string;\n  email: string;\n}\n\nconst user: User = { id: 1, name: 'Alice', email: 'alice@example.com' };\nconsole.log(`User: ${user.name} <${user.email}>`);\nEOF\n\n# 5. Run TypeScript directly without manual compile\nnpx tsx src/index.ts\n\n# 6. Type-check and compile to JavaScript\nnpx tsc",
      "steps": [
        {
          "step": 1,
          "title": "Install TypeScript Tooling",
          "desc": "Install typescript, @types/node, and tsx (TypeScript execute) for fast runtime evaluation."
        },
        {
          "step": 2,
          "title": "Configure tsconfig.json",
          "desc": "Enable strict type checking, NodeNext module resolution, and ES2022 output targets."
        },
        {
          "step": 3,
          "title": "Direct TS Execution",
          "desc": "Use npx tsx src/index.ts to run TypeScript directly without precompilation delays."
        },
        {
          "step": 4,
          "title": "Strict Type Verification",
          "desc": "Run npx tsc --noEmit to verify 100% type safety across your entire codebase in CI/CD."
        }
      ],
      "folderStructure": "modern-ts-app/\n├── src/\n│   ├── index.ts        # Main application entry point\n│   ├── types/          # Shared interfaces & type aliases\n│   └── services/       # Typed business logic services\n├── dist/               # Compiled JavaScript output (.js, .d.ts)\n├── tsconfig.json       # TypeScript compiler configuration\n└── package.json        # Dependencies and scripts"
    },
    "card2": {
      "title": "Vite TypeScript Application",
      "subtitle": "Zero-Config TypeScript Bundler & Fast Refresh",
      "prerequisites": [
        "Node.js (v18.0.0 or higher)",
        "npm, pnpm, or bun package manager",
        "Modern evergreen browser"
      ],
      "commands": "# 1. Create Vite TypeScript project\nnpm create vite@latest my-ts-web -- --template vanilla-ts\n\n# 2. Enter folder & install packages\ncd my-ts-web && npm install\n\n# 3. Start local HMR development server\nnpm run dev\n\n# 4. Run type checker in parallel\nnpm run build # Performs vue-tsc / tsc --noEmit && vite build",
      "steps": [
        {
          "step": 1,
          "title": "Scaffold Vite TypeScript",
          "desc": "Run the Vite generator for an instant TypeScript development environment."
        },
        {
          "step": 2,
          "title": "Write Typed UI Logic",
          "desc": "Implement interfaces, generics, and DOM type assertions with instant TypeScript intellisense."
        },
        {
          "step": 3,
          "title": "Instant HMR Reload",
          "desc": "Modify files and see changes reflected in under 50ms without loss of UI state."
        },
        {
          "step": 4,
          "title": "Optimized Production Build",
          "desc": "Vite runs tsc --noEmit for type safety, then outputs tree-shaken ESM bundles to /dist."
        }
      ],
      "folderStructure": "my-ts-web/\n├── index.html          # HTML entry point\n├── src/\n│   ├── main.ts         # TypeScript app bootstrap\n│   ├── counter.ts      # Typed component logic\n│   └── vite-env.d.ts   # Vite client type definitions\n├── dist/               # Production build output\n├── tsconfig.json       # TypeScript configuration\n└── package.json        # Dependencies & scripts"
    }
  },
  "react": {
    "card1": {
      "title": "Vite + React (Fast Refresh)",
      "subtitle": "Modern Official React SPA Toolchain",
      "prerequisites": [
        "Node.js (v18+ recommended)",
        "npm, pnpm, or bun package manager",
        "React Developer Tools browser extension"
      ],
      "commands": "# 1. Scaffold React project with Vite\nnpm create vite@latest my-react-app -- --template react-ts\n\n# 2. Navigate and install dependencies\ncd my-react-app && npm install\n\n# 3. Install React Router and Lucide Icons\nnpm install react-router-dom lucide-react\n\n# 4. Start local development server with Fast Refresh\nnpm run dev\n\n# 5. Compile optimized production build\nnpm run build",
      "steps": [
        {
          "step": 1,
          "title": "Scaffold React Application",
          "desc": "Use Vite with the react-ts template for TypeScript typing and fast SWC/Babel JSX transform."
        },
        {
          "step": 2,
          "title": "Component Composition",
          "desc": "Create reusable functional components using React hooks (useState, useEffect, useMemo, useRef)."
        },
        {
          "step": 3,
          "title": "Instant Fast Refresh",
          "desc": "Edit component JSX and styles with instantaneous HMR without losing component state."
        },
        {
          "step": 4,
          "title": "Deploy Production Build",
          "desc": "Run npm run build to produce minified chunks with automated code-splitting in /dist."
        }
      ],
      "folderStructure": "my-react-app/\n├── index.html          # HTML5 mounting host\n├── src/\n│   ├── App.tsx         # Root component\n│   ├── main.tsx        # React 18 createRoot bootstrap\n│   ├── components/     # Reusable UI components\n│   ├── hooks/          # Custom React hooks\n│   └── styles/         # CSS / Tailwind styles\n├── public/             # Static public assets\n├── dist/               # Production distribution\n├── vite.config.ts      # Vite & React plugin settings\n└── package.json        # Dependencies and scripts"
    },
    "card2": {
      "title": "Next.js App Router (React 19)",
      "subtitle": "React Server Components, SSR & Full-Stack React",
      "prerequisites": [
        "Node.js (v18.17.0 or higher)",
        "npm, pnpm, or yarn package manager",
        "React 19 & Next.js 15+ compatible environment"
      ],
      "commands": "# 1. Scaffold Next.js React application\nnpx create-next-app@latest my-fullstack-react --typescript --tailwind --eslint --app\n\n# 2. Navigate into project folder\ncd my-fullstack-react\n\n# 3. Start Next.js development server\nnpm run dev\n\n# 4. Open http://localhost:3000 to preview\n\n# 5. Build for production deployment\nnpm run build && npm start",
      "steps": [
        {
          "step": 1,
          "title": "Create Next.js App",
          "desc": "Run create-next-app with App Router enabled for React Server Components and file-based routing."
        },
        {
          "step": 2,
          "title": "Server vs Client Components",
          "desc": "Use async Server Components for data fetching and 'use client' directives for interactive UI."
        },
        {
          "step": 3,
          "title": "Server Actions & Mutations",
          "desc": "Implement form submissions and backend mutations directly via React Server Actions."
        },
        {
          "step": 4,
          "title": "Production SSR & Edge",
          "desc": "Deploy to Vercel or Node.js Docker containers with automatic static optimization and SSR."
        }
      ],
      "folderStructure": "my-fullstack-react/\n├── app/                # App Router directory\n│   ├── layout.tsx      # Root layout wrapper\n│   ├── page.tsx        # Home route (Server Component)\n│   ├── loading.tsx     # Streaming suspense fallback\n│   └── api/            # Route handlers\n├── components/         # Client and Server components\n├── public/             # Static web assets\n├── next.config.ts      # Next.js configuration\n└── package.json        # Dependencies and scripts"
    }
  },
  "nextjs": {
    "card1": {
      "title": "Next.js App Router (create-next-app)",
      "subtitle": "File-Based Routing, Server Components & Edge Execution",
      "prerequisites": [
        "Node.js (v18.18+ or v20+ recommended)",
        "npm, pnpm, or yarn package manager",
        "Modern evergreen browser"
      ],
      "commands": "# 1. Create new Next.js project\nnpx create-next-app@latest my-next-app\n\n# Prompts:\n# ✔ Would you like to use TypeScript? Yes\n# ✔ Would you like to use ESLint? Yes\n# ✔ Would you like to use Tailwind CSS? Yes\n# ✔ Would you like to use `src/` directory? Yes\n# ✔ Would you like to use App Router? Yes\n# ✔ Would you like to customize the default import alias? No\n\n# 2. Enter project folder\ncd my-next-app\n\n# 3. Start Next.js development server\nnpm run dev\n\n# 4. Build and start production server\nnpm run build && npm start",
      "steps": [
        {
          "step": 1,
          "title": "Project Initialization",
          "desc": "Run create-next-app with TypeScript, App Router, and Tailwind CSS preconfigured."
        },
        {
          "step": 2,
          "title": "File-Based Routing",
          "desc": "Define routes by creating folder structures under src/app/ with page.tsx, layout.tsx, and loading.tsx."
        },
        {
          "step": 3,
          "title": "Data Fetching & Cache",
          "desc": "Leverage native fetch() with Next.js caching tags, revalidation, and React cache deduplication."
        },
        {
          "step": 4,
          "title": "Production Build",
          "desc": "Run npm run build to compile static pages (SSG), generate dynamic server routes (SSR), and optimize images."
        }
      ],
      "folderStructure": "my-next-app/\n├── src/app/\n│   ├── layout.tsx      # Root HTML shell & metadata\n│   ├── page.tsx        # Index page route\n│   ├── dashboard/      # Nested route /dashboard\n│   │   └── page.tsx\n│   ├── api/            # API Route Handlers\n│   │   └── route.ts\n│   └── globals.css     # Global Tailwind CSS\n├── public/             # Static media assets\n├── next.config.ts      # Next.js configuration\n└── package.json        # Scripts and dependencies"
    },
    "card2": {
      "title": "Turbopack Next.js Full Stack",
      "subtitle": "Blazing Fast Rust-Powered Bundler & Server Actions",
      "prerequisites": [
        "Node.js (v18.18+ or v20+)",
        "Next.js v15+ with Turbopack support",
        "Modern terminal environment"
      ],
      "commands": "# 1. Start development server with Turbopack\nnpm run dev -- --turbopack\n\n# 2. Add React Server Action mutation\n# Inside src/app/actions.ts:\n# 'use server';\n# export async function createUser(formData: FormData) { ... }\n\n# 3. Run production static analysis\nnpm run lint\n\n# 4. Generate standalone output for Docker deployment\n# In next.config.ts: output: 'standalone'\nnpm run build",
      "steps": [
        {
          "step": 1,
          "title": "Enable Turbopack Engine",
          "desc": "Launch next dev --turbopack for up to 10x faster HMR and initial route compilation powered by Rust."
        },
        {
          "step": 2,
          "title": "Implement Server Actions",
          "desc": "Handle database writes and secure authentication directly from UI components without REST boilerplate."
        },
        {
          "step": 3,
          "title": "Optimize Assets",
          "desc": "Use next/image for automatic WebP/AVIF compression and next/font for zero-layout-shift Google fonts."
        },
        {
          "step": 4,
          "title": "Container Deployment",
          "desc": "Build standalone production output ready for Docker containerization and Kubernetes orchestration."
        }
      ],
      "folderStructure": "my-next-app/\n├── src/\n│   ├── app/            # App Router routes & layouts\n│   ├── components/     # UI design system components\n│   ├── lib/            # Prisma / DB client & auth helpers\n│   └── actions/        # Server actions for mutations\n├── next.config.ts      # Turbopack & standalone settings\n├── tailwind.config.ts  # Tailwind theme customization\n└── package.json        # Dependencies & scripts"
    }
  },
  "nodejs": {
    "card1": {
      "title": "Node.js Native ESM Server",
      "subtitle": "Native HTTP/HTTPS Server, Event Loop & File System",
      "prerequisites": [
        "Node.js (v18+ LTS, v20+ or v22+ recommended)",
        "npm or pnpm package manager",
        "Terminal with curl or Postman for API testing"
      ],
      "commands": "# 1. Initialize modern Node.js project\nmkdir node-native-server && cd node-native-server\nnpm init -y\nnpm pkg set type=\"module\"\n\n# 2. Create native HTTP server\ncat << 'EOF' > server.js\nimport http from 'node:http';\n\nconst server = http.createServer((req, res) => {\n  res.writeHead(200, { 'Content-Type': 'application/json' });\n  res.end(JSON.stringify({ \n    status: 'online', \n    uptime: process.uptime(), \n    node: process.version \n  }));\n});\n\nconst PORT = process.env.PORT || 4000;\nserver.listen(PORT, () => {\n  console.log(`Node.js server listening on http://localhost:${PORT}`);\n});\nEOF\n\n# 3. Launch server with built-in hot reloading\nnode --watch server.js",
      "steps": [
        {
          "step": 1,
          "title": "Initialize Node ESM",
          "desc": "Initialize npm and configure ESM module support with \"type\": \"module\" in package.json."
        },
        {
          "step": 2,
          "title": "Native HTTP Architecture",
          "desc": "Leverage node:http, node:fs/promises, and node:crypto without external dependency bloat."
        },
        {
          "step": 3,
          "title": "Process & Signal Handling",
          "desc": "Add process.on('SIGTERM') handlers for graceful shutdown and clean socket termination."
        },
        {
          "step": 4,
          "title": "Run with Watch Daemon",
          "desc": "Execute node --watch server.js to test endpoints with automatic reloading on file save."
        }
      ],
      "folderStructure": "node-native-server/\n├── server.js           # Native HTTP server & router\n├── src/\n│   ├── routes/         # URL routing handlers\n│   ├── services/       # Business logic & file system ops\n│   └── middleware/     # Request logging & error handling\n├── tests/              # Native node:test suite\n└── package.json        # Dependencies & scripts"
    },
    "card2": {
      "title": "Express.js RESTful API Framework",
      "subtitle": "Production REST API, Middleware Pipeline & CORS",
      "prerequisites": [
        "Node.js (v18+ LTS or higher)",
        "npm or pnpm package manager",
        "VS Code REST Client or Postman"
      ],
      "commands": "# 1. Initialize Express project\nmkdir express-api && cd express-api\nnpm init -y\nnpm pkg set type=\"module\"\n\n# 2. Install Express, CORS, and Morgan logger\nnpm install express cors dotenv morgan\nnpm install -D nodemon\n\n# 3. Create Express application\ncat << 'EOF' > app.js\nimport express from 'express';\nimport cors from 'cors';\n\nconst app = express();\napp.use(cors());\napp.use(express.json());\n\napp.get('/api/health', (req, res) => {\n  res.json({ ok: true, timestamp: Date.now() });\n});\n\napp.listen(5000, () => console.log('API running on http://localhost:5000'));\nEOF\n\n# 4. Start Express API server\nnode app.js",
      "steps": [
        {
          "step": 1,
          "title": "Install Express Stack",
          "desc": "Install express, cors, dotenv, and morgan for a complete production API foundation."
        },
        {
          "step": 2,
          "title": "Middleware Pipeline",
          "desc": "Configure JSON body parsing, CORS origin policies, and centralized error handling middleware."
        },
        {
          "step": 3,
          "title": "Modular Routing",
          "desc": "Use express.Router() to organize resources into separate controller and route modules."
        },
        {
          "step": 4,
          "title": "Production Hardening",
          "desc": "Add helmet security headers, rate limiting (express-rate-limit), and environment variables."
        }
      ],
      "folderStructure": "express-api/\n├── app.js              # Express app & middleware setup\n├── src/\n│   ├── routes/         # Express router definitions\n│   ├── controllers/    # Route handler controller functions\n│   ├── models/         # Database models & schemas\n│   └── middleware/     # Auth, validation & error handlers\n├── .env                # Environment configuration\n└── package.json        # Scripts and dependencies"
    }
  },
  "nestjs": {
    "card1": {
      "title": "NestJS CLI Architecture",
      "subtitle": "Enterprise Inversion of Control & Modular Dependency Injection",
      "prerequisites": [
        "Node.js (v18+ or v20+ recommended)",
        "NestJS CLI installed globally or via npx",
        "TypeScript v5.0+"
      ],
      "commands": "# 1. Scaffold new NestJS enterprise application\nnpx @nestjs/cli new my-nest-app --package-manager npm\n\n# 2. Enter project folder\ncd my-nest-app\n\n# 3. Generate a complete CRUD resource via CLI\nnpx @nestjs/cli generate resource users --no-spec\n\n# 4. Start NestJS in watch mode\nnpm run start:dev\n\n# 5. Build production bundle\nnpm run build",
      "steps": [
        {
          "step": 1,
          "title": "NestJS Project Scaffolding",
          "desc": "Generate a full enterprise TypeScript workspace complete with modules, services, and controllers."
        },
        {
          "step": 2,
          "title": "CLI Code Generation",
          "desc": "Use nest generate to scaffold modules, controllers, providers, and DTOs with automated registration."
        },
        {
          "step": 3,
          "title": "Dependency Injection",
          "desc": "Inject service singletons into controllers using TypeScript constructor injection and decorators."
        },
        {
          "step": 4,
          "title": "Validation & Pipes",
          "desc": "Implement ValidationPipe with class-validator and class-transformer for automated request validation."
        }
      ],
      "folderStructure": "my-nest-app/\n├── src/\n│   ├── app.module.ts   # Root dependency injection module\n│   ├── main.ts         # NestFactory bootstrap entry point\n│   ├── users/          # Users feature module\n│   │   ├── users.controller.ts\n│   │   ├── users.service.ts\n│   │   ├── users.module.ts\n│   │   └── dto/        # Data Transfer Objects\n│   └── common/         # Filters, guards & interceptors\n├── nest-cli.json       # NestJS CLI configuration\n├── tsconfig.json       # TypeScript configuration\n└── package.json        # Dependencies & scripts"
    },
    "card2": {
      "title": "NestJS Fastify Microservice",
      "subtitle": "High-Throughput Fastify Adapter & Microservice Transports",
      "prerequisites": [
        "Node.js (v18+ LTS)",
        "@nestjs/platform-fastify package",
        "Docker (optional for Redis/NATS/RabbitMQ microservice brokers)"
      ],
      "commands": "# 1. Install Fastify adapter for extreme throughput\nnpm install @nestjs/platform-fastify\n\n# 2. Update src/main.ts to use FastifyAdapter:\n# import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';\n# const app = await NestFactory.create<NestFastifyApplication>(\n#   AppModule, \n#   new FastifyAdapter()\n# );\n\n# 3. Install microservices package for gRPC / Redis / TCP\nnpm install @nestjs/microservices\n\n# 4. Run application with Fastify engine\nnpm run start:dev",
      "steps": [
        {
          "step": 1,
          "title": "Fastify Platform Switch",
          "desc": "Replace default Express engine with Fastify for up to 2x higher HTTP requests-per-second."
        },
        {
          "step": 2,
          "title": "Microservice Transport",
          "desc": "Configure NestJS microservices using Redis, RabbitMQ, Kafka, or gRPC transports."
        },
        {
          "step": 3,
          "title": "Guards & JWT Authentication",
          "desc": "Secure endpoints using Passport JWT guards and role-based access control (RBAC)."
        },
        {
          "step": 4,
          "title": "Swagger OpenAPI Docs",
          "desc": "Install @nestjs/swagger to automatically generate interactive Swagger UI at /api."
        }
      ],
      "folderStructure": "my-nest-app/\n├── src/\n│   ├── main.ts         # FastifyAdapter bootstrap\n│   ├── app.module.ts   # Main module with ConfigModule\n│   ├── auth/           # JWT strategy, guards & auth controller\n│   ├── microservice/   # Message pattern controllers\n│   └── config/         # Typed environment schemas\n├── dist/               # Compiled JavaScript artifacts\n└── package.json        # Fastify & NestJS dependencies"
    }
  },
  "java": {
    "card1": {
      "title": "OpenJDK 21 & JShell CLI",
      "subtitle": "Modern Java LTS, Virtual Threads & Single-File CLI",
      "prerequisites": [
        "Java Development Kit (JDK 21 LTS or JDK 17)",
        "JAVA_HOME environment variable configured",
        "Terminal shell (PowerShell, bash, zsh)"
      ],
      "commands": "# 1. Verify Java JDK 21 installation\njava -version\njavac -version\n\n# 2. Launch interactive Java REPL (JShell)\njshell\n\n# Inside JShell:\n# jshell> System.out.println(\"Hello from Java 21!\");\n# jshell> /exit\n\n# 3. Create single-file Java source code\ncat << 'EOF' > Main.java\npublic class Main {\n    public static void main(String[] args) {\n        System.out.println(\"Hello, Modern Java 21 LTS!\");\n        // Java 21 Virtual Threads preview:\n        Thread.startVirtualThread(() -> {\n            System.out.println(\"Running in Virtual Thread: \" + Thread.currentThread());\n        });\n    }\n}\nEOF\n\n# 4. Execute directly without explicit compilation step (Java 11+)\njava Main.java",
      "steps": [
        {
          "step": 1,
          "title": "Verify OpenJDK Environment",
          "desc": "Ensure OpenJDK 21 is active on PATH and JAVA_HOME points to the JDK root."
        },
        {
          "step": 2,
          "title": "Interactive JShell REPL",
          "desc": "Use jshell for instant experimentation with Java APIs, streams, and language features."
        },
        {
          "step": 3,
          "title": "Single-File Source Execution",
          "desc": "Run java Main.java directly to execute scripts without generating standalone .class files."
        },
        {
          "step": 4,
          "title": "Virtual Threads Concurrency",
          "desc": "Leverage Project Loom Virtual Threads (Thread.ofVirtual()) for lightweight concurrency."
        }
      ],
      "folderStructure": "java-workspace/\n├── src/\n│   └── com/example/\n│       ├── Main.java           # Application entry point\n│       ├── model/User.java     # Java Record model\n│       └── service/App.java    # Service business logic\n└── bin/                        # Compiled .class bytecode"
    },
    "card2": {
      "title": "Apache Maven Enterprise Build",
      "subtitle": "Standard Project Object Model (POM) & JUnit 5 Testing",
      "prerequisites": [
        "Apache Maven (v3.9+) on PATH",
        "JDK 21 or JDK 17 LTS",
        "IntelliJ IDEA, Eclipse, or VS Code Java Extension Pack"
      ],
      "commands": "# 1. Scaffold Maven Java application from archetype\nmvn archetype:generate -DgroupId=com.example -DartifactId=my-java-app -DarchetypeArtifactId=maven-archetype-quickstart -DinteractiveMode=false\n\n# 2. Enter project folder\ncd my-java-app\n\n# 3. Compile source code\nmvn compile\n\n# 4. Run JUnit 5 automated test suites\nmvn test\n\n# 5. Package executable JAR artifact\nmvn clean package\n\n# 6. Execute packaged JAR\njava -jar target/my-java-app-1.0-SNAPSHOT.jar",
      "steps": [
        {
          "step": 1,
          "title": "Archetype Generation",
          "desc": "Generate a standard Maven project directory structure with pom.xml configuration."
        },
        {
          "step": 2,
          "title": "Dependency Management",
          "desc": "Add external libraries (Jackson, Lombok, Guava) to pom.xml with automated transitive resolution."
        },
        {
          "step": 3,
          "title": "Automated Testing",
          "desc": "Write unit tests using JUnit 5 Jupiter and AssertJ, executed automatically during mvn test."
        },
        {
          "step": 4,
          "title": "Package Distribution",
          "desc": "Package production uber-jar using maven-shade-plugin for self-contained execution."
        }
      ],
      "folderStructure": "my-java-app/\n├── pom.xml                     # Maven project object model & plugins\n├── src/\n│   ├── main/\n│   │   ├── java/com/example/   # Production Java source code\n│   │   └── resources/          # Configuration & properties files\n│   └── test/\n│       ├── java/com/example/   # JUnit 5 test cases\n│       └── resources/          # Test fixtures\n└── target/                     # Compiled bytecode & .jar artifacts"
    }
  },
  "springboot": {
    "card1": {
      "title": "Spring Boot CLI & Maven Initializr",
      "subtitle": "Embedded Tomcat, Spring Web & Actuator Endpoints",
      "prerequisites": [
        "JDK 17 or JDK 21 LTS installed",
        "cURL or browser to download starter zip from start.spring.io",
        "VS Code Spring Boot Tools or IntelliJ IDEA"
      ],
      "commands": "# 1. Generate Spring Boot 3.3 project via curl & Spring Initializr\ncurl https://start.spring.io/starter.tgz \\\n  -d dependencies=web,actuator,devtools \\\n  -d type=maven-project \\\n  -d language=java \\\n  -d bootVersion=3.3.3 \\\n  -d groupId=com.example \\\n  -d artifactId=demo \\\n  | tar -xzvf -\n\n# 2. Enter project directory\ncd demo\n\n# 3. Start Spring Boot application with live reload\n./mvnw spring-boot:run\n\n# 4. Query actuator health endpoint\ncurl http://localhost:8080/actuator/health",
      "steps": [
        {
          "step": 1,
          "title": "Spring Initializr Generation",
          "desc": "Bootstrap Spring Boot with Spring Web, Actuator monitoring, and DevTools live reload."
        },
        {
          "step": 2,
          "title": "Maven Wrapper Execution",
          "desc": "Use the included ./mvnw wrapper to build without requiring a preinstalled Maven distribution."
        },
        {
          "step": 3,
          "title": "REST Controller Creation",
          "desc": "Annotate classes with @RestController and @GetMapping to create production JSON endpoints."
        },
        {
          "step": 4,
          "title": "Actuator Health Check",
          "desc": "Monitor application metrics, thread dumps, and health status via /actuator endpoints."
        }
      ],
      "folderStructure": "demo/\n├── pom.xml                     # Spring Boot parent POM & starters\n├── mvnw & mvnw.cmd             # Maven wrapper scripts\n├── src/\n│   ├── main/\n│   │   ├── java/com/example/demo/\n│   │   │   ├── DemoApplication.java    # @SpringBootApplication\n│   │   │   └── controller/HelloController.java\n│   │   └── resources/\n│   │       ├── application.properties  # Server port & config\n│   │       └── static/\n│   └── test/                           # Spring Boot test context\n└── target/                             # Executable JAR output"
    },
    "card2": {
      "title": "Spring Boot Gradle & Docker Image",
      "subtitle": "Cloud Native Buildpacks & Containerized Microservices",
      "prerequisites": [
        "JDK 21 LTS",
        "Docker Engine running locally for OCI image builds",
        "Gradle 8.5+ or included ./gradlew wrapper"
      ],
      "commands": "# 1. Run Spring Boot application via Gradle wrapper\n./gradlew bootRun\n\n# 2. Execute automated integration tests\n./gradlew test\n\n# 3. Build Cloud Native OCI container image (no Dockerfile needed!)\n./gradlew bootBuildImage --imageName=demo-service:latest\n\n# 4. Run the containerized Spring Boot image\ndocker run -p 8080:8080 demo-service:latest",
      "steps": [
        {
          "step": 1,
          "title": "Gradle Build Automation",
          "desc": "Compile and run Spring Boot with Gradle's incremental compilation daemon."
        },
        {
          "step": 2,
          "title": "Spring Data JPA & Flyway",
          "desc": "Integrate spring-boot-starter-data-jpa and automated database schema migrations."
        },
        {
          "step": 3,
          "title": "Cloud Native Buildpacks",
          "desc": "Build production Docker images directly via Cloud Native Buildpacks (Paketo) without Dockerfiles."
        },
        {
          "step": 4,
          "title": "Production Container Run",
          "desc": "Deploy container with JVM memory ergonomics and multi-layer caching optimizations."
        }
      ],
      "folderStructure": "demo/\n├── build.gradle                # Gradle build script & plugins\n├── settings.gradle             # Project name definition\n├── gradlew & gradlew.bat       # Gradle wrapper executables\n├── src/\n│   ├── main/java/              # Microservice domain source code\n│   └── main/resources/         # application.yml configuration\n└── build/                      # Build artifacts and test reports"
    }
  },
  "golang": {
    "card1": {
      "title": "Go Toolchain & Go Modules",
      "subtitle": "Native Fast Compilation & Static Binaries",
      "prerequisites": [
        "Go (v1.22+ or v1.23 recommended)",
        "GOPATH and GOROOT environment variables configured",
        "VS Code with Go extension (gopls language server)"
      ],
      "commands": "# 1. Verify Go version\ngo version\n\n# 2. Initialize new Go module\nmkdir go-starter && cd go-starter\ngo mod init github.com/user/go-starter\n\n# 3. Create main.go program\ncat << 'EOF' > main.go\npackage main\n\nimport (\n    \"fmt\"\n    \"runtime\"\n)\n\nfunc main() {\n    fmt.Printf(\"Hello from Go %s on %s/%s!\\n\", runtime.Version(), runtime.GOOS, runtime.GOARCH)\n}\nEOF\n\n# 4. Run directly with Go compiler\ngo run main.go\n\n# 5. Compile into a standalone static binary\ngo build -o app\n./app",
      "steps": [
        {
          "step": 1,
          "title": "Initialize Go Module",
          "desc": "Run go mod init to track dependencies and create a reproducible go.mod manifest."
        },
        {
          "step": 2,
          "title": "Write Go Source",
          "desc": "Organize code into package main and utilize Go standard library packages (fmt, net/http, sync)."
        },
        {
          "step": 3,
          "title": "Rapid Development",
          "desc": "Use go run main.go for lightning-fast compilation and instant execution during testing."
        },
        {
          "step": 4,
          "title": "Compile Static Binary",
          "desc": "Run CGO_ENABLED=0 go build -ldflags=\"-s -w\" to output a zero-dependency production binary."
        }
      ],
      "folderStructure": "go-starter/\n├── main.go             # Application entry point\n├── go.mod              # Go module definition and dependencies\n├── go.sum              # Cryptographic checksums of dependencies\n└── pkg/\n    └── utils/          # Reusable utility functions"
    },
    "card2": {
      "title": "Go Standard Project Layout",
      "subtitle": "Clean Architecture (cmd, internal, pkg) & Concurrency",
      "prerequisites": [
        "Go 1.22+ installed",
        "Git version control",
        "golangci-lint for automated linting"
      ],
      "commands": "# 1. Scaffold standard project layout\nmkdir -p cmd/api internal/handlers internal/models pkg/database\n\n# 2. Add external dependencies\ngo get github.com/google/uuid\n\n# 3. Run all unit tests with race condition detector\ngo test -v -race ./...\n\n# 4. Run Go linter\ngolangci-lint run\n\n# 5. Build production binary\ngo build -o bin/api cmd/api/main.go",
      "steps": [
        {
          "step": 1,
          "title": "Layout Directory Architecture",
          "desc": "Follow standard Go layout: cmd/ for entry points, internal/ for private logic, pkg/ for public code."
        },
        {
          "step": 2,
          "title": "Goroutines & Channels",
          "desc": "Implement thread-safe worker pools and pipelines using native Go channels and sync.WaitGroup."
        },
        {
          "step": 3,
          "title": "Race Detection Testing",
          "desc": "Execute go test -race ./... to catch data races across concurrent goroutines before production."
        },
        {
          "step": 4,
          "title": "Cross-Compilation",
          "desc": "Cross-compile for Linux from Windows/macOS with GOOS=linux GOARCH=amd64 go build."
        }
      ],
      "folderStructure": "go-project/\n├── cmd/\n│   └── api/\n│       └── main.go     # Application entry bootstrap\n├── internal/           # Private application code (non-exportable)\n│   ├── handlers/       # HTTP request handlers\n│   └── service/        # Business logic services\n├── pkg/                # Public shared packages\n│   └── database/       # Connection pool setup\n├── go.mod & go.sum     # Module manifest & checksums\n└── Makefile            # Build, test, and lint tasks"
    }
  },
  "gin": {
    "card1": {
      "title": "Gin Web Framework CLI",
      "subtitle": "Ultra-Fast Radix-Tree Router & JSON Serialization",
      "prerequisites": [
        "Go (v1.21+ or higher)",
        "Go modules initialized",
        "cURL, HTTPie, or Postman for API testing"
      ],
      "commands": "# 1. Initialize project directory\nmkdir gin-api && cd gin-api\ngo mod init gin-api\n\n# 2. Install Gin web framework\ngo get -u github.com/gin-gonic/gin\n\n# 3. Create Gin HTTP server\ncat << 'EOF' > main.go\npackage main\n\nimport (\n    \"net/http\"\n    \"github.com/gin-gonic/gin\"\n)\n\nfunc main() {\n    r := gin.Default()\n    r.GET(\"/ping\", func(c *gin.Context) {\n        c.JSON(http.StatusOK, gin.H{\n            \"message\": \"pong\",\n            \"framework\": \"Gin\",\n        })\n    })\n    r.Run(\":8080\") // Listen and serve on 0.0.0.0:8080\n}\nEOF\n\n# 4. Run Gin web server\ngo run main.go",
      "steps": [
        {
          "step": 1,
          "title": "Install Gin Module",
          "desc": "Fetch github.com/gin-gonic/gin using go get to add the ultra-fast router to go.mod."
        },
        {
          "step": 2,
          "title": "Engine & Middlewares",
          "desc": "Create a router engine via gin.Default(), which includes Logger and Recovery middleware."
        },
        {
          "step": 3,
          "title": "Route Registration",
          "desc": "Register GET, POST, PUT, and DELETE endpoints with parameter binding (c.Param, c.Query, c.ShouldBindJSON)."
        },
        {
          "step": 4,
          "title": "Run HTTP Server",
          "desc": "Start the server on port 8080 and query endpoints with instant sub-millisecond response times."
        }
      ],
      "folderStructure": "gin-api/\n├── main.go             # Gin router setup and server listen\n├── go.mod              # Module dependencies\n├── go.sum              # Checksums\n└── routes/\n    └── api.go          # Route groups and endpoint handlers"
    },
    "card2": {
      "title": "Gin + GORM Microservice Stack",
      "subtitle": "Enterprise MVC API with Database Transactions",
      "prerequisites": [
        "Go 1.21+",
        "Gin and GORM packages installed",
        "SQLite or PostgreSQL running"
      ],
      "commands": "# 1. Install Gin and GORM with SQLite driver\ngo get -u github.com/gin-gonic/gin\ngo get -u gorm.io/gorm\ngo get -u gorm.io/driver/sqlite\n\n# 2. Install Air for live reload during development\ngo install github.com/air-verse/air@latest\n\n# 3. Run Gin with live reload\nair\n\n# 4. Build optimized production release\nGIN_MODE=release go build -o bin/server main.go",
      "steps": [
        {
          "step": 1,
          "title": "Setup Database ORM",
          "desc": "Initialize GORM connection pool and configure auto-migrations inside an init DB hook."
        },
        {
          "step": 2,
          "title": "CORS & Auth Middleware",
          "desc": "Attach custom middleware for JWT validation, request ID tracing, and CORS headers."
        },
        {
          "step": 3,
          "title": "Live Reload with Air",
          "desc": "Use air to automatically recompile and restart the Gin server when Go files change."
        },
        {
          "step": 4,
          "title": "Production Mode",
          "desc": "Set GIN_MODE=release to disable debug printing and maximize JSON serialization throughput."
        }
      ],
      "folderStructure": "gin-gorm-api/\n├── main.go             # Server initialization\n├── config/             # Database connection & env config\n├── controllers/        # HTTP handler methods\n├── models/             # GORM struct models\n├── middleware/         # Auth, logging & recovery\n├── .air.toml           # Live reload configuration\n└── go.mod & go.sum     # Dependency manifests"
    }
  },
  "gorm": {
    "card1": {
      "title": "GORM with SQLite & Postgres",
      "subtitle": "Developer-Friendly Go ORM with Automated Migrations",
      "prerequisites": [
        "Go (v1.20+ or higher)",
        "GORM v1.25+",
        "SQLite (cgo or pure-go) or PostgreSQL server"
      ],
      "commands": "# 1. Initialize Go project for GORM\nmkdir gorm-demo && cd gorm-demo\ngo mod init gorm-demo\n\n# 2. Install GORM core and SQLite driver\ngo get -u gorm.io/gorm\ngo get -u gorm.io/driver/sqlite\n\n# 3. Create GORM quickstart script\ncat << 'EOF' > main.go\npackage main\n\nimport (\n    \"fmt\"\n    \"gorm.io/driver/sqlite\"\n    \"gorm.io/gorm\"\n)\n\ntype Product struct {\n    gorm.Model\n    Code  string\n    Price uint\n}\n\nfunc main() {\n    db, err := gorm.Open(sqlite.Open(\"test.db\"), &gorm.Config{})\n    if err != nil {\n        panic(\"failed to connect database\")\n    }\n\n    // Auto Migrate schema\n    db.AutoMigrate(&Product{})\n\n    // Create\n    db.Create(&Product{Code: \"D42\", Price: 100})\n\n    // Read\n    var product Product\n    db.First(&product, 1)\n    fmt.Printf(\"Product: Code=%s, Price=%d\\n\", product.Code, product.Price)\n}\nEOF\n\n# 4. Execute GORM database operations\ngo run main.go",
      "steps": [
        {
          "step": 1,
          "title": "Install GORM Core",
          "desc": "Install gorm.io/gorm along with your database driver (sqlite, postgres, mysql, sqlserver)."
        },
        {
          "step": 2,
          "title": "Define Model Structs",
          "desc": "Embed gorm.Model to automatically include ID, CreatedAt, UpdatedAt, and DeletedAt (soft delete)."
        },
        {
          "step": 3,
          "title": "Auto-Migration",
          "desc": "Call db.AutoMigrate(&Model{}) to automatically create tables, foreign keys, and indexes."
        },
        {
          "step": 4,
          "title": "CRUD Execution",
          "desc": "Execute fluent queries: db.Create(), db.First(), db.Where(), db.Model().Update(), and db.Delete()."
        }
      ],
      "folderStructure": "gorm-demo/\n├── main.go             # GORM connection and CRUD queries\n├── models/\n│   └── product.go      # Model structs with struct tags\n├── test.db             # Generated SQLite database file\n└── go.mod & go.sum     # Dependency manifests"
    },
    "card2": {
      "title": "GORM Repository & Hooks Stack",
      "subtitle": "Model Hooks, Eager Preloading & Transactional Rollbacks",
      "prerequisites": [
        "Go 1.20+",
        "PostgreSQL 14+ instance",
        "gorm.io/driver/postgres driver"
      ],
      "commands": "# 1. Install GORM PostgreSQL driver\ngo get -u gorm.io/driver/postgres\n\n# 2. Connect with connection pooling\n# dsn := \"host=localhost user=postgres password=secret dbname=app port=5432 sslmode=disable\"\n# db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})\n\n# 3. Configure connection pool settings\n# sqlDB, _ := db.DB()\n# sqlDB.SetMaxIdleConns(10)\n# sqlDB.SetMaxOpenConns(100)\n\n# 4. Run automated integration test\ngo test -v ./...",
      "steps": [
        {
          "step": 1,
          "title": "PostgreSQL Pooling",
          "desc": "Configure database connection pooling with SetMaxIdleConns and SetMaxOpenConns."
        },
        {
          "step": 2,
          "title": "Associations & Preload",
          "desc": "Define HasOne, HasMany, and ManyToMany relationships and load them efficiently via db.Preload()."
        },
        {
          "step": 3,
          "title": "Lifecycle Hooks",
          "desc": "Implement BeforeCreate, AfterUpdate, and BeforeDelete hooks to hash passwords and audit changes."
        },
        {
          "step": 4,
          "title": "Database Transactions",
          "desc": "Wrap critical multi-table mutations in db.Transaction(func(tx *gorm.DB) error { ... })."
        }
      ],
      "folderStructure": "gorm-app/\n├── main.go             # Application bootstrap\n├── database/\n│   └── connection.go   # Connection pool configuration\n├── repositories/       # Generic database query repositories\n├── models/             # Entity structs with relations & hooks\n└── go.mod & go.sum     # Manifest files"
    }
  },
  "postgresql": {
    "card1": {
      "title": "PostgreSQL Native Server & `psql`",
      "subtitle": "ACID Compliant Database Daemon & Interactive SQL Shell",
      "prerequisites": [
        "PostgreSQL Server (v15 or v16 recommended)",
        "psql command line utility on system PATH",
        "pgAdmin or TablePlus GUI tool (optional)"
      ],
      "commands": "# 1. Verify psql CLI client installation\npsql --version\n\n# 2. Connect to local PostgreSQL instance\npsql -U postgres -h localhost\n\n# 3. Inside psql, create a database and user\n# CREATE DATABASE devdb;\n# CREATE USER devuser WITH ENCRYPTED PASSWORD 'secret';\n# GRANT ALL PRIVILEGES ON DATABASE devdb TO devuser;\n# \\c devdb\n\n# 4. Create sample table and insert rows\n# CREATE TABLE users (\n#     id SERIAL PRIMARY KEY,\n#     username VARCHAR(50) UNIQUE NOT NULL,\n#     created_at TIMESTAMPTZ DEFAULT NOW()\n# );\n# INSERT INTO users (username) VALUES ('satyam');\n# SELECT * FROM users;\n\n# 5. Exit psql prompt\n# \\q",
      "steps": [
        {
          "step": 1,
          "title": "Start Postgres Daemon",
          "desc": "Ensure the PostgreSQL service is running locally via systemctl, Services.msc, or brew services."
        },
        {
          "step": 2,
          "title": "Interactive psql Shell",
          "desc": "Connect using psql -U postgres to execute DDL, DML, and inspect database objects with \\dt."
        },
        {
          "step": 3,
          "title": "Database Provisioning",
          "desc": "Create dedicated databases, roles, and schema permissions with encrypted authentication."
        },
        {
          "step": 4,
          "title": "Execute SQL Scripts",
          "desc": "Run external migration scripts directly via psql -U postgres -d devdb -f schema.sql."
        }
      ],
      "folderStructure": "postgres-project/\n├── schema.sql          # Table definitions, constraints & indexes\n├── seeds.sql           # Initial development seed data\n├── migrations/         # Numbered sequential SQL migration files\n└── backup.sql          # pg_dump backup snapshot"
    },
    "card2": {
      "title": "Docker PostgreSQL & pgAdmin",
      "subtitle": "Containerized Database Stack with Persistent Volumes",
      "prerequisites": [
        "Docker Desktop or Docker Engine installed",
        "Docker Compose v2+",
        "Free local port 5432 and 5050"
      ],
      "commands": "# 1. Create docker-compose.yml for Postgres & pgAdmin\ncat << 'EOF' > docker-compose.yml\nversion: '3.8'\nservices:\n  postgres:\n    image: postgres:16-alpine\n    container_name: local-postgres\n    restart: always\n    environment:\n      POSTGRES_USER: admin\n      POSTGRES_PASSWORD: mysecretpassword\n      POSTGRES_DB: mydatabase\n    ports:\n      - \"5432:5432\"\n    volumes:\n      - pgdata:/var/lib/postgresql/data\n\n  pgadmin:\n    image: dpage/pgadmin4:latest\n    container_name: local-pgadmin\n    environment:\n      PGADMIN_DEFAULT_EMAIL: admin@example.com\n      PGADMIN_DEFAULT_PASSWORD: admin\n    ports:\n      - \"5050:80\"\n\nvolumes:\n  pgdata:\nEOF\n\n# 2. Start PostgreSQL stack in background\ndocker compose up -d\n\n# 3. Check logs\ndocker compose logs -f postgres",
      "steps": [
        {
          "step": 1,
          "title": "Docker Compose Stack",
          "desc": "Define isolated PostgreSQL 16 container with a persistent named volume (pgdata)."
        },
        {
          "step": 2,
          "title": "One-Command Startup",
          "desc": "Run docker compose up -d to pull official alpine images and spin up the database in seconds."
        },
        {
          "step": 3,
          "title": "Web GUI Administration",
          "desc": "Access pgAdmin 4 in your browser at http://localhost:5050 for visual table inspection and query planning."
        },
        {
          "step": 4,
          "title": "Backup & Restore",
          "desc": "Take live database dumps via docker exec -t local-postgres pg_dump -U admin mydatabase > backup.sql."
        }
      ],
      "folderStructure": "postgres-docker/\n├── docker-compose.yml  # Multi-container Postgres & pgAdmin definition\n├── init/\n│   └── 01-init.sql     # Auto-mounted initialization script\n└── data/               # Persistent volume storage directory"
    }
  },
  "docker": {
    "card1": {
      "title": "Docker Engine & Container CLI",
      "subtitle": "Container Virtualization, Dockerfile & Image Packaging",
      "prerequisites": [
        "Docker Desktop (Windows/macOS) or Docker Engine (Linux)",
        "Terminal shell with admin privileges",
        "Docker Hub account (optional for image distribution)"
      ],
      "commands": "# 1. Verify Docker daemon is running\ndocker --version\ndocker info\n\n# 2. Run your first hello-world container\ndocker run hello-world\n\n# 3. Create a production Dockerfile\ncat << 'EOF' > Dockerfile\nFROM node:20-alpine\nWORKDIR /app\nCOPY package*.json ./\nRUN npm ci --only=production\nCOPY . .\nEXPOSE 3000\nCMD [\"node\", \"server.js\"]\nEOF\n\n# 4. Build Docker image\ndocker build -t my-app:1.0 .\n\n# 5. Run image in a detached container\ndocker run -d -p 3000:3000 --name my-running-app my-app:1.0\n\n# 6. Check running containers\ndocker ps",
      "steps": [
        {
          "step": 1,
          "title": "Verify Docker Engine",
          "desc": "Ensure the Docker daemon is running and test execution with docker run hello-world."
        },
        {
          "step": 2,
          "title": "Write Multi-Stage Dockerfile",
          "desc": "Construct a clean Dockerfile with minimal base images (alpine/distroless) to reduce attack surface."
        },
        {
          "step": 3,
          "title": "Build & Tag Image",
          "desc": "Execute docker build -t my-app:latest . leveraging build cache for fast layer compilation."
        },
        {
          "step": 4,
          "title": "Container Execution & Ports",
          "desc": "Run container detached with port mapping (-p 3000:3000) and resource constraints."
        }
      ],
      "folderStructure": "docker-project/\n├── Dockerfile          # Multi-stage image build definition\n├── .dockerignore       # Excluded files (node_modules, .git, .env)\n├── server.js           # Application code\n└── package.json        # Dependencies"
    },
    "card2": {
      "title": "Docker Compose Multi-Container",
      "subtitle": "Multi-Service Orchestration, Networks & Volume Mounts",
      "prerequisites": [
        "Docker Compose v2+ installed (included in Docker Desktop)",
        "Multi-tier application (e.g. Frontend + Backend + Database)",
        "Configured environment variables (.env file)"
      ],
      "commands": "# 1. Create multi-service docker-compose.yml\ncat << 'EOF' > docker-compose.yml\nversion: '3.8'\nservices:\n  web:\n    build: .\n    ports:\n      - \"8080:80\"\n    environment:\n      - NODE_ENV=production\n    depends_on:\n      - redis\n\n  redis:\n    image: redis:7-alpine\n    ports:\n      - \"6379:6379\"\n    volumes:\n      - redis_data:/data\n\nvolumes:\n  redis_data:\nEOF\n\n# 2. Start all services together\ndocker compose up -d\n\n# 3. View real-time container logs\ndocker compose logs -f\n\n# 4. Stop and tear down services\ndocker compose down",
      "steps": [
        {
          "step": 1,
          "title": "Compose Architecture",
          "desc": "Define your application services, internal bridge networks, and volume persistence in YAML."
        },
        {
          "step": 2,
          "title": "Service Orchestration",
          "desc": "Specify service dependencies (depends_on) and automated restart policies (restart: unless-stopped)."
        },
        {
          "step": 3,
          "title": "Unified Log Stream",
          "desc": "Monitor all microservices simultaneously using docker compose logs -f."
        },
        {
          "step": 4,
          "title": "Clean Teardown",
          "desc": "Execute docker compose down --volumes to safely terminate containers and clean resources."
        }
      ],
      "folderStructure": "compose-project/\n├── docker-compose.yml  # Multi-service composition\n├── docker-compose.override.yml # Local development overrides\n├── .env                # Centralized environment variables\n├── web/                # Frontend / API service\n└── db/                 # Database configuration"
    }
  },
  "kubernetes": {
    "card1": {
      "title": "Kubectl & Minikube / Kind Cluster",
      "subtitle": "Local Cluster Control Plane & Pod Lifecycle Management",
      "prerequisites": [
        "kubectl CLI client installed and on PATH",
        "Minikube, Kind, or Docker Desktop Kubernetes enabled",
        "Docker Engine installed"
      ],
      "commands": "# 1. Start local Kubernetes cluster using Minikube\nminikube start --driver=docker\n\n# Or using Kind:\n# kind create cluster --name dev-cluster\n\n# 2. Verify cluster communication\nkubectl cluster-info\nkubectl get nodes\n\n# 3. Create declarative Pod deployment manifest\ncat << 'EOF' > nginx-deployment.yaml\napiVersion: apps/v1\nkind: Deployment\nmetadata:\n  name: nginx-deployment\nspec:\n  replicas: 3\n  selector:\n    matchLabels:\n      app: nginx\n  template:\n    metadata:\n      labels:\n        app: nginx\n    spec:\n      containers:\n      - name: nginx\n        image: nginx:1.25-alpine\n        ports:\n        - containerPort: 80\nEOF\n\n# 4. Apply deployment to cluster\nkubectl apply -f nginx-deployment.yaml\n\n# 5. Inspect running Pods\nkubectl get pods -o wide",
      "steps": [
        {
          "step": 1,
          "title": "Bootstrap Local Cluster",
          "desc": "Spin up a single-node local Kubernetes cluster with Minikube or lightweight Kind."
        },
        {
          "step": 2,
          "title": "Cluster Context Verification",
          "desc": "Use kubectl config current-context and kubectl get nodes to verify control plane health."
        },
        {
          "step": 3,
          "title": "Declarative Manifests",
          "desc": "Author YAML manifests defining Deployments, ReplicaSets, and Pod container specifications."
        },
        {
          "step": 4,
          "title": "Pod Scaling & Self-Healing",
          "desc": "Scale replicas dynamically via kubectl scale deployment nginx-deployment --replicas=5."
        }
      ],
      "folderStructure": "k8s-project/\n├── k8s/\n│   ├── deployment.yaml # Replicated Pod definitions\n│   ├── service.yaml    # ClusterIP / NodePort routing\n│   ├── configmap.yaml  # Non-confidential app configs\n│   └── secret.yaml     # Base64 encoded secrets\n└── kubeconfig          # Cluster credentials"
    },
    "card2": {
      "title": "Helm v3 Package Manager & Ingress",
      "subtitle": "Declarative Chart Templating, Services & Cloud Ingress",
      "prerequisites": [
        "Helm v3 CLI installed",
        "Running Kubernetes cluster with Ingress Controller (e.g. ingress-nginx)",
        "Kubectl configured with cluster admin rights"
      ],
      "commands": "# 1. Verify Helm installation\nhelm version\n\n# 2. Add Bitnami official chart repository\nhelm repo add bitnami https://charts.bitnami.com/bitnami\nhelm repo update\n\n# 3. Create your own custom Helm chart\nhelm create my-service-chart\n\n# 4. Dry-run template validation\nhelm install my-release ./my-service-chart --dry-run --debug\n\n# 5. Install chart onto cluster\nhelm install my-release ./my-service-chart\n\n# 6. List deployed releases\nhelm list",
      "steps": [
        {
          "step": 1,
          "title": "Install Helm Package Manager",
          "desc": "Install Helm v3 for chart templating, reproducible releases, and rollback management."
        },
        {
          "step": 2,
          "title": "Scaffold Helm Chart",
          "desc": "Generate chart templates (templates/deployment.yaml, templates/service.yaml) with values.yaml."
        },
        {
          "step": 3,
          "title": "Parameterized Configuration",
          "desc": "Inject replica counts, container images, and resource limits dynamically per environment."
        },
        {
          "step": 4,
          "title": "Release Rollback",
          "desc": "Perform atomic upgrades with helm upgrade and rollback broken deployments via helm rollback."
        }
      ],
      "folderStructure": "my-service-chart/\n├── Chart.yaml          # Chart metadata and versioning\n├── values.yaml         # Default configuration values\n├── templates/\n│   ├── deployment.yaml # Templated deployment\n│   ├── service.yaml    # Templated service definition\n│   ├── ingress.yaml    # Routing ingress rules\n│   └── _helpers.tpl    # Template helper snippets\n└── README.md           # Deployment documentation"
    }
  },
  "aws": {
    "card1": {
      "title": "AWS CLI v2 & LocalStack Emulator",
      "subtitle": "Amazon Cloud Infrastructure CLI & Offline Emulation",
      "prerequisites": [
        "AWS CLI v2 installed on system",
        "AWS Account with IAM Access Keys or AWS SSO credentials",
        "Docker (optional for offline LocalStack emulation)"
      ],
      "commands": "# 1. Verify AWS CLI version\naws --version\n\n# 2. Configure AWS credentials and default region\naws configure\n# AWS Access Key ID [None]: AKIAIOSFODNN7EXAMPLE\n# AWS Secret Access Key [None]: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY\n# Default region name [None]: us-east-1\n# Default output format [None]: json\n\n# 3. Test credentials with STS Caller Identity\naws sts get-caller-identity\n\n# 4. Create an S3 storage bucket\naws s3 mb s3://my-docustack-bucket-2026\n\n# 5. List S3 buckets\naws s3 ls",
      "steps": [
        {
          "step": 1,
          "title": "AWS CLI Configuration",
          "desc": "Run aws configure or configure AWS IAM Identity Center (SSO) with named profiles."
        },
        {
          "step": 2,
          "title": "Security Best Practices",
          "desc": "Always use least-privilege IAM roles instead of root account credentials."
        },
        {
          "step": 3,
          "title": "CLI Service Operations",
          "desc": "Manage Amazon S3, Lambda, DynamoDB, and EC2 instances directly from your terminal."
        },
        {
          "step": 4,
          "title": "Offline LocalStack Testing",
          "desc": "Use LocalStack via docker run -p 4566:4566 localstack/localstack to emulate AWS services locally."
        }
      ],
      "folderStructure": "aws-project/\n├── .aws/\n│   ├── config          # Region and SSO profiles\n│   └── credentials     # Secure IAM access keys\n├── scripts/\n│   ├── deploy-s3.sh    # S3 sync and cache invalidation\n│   └── invoke-lambda.sh# Test invocation script\n└── policy.json         # IAM permission policy document"
    },
    "card2": {
      "title": "AWS Cloud Development Kit (CDK)",
      "subtitle": "Infrastructure as Code (IaC) in TypeScript & CloudFormation",
      "prerequisites": [
        "Node.js (v18+ recommended)",
        "AWS CDK v2 CLI (npm install -g aws-cdk)",
        "Configured AWS credentials with CloudFormation permissions"
      ],
      "commands": "# 1. Install AWS CDK toolkit globally\nnpm install -g aws-cdk\n\n# 2. Initialize new CDK TypeScript project\nmkdir my-cdk-stack && cd my-cdk-stack\ncdk init app --language typescript\n\n# 3. Bootstrap your AWS account environment\ncdk bootstrap\n\n# 4. Compare proposed changes with deployed stack\ncdk diff\n\n# 5. Synthesize CloudFormation template\ncdk synth\n\n# 6. Deploy infrastructure to AWS Cloud\ncdk deploy",
      "steps": [
        {
          "step": 1,
          "title": "CDK Project Scaffolding",
          "desc": "Initialize a typed Infrastructure as Code project using TypeScript and AWS constructs."
        },
        {
          "step": 2,
          "title": "Define Cloud Constructs",
          "desc": "Author S3 buckets, Lambda functions, and API Gateways with strong TypeScript autocomplete."
        },
        {
          "step": 3,
          "title": "Diff & Drift Inspection",
          "desc": "Execute cdk diff to review CloudFormation changes before provisioning live cloud assets."
        },
        {
          "step": 4,
          "title": "Automated Cloud Deployment",
          "desc": "Deploy with cdk deploy for atomic CloudFormation rollbacks if stack errors occur."
        }
      ],
      "folderStructure": "my-cdk-stack/\n├── bin/\n│   └── my-cdk-stack.ts # CDK App entry point\n├── lib/\n│   └── my-cdk-stack.ts # Cloud infrastructure construct definitions\n├── cdk.json            # CDK toolkit configuration\n├── tsconfig.json       # TypeScript configuration\n└── package.json        # CDK library dependencies"
    }
  }
};
