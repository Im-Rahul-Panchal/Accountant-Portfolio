import { motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Briefcase, MapPin, Calendar } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    year: "2025",
    title: "Accounts Executive",
    company: "Gupta Pawan & Co (Young and Right LLP)",
    location: "Delhi",
    duration: "Jul 2025 - Aug 2025",
    description:
      "Led comprehensive accounting operations including GST filing, TDS compliance, and financial reporting for multiple clients.",
    achievements: [
      "Managed 50+ client accounts",
      "100% on-time GST filing",
      "Implemented automated reporting systems",
    ],
  },
  {
    year: "2023 - 2025",
    title: "Accounts Executive",
    company: "Singh and Associates",
    location: "Delhi",
    duration: "May 2023 - May 2025",
    description:
      "Handled bookkeeping, tax planning, and financial documentation for diverse business clients across various industries.",
    achievements: [
      "Processed 200+ tax returns",
      "Maintained 99.9% accuracy rate",
      "Reduced client tax liability by 25% average",
    ],
  },
  {
    year: "2025 - Present",
    title: "Accounts Executive",
    company: "Fintriangle Services Pvt Ltd",
    location: "Delhi",
    duration: "Sep 2025 - Present",
    description:
      "Working as an Accounts Executive handling GST, bookkeeping, and tax-related compliance while managing financial records using Busy accounting software.",
    achievements: [
      "GST filing and compliance management",
      "Bookkeeping and accounting records maintenance",
      "Handled E-Way Bills and TDS documentation",
      "Worked with Busy Accounting Software",
      "Managed Income Tax and ESI related tasks",
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef();
  const timelineRef = useRef();

  // useEffect(() => {
  //   const ctx = gsap.context(() => {
  //     gsap.from(".timeline-item", {
  //       opacity: 0,
  //       x: -100,
  //       duration: 1,
  //       stagger: 0.3,
  //       ease: "power3.out",
  //       scrollTrigger: {
  //         trigger: timelineRef.current,
  //         start: "top 70%",
  //         end: "bottom 20%",
  //       },
  //     });
  //   }, sectionRef);

  //   return () => ctx.revert();
  // }, []);

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
            Career Journey
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            A track record of excellence in accounting and financial management
          </p>
        </motion.div>

        <div ref={timelineRef} className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 via-amber-500 to-emerald-500" />

          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className={`timeline-item relative mb-16 ${
                i % 2 === 0 ? "md:pr-1/2 md:text-right" : "md:pl-1/2 md:ml-auto"
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 -ml-2 rounded-full bg-emerald-500 border-4 border-[#0f172a] z-10 shadow-lg shadow-emerald-500/50" />

              {/* Content Card */}
              <div className="ml-16 md:ml-0 glass p-8 rounded-2xl hover:shadow-premium transition-all duration-300 group">
                {/* Year Badge */}
                <div
                  className={`inline-block px-4 py-2 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full text-white text-sm font-bold mb-4`}
                >
                  {exp.year}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                  {exp.title}
                </h3>

                {/* Company */}
                <div className="flex items-center gap-2 text-gray-300 mb-2 flex-wrap">
                  <Briefcase className="w-4 h-4 text-emerald-500" />
                  <span className="font-semibold">{exp.company}</span>
                </div>

                {/* Location & Duration */}
                <div className="flex items-center gap-4 text-sm text-gray-400 mb-4 flex-wrap">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{exp.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="space-y-2 pt-4 border-t border-white/10">
                  <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                    Key Achievements
                  </p>
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                      <span className="text-sm text-gray-300">
                        {achievement}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
