"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Code2, 
  Rocket, 
  Heart, 
  Zap,
  Calendar,
  ArrowRight,
  Sparkles,
  Brain,
  Lightbulb,
  Palette
} from "lucide-react";

export const AboutMeSection = () => {
  const [activeCard, setActiveCard] = useState(0);
//   const [isTyping, setIsTyping] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const controls = useAnimation();
  const isInView = useInView(containerRef, { once: true });

  const stats = [
    { icon: Calendar, label: "Years Experience", value: 2, suffix: "+" },
    { icon: Code2, label: "Projects Completed", value: 23, suffix: "+" }
  ];

  const cards = [
    {
      title: "The Beginning",
      subtitle: "First Line of Code",
      icon: Sparkles,
      content: "It all started with a simple 'Hello, World!' that sparked an endless curiosity. What began as a hobby quickly transformed into an obsession with creating digital experiences.",
      gradient: "from-blue-500/20 to-purple-500/20",
      year: "2016"
    },
    {
      title: "The Journey",
      subtitle: "Learning & Growing",
      icon: Rocket,
      content: "From debugging midnight mysteries to architecting complex systems, every challenge became a stepping stone. I've navigated through frameworks, languages, and paradigms.",
      gradient: "from-purple-500/20 to-pink-500/20",
      year: "2017-2020"
    },
    {
      title: "The Craft",
      subtitle: "Mastering the Art",
      icon: Palette,
      content: "Code became poetry, functions became symphonies. I learned that great software isn't just about solving problems—it's about creating experiences that users love.",
      gradient: "from-pink-500/20 to-red-500/20",
      year: "2021-2022"
    },
    {
      title: "The Vision",
      subtitle: "Building the Future",
      icon: Brain,
      content: "Today, I combine technical expertise with creative vision to build applications that don't just work—they inspire. Every project is a chance to push boundaries.",
      gradient: "from-emerald-500/20 to-teal-500/20",
      year: "2023-Now"
    }
  ];

  const skills = [
    { name: "React/Next.js", level: 95, color: "bg-blue-500" },
    { name: "TypeScript", level: 90, color: "bg-blue-600" },
    { name: "Node.js/Express js", level: 85, color: "bg-green-500" },
    { name: "Nest JS", level: 80, color: "bg-yellow-500" },
    { name: "Postgres", level: 88, color: "bg-purple-500" },
    { name: "PHP", level: 75, color: "bg-pink-500" }
  ];

  const typewriterTexts = [
    "Full-Stack Developer",
    "Web3 Enthusiast",
    "Data Analytics Student"
  ];

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTextIndex((prev) => (prev + 1) % typewriterTexts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const AnimatedCounter = ({ value, suffix = "" }: { value: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (isInView) {
        const timer = setInterval(() => {
          setCount(prev => {
            const increment = Math.ceil(value / 50);
            if (prev + increment >= value) {
              clearInterval(timer);
              return value;
            }
            return prev + increment;
          });
        }, 50);
        return () => clearInterval(timer);
      }
    }, [isInView, value]);

    return <span>{count}{suffix}</span>;
  };

  const FloatingElement = ({ delay = 0, className = "" }: { delay?: number; className?: string }) => (
    <motion.div
      className={`absolute opacity-10 ${className}`}
      animate={{
        y: [0, -20, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.1, 1],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        delay,
        ease: "easeInOut"
      }}
    >
      <Code2 size={40} className="text-primary" />
    </motion.div>
  );

    const scrollToContact = () => {
        document.getElementById("contact")?.scrollIntoView({behavior: "smooth"});
    };

  return (
    <section id='about' ref={containerRef} className="min-h-screen bg-gradient-to-br from-background via-slate-50 to-emerald-50 relative overflow-hidden py-20">
      {/* Floating Elements */}
      <FloatingElement delay={0} className="top-20 left-20" />
      <FloatingElement delay={2} className="top-40 right-32" />
      <FloatingElement delay={4} className="bottom-40 left-40" />
      <FloatingElement delay={1} className="bottom-20 right-20" />

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-4 h-4 bg-accent/20 rounded-full pointer-events-none z-10 mix-blend-difference"
        style={{
          left: mousePosition.x - 8,
          top: mousePosition.y - 8,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
          ease: "easeOut"
        }}
      />

      <div className="container mx-auto px-4 relative z-20">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
          }}
          className="text-center mb-20"
        >
          <motion.h2 
            className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent mb-6"
            animate={{ backgroundPosition: ["-200%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            About Me
          </motion.h2>
          
          <div className="flex items-center justify-center gap-2 text-xl md:text-2xl text-muted-foreground mb-8">
            <span>I&apos;m a</span>
            <motion.span
              key={currentTextIndex}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="text-accent font-semibold"
            >
              {typewriterTexts[currentTextIndex]}
            </motion.span>
          </div>

          <motion.p 
            className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
            }}
          >
            Passionate about transforming ideas into elegant code and crafting digital experiences 
            that make a difference. I believe in the power of clean architecture, beautiful design, 
            and the magic that happens when technology meets creativity.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 0.3, duration: 0.8 } }
          }}
          className="flex justify-center gap-8 mb-20"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              whileHover={{ scale: 1.05, y: -5 }}
              className="relative group"
            >
              <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-accent to-accent/70 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:rotate-12 transition-transform duration-300">
                    <stat.icon size={24} className="text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">
                    <AnimatedCounter value={stat.value} suffix={stat.suffix} />
                  </div>
                  <p className="text-sm text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Journey Cards */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { delay: 0.6, duration: 0.8 } }
            }}
            className="relative"
          >
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Lightbulb className="text-accent" />
              My Journey
            </h3>
            
            <div className="relative">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  className={`absolute inset-0 cursor-pointer ${index === activeCard ? 'z-20' : 'z-10'}`}
                  style={{
                    transform: `translateY(${index * 20}px) translateX(${index * 10}px)`,
                  }}
                  whileHover={{ scale: index === activeCard ? 1.02 : 1.05 }}
                  onClick={() => setActiveCard(index)}
                >
                  <Card className={`backdrop-blur-md bg-gradient-to-br ${card.gradient} border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 ${index === activeCard ? 'ring-2 ring-accent' : ''}`}>
                    <CardContent className="p-8">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                            <card.icon size={20} className="text-white" />
                          </div>
                          <div>
                            <h4 className="font-bold text-white">{card.title}</h4>
                            <p className="text-white/70 text-sm">{card.subtitle}</p>
                          </div>
                        </div>
                        <Badge variant="secondary" className="bg-white/20 text-white">
                          {card.year}
                        </Badge>
                      </div>
                      
                      <AnimatePresence>
                        {index === activeCard && (
                          <motion.p
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            className="text-white/90 leading-relaxed"
                          >
                            {card.content}
                          </motion.p>
                        )}
                      </AnimatePresence>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
              
              {/* Placeholder for spacing */}
              <div className="h-80 opacity-0"></div>
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {cards.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveCard(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeCard ? 'bg-accent scale-125' : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={controls}
            variants={{
              visible: { opacity: 1, x: 0, transition: { delay: 0.8, duration: 0.8 } }
            }}
            className="relative"
          >
            <h3 className="text-3xl font-bold text-primary mb-8 flex items-center gap-3">
              <Zap className="text-accent" />
              Skills & Expertise
            </h3>

            <Card className="backdrop-blur-md bg-white/80 border-white/20 shadow-xl mb-8">
              <CardContent className="p-8">
                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                      className="group"
                    >
                      <div className="flex justify-between items-center mb-3">
                        <span className="font-medium text-primary">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                          className={`h-full ${skill.color} rounded-full relative`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ delay: 1 + index * 0.1, duration: 1, ease: "easeOut" }}
                        >
                          <motion.div
                            className="absolute inset-0 bg-white/30"
                            animate={{ x: ["-100%", "100%"] }}
                            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                          />
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="text-center"
            >
              <Button 
                onClick={scrollToContact}
                size="lg" 
                className="bg-gradient-to-r from-accent to-accent/80 hover:from-accent/90 hover:to-accent group"
              >
                Let&apos;s Work Together
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
              </Button>
            </motion.div>
          </motion.div>
        </div>

        {/* Philosophy Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={controls}
          variants={{
            visible: { opacity: 1, y: 0, transition: { delay: 1.2, duration: 0.8 } }
          }}
          className="text-center"
        >
          <Card className="backdrop-blur-md bg-gradient-to-br from-white/80 to-emerald-50/80 border-white/20 shadow-xl max-w-4xl mx-auto">
            <CardContent className="p-12">
              <div className="flex justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-accent to-accent/70 rounded-full flex items-center justify-center">
                  <Heart size={32} className="text-white" />
                </div>
              </div>
              
              <h3 className="text-3xl font-bold text-primary mb-6">My Philosophy</h3>
              
              <p className="text-lg text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                Great software is born from the intersection of <span className="text-accent font-semibold">technical excellence</span> and 
                <span className="text-accent font-semibold"> human empathy</span>. Every line of code I write, every interface I design, 
                and every problem I solve is guided by one simple principle: <span className="text-primary font-semibold">
                make it meaningful</span>. Technology should enhance lives, solve real problems, and create moments of delight.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};