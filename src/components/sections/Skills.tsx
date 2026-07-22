import { portfolioData } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mb-12 scroll-mt-16 lg:mb-20 lg:scroll-mt-24">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200 mb-6">
        Tech Stack
      </h2>
      <ul className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 rounded-full bg-blue-50 dark:bg-blue-900/30 px-4 py-2 text-sm font-medium text-blue-700 dark:text-blue-300 hover:bg-blue-100 dark:hover:bg-blue-900/50 transition-colors"
          >
            {skill.icon && (
              <img src={skill.icon} alt={skill.name} className="w-4 h-4 object-contain" />
            )}
            {skill.name}
          </li>
        ))}
      </ul>
    </section>
  );
}
