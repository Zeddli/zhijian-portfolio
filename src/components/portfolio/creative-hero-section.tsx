"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  ArrowDown, 
  Download, 
  Mail, 
  Github, 
  Linkedin, 
  Code2, 
  Sparkles,
  MousePointer2,
  Coffee,
  Zap,
  Rocket
} from "lucide-react";

// Background Beams Component
const BackgroundBeamsWithCollision = () => {
  const beams = Array.from({ length: 8 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden">
      {beams.map((beam) => (
        <motion.div
          key={beam}
          className="absolute h-px bg-gradient-to-r from-transparent via-accent/20 to-transparent"
          style={{
            width: "200%",
            left: "-50%",
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            x: ["-100%", "100%"],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8 + Math.random() * 4,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "linear",
          }}
        />
      ))}
    </div>
  );
};

// Floating Particles Component
const FloatingParticles = () => {
  const particles = Array.from({ length: 15 }, (_, i) => i);
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle}
          className="absolute w-2 h-2 rounded-full bg-accent/30"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -20, 0],
            x: [0, Math.random() * 20 - 10, 0],
            opacity: [0.3, 0.8, 0.3],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

// Grid Pattern Overlay
const GridPattern = () => {
  return (
    <div 
      className="absolute inset-0 opacity-20"
      style={{
        backgroundImage: `radial-gradient(circle at 1px 1px, rgba(16,185,129,0.15) 1px, transparent 0)`,
        backgroundSize: '40px 40px',
      }}
    />
  );
};

// Typewriter Effect Hook
const useTypewriter = (text: string, speed: number = 100) => {
  const [displayText, setDisplayText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < text.length) {
        setDisplayText(text.slice(0, i + 1));
        i++;
      } else {
        setIsComplete(true);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return { displayText, isComplete };
};

// Mouse Follow Effect
const MouseFollower = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 25, stiffness: 700 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 rounded-full bg-accent/30 mix-blend-difference pointer-events-none z-50 hidden md:block"
      style={{ x, y, translateX: "-50%", translateY: "-50%" }}
      animate={{ scale: [1, 1.2, 1] }}
      transition={{ duration: 2, repeat: Infinity }}
    />
  );
};

// Animated Avatar Component
const AnimatedAvatar = () => {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      <motion.div
        className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden"
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glowing border effect */}
        <motion.div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-accent via-primary to-accent"
          animate={{ rotate: 360 }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
        <div className="absolute inset-2 rounded-full bg-background flex items-center justify-center">
          <div className="w-full h-full rounded-full bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
            <Code2 className="w-20 h-20 text-accent" />
          </div>
        </div>
        
        {/* Floating icons around avatar */}
        {[Coffee, Zap, Rocket, Sparkles].map((Icon, index) => (
          <motion.div
            key={index}
            className="absolute text-accent/60"
            style={{
              top: `${20 + Math.cos((index * Math.PI) / 2) * 120}px`,
              left: `${20 + Math.sin((index * Math.PI) / 2) * 120}px`,
            }}
            animate={{
              y: [0, -10, 0],
              rotate: [0, 10, -10, 0],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.5,
            }}
          >
            <Icon className="w-6 h-6" />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

// Floating Action Button
const FloatingActionButton = ({ children, onClick, delay = 0, className = "" }: {
  children: React.ReactNode;
  onClick?: () => void;
  delay?: number;
  className?: string;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      whileHover={{ 
        scale: 1.05, 
        y: -5,
        boxShadow: "0 20px 40px rgba(16,185,129,0.3)"
      }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      <Button
        onClick={onClick}
        className="group relative overflow-hidden bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent text-white border-0 h-12 px-8 rounded-full font-medium shadow-lg"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
          initial={{ x: "-100%" }}
          whileHover={{ x: "100%" }}
          transition={{ duration: 0.6 }}
        />
        <span className="relative z-10 flex items-center gap-2">
          {children}
        </span>
      </Button>
    </motion.div>
  );
};

// Main Hero Component
export const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const { displayText: typewriterText, isComplete } = useTypewriter("Full-Stack Developer & AI Enthusiast", 80);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const specialties = [
    "React & Next.js Expert",
    "TypeScript Expert", 
    "AI Enthusiast",
    "Backend Development",
    "Web3 & Blockchain",
  ];

  const handleScroll = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const socialLinks = [
    { icon: Github, href: "https://github.com/Zeddli", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/in/sam-zhi-jian-6907182b3?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
    { icon: Mail, href: "https://mail.google.com/mail/?view=cm&fs=1&to=zhijiandev23@example.com&su=SUBJECT&body=ENQUIRY", label: "Email" }
  ];

  if (!mounted) return null;

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-accent/5">
      <MouseFollower />
      <BackgroundBeamsWithCollision />
      <FloatingParticles />
      <GridPattern />
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center space-y-8">
          
          {/* Animated Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block"
          >
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-accent/10 text-accent border border-accent/20 rounded-full">
              <motion.span
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="inline-block w-2 h-2 bg-accent rounded-full mr-2"
              />
              Available for new opportunities
            </Badge>
          </motion.div>

          {/* Main Heading with Text Reveal */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="space-y-4"
          >
            <motion.h1 
              className="text-5xl sm:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent leading-tight"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 1, delay: 0.2 }}
            >
              Zhi Jian
              
            </motion.h1>

            {/* Typewriter Effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 }}
              className="relative"
            >
              <h2 className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground font-medium">
                {typewriterText}
                <motion.span
                  animate={{ opacity: isComplete ? 0 : 1 }}
                  transition={{ duration: 0.5, repeat: Infinity, repeatType: "reverse" }}
                  className="inline-block w-0.5 h-6 bg-accent ml-1"
                />
              </h2>
            </motion.div>
          </motion.div>

          {/* Animated Avatar */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="flex justify-center"
          >
            <AnimatedAvatar />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.5 }}
            className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed"
          >
            Crafting exceptional digital experiences through innovative code and thoughtful design. 
            Passionate about building scalable solutions that make a difference.
          </motion.p>

          {/* Specialties */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.8 }}
            className="flex flex-wrap justify-center gap-3 max-w-2xl mx-auto"
          >
            {specialties.map((specialty, index) => (
              <motion.div
                key={specialty}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Badge variant="outline" className="px-3 py-1 text-sm bg-card/50 backdrop-blur-sm border-accent/30">
                  {specialty}
                </Badge>
              </motion.div>
            ))}
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <FloatingActionButton delay={2.4}>
              <MousePointer2 className="w-4 h-4"/>
              View My Work
            </FloatingActionButton>
            
            <FloatingActionButton 
              delay={2.6}
              className="bg-card/50 backdrop-blur-sm border border-accent/30 hover:bg-card/70"
            >
              <Button variant="outline" className="bg-transparent border-accent/30 text-accent hover:bg-accent/10 h-12 px-8 rounded-full font-medium">
                <Mail className="w-4 h-4 mr-2"/>
                Get In Touch
              </Button>
            </FloatingActionButton>

            <FloatingActionButton delay={2.8}>
              <Button variant="ghost" className="text-muted-foreground hover:text-accent h-12 px-8 rounded-full font-medium">
                <Download className="w-4 h-4 mr-2" />
                Download CV
              </Button>
            </FloatingActionButton>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3 }}
            className="flex items-center justify-center gap-6 pt-8"
          >
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                className="group relative"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 3.2 + index * 0.1 }}
              >
                <div className="w-12 h-12 rounded-full bg-card/50 backdrop-blur-sm border border-accent/30 flex items-center justify-center group-hover:border-accent/60 group-hover:bg-accent/10 transition-all duration-300">
                  <social.icon className="w-5 h-5 text-muted-foreground group-hover:text-accent transition-colors" />
                </div>
                <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={handleScroll}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-muted-foreground hover:text-accent transition-colors"
        >
          <span className="text-sm font-medium">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.div>
      </motion.div>

      <div ref={scrollRef} className="absolute bottom-0 left-0 w-1 h-1" />
    </div>
  );
};