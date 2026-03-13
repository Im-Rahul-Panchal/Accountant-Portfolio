import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Award, Target, Users, TrendingUp } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import img from "../../assets/images/image.png";

gsap.registerPlugin(ScrollTrigger);

function AnimatedCounter({ end, duration = 2 }) {
  const [count, setCount] = useState(0);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          let start = 0;
          const increment = end / (duration * 60);
          const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
              setCount(end);
              clearInterval(timer);
            } else {
              setCount(Math.floor(start));
            }
          }, 1000 / 60);
        }
      },
      { threshold: 0.5 },
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return <span ref={ref}>{count}</span>;
}

export default function About() {
  const sectionRef = useRef();

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".about-card", {
        opacity: 0,
        y: 100,
        stagger: 0.2,
        duration: 1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 70%",
          end: "bottom 20%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: Award,
      value: 5,
      suffix: "+",
      label: "Years Experience",
      color: "text-emerald-500",
    },
    {
      icon: Users,
      value: 200,
      suffix: "+",
      label: "Happy Clients",
      color: "text-amber-500",
    },
    {
      icon: Target,
      value: 500,
      suffix: "+",
      label: "Projects Done",
      color: "text-blue-500",
    },
    {
      icon: TrendingUp,
      value: 100,
      suffix: "%",
      label: "Success Rate",
      color: "text-purple-500",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
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
            About Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Your Trusted{" "}
            <span className="gradient-text">Financial Partner</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Delivering excellence in accounting and financial management with
            precision and integrity
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          {/* Left: Image/Visual */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="glass p-5 rounded-3xl shadow-premium">
              <div className="bg-gradient-to-br from-emerald-500/20 to-amber-500/20 rounded-2xl flex items-center justify-center">
                <img
                  src={img}
                  alt="analytics"
                  className="w-144 h-145 object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 glass p-6 rounded-2xl">
              <p className="text-4xl font-bold text-red-800">5+</p>
              <p className="text-sm text-gray-400">Years of Excellence</p>
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-3xl font-bold mb-6">
              Organized & Detail-Focused Professional
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              With over 5 years of experience in accounting and financial
              management, I specialize in helping businesses maintain accurate
              records, ensure compliance, and achieve financial clarity.
            </p>
            <p className="text-gray-300 mb-6 leading-relaxed">
              My expertise spans across bookkeeping, GST filing, TDS compliance,
              and financial documentation using industry-leading tools like
              Tally and Busy software.
            </p>

            <div className="space-y-4">
              {[
                "Expert in Tally & Busy Accounting Software",
                "GST R1 & 3B Filing Specialist",
                "TDS 24Q & 26Q Compliance",
                "Comprehensive Bookkeeping Services",
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <div className="w-2 h-2 bg-emerald-500 rounded-full" />
                  <span className="text-gray-300">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="about-card glass p-8 rounded-2xl text-center group hover:shadow-premium transition-all duration-300"
            >
              <stat.icon className={`w-12 h-12 mx-auto mb-4 ${stat.color}`} />
              <h4 className="text-4xl font-bold mb-2">
                <AnimatedCounter end={stat.value} />
                {stat.suffix}
              </h4>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
