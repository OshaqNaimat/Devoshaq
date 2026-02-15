import { useEffect, useRef, useState } from "react";

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const revealRef = useRef([]);
  const formRef = useRef(null);
  const msgRef = useRef(null);

  // Scroll Reveal Effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 },
    );

    revealRef.current.forEach((el) => el && observer.observe(el));
  }, []);

  // Form Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    const msg = msgRef.current;
    msg.classList.add("hidden");

    const data = new FormData(formRef.current);

    try {
      const res = await fetch("https://formspree.io/f/xwpdveyj", {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        msg.textContent = "✅ Message sent successfully!";
        msg.className = "mt-4 text-center font-semibold text-green-400";
        msg.classList.remove("hidden");
        formRef.current.reset();
      } else throw new Error();
    } catch {
      msg.textContent = "❌ Failed to send message.";
      msg.className = "mt-4 text-center font-semibold text-red-400";
      msg.classList.remove("hidden");
    }
  };

  return (
    <div className="bg-gray-900 text-gray-200 relative scroll-smooth">
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="fixed right-0 bottom-0 min-w-full min-h-full object-cover -z-20"
      >
        <source src="/bg-video.mp4" type="video/mp4" />
      </video>
      <div className="fixed inset-0 bg-black/60 -z-10"></div>

      {/* Header */}
      <header className="bg-slate-900/50 backdrop-blur-sm fixed top-0 w-full z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a
            href="#hero"
            className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-600 animate-pulse"
          >
            My Portfolio
          </a>

          <div className="hidden md:flex space-x-8 text-lg">
            <a href="#about" className="hover:text-blue-400">
              About
            </a>
            <a href="#projects" className="hover:text-blue-400">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-400">
              Contact
            </a>
          </div>

          <button
            className="md:hidden text-gray-200"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✖" : "☰"}
          </button>
        </nav>

        {menuOpen && (
          <div className="md:hidden bg-slate-800/90 text-center shadow-lg">
            <div className="flex flex-col space-y-4 py-4 text-xl">
              <a href="#about" onClick={() => setMenuOpen(false)}>
                About
              </a>
              <a href="#projects" onClick={() => setMenuOpen(false)}>
                Projects
              </a>
              <a href="#contact" onClick={() => setMenuOpen(false)}>
                Contact
              </a>
            </div>
          </div>
        )}
      </header>

      <main className="py-24 relative z-10">
        {/* Hero */}
        <section
          id="hero"
          className="min-h-screen flex items-center justify-center p-4"
        >
          <div className="container mx-auto flex flex-col md:flex-row items-center justify-center text-center md:text-left space-y-8 md:space-x-12">
            <div className="fade-in-down">
              <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-4">
                Hello, I'm <span className="text-blue-400">Oshaq Naimat</span>.
              </h1>
              <p className="text-xl md:text-2xl text-gray-300 mb-8">
                A passionate{" "}
                <span className="font-bold text-purple-400">Web Developer</span>
              </p>
              <a
                href="#contact"
                className="px-8 py-3 bg-blue-500 hover:bg-blue-600 rounded-full font-bold"
              >
                Get in Touch
              </a>
            </div>

            <div className="float">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full bg-slate-700 overflow-hidden shadow-2xl flex items-center justify-center">
                <img src="/cui image.jpg" alt="profile" />
              </div>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          ref={(el) => (revealRef.current[0] = el)}
          className="py-20 reveal"
        >
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-12">
            About Me
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-gray-300 text-center space-y-4">
            <p>
              Currently, I am learning web development at PNY training institute
              Rawalpindi.
            </p>
            <p>
              I am a full-stack web developer with expertise in React and
              Node.js.
            </p>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="py-20 reveal"
          ref={(el) => (revealRef.current[1] = el)}
        >
          <h2 className="text-4xl font-bold text-center text-blue-400 mb-8">
            Contact Me
          </h2>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="max-w-xl mx-auto bg-gray-800/70 p-6 rounded-lg shadow-lg"
          >
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full mb-4 p-2 rounded bg-gray-900 border border-gray-600"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full mb-4 p-2 rounded bg-gray-900 border border-gray-600"
            />
            <textarea
              name="message"
              rows="5"
              required
              placeholder="Message"
              className="w-full mb-4 p-2 rounded bg-gray-900 border border-gray-600"
            />
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 py-2 rounded font-bold"
            >
              Send Message
            </button>

            <div
              ref={msgRef}
              className="hidden mt-4 text-center font-semibold"
            ></div>
          </form>
        </section>
      </main>

      <footer className="bg-gray-900/50 py-8 text-center text-gray-400 text-sm">
        © 2023 Oshaq Naimat. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
