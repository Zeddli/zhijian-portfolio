"use client";
import Link from "next/link";
import {
  Github,
  Linkedin,
  Mail,
} from "lucide-react";

export function SimpleCenteredContactForm() {
  return (
    <div className="bg-slate-50 dark:bg-slate-900 w-full flex items-center justify-center font-[var(--font-inter)]">
      <div className="flex relative px-4 z-20 items-center w-full justify-center py-10">
        <div className="mx-auto w-full max-w-lg bg-white dark:bg-slate-950 px-4 md:px-10 py-8 shadow-lg rounded-3xl border border-slate-200 dark:border-slate-800">
          <div>
            <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-slate-800 dark:text-white">
              Let&apos;s Work Together
            </h1>
            <p className="mt-4 text-slate-600 dark:text-slate-400 text-sm max-w-sm">
              Interested in collaborating? Drop me a message and I&apos;ll get back to you soon.
            </p>
          </div>

          <div className="py-10">
            <div>
              <form action="https://getform.io/f/bxoyeeva" method="POST" className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium leading-6 text-slate-700 dark:text-slate-400"
                  >
                    Name
                  </label>
                  <div className="mt-2">
                    <input
                      id="name"
                      name="name"
                      type="text"
                      placeholder="Your name"
                      className="block w-full bg-white dark:bg-slate-900 px-4 rounded-md border border-slate-300 dark:border-slate-700 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none sm:text-sm dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium leading-6 text-slate-700 dark:text-slate-400"
                  >
                    Email address
                  </label>
                  <div className="mt-2">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="your.email@example.com"
                      className="block w-full bg-white dark:bg-slate-900 px-4 rounded-md border border-slate-300 dark:border-slate-700 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none sm:text-sm dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium leading-6 text-slate-700 dark:text-slate-400"
                  >
                    Company <span className="text-slate-400">(optional)</span>
                  </label>
                  <div className="mt-2">
                    <input
                      id="company"
                      name="company"
                      type="text"
                      placeholder="Your company name"
                      className="block w-full bg-white dark:bg-slate-900 px-4 rounded-md border border-slate-300 dark:border-slate-700 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none sm:text-sm dark:text-white transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium leading-6 text-slate-700 dark:text-slate-400"
                  >
                    Message
                  </label>
                  <div className="mt-2">
                    <textarea
                      rows={5}
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      className="block w-full bg-white dark:bg-slate-900 px-4 rounded-md border border-slate-300 dark:border-slate-700 py-2.5 text-slate-800 placeholder:text-slate-400 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 focus:outline-none sm:text-sm dark:text-white transition-colors resize-none"
                    />
                  </div>
                </div>

                <div>
                  <button className="bg-emerald-600 relative z-10 hover:bg-emerald-700 text-white text-sm md:text-sm transition-colors font-medium duration-200 rounded-lg px-6 py-3 flex items-center justify-center w-full shadow-sm">
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </div>

          <div className="border-t border-slate-200 dark:border-slate-800 pt-6">
            <div className="text-center">
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300 mb-4">
                Or reach out directly
              </h3>
              <div className="space-y-3">
                <div className="flex items-center justify-center space-x-2">
                  <Mail className="h-4 w-4 text-slate-500" />
                  <Link 
                    href="mailto:hello@yourname.com" 
                    className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
                  >
                    zhijiandev23@gmail.com
                  </Link>
                </div>
                <div className="flex items-center justify-center space-x-4">
                  <Link 
                    href="https://www.linkedin.com/in/sam-zhi-jian-6907182b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                    className="flex items-center space-x-1 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    <Linkedin className="h-4 w-4" />
                    <span>LinkedIn</span>
                  </Link>
                  <Link 
                    href="https://github.com/Zeddli" 
                    className="flex items-center space-x-1 text-sm text-slate-600 hover:text-emerald-600 transition-colors"
                  >
                    <Github className="h-4 w-4" />
                    <span>GitHub</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}