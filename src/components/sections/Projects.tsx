import { useState } from "react";
import { portfolioData } from "../../data/portfolio";

export default function Projects() {
  const [showModal, setShowModal] = useState(false);

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
                <button
                  onClick={() => setShowModal(true)}
                  className="inline-flex items-baseline font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-blue-600 dark:hover:text-blue-400 focus-visible:text-blue-600 group/link text-base text-left"
                >
                  <span>{project.title}</span>
                </button>
              </h3>
              <p className="mt-2 text-sm leading-normal text-slate-600 dark:text-slate-400">
                {project.description}
              </p>
              <ul className="mt-4 flex flex-wrap gap-2">
                {project.technologies.map((tech, tIdx) => (
                  <li key={tIdx}>
                    <div className="flex items-center rounded-full bg-indigo-50 dark:bg-indigo-500/20 px-3 py-1 text-xs font-medium text-indigo-600 dark:text-indigo-200">
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

      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/50 backdrop-blur-sm">
          <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 max-w-sm w-full shadow-xl">
            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Notice</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-6">
              If you want to know more about this project, please check the full portfolio link at the bottom of the page!
            </p>
            <button
              onClick={() => setShowModal(false)}
              className="w-full py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
