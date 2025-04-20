import { RevealOnScroll } from '../RevealOnScroll'

export const Projects = () => {
  return (
<section
  id="projects"
  className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
>
  <RevealOnScroll>
    <div className="max-w-5xl w-full text-center">
      <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
        Featured Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_2px_8px_rgba(59,130,246,0.2)] transition">
          <h3 className="text-xl font-semibold text-white mb-2">Hear Ally</h3>
          <p className="text-gray-400 text-white/80 mb-4">
            Mobile Application with a Machine Learning Algorithm for Sound
            Analysis for Meniere's Disease Patients. Hosted the backend on
            Docker containers running on a self-hosted server.
          </p>
          <div className="flex flex-wrap gap-2">
            {["Python", "Matlab", "GO", "Docker"].map((tech, key) => (
              <span
                key={key}
                className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  </RevealOnScroll>
</section>

  );
};
