"use client";

import { motion } from "framer-motion";
import { projects } from "../data/content";
import clsx from "clsx";

export function Projects() {
  return (
    <section id="projects" className="bg-slate-50 py-24 dark:bg-[#080a0e]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-16 flex max-w-[700px] flex-col gap-4">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            Selected Work
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            Products we&apos;ve designed and built.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {projects.map((project, index) => {
            // Asymmetric grid: let the first item span more rows or change sizing if needed
            const isLarge = index === 0;

            return (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={clsx(
                  "group relative overflow-hidden rounded-[2.5rem] bg-white p-2 shadow-sm dark:bg-[#11161d]",
                  isLarge ? "md:col-span-2 md:row-span-2" : "md:col-span-1"
                )}
              >
                <div
                  className={clsx(
                    "relative overflow-hidden rounded-[2rem] bg-slate-100 dark:bg-[#1a212b]",
                    isLarge ? "aspect-video md:aspect-[21/9]" : "aspect-[4/3]"
                  )}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/0 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100 z-10" />
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-slate-300 transition-transform duration-700 group-hover:scale-105 dark:text-slate-700">
                    <span className="text-4xl font-black opacity-20">{project.title}</span>
                  </div>
                  
                  <div className="absolute bottom-0 left-0 right-0 z-20 translate-y-4 p-8 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="mb-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-white/20 px-3 py-1 text-xs font-medium text-white backdrop-blur-md"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                    <p className="mt-2 text-sm text-slate-200">{project.description}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
        
        <div className="mt-12 flex justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="rounded-full border border-slate-200 bg-white px-8 py-4 text-base font-semibold text-slate-900 shadow-sm hover:bg-slate-50 dark:border-slate-800 dark:bg-[#0f141a] dark:text-white dark:hover:bg-[#1a212b]"
            >
              View All Projects
            </motion.button>
        </div>
      </div>
    </section>
  );
}
