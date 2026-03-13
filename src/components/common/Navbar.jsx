import { motion, useScroll, useTransform } from "framer-motion";
import { useState, useEffect } from "react";
import { TrendingUp, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const backgroundColor = useTransform(
    scrollY,
    [0, 100],
    ["rgba(15, 23, 42, 0)", "rgba(15, 23, 42, 0.95)"],
  );

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.nav
      style={{ backgroundColor }}
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? "backdrop-blur-xl border-b border-white/10 shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <motion.a
            href="#hero"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 text-xl font-bold"
          >
            <TrendingUp className="w-6 h-6 text-emerald-500" />
            <span className="gradient-text">Khushboo Panchal</span>
          </motion.a>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex gap-8 text-sm font-medium">
            {navLinks.map((link, i) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
              >
                <a
                  href={link.href}
                  className="hover:text-emerald-500 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-500 group-hover:w-full transition-all duration-300" />
                </a>
              </motion.li>
            ))}
          </ul>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden lg:block"
          >
            <Button
              onClick={() =>
                document
                  .getElementById("contact")
                  .scrollIntoView({ behavior: "smooth" })
              }
              className="bg-emerald-500 hover:bg-emerald-600 text-white py-2 px-4 transition-colors cursor-pointer"
            >
              Hire Me
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white hover:text-emerald-500 transition-colors focus:outline-none z-50 relative p-2 rounded-md cursor-pointer"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden mt-4 pb-4"
          >
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block py-2 hover:text-emerald-500 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li>
                <Button
                  onClick={() => {
                    setIsOpen(false);
                    document
                      .getElementById("contact")
                      .scrollIntoView({ behavior: "smooth" });
                  }}
                  className="w-full bg-emerald-500 hover:bg-emerald-600 text-white py-3 text-center cursor-pointer"
                >
                  Hire Me
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
