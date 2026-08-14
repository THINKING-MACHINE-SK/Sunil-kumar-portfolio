import {
    contact,
    docker,
    fastapi,
    github,
    git,
    linkedin,
    mail,
    mysql,
    numpy,
    ollama,
    opencv,
    pandas,
    python,
    pytest,
    pytorch,
    scikitlearn,
    scipy,
    sqlite,
    tensorflow,
    django
} from "../assets/icons";

export const skillGroups = [
    {
        title: "AI / Computer Vision",
        icons: [
            { imageUrl: opencv,       name: "OpenCV" },
            { imageUrl: numpy,        name: "NumPy" },
            { imageUrl: pandas,       name: "Pandas" },
            { imageUrl: scipy,        name: "SciPy" },
            { imageUrl: scikitlearn,  name: "Scikit-Learn" },
            { imageUrl: pytorch,      name: "PyTorch" },
            { imageUrl: tensorflow,   name: "TensorFlow" },
        ],
        chips: ["ANN", "PCA", "K-Means Clustering"],
    },
    {
        title: "LLM / RAG",
        icons: [
            { imageUrl: fastapi,      name: "FastAPI" },
            { imageUrl: ollama,       name: "Ollama" },
            { imageUrl: docker,       name: "Docker" },
        ],
        chips: ["Vector Search", "Embeddings", "Document Chunking"],
    },
    {
        title: "Backend",
        icons: [
            { imageUrl: python,       name: "Python" },
            { imageUrl: django,       name: "Django" },
            { imageUrl: mysql,        name: "MySQL" },
            { imageUrl: sqlite,       name: "SQLite" },
            { imageUrl: pytest,       name: "pytest" },
            { imageUrl: git,          name: "Git" },
            { imageUrl: github,       name: "GitHub" },
        ],
        chips: ["Django REST Framework", "REST API Design", "PySide6", "OOP"],
    },
    {
        title: "AI-Assisted Development",
        chips: ["Cursor", "Claude Code", "ChatGPT", "Antigravity", "OpenCode", "OpenClaw"],
    },
    {
        title: "Currently Learning",
        highlight: true,
        chips: ["Scaler Advanced AI/ML Program (ending 2027)"],
    },
    {
        title: "Other",
        chips: ["English", "Hindi"],
    },
];

export const experiences = [
    {
        title: "Python & AI/ML Developer",
        company_name: "Zimong Software Pvt. Ltd.",
        monogram: "Z",
        iconBg: "#a7c7e7",
        date: "Apr 2026 – Present",
        points: [
            "Designed a template-independent OMR engine (~70K lines, OpenCV/Python) — radial fill scoring with per-row Gaussian-Mixture (EM) threshold calibration, replacing fixed per-template thresholds.",
            "Built a registration cascade (fiducial → corner-ratio → page-contour → image-corner fallback) with Hough-line residual deskew, recovering geometry from degraded/skewed scans without per-template configuration.",
            "Reached 98.92% answer accuracy across 2,127 graded questions (41 real scanned sheets); maintain a frozen 97.85% regression baseline with automated per-template drop-gating.",
            "Engineered a heuristic recovery engine for multi-mark and blank-answer edge cases (speck-area suppression, faint-pencil recovery, confidence-ranked retries) — the two hardest real-world failure modes in OMR.",
            "Wrote 400+ automated tests across golden, adversarial, and regression suites — 0 failures against a frozen production baseline.",
            "Exposed the pipeline via FastAPI (Prometheus metrics, human-in-the-loop review workflow) and a PySide6 desktop client, owning the system from CV core to UI.",
        ],
    },
    {
        title: "Computer Science Teacher",
        company_name: "Scholar's Heaven School, Sikanderpur",
        monogram: "S",
        iconBg: "#b7e4c7",
        date: "Feb 2025 – Mar 2026",
        points: [
            "Taught Python, ML fundamentals, AI, and robotics through project-based coding exercises, breaking down technical concepts into structured, buildable lessons for students.",
            "Designed an AI-integrated curriculum and mentored students in project-based learning for Robotics.",
            "Encouraged problem-solving, logical thinking, and innovation through coding exercises.",
        ],
    },
    {
        title: "AI & ML Intern",
        company_name: "Internship Studio",
        monogram: "I",
        iconBg: "#accbe1",
        date: "Aug 2024 – Jan 2025",
        points: [
            "Built and evaluated an ANN + OpenCV face recognition model reaching 98% test accuracy, and applied K-Means clustering to segment 10,000 customers into 5 behavioral groups.",
            "Preprocessed 10,000+ records (NumPy/Pandas/SciPy) and applied PCA for a 40% dimensionality reduction, speeding up downstream model training by 25%.",
        ],
    },
];

export const education = [
    {
        degree: "Bachelor of Science, Computer Science",
        school: "Guru Jambheshwar University of Science and Technology, Hisar (Haryana)",
        monogram: "🎓",
        iconBg: "#e9d8fd",
        date: "Oct 2020 – Jun 2023",
        points: [
            "Foundational coursework in computer science, programming, data structures, and algorithms.",
        ],
    },
    {
        degree: "Advanced AI/ML Program",
        school: "Scaler",
        monogram: "🚀",
        iconBg: "#c9a84c",
        date: "In Progress · ends 2027",
        highlight: true,
        points: [
            "Deepening machine learning fundamentals toward production-grade AI systems.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/THINKING-MACHINE-SK',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/sunil-kumar-47b6a6198/',
    },
    {
        name: 'Email',
        iconUrl: mail,
        link: 'mail_to:kumarsunilharoli@gmail.com',
    },
];

export const projects = [
    {
        iconUrl: github,
        theme: 'btn-back-red',
        name: 'Automated OMR System',
        description: 'Template-independent OMR engine (~70K lines, OpenCV/Python) — radial fill scoring with per-row GMM threshold calibration, registration cascade with Hough-line deskew, and heuristic recovery for multi-mark/blank/faint-pencil answers. 98.92% accuracy across 2,127 questions with 400+ automated tests. FastAPI service + PySide6 desktop client, production-deployed at Zimong.',
        link: 'https://github.com/THINKING-MACHINE-SK',
    },
    {
        iconUrl: fastapi,
        theme: 'btn-back-blue',
        name: 'Advanced RAG System (in progress)',
        description: 'Building a Retrieval-Augmented Generation pipeline from first principles: PDF parsing, chunking, embeddings, vector search, and local LLM (Ollama) behind FastAPI. Core retrieve-and-answer flow working; extending to hybrid search, reranking, and Docker deployment.',
        link: 'https://github.com/THINKING-MACHINE-SK',
    },
    {
        iconUrl: opencv,
        theme: 'btn-back-green',
        name: 'Face Recognition — PCA + ANN',
        description: 'Deep learning model combining PCA dimensionality reduction with ANN, using OpenCV for face detection — 98% test accuracy.',
        link: 'https://github.com/THINKING-MACHINE-SK',
    },
    {
        iconUrl: numpy,
        theme: 'btn-back-yellow',
        name: 'Student Performance Indicator',
        description: 'ML pipeline predicting student performance; feature engineering and model tuning improved prediction accuracy by 95%.',
        link: 'https://github.com/THINKING-MACHINE-SK',
    },
    {
        iconUrl: docker,
        theme: 'btn-back-orange',
        name: 'Local AI Model Environment',
        description: 'Self-directed setup of Ollama + Open WebUI + Docker on a RAM-constrained machine — hands-on with local LLM deployment, model size tradeoffs, and service configuration.',
        link: 'https://github.com/THINKING-MACHINE-SK',
    },
];