import { useEffect, useRef, useState } from "react";

const projectsData = [
  {
    id: 1,
    title: "Gym Management System",
    description:
      "Developed a responsive GMS to streamline gym operations, including member management, membership plans, trainers, and scheduling. Built the complete frontend with a clean, user-friendly interface and currently working on integrating backend functionality and a database to make it fully dynamic with authentication and CRUD features.",
    image: "/GMSDashboard.png",
    tags: ["HTML", "CSS", "Bootstrap", "Javascript", "PHP", "Laravel", "MySQL"],
    gradient: "from-purple-800/40 via-purple-700/30 to-indigo-800/40",
    links: {
      demo: "https://oshaq-naimat.free.nf/",
      github: "https://github.com/OshaqNaimat/GMS.git",
    },
  },
  {
    id: 2,
    title: "Small Projects",
    description:
      "A collection of small React projects including a Color Generator, Lorem Ipsum Generator, Birthday Reminder, and To-Do List, demonstrating component-based architecture, state management, and interactive UI development.",
    image: "/MiniProjects.png",
    tags: ["JavaScript", "React.js", "Tailwind"],
    gradient: "from-blue-800/40 via-blue-700/30 to-cyan-800/40",
    links: {
      demo: "https://small-projects-seven.vercel.app/",
      github: "https://github.com/OshaqNaimat/Small-projects.git",
    },
  },
  {
    id: 3,
    title: "Pixela Website and App",
    description:
      "An Instagram-style social media application built with the MERN stack. Currently includes post creation functionality, with upcoming features like authentication, user profiles, likes, comments, and explore feed.",
    image:
      "https://cdn-icons-png.freepik.com/256/10295/10295918.png?semt=ais_white_label",
    tags: [
      "React Native",
      "Expo",
      "MongoDB",
      "Redux",
      "React.js",
      "Express.js",
      "Node.js",
      "Postman",
      "Tailwind",
    ],
    gradient: "from-teal-800/40 via-teal-700/30 to-emerald-800/40",
    inProgress: true,
    githubLinks: [
      {
        label: "Pixela_Web",
        url: "https://github.com/OshaqNaimat/Pixela_Web.git",
      },
      {
        label: "Pixela_App",
        url: "https://github.com/OshaqNaimat/Pixera_App.git",
      },
    ],
  },
  {
    id: 4,
    title: "Pixela Website and App",
    description:
      "An Instagram-style social media application built with the MERN stack. Currently includes post creation functionality, with upcoming features like authentication, user profiles, likes, comments, and explore feed.",
    image:
      "https://cdn-icons-png.freepik.com/256/10295/10295918.png?semt=ais_white_label",
    tags: [
      "React Native",
      "Expo",
      "MongoDB",
      "Redux",
      "React.js",
      "Express.js",
      "Node.js",
      "Postman",
      "Tailwind",
    ],
    gradient: "from-teal-800/40 via-teal-700/30 to-emerald-800/40",
    inProgress: true,
    githubLinks: [
      {
        label: "Pixela_Web",
        url: "https://github.com/OshaqNaimat/Pixela_Web.git",
      },
      {
        label: "Pixela_App",
        url: "https://github.com/OshaqNaimat/Pixera_App.git",
      },
    ],
  },
  {
    id: 4,
    title: "Pixela Website and App",
    description:
      "An Instagram-style social media application built with the MERN stack. Currently includes post creation functionality, with upcoming features like authentication, user profiles, likes, comments, and explore feed.",
    image:
      "https://cdn-icons-png.freepik.com/256/10295/10295918.png?semt=ais_white_label",
    tags: [
      "React Native",
      "Expo",
      "MongoDB",
      "Redux",
      "React.js",
      "Express.js",
      "Node.js",
      "Postman",
      "Tailwind",
    ],
    gradient: "from-teal-800/40 via-teal-700/30 to-emerald-800/40",
    inProgress: true,
    githubLinks: [
      {
        label: "Pixela_Web",
        url: "https://github.com/OshaqNaimat/Pixela_Web.git",
      },
      {
        label: "Pixela_App",
        url: "https://github.com/OshaqNaimat/Pixera_App.git",
      },
    ],
  },
];

function ProjectCard({ project }) {
  const [showURL, setShowURL] = useState(false);
  const menuRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setShowURL(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className={`group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br ${project.gradient} border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 h-full`}
    >
      <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden flex-shrink-0">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </div>
      <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7">
        <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed flex-1">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2 mb-5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200"
            >
              {tag}
            </span>
          ))}
        </div>
        <div className="flex flex-wrap gap-3 mt-auto relative">
          {project.inProgress ? (
            <>
              <span className="inline-flex items-center px-4 py-2 bg-blue-600/60 cursor-default rounded-lg text-sm font-medium text-white/80">
                In Progress →
              </span>
              <span
                onClick={() => setShowURL((prev) => !prev)}
                className="inline-flex relative cursor-pointer items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                GitHub →
              </span>
              {showURL && (
                <ul
                  ref={menuRef}
                  className="absolute bottom-12 right-0 bg-black rounded-md p-2 z-20 shadow-xl"
                >
                  {project.githubLinks.map((link) => (
                    <li
                      key={link.label}
                      className="cursor-pointer p-2 hover:bg-blue-500 rounded-md"
                    >
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href={link.url}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </>
          ) : (
            <>
              <a
                href={project.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
              >
                Live Demo →
              </a>
              <a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
              >
                GitHub →
              </a>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects({ setOpen }) {
  const VISIBLE_COUNT = 3;
  const [startIndex, setStartIndex] = useState(0);

  const canGoLeft = startIndex > 0;
  const canGoRight = startIndex + VISIBLE_COUNT < projectsData.length;

  const visibleProjects = projectsData.slice(
    startIndex,
    startIndex + VISIBLE_COUNT,
  );

  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 md:py-24 bg-gray-900 text-white"
    >
      {/* Decorative background blobs */}
      <div className="absolute top-16 left-8 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl pointer-events-none z-0" />
      <div className="absolute bottom-16 right-8 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl pointer-events-none z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-10 md:mb-16 max-w-2xl mx-auto text-base sm:text-lg leading-relaxed">
          A selection of my recent work — full-stack web apps, mobile
          applications, and modern UIs built with clean code and best practices.
        </p>

        {/* Carousel wrapper */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={() => setStartIndex((i) => Math.max(i - 1, 0))}
            disabled={!canGoLeft}
            className={`absolute -left-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200
              ${
                canGoLeft
                  ? "bg-gray-800 border-white/20 hover:bg-blue-600 hover:border-blue-500 text-white cursor-pointer"
                  : "bg-gray-800/40 border-white/10 text-white/20 cursor-not-allowed"
              }`}
          >
            ‹
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
            {visibleProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={() =>
              setStartIndex((i) =>
                Math.min(i + 1, projectsData.length - VISIBLE_COUNT),
              )
            }
            disabled={!canGoRight}
            className={`absolute -right-5 top-1/2 -translate-y-1/2 z-20 w-10 h-10 flex items-center justify-center rounded-full border transition-all duration-200
              ${
                canGoRight
                  ? "bg-gray-800 border-white/20 hover:bg-blue-600 hover:border-blue-500 text-white cursor-pointer"
                  : "bg-gray-800/40 border-white/10 text-white/20 cursor-not-allowed"
              }`}
          >
            ›
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {projectsData.map((_, i) => (
            <button
              key={i}
              onClick={() =>
                setStartIndex(Math.min(i, projectsData.length - VISIBLE_COUNT))
              }
              className={`w-2 h-2 rounded-full transition-all duration-200 ${
                i >= startIndex && i < startIndex + VISIBLE_COUNT
                  ? "bg-blue-500 w-4"
                  : "bg-white/20 hover:bg-white/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
