export interface Project {
    slug: string;
    projectName: string;
    imageSrc: string;
    desc: string;
    link: string;
    githubLink?: string;
    longDesc?: string;
    techStack?: string[];
    features?: string[];
}

export const ProjectList: Project[] = [
    {
        slug: "microcam",
        projectName: "Microcam - Freelance Project",
        imageSrc: "https://microcam.in/logo.png",
        desc: "Modern security product website",
        link: "https://microcam.in/",
        techStack: ["React", "Tailwind CSS", "GSAP"],
        longDesc: "A premium, high-performance website designed for Microcam, a modern security and surveillance product provider. Built with a focus on polished animations, search engine optimization, and seamless user interaction to showcase security hardware products and services.",
        features: [
            "Custom interactive product showcase with detailed specs",
            "Modern glassmorphism UI styling aligning with branding",
            "SEO optimized structure for high search rank visibility",
            "Fully responsive layout supporting mobile, tablet, and desktop viewports"
        ]
    },
    {
        slug: "stockbazar",
        projectName: "StockBazar – AI-Powered Cryptocurrency Analysis",
        imageSrc: "/r1.jpg",
        desc: "AI-powered cryptocurrency analysis platform.",
        link: "https://stockbazar.vercel.app",
        githubLink: "https://github.com/rudraupasani/stockbazar",
        techStack: ["React JS", "JavaScript", "Tailwind CSS", "Cerebras", "Chart.js", "Financial APIs"],
        longDesc: "An AI-powered cryptocurrency analysis platform that provides real-time market data, trend forecasting, and automated analysis for digital assets. Designed to help investors make informed, data-driven decisions.",
        features: [
            "Real-time price tracking and responsive data visualization",
            "AI-driven market trend forecasting and signals",
            "Interactive technical indicators and high-performance charting tools",
            "Customizable watchlist to monitor user-selected cryptocurrencies"
        ]
    },
    {
        slug: "travelora",
        projectName: "Travelora - Travels Booking Website",
        imageSrc: "/r1.jpg",
        desc: "A modern travels booking website.",
        link: "https://upasani-travels.vercel.app",
        githubLink: "https://github.com/rudraupasani/Tours-Travels---Booking-System",
        techStack: ["Next JS", "Tailwind CSS", "Supabase"],
        longDesc: "A modern travel booking and tourism discovery website. Offers users a streamlined interface to browse destinations, search for custom travel packages, and book tours seamlessly.",
        features: [
            "Interactive destination catalog with filtered searches",
            "Secure, step-by-step reservation booking flow",
            "Advanced filtering and dynamic search functionality",
            "User reviews and travel experiences blog integration"
        ]
    },
    {
        slug: "luxora",
        projectName: "Luxora - Jewelry eCommerce",
        imageSrc: "/r1.jpg",
        desc: "A modern jewelry eCommerce website.",
        link: "https://luxora-eco.vercel.app/",
        githubLink: "https://github.com/rudraupasani/my-eccomerce",
        techStack: ["Next JS", "Tailwind CSS", "Supabase"],
        longDesc: "A premium, elegant eCommerce storefront tailored for luxury jewelry collections. Features an immersive, high-end shopping experience with seamless checkout and payment integrations.",
        features: [
            "Stripe payment gateway integration for secure credit card checkout",
            "Dynamic client-side cart management and state persistence",
            "Elegant image zooming and detailed product variant options",
            "Customer profile dashboard displaying past order history and status"
        ]
    },
    {
        slug: "lumexa",
        projectName: "Lumexa - AI Powered Search Platform",
        imageSrc: "/r1.jpg",
        desc: "An AI-powered search engine and PDF finder",
        link: "https://lumexa-beta.vercel.app",
        githubLink: "https://github.com/rudraupasani/lumexa.ai",
        techStack: ["React JS", "Cerebras API", "Tailwind CSS", "Node JS", "Express.js"],
        longDesc: "An AI-powered search engine and PDF document finder that uses semantic search and vector embeddings to locate relevant information and summarize documents instantly.",
        features: [
            "Semantic search and natural language query processing",
            "Automatic PDF text extraction and AI-driven summarization",
            "Vector-based context indexing for highly precise and relevant answers",
            "Beautiful, minimalist search interface with rapid response times"
        ]
    },
    {
        slug: "novaapi",
        projectName: "NovaAPI - Mock APIs",
        imageSrc: "/r1.jpg",
        desc: "A mock API platform for developers",
        link: "https://novaapi-rudra.vercel.app",
        githubLink: "https://github.com/rudraupasani/NovaAPI",
        techStack: ["Node.js", "Express", "Ejs"],
        longDesc: "A comprehensive mock API platform designed for developers to create, customize, and test mock REST endpoints quickly. Speeds up frontend prototyping without needing a ready backend.",
        features: [
            "Custom API endpoint generator with flexible JSON schema support",
            "Dynamic response latency simulation for network testing",
            "Detailed API request and analytics dashboard",
            "Built-in JWT token authentication simulator for security testing"
        ]
    },
    {
        slug: "foodvila",
        projectName: "FoodVila - Food Recipe Website",
        imageSrc: "/r1.jpg",
        desc: "A food recipe website with a modern design.",
        link: "https://foodviila.vercel.app",
        githubLink: "https://github.com/rudraupasani/foodvila",
        techStack: ["React JS", "Tailwind CSS", "TheMealDB-API"],
        longDesc: "A visually rich food recipe and culinary exploration website featuring thousands of curated recipes, ingredient calculators, and cooking tutorials with a modern layout.",
        features: [
            "Search and filter recipes by ingredients, cuisine, or diet type",
            "Dynamic serving size calculations and ingredient auto-scaler",
            "Step-by-step interactive guided cooking mode",
            "Saved favorites list stored locally for offline cooking inspiration"
        ]
    },
    {
        slug: "clouddrive",
        projectName: "CloudDrive App",
        imageSrc: "/r1.jpg",
        desc: "Google Drive-like file storage app",
        link: "https://cloud-rudraupasani.netlify.app/",
        githubLink: "https://github.com/rudraupasani/cloud-drive",
        techStack: ["React JS", "Cloudinary", "Tailwind CSS", "MongoDB", "Node.js", "Express.js"],
        longDesc: "A secure, cloud-based file storage and organization web application mimicking the functionality of Google Drive. Allows users to upload, organize, share, and preview documents and media files in real-time.",
        features: [
            "Real-time file and folder uploads with nested structure organization",
            "Secure login and registration flows powered by Firebase Authentication",
            "Shareable file download links with configurable access permissions",
            "In-app high-fidelity previews for documents, images, and PDF files"
        ]
    },
];