"use client";

import { motion } from "framer-motion";
import { processSteps } from "../data/content";

export function Process() {
  return (
    <section className="bg-slate-50 py-24 dark:bg-[#080a0e]">
      <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-10">
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-black tracking-tight text-slate-900 sm:text-5xl dark:text-white">
            How We Build
          </h2>
        </div>

        <div className="relative mx-auto max-w-[1000px]">
          {/* Connecting line */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-slate-200 dark:bg-slate-800 md:block" />

          <div className="space-y-12 md:space-y-0">
            {processSteps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={step.number}
                  className="relative flex flex-col items-center md:flex-row md:justify-center"
                >
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className={`flex w-full md:w-1/2 ${
                      isEven ? "md:justify-end md:pr-12" : "md:justify-start md:pl-12 md:order-2"
                    }`}
                  >
                    <div className="relative rounded-3xl border border-slate-200 bg-white p-8 shadow-sm dark:border-slate-800 dark:bg-[#11161d]">
                      <div className="mb-4 text-5xl font-black text-slate-100 dark:text-slate-800">
                        {step.number}
                      </div>
                      <h3 className="mb-2 text-2xl font-bold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400">
                        {step.description}
                      </p>
                    </div>
                  </motion.div>

                  {/* Center Dot */}
                  <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.3 }}
                    className={`absolute left-1/2 top-1/2 hidden h-6 w-6 -translate-x-1/2 -translate-y-1/2 rounded-full border-4 border-white bg-purple-500 shadow-md dark:border-[#080a0e] md:block ${isEven ? "" : "md:order-1"}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
