// SkillsShowcase.jsx
export default function SkillsShowcase() {
  const skills = [
    {
      title: "PHP Laravel",
      icon: "🌀",
      color: "purple",
      technologies: [
        "HTML",
        "CSS",
        "JavaScript",
        "Bootstrap",
        "Laravel",
        "PHP ",
        "MySQL",
        "RESTful APIs",
      ],
    },
    {
      title: "MERN Stack",
      icon: "🌐",
      color: "blue",
      technologies: [
        "MongoDB",
        "Express.js",
        "React",
        "Node.js",
        "Redux ",
        "Tailwind CSS",
        "Postman",
        "Next.js",
      ],
    },
    {
      title: "React Native",
      icon: "📱",
      color: "teal",
      technologies: [
        "React Native",
        "Expo",
        "React Navigation",
        "NativeWind",
        "Redux",
        "MongoDB",
      ],
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-linear-to-b from-gray-950 to-black text-white">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 tracking-tight">
          Core Technical Skills
        </h2>
        <p className="text-gray-400 text-center mb-12 md:mb-16 max-w-2xl mx-auto">
          Full-stack & mobile development tools I work with daily
        </p>

        <div className="grid grid-cols-1  md:grid-cols-3 gap-6 lg:gap-8">
          {skills.map((skill, index) => {
            const gradients = {
              purple: "from-purple-700 via-purple-600 to-indigo-600",
              blue: "from-blue-700 via-blue-600 to-cyan-600",
              teal: "from-teal-700 via-teal-600 to-emerald-600",
            };

            return (
              <div
                key={index}
                className={`
                  group relative cursor-pointer overflow-hidden rounded-2xl p-7
                  bg-gradient-to-br ${gradients[skill.color]}
                  border border-white/10
                  transition-all duration-300 hover:scale-[1.04] hover:shadow-2xl
                  backdrop-blur-sm
                `}
              >
                {/* subtle overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-400" />

                <div className="relative z-10">
                  <div className="text-5xl mb-5 opacity-90 group-hover:opacity-100 transition-opacity">
                    {skill.icon}
                  </div>

                  <h3 className="text-2xl md:text-3xl font-bold mb-5 tracking-tight">
                    {skill.title}
                  </h3>

                  <div className="flex flex-wrap gap-2.5 mt-2">
                    {skill.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="
                          px-3.5 py-1.5 text-sm font-medium rounded-full
                          bg-white/15 backdrop-blur-sm border border-white/10
                          text-white hover:bg-white/25 transition-colors
                        "
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
