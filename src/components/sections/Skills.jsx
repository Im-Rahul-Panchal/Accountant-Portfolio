import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator,
  FileText,
  FileCheck,
  Receipt,
  Laptop,
  Database,
  BarChart3,
  FileSpreadsheet,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { 
    title: "Tally Accounting", 
    icon: Calculator, 
    level: 95,
    color: "from-emerald-500 to-teal-600" 
  },
  { 
    title: "Bookkeeping", 
    icon: FileText, 
    level: 98,
    color: "from-blue-500 to-indigo-600" 
  },
  { 
    title: "GST R1 & 3B Filing", 
    icon: FileCheck, 
    level: 92,
    color: "from-amber-500 to-orange-600" 
  },
  { 
    title: "TDS 24Q & 26Q", 
    icon: Receipt, 
    level: 90,
    color: "from-purple-500 to-pink-600" 
  },
  { 
    title: "MS Office Suite", 
    icon: Laptop, 
    level: 94,
    color: "from-cyan-500 to-blue-600" 
  },
  { 
    title: "Busy Software", 
    icon: Database, 
    level: 88,
    color: "from-rose-500 to-red-600" 
  },
  { 
    title: "Financial Analysis", 
    icon: BarChart3, 
    level: 91,
    color: "from-green-500 to-emerald-600" 
  },
  { 
    title: "Excel Advanced", 
    icon: FileSpreadsheet, 
    level: 96,
    color: "from-violet-500 to-purple-600" 
  },
];

function SkillBar({ skill, index }) {
  const [width, setWidth] = useState(0);
  const barRef = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setTimeout(() => setWidth(skill.level), index * 100);
        }
      },
      { threshold: 0.5 }
    );

    if (barRef.current) observer.observe(barRef.current);
    return () => observer.disconnect();
  }, [skill.level, index]);

  return (
    <motion.div
      ref={barRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      whileHover={{ scale: 1.02 }}
      className="skill-card"
    >
      <Card className="bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-3">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${skill.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <skill.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-semibold text-white group-hover:text-emerald-400 transition-colors">
                {skill.title}
              </h3>
            </div>
            <span className="text-2xl font-bold gradient-text">{skill.level}%</span>
          </div>

          {/* Progress Bar */}
          <div className="relative h-3 bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${width}%` }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
            >
              <div className="absolute inset-0 bg-white/20 animate-pulse" />
            </motion.div>
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default function Skills() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".skill-card", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" ref={sectionRef} className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 right-1/3 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Mastery in accounting tools and financial management systems
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
