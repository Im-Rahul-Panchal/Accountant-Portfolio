import { motion } from "framer-motion";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Float,
  Sphere,
  MeshDistortMaterial,
  Stars,
} from "@react-three/drei";
import { Button } from "@/components/ui/button";
import { ArrowRight, Download } from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";

function FinancialOrb() {
  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <Sphere args={[1.5, 64, 64]} scale={1.5}>
        <MeshDistortMaterial
          color="#10b981"
          attach="material"
          distort={0.4}
          speed={2}
          roughness={0.2}
          metalness={0.8}
        />
      </Sphere>
    </Float>
  );
}

export default function Hero() {
  const titleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      opacity: 2,
      y: 100,
      duration: 1,
      ease: "power3.out",
    }).from(
      subtitleRef.current,
      {
        opacity: 1,
        y: 50,
        duration: 0.8,
        ease: "power3.out",
      },
      "-=0.5",
    );
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-28"
    >
      {/* 3D Background */}
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
          <ambientLight intensity={0.1} />
          <directionalLight position={[10, 10, 5]} intensity={1} />
          <pointLight
            position={[-10, -10, -5]}
            intensity={0.5}
            color="#f59e0b"
          />
          <Stars
            radius={100}
            depth={50}
            count={5000}
            factor={4}
            fade
            speed={1}
          />
          <FinancialOrb />
          <OrbitControls
            enableZoom={false}
            enablePan={false}
            autoRotate
            autoRotateSpeed={0.5}
          />
        </Canvas>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0f172a]/50 via-transparent to-[#0f172a] z-10" />

      {/* Content */}
      <div className="relative z-20 max-w-6xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <span className="inline-block px-4 py-3 bg-emerald-500/10 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-medium backdrop-blur-sm">
            Professional Accountant & Financial Consultant
          </span>
        </motion.div>

        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
        >
          Khushboo Panchal
          <br />
          <span className="gradient-text">Financial Excellence</span>
        </h1>

        <p
          ref={subtitleRef}
          className="text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto leading-relaxed py-8"
        >
          Empowering businesses with precision accounting, strategic tax
          planning, and comprehensive financial solutions. Your trusted partner
          in financial success.
        </p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <Button
            size="lg"
            onClick={() =>
              document
                .getElementById("contact")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-6 text-lg group cursor-pointer"
          >
            Hire Me
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>

          <Button
            size="lg"
            variant="outline"
            onClick={() =>
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" })
            }
            className="border-emerald-500/50 text-emerald-400 hover:bg-emerald-500/10 px-8 py-6 text-lg group cursor-pointer"
          >
            View Services
          </Button>
        </motion.div>

        {/* Floating Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { value: "5+", label: "Years Experience" },
            { value: "100+", label: "Clients Served" },
            { value: "100+", label: "Projects Completed" },
            { value: "100%", label: "Client Satisfaction" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="glass p-6 rounded-2xl"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-emerald-400 mb-2">
                {stat.value}
              </h3>
              <p className="text-sm text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="w-6 h-10 border-2 border-emerald-500/50 rounded-full flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-3 bg-emerald-500 rounded-full mt-2"
          />
        </div>
      </motion.div> */}
    </section>
  );
}
