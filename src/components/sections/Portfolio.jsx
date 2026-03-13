import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Building2, Store, Factory, Laptop, TrendingUp, Users } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function Portfolio() {
  const projects = [
    {
      icon: Building2,
      title: "Corporate Tax Restructuring",
      client: "Tech Solutions Pvt Ltd",
      category: "Tax Planning",
      description: "Comprehensive tax restructuring resulting in 30% tax savings while maintaining full compliance.",
      results: ["30% Tax Savings", "100% Compliance", "Optimized Structure"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: Store,
      title: "Retail Chain Bookkeeping",
      client: "Fashion Retail Group",
      category: "Bookkeeping",
      description: "Implemented automated bookkeeping system for 15+ retail outlets with real-time reporting.",
      results: ["15+ Outlets", "Real-time Reports", "Error-free Records"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: Factory,
      title: "Manufacturing GST Compliance",
      client: "Industrial Manufacturing Co",
      category: "GST Filing",
      description: "Streamlined GST compliance process for manufacturing unit with complex supply chain.",
      results: ["Zero Penalties", "Timely Filing", "ITC Optimization"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Laptop,
      title: "Startup Financial Setup",
      client: "Digital Startup Inc",
      category: "Financial Consulting",
      description: "Complete financial infrastructure setup for tech startup from incorporation to funding.",
      results: ["Full Setup", "Investor Ready", "Compliance Framework"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: TrendingUp,
      title: "Business Growth Advisory",
      client: "Export Trading House",
      category: "Business Advisory",
      description: "Strategic financial advisory leading to 45% revenue growth and improved margins.",
      results: ["45% Growth", "Better Margins", "Export Benefits"],
      color: "from-rose-500 to-red-600",
    },
    {
      icon: Users,
      title: "Multi-entity Consolidation",
      client: "Group of Companies",
      category: "Financial Reporting",
      description: "Consolidated financial reporting for group of 8 companies with inter-company transactions.",
      results: ["8 Companies", "Consolidated Reports", "Clear Insights"],
      color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <section id="portfolio" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
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
            Case Studies
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Success <span className="gradient-text">Stories</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Real results delivered for real businesses across various industries
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {projects.map((project, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden">
                  <CardContent className="p-6 relative">
                    {/* Gradient Overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                    
                    <div className="relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${project.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <project.icon className="w-8 h-8 text-white" />
                      </div>

                      {/* Category Badge */}
                      <span className="inline-block px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-xs font-medium mb-3">
                        {project.category}
                      </span>

                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 group-hover:text-emerald-400 transition-colors">
                        {project.title}
                      </h3>

                      {/* Client */}
                      <p className="text-sm text-gray-500 mb-3">{project.client}</p>

                      {/* Description */}
                      <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Results */}
                      <div className="space-y-2 pt-4 border-t border-white/10">
                        <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                          Key Results
                        </p>
                        {project.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <span className="text-sm text-gray-300">{result}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
