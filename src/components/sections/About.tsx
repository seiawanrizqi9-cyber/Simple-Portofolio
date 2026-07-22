import { portfolioData } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24">
      <h2 className="text-sm font-bold tracking-widest text-slate-900 uppercase lg:hidden mb-4">
        About
      </h2>
      <p className="mb-4 text-slate-600 leading-relaxed">
        {portfolioData.about}
      </p>
    </section>
  );
}
