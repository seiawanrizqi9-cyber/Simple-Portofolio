import { portfolioData } from "../../data/portfolio";

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:scroll-mt-24">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200 mb-6">
        Projects
      </h2>
      <div className="flex flex-col gap-8">
        {portfolioData.projects.map((project, idx) => (
          <div key={idx} className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:hover:bg-slate-50/50 dark:lg:hover:bg-slate-800/50 lg:p-4 rounded-xl">
            <div className="z-10 sm:col-span-8">
              <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200 mb-2">
                <a
                  className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:text-blue-600 group/link text-base"
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span>{project.title}</span>
                </a>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <li key={tIdx}>
                    <div className="flex items-center rounded-full bg-indigo-50 dark:bg-indigo-900/30 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-300">
                      {tech}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-sm text-slate-600 dark:text-slate-400">
        <p>
          Want to know more? Check out my{" "}
          <a
            href="https://personal-portofolio-flax-tau.vercel.app/"
            target="_blank"
            rel="noreferrer"
            className="font-medium text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 underline underline-offset-2"
          >
            Full Portfolio
          </a>
        </p>
      </div>
    </section>
  );
}
