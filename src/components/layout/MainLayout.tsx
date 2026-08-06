import { portfolioData } from "../../data/portfolio";
import Skills from "../sections/Skills";
import Footer from "./Footer";
import ThemeToggle from "../ThemeToggle";
import BadgeInteraction from "../ui/BadgeInteraction";

export default function MainLayout() {
  return (
    <div className="relative min-h-screen w-full flex flex-col font-sans transition-colors duration-500 bg-slate-50 dark:bg-background text-slate-900 dark:text-on-surface">
      {/* Atmospheric Background */}
      <div className="fixed inset-0 z-0 pointer-events-none opacity-40">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-indigo-500/20 dark:bg-primary/20 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 dark:bg-indigo-900/10 blur-[100px] rounded-full"></div>
      </div>

      {/* Header / Toggle */}
      <header className="absolute top-8 right-8 z-50 flex items-center gap-6">
        <ThemeToggle />
      </header>

      {/* Main Split Layout */}
      <main className="relative z-10 w-full flex flex-col md:flex-row px-6 md:px-16 lg:px-32">
        {/* LEFT SIDE: Badge (Sticky) - 40% */}
        <section className="w-full md:w-[40%] flex flex-col md:sticky md:top-0 md:h-screen justify-center py-20 md:py-0">
          <div className="animate-fade-up flex flex-col items-center lg:items-start w-full">
            {/* Interactive Badge */}
            <div className="w-full flex justify-center lg:justify-start">
              <BadgeInteraction />
            </div>

            <p className="text-lg text-slate-900 dark:text-secondary max-w-sm leading-relaxed mb-4 mt-0 text-center lg:text-left">
              {portfolioData.bio.description}
            </p>

            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a
                href="https://rizqisetiawan-portofolio.vercel.app/"
                target="_blank"
                rel="noreferrer"
                className="px-5 py-2.5 text-sm bg-primary text-white font-bold rounded-lg hover:translate-y-[-2px] hover:shadow-lg hover:shadow-primary/20 transition-all active:scale-95 group flex items-center gap-2"
              >
                View Portfolio
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </a>
              <button className="px-5 py-2.5 text-sm bg-white dark:bg-surface border border-slate-200 dark:border-outline text-slate-900 dark:text-on-surface font-bold rounded-lg hover:bg-slate-50 dark:hover:bg-surface-bright transition-colors active:scale-95">
                Download CV
              </button>
            </div>
          </div>
        </section>

        {/* RIGHT SIDE: Content (Scrollable) - 60% */}
        <section className="w-full md:w-[60%] flex flex-col pl-0 md:pl-16 lg:pl-24 pt-12 pb-2 md:pt-24 md:pb-4">
          <div className="w-full max-w-2xl space-y-12 animate-fade-up delay-2">
            {/* About Me */}
            <div>
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200 mb-5">
                About Me
              </h3>
              <div className="space-y-4 text-slate-900 dark:text-secondary leading-relaxed text-lg">
                <p>{portfolioData.about}</p>
              </div>
            </div>

            {/* Skills */}
            <div className="w-full">
              <Skills />
            </div>

            {/* Connect & Footer */}
            <div className="pt-0 border-t border-outline/50">
              <h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200 mb-6">
                Connect
              </h3>
              <div className="flex flex-wrap gap-8 mb-6">
                <a
                  className="group flex items-center gap-2 text-slate-500 dark:text-secondary hover:text-slate-900 dark:hover:text-on-surface transition-colors hover-underline"
                  href={portfolioData.bio.socials.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">terminal</span>
                  <span className="font-medium">GitHub</span>
                </a>
                <a
                  className="group flex items-center gap-2 text-slate-500 dark:text-secondary hover:text-slate-900 dark:hover:text-on-surface transition-colors hover-underline"
                  href={portfolioData.bio.socials.linkedin}
                  target="_blank"
                  rel="noreferrer"
                >
                  <span className="material-symbols-outlined">share</span>
                  <span className="font-medium">LinkedIn</span>
                </a>
                <a
                  className="group flex items-center gap-2 text-slate-500 dark:text-secondary hover:text-slate-900 dark:hover:text-on-surface transition-colors hover-underline"
                  href={portfolioData.bio.socials.email}
                >
                  <span className="material-symbols-outlined">
                    alternate_email
                  </span>
                  <span className="font-medium">Email</span>
                </a>
              </div>

              <Footer />
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
