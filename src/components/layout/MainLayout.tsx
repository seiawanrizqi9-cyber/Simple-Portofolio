import { portfolioData } from "../../data/portfolio";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Projects from "../sections/Projects";
import Footer from "./Footer";
import ThemeToggle from "../ThemeToggle";
import logo from "../../assets/letter-r.png";

export default function MainLayout() {
  return (
    <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 font-sans md:px-12 md:py-20 lg:px-24 lg:py-0">
      <div className="lg:flex lg:justify-between lg:gap-4">
        
        {/* Left Side (Sticky) */}
        <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
          <div>
            <div className="flex items-center justify-between mb-6">
              <img className="w-24 h-24 rounded-full ring-2 ring-slate-200 dark:ring-slate-700" src={logo} alt="Rizqi Logo" />
              <ThemeToggle />
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 sm:text-5xl">
              {portfolioData.bio.name}
            </h1>
            <h2 className="mt-3 text-lg font-medium tracking-tight text-slate-700 dark:text-slate-300 sm:text-xl">
              {portfolioData.bio.role}
            </h2>
            <p className="mt-4 max-w-xs leading-normal text-slate-500 dark:text-slate-400">
              {portfolioData.bio.description}
            </p>
          </div>

          <div className="mt-8 lg:mt-0 flex flex-col gap-6">
            <div className="flex gap-5">
              <a href={portfolioData.bio.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href={portfolioData.bio.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-blue-700 transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href={portfolioData.bio.socials.email} className="text-slate-400 hover:text-red-500 transition-colors">
                <span className="sr-only">Email</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 12.713l-11.985-9.713h23.97l-11.985 9.713zm0 2.574l-12-9.725v15.438h24v-15.438l-12 9.725z" />
                </svg>
              </a>
            </div>
            <div className="mt-4">
              <Footer />
            </div>
          </div>
        </header>

        {/* Right Side (Scrollable) */}
        <main className="pt-24 lg:w-[52%] lg:pt-24 lg:pb-12">
          <About />
          <Skills />
          <Projects />
        </main>
      </div>
    </div>
  );
}
