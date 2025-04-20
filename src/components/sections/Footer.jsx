import { Github, Instagram, Linkedin } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-10">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between space-y-6 sm:space-y-0">
        <div className="text-center sm:text-left">
          <h3 className="text-xl font-bold">sonal.tech</h3>
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()}. All rights reserved.
          </p>
        </div>

        {/* Middle: Navigation (optional) */}
        <div className="flex space-x-6 text-sm text-gray-300">
          <a href="#home" className="hover:text-blue-400">
            Home
          </a>
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

        {/* Right: Socials */}
        <div className="flex space-x-4">
          <a
            href="https://www.instagram.com/sonal.__._"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Instagram className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/sonal-monis"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Linkedin className="w-5 h-5" />
          </a>
          {/* <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400"
          >
            <Github className="w-5 h-5" />
          </a> */}
        </div>
      </div>
    </footer>
  );
};
