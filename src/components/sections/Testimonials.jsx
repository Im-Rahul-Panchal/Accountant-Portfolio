import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import { Quote, Star } from "lucide-react";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/pagination";

export default function Testimonials() {
  const [quoteAnimation, setQuoteAnimation] = useState(null);

  useEffect(() => {
    // Simple quote animation data
    const animationData = {
      v: "5.5.7",
      fr: 60,
      ip: 0,
      op: 120,
      w: 100,
      h: 100,
      nm: "Quote",
      ddd: 0,
      assets: [],
      layers: [],
    };
    setQuoteAnimation(animationData);
  }, []);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "CEO, Tech Solutions Pvt Ltd",
      company: "Technology",
      rating: 5,
      text: "Khushboo's expertise in tax planning saved our company significant costs. Her attention to detail and proactive approach is commendable. Highly recommended for any business looking for reliable accounting services.",
      avatar: "RK",
    },
    {
      name: "Priya Sharma",
      role: "Owner, Fashion Retail Group",
      company: "Retail",
      rating: 5,
      text: "Managing accounts for 15 retail outlets was challenging until we found Khushboo. She implemented a seamless bookkeeping system that gives us real-time insights. Absolutely professional!",
      avatar: "PS",
    },
    {
      name: "Amit Patel",
      role: "Director, Industrial Manufacturing Co",
      company: "Manufacturing",
      rating: 5,
      text: "GST compliance was a nightmare for our manufacturing unit. Khushboo simplified everything and ensured we never missed a deadline. Her knowledge of tax laws is exceptional.",
      avatar: "AP",
    },
    {
      name: "Sneha Reddy",
      role: "Founder, Digital Startup Inc",
      company: "Technology",
      rating: 5,
      text: "As a startup, we needed someone who understood our unique needs. Khushboo set up our entire financial infrastructure and made us investor-ready. She's been invaluable to our growth.",
      avatar: "SR",
    },
    {
      name: "Vikram Singh",
      role: "MD, Export Trading House",
      company: "Export/Import",
      rating: 5,
      text: "Khushboo's strategic financial advisory helped us achieve 45% revenue growth. Her insights into export benefits and compliance have been game-changing for our business.",
      avatar: "VS",
    },
    {
      name: "Meera Joshi",
      role: "CFO, Group of Companies",
      company: "Conglomerate",
      rating: 5,
      text: "Consolidating financials for 8 companies was complex. Khushboo handled it with ease, providing clear insights and maintaining perfect accuracy. A true professional!",
      avatar: "MJ",
    },
  ];

  return (
    <section id="testimonials" className="py-24 px-6 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-amber-500 rounded-full blur-3xl" />
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
            Client Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            What Clients <span className="gradient-text">Say</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Don't just take my word for it - hear from satisfied clients
          </p>
        </motion.div>

        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="pb-12"
        >
          {testimonials.map((testimonial, i) => (
            <SwiperSlide key={i}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="h-full"
              >
                <Card className="h-full bg-gradient-to-br from-white/5 to-white/[0.02] border-white/10 hover:border-emerald-500/50 transition-all duration-300 group">
                  <CardContent className="p-8 relative">
                    {/* Quote Icon */}
                    <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity">
                      <Quote className="w-16 h-16 text-emerald-500" />
                    </div>

                    {/* Rating */}
                    <div className="flex gap-1 mb-4">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star
                          key={idx}
                          className="w-4 h-4 fill-amber-500 text-amber-500"
                        />
                      ))}
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-300 mb-6 leading-relaxed italic relative z-10">
                      "{testimonial.text}"
                    </p>

                    {/* Author Info */}
                    <div className="flex items-center gap-4 pt-6 border-t border-white/10">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white font-bold">
                        {testimonial.avatar}
                      </div>
                      <div>
                        <h4 className="font-semibold text-white">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {testimonial.role}
                        </p>
                        <p className="text-xs text-emerald-500">
                          {testimonial.company}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Trust Badges */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "100%", label: "Client Satisfaction" },
            { value: "100+", label: "Happy Clients" },
            { value: "5+", label: "Years Experience" },
            { value: "100+", label: "Projects Completed" },
          ].map((stat, i) => (
            <div key={i} className="text-center glass p-6 rounded-2xl">
              <h3 className="text-3xl font-bold gradient-text mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
