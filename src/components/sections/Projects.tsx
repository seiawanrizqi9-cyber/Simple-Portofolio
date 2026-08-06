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
          <div key={idx} className="group relative transition-all lg:hover:!opacity-100 lg:hover:bg-slate-50/50 dark:lg:hover:bg-slate-800/50 lg:p-4 rounded-xl border border-transparent dark:hover:border-slate-700/50">
            <h3 className="font-medium leading-snug text-slate-900 dark:text-slate-200">
              <button
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 font-medium leading-tight text-slate-900 dark:text-slate-200 hover:text-primary focus-visible:text-primary group/link text-base text-left"
              >
                <span className="material-symbols-outlined text-sm opacity-50 group-hover:opacity-100 transition-opacity">folder</span>
                <span>{project.title}</span>
              </button>
            </h3>
          </div>
        ))}
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
