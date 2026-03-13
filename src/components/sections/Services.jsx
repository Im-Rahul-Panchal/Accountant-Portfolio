import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Calculator, 
  FileText, 
  TrendingUp, 
  Shield, 
  Briefcase, 
  PieChart,
  FileCheck,
  Users
} from "lucide-react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectCoverflow } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

export default function Services() {
  const services = [
    {
      icon: Calculator,
      title: "Tax Planning & Filing",
      description: "Comprehensive tax planning strategies and accurate filing services including GST R1, 3B, and income tax returns.",
      features: ["GST Filing", "Income Tax", "TDS Returns", "Tax Optimization"],
      color: "from-emerald-500 to-teal-600",
    },
    {
      icon: FileText,
      title: "Bookkeeping Services",
      description: "Meticulous bookkeeping and financial record maintenance using Tally and Busy software for complete accuracy.",
      features: ["Daily Entries", "Bank Reconciliation", "Financial Reports", "Ledger Management"],
      color: "from-amber-500 to-orange-600",
    },
    {
      icon: TrendingUp,
      title: "Financial Consulting",
      description: "Strategic financial advice to help your business grow, optimize cash flow, and achieve financial goals.",
      features: ["Cash Flow Analysis", "Budget Planning", "Growth Strategy", "Cost Optimization"],
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Shield,
      title: "Audit Support",
      description: "Complete audit preparation and support services ensuring compliance with all regulatory requirements.",
      features: ["Audit Preparation", "Documentation", "Compliance Check", "Risk Assessment"],
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Briefcase,
      title: "Business Advisory",
      description: "Expert business advisory services to help you make informed decisions and drive business success.",
      features: ["Business Planning", "Financial Analysis", "Performance Review", "Strategic Advice"],
      color: "from-rose-500 to-red-600",
    },
    {
      icon: PieChart,
      title: "Financial Reporting",
      description: "Detailed financial reports and analysis to give you clear insights into your business performance.",
      features: ["P&L Statements", "Balance Sheets", "Cash Flow Reports", "Custom Reports"],
      color: "from-cyan-500 to-blue-600",
    },
    {
      icon: FileCheck,
      title: "Compliance Management",
      description: "Stay compliant with all statutory requirements including TDS, GST, and other regulatory filings.",
      features: ["TDS 24Q & 26Q", "GST Compliance", "ROC Filings", "Statutory Returns"],
      color: "from-green-500 to-emerald-600",
    },
    {
      icon: Users,
      title: "Payroll Management",
      description: "Efficient payroll processing and management ensuring timely salary disbursement and compliance.",
      features: ["Salary Processing", "PF & ESI", "Payslips", "Tax Deductions"],
      color: "from-violet-500 to-purple-600",
    },
  ];

  return (
    <section id="services" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e293b] to-[#0f172a]" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-emerald-500 font-semibold text-sm uppercase tracking-wider">
            What I Offer
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Professional <span className="gradient-text">Services</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Comprehensive financial solutions tailored to your business needs
          </p>
        </motion.div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-emerald-500/50 transition-all duration-300 group overflow-hidden">
                <CardContent className="p-6 relative">
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                  
                  <div className="relative z-10">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                      {service.description}
                    </p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Swiper */}
        <div className="md:hidden">
          <Swiper
            modules={[Autoplay, Pagination, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="pb-12"
          >
            {services.map((service, i) => (
              <SwiperSlide key={i} className="!w-[280px]">
                <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10">
                  <CardContent className="p-6">
                    <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-4`}>
                      <service.icon className="w-7 h-7 text-white" />
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                    <p className="text-gray-400 text-sm mb-4">{service.description}</p>
                    
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm text-gray-500">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
