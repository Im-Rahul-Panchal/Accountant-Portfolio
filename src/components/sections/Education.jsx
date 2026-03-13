import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { GraduationCap, Award, BookOpen } from "lucide-react";

const education = [
  {
    title: "Bachelor of Arts",
    institution: "Ramanujan College (Delhi University)",
    date: "Passed in Jun 2022",
    icon: GraduationCap,
    color: "from-emerald-500 to-teal-600",
    description: "Comprehensive undergraduate program with focus on analytical and communication skills.",
  },
  {
    title: "Computer Course - Diploma in IT",
    institution: "Micro Computer Center",
    date: "Passed in Nov 2022",
    icon: BookOpen,
    color: "from-blue-500 to-indigo-600",
    description: "Advanced training in computer applications, software tools, and digital literacy.",
  },
  {
    title: "NPTT Course - Teacher Training",
    institution: "Lal Bahadur Shastri Institute",
    date: "Passed in May 2021",
    icon: Award,
    color: "from-amber-500 to-orange-600",
    description: "Professional training program focused on teaching methodologies and educational practices.",
  },
];

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
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
            Academic Background
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Education & <span className="gradient-text">Certifications</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Strong academic foundation supporting professional excellence
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {education.map(({ title, institution, date, icon: Icon, color, description }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-8 text-center relative">
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                      {title}
                    </h3>

                    {/* Institution */}
                    <p className="text-gray-300 mb-2 font-medium">{institution}</p>

                    {/* Date */}
                    <p className="text-emerald-500 text-sm mb-4">{date}</p>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
