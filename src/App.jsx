import React, { useState } from 'react';
import { Menu, X, Github, Linkedin, Mail, ExternalLink } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sections = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  return (
    <div className="min-h-screen relative bg-slate-900">
      {/* Animated gradient background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            linear-gradient(
              45deg,
              rgba(76, 0, 255, 0.5),
              rgba(0, 255, 255, 0.5),
              rgba(255, 0, 128, 0.5)
            )`,
          backgroundSize: '400% 400%',
          animation: 'gradient 15s ease infinite',
        }}
      >
        <style>
          {`
            @keyframes gradient {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
          `}
        </style>
      </div>

      {/* Glassmorphic overlay */}
      <div className="fixed inset-0 z-0 bg-white/5 backdrop-blur-[100px]"></div>

      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-white/10 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <span className="text-xl font-bold text-white">
                Utkrisht Singh Parmar
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {sections.map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="text-white/80 hover:text-white transition-colors"
                >
                  {section.label}
                </a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white/80 hover:text-white"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-md">
              {sections.map(section => (
                <a
                  key={section.id}
                  href={`#${section.id}`}
                  className="block px-3 py-2 text-white/80 hover:text-white"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {section.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="relative z-10 text-white">
        {/* Hero Section */}
        <section id="home" className="min-h-screen pt-24 pb-16 px-4 flex items-center">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 text-center md:text-left">
              <h2 className="text-xl mb-2 text-white/80">Hi, I am</h2>
              <h1 className="text-5xl md:text-7xl font-bold mb-4">
                Utkrisht Singh Parmar
              </h1>
              <p className="text-xl text-white/80 mb-8">
                And I'm a passionate <span className="text-cyan-400">Developer</span>
              </p>
              <div className="space-x-4">
                <a href="https://github.com/Utkrisht2004" className="inline-block px-6 py-2 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-md transition-all border border-white/20">
                  Github
                </a>
                <a href="https://www.linkedin.com/in/utkrisht-parmar-59977928a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvGELUjOoQoazaKmT6tV8Sg%3D%3D" className="inline-block px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 backdrop-blur-md rounded-md transition-all border border-cyan-500/30">
                  LinkedIn
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 rounded-2xl blur-xl opacity-50"></div>
                <img
                  src="IMG-20231126-WA0055 (1).jpg"
                  alt="Profile"
                  className="relative rounded-2xl w-64 h-64 object-cover border border-white/20"
                />
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">About Me</h2>
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
              <p className="text-white/80">
               I am a person who is an aspiring developer. I love to talk to new people and I try to gain as many new expereinces as possible. I also love working with other people. Python is FAV. Currently learning FrontEnd using JavaScript and React. Doing BackEnd using Python, Django and FastAPI.
              </p>
              <br></br>
              <p className="text-white/80">
              I love to have fun with other people. Along with it, I follow many hobbies, that include reading, watching movies, travelling as well as talking with other people in general.
              </p>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section id="education" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Education</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-cyan-400">B.Tech CSE AI&ML</h3>
                <p className="text-white/80">SRM Univerity</p>
                <p className="text-white/60">2023-27</p>
                <br></br>
                <h3 className="text-xl font-semibold text-cyan-400">10+2</h3>
                <p className="text-white/80">G.D. Goenka Public School</p>
                <p className="text-white/60">2022</p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">SKILLS</h2>
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-cyan-400">Front End</h3>
                <p className="text-white/80">HTML</p>
                <p className="text-white/60">CSS</p>
                <p className="text-white/60">JavaScript</p>
                <p className="text-white/60">React.js</p>
                <br></br>
                <h3 className="text-xl font-semibold text-cyan-400">Back End</h3>
                <p className="text-white/80">Pyhton</p>
                <p className="text-white/60">C++</p>
                <p className="text-white/60">Java</p>
                <p className="text-white/60">Django</p>
                <p className="text-white/60">SQL</p>
                <p className="text-white/60">FastAPI</p>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Binary Tree Visualization</h3>
                <p className="text-white/80 mb-4">Visualizing a Binary Tree using arrays, using Tkinter in PYTHON. Implemented search methods as well</p>
                <h3 className="text-xl font-semibold mb-2 text-cyan-400">Marks Updater</h3>
                <p className="text-white/80 mb-4">Marks Database that allows user to input subject marks using PYTHON and SQL integrations</p>
                <a href="#" className="text-cyan-400 hover:text-cyan-300 flex items-center">
                  View Project <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section id="achievements" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Achievements</h2>
            <div className="space-y-4">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <h3 className="text-xl font-semibold text-cyan-400">2nd Place in EDG Competition</h3>
                <p className="text-white/80">Placed 2nd in half-yearly EGD Competiton.</p>
                <br></br>
                <h3 className="text-xl font-semibold text-cyan-400">Nationals Qualification in Rifle Shooting</h3>
                <p className="text-white/80">Qualifies for nationals category in Rifle Shooting (10Metre)</p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold mb-8">Contact</h2>
            <div className="flex justify-center space-x-6">
              <a href="https://github.com/Utkrisht2004" className="text-white/80 hover:text-white transition-colors">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/utkrisht-parmar-59977928a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BvGELUjOoQoazaKmT6tV8Sg%3D%3D" className="text-white/80 hover:text-white transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:up1289@srmist.edu.in" className="text-white/80 hover:text-white transition-colors">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-black/20 backdrop-blur-md text-white py-8 w-full fixed bottom-0 left-0 right-0">
  <div className="w-full text-center">
    <p className="text-white/60">&copy; {new Date().getFullYear()} Utkrisht Singh Parmar. All rights reserved.</p>
  </div>
</footer>
    </div>
  );
};

export default Portfolio;