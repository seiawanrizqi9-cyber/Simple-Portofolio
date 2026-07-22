import { portfolioData } from "../../data/portfolio";

export default function Skills() {
  return (
    <section id="skills" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-sm font-bold tracking-widest text-slate-900 uppercase lg:hidden mb-4">
        Skills
      </h2>
      <ul className="flex flex-wrap gap-3">
        {portfolioData.skills.map((skill, idx) => (
          <li
            key={idx}
            className="flex items-center gap-2 rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700 hover:bg-blue-100 transition-colors"
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
