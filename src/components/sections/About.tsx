import { portfolioData } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="mb-12 scroll-mt-16 lg:mb-20 lg:scroll-mt-24">
      <h2 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200 mb-6">
        About
      </h2>
      <p className="mb-4 text-slate-600 dark:text-slate-400 leading-relaxed">
        {portfolioData.about}
      </p>
    </section>
  );
}
