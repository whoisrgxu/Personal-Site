const projects = [
    {
    Title: "JobPilot",
    MadeWith: ["TypeScript", "React", "Next.js", "TailwindCss", "Material UI", "MongoDB", "Gemini Developer API", "OpenAI API"],
    Description: "JobPilot is an AI-powered tool that helps job seekers quickly analyze how well their resume matches a job posting. Simply paste your resume and the job description, and our advanced AI generates a personalized feedback dashboard showing your overall job-fit score, strengths, weaknesses, and actionable suggestions for improvement. Save time, refine your resume, and make your job applications smoother and more effective with this smart job-fit analyzer.",
    Link: "https://jobpilot.rogerxu.dev/",
    RepoLink: "https://github.com/whoisrgxu/smart-cover-letter/",
    Image: "/JobPilot.png",
  },
  {
    Title: "MealKit Delivery App",
    MadeWith: ["JavaScript", "Node.js", "Express", "EJS", "MongoDB", "TailwindCss", "DaisyUI"],
    Description: "A full-stack web application built with Node.js, Express, and MongoDB, featuring user authentication, session management, and dynamic content rendering with EJS templates. It supports secure user registration and login, including server-side validation and email notifications via SendGrid. The application demonstrates best practices in MVC architecture, middleware usage, and integrates file uploads and role-based navigation for a seamless user experience.",
    Link: "https://mealkit-delivery-app-tj3b.onrender.com",
    RepoLink: "https://github.com/whoisrgxu/Mealkit-Delivery-App",
    Image: "/MealKit.png",
  },
  {
    Title: "My Repo Reader",
    MadeWith: ["Go (Golang)", "Git Command-Line Interface (CLI)", "Text Processing (UTF-8)"],
    Description: "A lightweight CLI tool that turns any code folder into a clean, shareable Markdown snapshot. It respects nested .gitignore rules and common build/cache folders, skips binary and lock files, and produces a tidy tree structure with optional file contents. Summaries are accurate because only Git-tracked text files are counted.This makes it easy to generate reproducible context for LLMs, pull requests, or documentation — complementing IDE assistants with portable, auditable snapshots that can be shared across teams and tools.",
    RepoLink: "https://github.com/whoisrgxu/My_Repo_Reader",
    Image: "/My_Repo_Reader.png",
  },
  {
    Title: "Classic Puzzle Game",
    MadeWith: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    Description: "An interactive sliding puzzle game built with React, featuring a responsive design and engaging visual and audio feedback. Players solve the classic numbered tile puzzle by sliding pieces into the empty space, with each game offering a randomly generated board and instant restart functionality.",
    Link: "https://nu-puzz.vercel.app",
    RepoLink: "https://github.com/whoisrgxu/NuPuzz",
    Image: "/NuPuzz.png",
  },
  {
    Title: "Metropolitan Museum Artworks",
    MadeWith: ["JavaScript", "React", "Next.js", "Node.js", "React-Bootstrap", "MongoDB"],
    Description: "A full-stack web application built with Next.js and React that allows users to search, view, and manage their favourite artworks from The Metropolitan Museum of Art's public collection. It features user authentication, personalized search history, and the ability to save favourite pieces, all with a responsive and modern UI using Bootstrap. The app integrates with external and custom APIs, providing a seamless and interactive experience for art enthusiasts.",
    Link: "https://metropolitan-museum-art-works.vercel.app/",
    RepoLink: "https://github.com/whoisrgxu/Metropolitan-Museum-ArtWorks",
    Image: "/Museum.png",
  },
  {
    Title: "Memory Fun Poker Game",
    MadeWith: ["React", "Node.js", "Next.js", "Bootstrap"],
    Description: "An interactive card-matching game built with Next.js, React, and Bootstrap. Players flip cards to find matching pairs, with the game dynamically tracking moves and providing real-time feedback. The project demonstrates strong skills in front-end development, state management with React hooks, and responsive UI design, making it an excellent showcase of modern web application development.",
    Link: "https://memory-fun.vercel.app/",
    RepoLink: "https://github.com/whoisrgxu/Memory-Fun",
    Image: "/MemoryFun.png",
  }
];

module.exports = projects;
