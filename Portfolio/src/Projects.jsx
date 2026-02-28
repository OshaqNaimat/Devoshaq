import { useEffect, useRef, useState } from "react";

export default function Projects({ setOpen }) {
  const [URL, setURL] = useState(false);
  const menuRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setURL(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section
      id="projects"
      className="relative overflow-hidden py-16 md:py-24 bg-gray-900 text-white"
    >
      {/* Decorative background dots */}
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

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {/* Card 1 — Gym Management System */}
          <div className="group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-purple-800/40 via-purple-700/30 to-indigo-800/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 h-full">
            <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden flex-shrink-0">
              <img
                src="/GMSDashboard.png"
                alt="Gym Management System"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                Gym Management System
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed flex-1">
                Developed a responsive GMS to streamline gym operations,
                including member management, membership plans, trainers, and
                scheduling. Built the complete frontend with a clean,
                user-friendly interface and currently working on integrating
                backend functionality and a database to make it fully dynamic
                with authentication and CRUD features.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  "HTML",
                  "CSS",
                  "Bootstrap",
                  "Javascript",
                  "PHP",
                  "Laravel",
                  "MySQL",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href="https://oshaq-naimat.free.nf/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/OshaqNaimat/GMS.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Card 2 — Small Projects */}
          <div className="group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-blue-800/40 via-blue-700/30 to-cyan-800/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 h-full">
            <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden flex-shrink-0">
              <img
                src="/MiniProjects.png"
                alt="Small Projects"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                Small Projects
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed flex-1">
                A collection of small React projects including a Color
                Generator, Lorem Ipsum Generator, Birthday Reminder, and To-Do
                List, demonstrating component-based architecture, state
                management, and interactive UI development.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {["JavaScript", "React.js", "Tailwind"].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <a
                  href="https://small-projects-seven.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/OshaqNaimat/Small-projects.git"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Card 3 — Pixela */}
          <div className="group flex flex-col overflow-hidden rounded-2xl bg-gradient-to-br from-teal-800/40 via-teal-700/30 to-emerald-800/40 border border-white/10 backdrop-blur-md transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl hover:border-white/20 h-full">
            <div className="relative h-44 sm:h-48 md:h-52 overflow-hidden flex-shrink-0">
              <img
                src="https://cdn-icons-png.freepik.com/256/10295/10295918.png?semt=ais_white_label"
                alt="Pixela Website and App"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>
            <div className="flex flex-col flex-1 p-5 sm:p-6 md:p-7">
              <h3 className="text-xl sm:text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors leading-tight">
                Pixela Website and App
              </h3>
              <p className="text-gray-300 text-sm sm:text-base mb-5 leading-relaxed flex-1">
                An Instagram-style social media application built with the MERN
                stack. Currently includes post creation functionality, with
                upcoming features like authentication, user profiles, likes,
                comments, and explore feed.
              </p>
              <div className="flex flex-wrap gap-2 mb-5">
                {[
                  "React Native",
                  "Expo",
                  "MongoDB",
                  "Redux",
                  "React.js",
                  "Express.js",
                  "Node.js",
                  "Postman",
                  "Tailwind",
                ].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-3 mt-auto">
                <span className="inline-flex items-center px-4 py-2 bg-blue-600/60 cursor-default rounded-lg text-sm font-medium text-white/80">
                  In Progress →
                </span>
                <span
                  onClick={() => setURL(true)}
                  className="inline-flex relative cursor-pointer items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                >
                  GitHub →
                </span>
                {URL && (
                  <ul
                    ref={menuRef}
                    className="list-unstyled  absolute bottom-5 right-2 bg-black rounded-md p-2"
                  >
                    <li className="cursor-pointer p-2 hover:bg-blue-500 rounded-md">
                      <a
                        target="_blank"
                        href="https://github.com/OshaqNaimat/Pixela_Web.git"
                      >
                        Pixela_Web
                      </a>
                    </li>
                    <li className="cursor-pointer p-2 hover:bg-blue-500 rounded-md">
                      <a
                        target="_blank"
                        href="https://github.com/OshaqNaimat/Pixera_App.git"
                      >
                        Pixela_App
                      </a>
                    </li>
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
