// Projects.jsx
export default function Projects() {
  return (
    <section
      id="projects"
      className="py-16 md:py-24 bg-gradient-to-b bg-black-900 text-white"
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Featured Projects
        </h2>
        <p className="text-gray-400 text-center mb-12 md:mb-16 max-w-3xl mx-auto text-lg">
          A selection of my recent work — full-stack web apps, mobile
          applications, and modern UIs built with clean code and best practices.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Project 1 - Gym Management System */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl 
              bg-gradient-to-br from-purple-800/40 via-purple-700/30 to-indigo-800/40
              border border-white/10 backdrop-blur-md
              transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-white/20
            `}
          >
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img
                src="../public/GMSDashboard.png"
                alt="Gym Management System"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                Gym Management System
              </h3>

              <p className="text-gray-300 mb-5 line-clamp-3">
                Developed a responsive GMS to streamline gym operations,
                including member management, membership plans, trainers, and
                scheduling. I built the complete frontend with a clean,
                user-friendly interface and am currently working on integrating
                backend functionality and a database to make it fully dynamic
                with authentication and CRUD features.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  HTML
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  CSS
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Bootstrap
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Javascript
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  PHP
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Laravel
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  MySQL
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://your-ecommerce-demo.com"
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

          {/* Project 2 - Real-Time Chat Application */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl 
              bg-gradient-to-br from-blue-800/40 via-blue-700/30 to-cyan-800/40
              border border-white/10 backdrop-blur-md
              transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-white/20
            `}
          >
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img
                src="/projects/chat-app.jpg"
                alt="Real-Time Chat Application"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                Real-Time Chat Application
              </h3>

              <p className="text-gray-300 mb-5 line-clamp-3">
                Modern messaging app with real-time updates, typing indicators,
                online status, dark mode, file sharing. MERN stack + Socket.io.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  MongoDB
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Express
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  React
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Node.js
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Socket.io
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Tailwind
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://your-chat-app.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/yourusername/mern-chat-app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 - Fitness Tracker Mobile App */}
          <div
            className={`
              group relative overflow-hidden rounded-2xl 
              bg-gradient-to-br from-teal-800/40 via-teal-700/30 to-emerald-800/40
              border border-white/10 backdrop-blur-md
              transition-all duration-300 hover:scale-[1.03] hover:shadow-2xl hover:border-white/20
            `}
          >
            <div className="relative h-48 md:h-56 overflow-hidden">
              <img
                src="/projects/fitness-app.jpg"
                alt="Fitness Tracker Mobile App"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
            </div>

            <div className="p-6 md:p-7">
              <h3 className="text-2xl font-bold mb-3 group-hover:text-blue-300 transition-colors">
                Fitness Tracker Mobile App
              </h3>

              <p className="text-gray-300 mb-5 line-clamp-3">
                Cross-platform mobile app for tracking workouts, calories,
                progress photos, goal setting. React Native + Expo + Firebase.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  React Native
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Expo
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Firebase
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  Redux
                </span>
                <span className="px-3 py-1 text-xs font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/10 text-gray-200">
                  NativeWind
                </span>
              </div>

              <div className="flex gap-4">
                <a
                  href="https://your-fitness-tracker-app.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href="https://github.com/yourusername/react-native-fitness"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-4 py-2 bg-gray-700 hover:bg-gray-600 rounded-lg text-sm font-medium transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
