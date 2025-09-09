"use client"

import { useState, useRef } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github, Code, Sparkles, ArrowUpRight, Play, Star, Eye, Heart } from "lucide-react"
import { motion, AnimatePresence, useInView } from "motion/react"

const projects = [
  {
    id: 1,
    title: "Blockchain Assurance Platform",
    description: "A blockchain-based platform offering transparent risk pools and instant claim payouts for agricultural insurance. Built on Solana, it provides farmers with affordable protection against weather-related risks and natural disasters.",
    shortDesc: "Decentralized insurance for agricultural products",
    technologies: ["Next JS", "TypeScript", "Node.js", "Rust", "Solana", "Solidity"],
    category: "Blockchain",
    status: "Live",
    year: "2025",
    stats: {
      users: "1",
      rating: 5,
      views: "20+"
    },
    gradient: "from-emerald-600 via-emerald-500 to-emerald-700",
    liveDemo: "https://megahack-omega.vercel.app/",
    github: "https://github.com/Zeddli/megahack",
    icon: "🌾"
  },
  {
    id: 2,
    title: "Solana FlowGraph",
    description: "A real-time Solana transaction visualization platform that provides insights into on-chain activities through interactive graphs and analytics.",
    shortDesc: "On-chain data pipeline and visualization platform",
    technologies: ["Next JS", "TypeScript", "Node.js", "The Graph", "Solana", "Solidity"],
    category: "Blockchain",
    status: "Live",
    year: "2025",
    stats: {
      users: "5",
      rating: 5,
      views: "23"
    },
    gradient: "from-emerald-600 via-emerald-500 to-emerald-700",
    liveDemo: "https://solgraph-analyse.vercel.app/",
    github: "https://github.com/Zeddli/solgraph",
    icon: "🔍"
  },
  {
    id: 3,
    title: "autopilot",
    description: "A robust, event-driven NestJS microservice for automating challenge phase transitions in the Topcoder platform.",
    shortDesc: "Challenge phase automation",
    technologies: ["Nest JS", "TypeScript", "Node.js", "PostgreSQL", "Docker", "Kubernetes"],
    category: "Backend",
    status: "Live",
    year: "2025",
    stats: {
      users: "25K+",
      rating: 4.7,
      views: "100K+"
    },
    gradient: "from-emerald-600 via-emerald-500 to-emerald-700",
    liveDemo: "",
    github: "https://github.com/Zeddli/autopilot",
    icon: "🤖"
  },
  {
    id: 4,
    title: "lookups API",
    description: "A modern, maintainable API for Topcoder reference data, now powered by NestJS, TypeScript, Prisma, and PostgreSQL",
    shortDesc: "Topcoder reference data API",
    technologies: ["Nest JS", "TypeScript", "PostgreSQL", "Prisma", "Docker", "Kubernetes"],
    category: "Backend",
    status: "Client work",
    year: "2025",
    stats: {
      users: "10",
      rating: 5,
      views: "100"
    },
    gradient: "from-emerald-600 via-emerald-500 to-emerald-700",
    liveDemo: "",
    github: "https://github.com/Zeddli/lookups",
    icon: "💻"
  },
  {
    id: 5,
    title: "Restaurant landing page",
    description: "A restaurant landing page built with Next.js, TypeScript, and Tailwind CSS. It features a responsive design, animated elements, and a contact form.",
    shortDesc: "Modern restaurant landing page",
    technologies: ["Next JS", "TypeScript", "Tailwind CSS"],
    category: "Frontend",
    status: "Live",
    year: "2025",
    stats: {
      users: "5",
      rating: 5,
      views: "10"
    },
    gradient: "from-emerald-600 via-emerald-500 to-emerald-700",
    liveDemo: "https://bella-vista-tau.vercel.app/",
    github: "",
    icon: "🍔"
  }
]

type Project = {
  id: number
  title: string
  description: string
  shortDesc: string
  technologies: string[]
  category: string
  status: string
  year: string
  stats: {
    users: string
    rating: number
    views: string
  }
  gradient: string
  liveDemo: string
  github: string
  icon: string
}

const ProjectCard = ({ project, index }: { project: Project, index: number }) => {
  const [isHovered, setIsHovered] = useState(false)
  const [showPreview, setShowPreview] = useState(false)
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live": return "bg-green-500"
      case "Beta": return "bg-yellow-500"
      case "Development": return "bg-blue-500"
      default: return "bg-gray-500"
    }
  }

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      animate={isInView ? { opacity: 1, y: 0, rotateX: 0 } : {}}
      transition={{ 
        duration: 0.8, 
        delay: index * 0.15,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -20,
        rotateX: 5,
        rotateY: 5,
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {/* Floating elements around card */}
      <AnimatePresence>
        {isHovered && (
          <>
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full opacity-60"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  zIndex: -1
                }}
                initial={{ scale: 0, opacity: 0 }}
                animate={{ 
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  y: [0, -50, 0]
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.1,
                  repeat: Infinity
                }}
              />
            ))}
          </>
        )}
      </AnimatePresence>

      <Card className={`
        relative overflow-hidden h-full
        bg-gradient-to-br ${project.gradient}
        border-0 shadow-2xl
        before:absolute before:inset-0 before:bg-black/20 before:backdrop-blur-sm
      `}>
        {/* Animated background pattern */}
        <motion.div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 25px 25px, rgba(255,255,255,0.2) 2px, transparent 0)`,
            backgroundSize: '50px 50px',
          }}
          animate={{
            backgroundPosition: isHovered ? ['0px 0px', '50px 50px'] : '0px 0px'
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />

        {/* Glow effect */}
        <motion.div
          className={`absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 bg-gradient-to-br ${project.gradient} blur-2xl -z-10`}
          animate={{
            scale: isHovered ? 1.1 : 1,
          }}
        />

        <CardContent className="relative z-10 p-8 h-full flex flex-col">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-3">
              <motion.div 
                className="text-4xl"
                animate={{ 
                  scale: isHovered ? 1.1 : 1,
                  rotate: isHovered ? 10 : 0 
                }}
              >
                {project.icon}
              </motion.div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className={`w-2 h-2 rounded-full ${getStatusColor(project.status)}`} />
                  <span className="text-gray-200 text-sm">{project.status}</span>
                  <span className="text-gray-400 text-sm">• {project.year}</span>
                </div>
                <Badge variant="secondary" className="bg-emerald-500/20 text-white border-emerald-400/30">
                  {project.category}
                </Badge>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowPreview(!showPreview)}
              className="p-2 bg-emerald-500/20 rounded-full text-white hover:bg-emerald-500/30 transition-colors"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Title and Description */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-gray-100 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-gray-100 text-sm mb-2 font-medium">
            {project.shortDesc}
          </p>
          
          <AnimatePresence>
            {(isHovered || showPreview) && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-gray-300 text-sm mb-6 leading-relaxed"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Stats removed by request */}

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.slice(0, isHovered ? project.technologies.length : 4).map((tech, i) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.05 }}
              >
                <Badge 
                  variant="outline" 
                  className="bg-emerald-500/10 text-white border-emerald-400/30 text-xs hover:bg-emerald-500/20 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {!isHovered && project.technologies.length > 4 && (
              <Badge variant="outline" className="bg-emerald-500/10 text-white/80 border-emerald-400/30 text-xs">
                +{project.technologies.length - 4}
              </Badge>
            )}
          </div>

          {/* Actions */}
          <div className="mt-auto space-y-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex gap-2"
            >
              <Button
                asChild
                size="sm"
                className="flex-1 bg-emerald-600 hover:bg-emerald-500 text-white border-0 backdrop-blur-sm group/btn"
              >
                <a 
                  href={project.liveDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Play className="h-4 w-4 group-hover/btn:translate-x-0.5 transition-transform" />
                  Live Demo
                  <ArrowUpRight className="h-3 w-3 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                </a>
              </Button>
              
              <Button
                asChild
                variant="outline"
                size="sm"
                className="bg-transparent border-emerald-400/40 text-white hover:bg-emerald-500/10 hover:border-emerald-400/60"
              >
                <a 
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2"
                >
                  <Github className="h-4 w-4" />
                  Code
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex items-center justify-between text-gray-400 text-xs"
            >
              <div className="flex items-center gap-2">
                <Code className="w-3 h-3" />
                <span>Open Source</span>
              </div>
              <div className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                <span>Featured</span>
              </div>
            </motion.div>
          </div>
        </CardContent>

        {/* Animated border */}
        <motion.div
          className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `linear-gradient(45deg, transparent, rgba(16,185,129,0.2), transparent)`,
            backgroundSize: '200% 200%',
          }}
          animate={{
            backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        />
      </Card>
    </motion.div>
  )
}

export default function ProjectShowcase() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section id='projects' ref={sectionRef} className="py-20 px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-emerald-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-emerald-300/30 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-emerald-200/20 to-emerald-300/20 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-7xl relative z-10">
        {/* Section Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            className="flex items-center justify-center gap-3 mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2 }}
          >
            <Sparkles className="w-8 h-8 text-yellow-400" />
            <h2 className="text-6xl font-bold text-primary">
              Featured Projects
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
          >
            A curated showcase of innovative applications, creative solutions, and technical masterpieces 
            that demonstrate the intersection of design and engineering excellence.
          </motion.p>

          <motion.div
            className="flex justify-center items-center gap-6 mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            <div className="flex items-center gap-2 text-gray-600">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm">Live Projects</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Github className="w-4 h-4" />
              <span className="text-sm">Open Source</span>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Star className="w-4 h-4 text-yellow-400" />
              <span className="text-sm">Featured Work</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* View More Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.5 }}
        >
          <Button 
            size="lg"
            className="bg-emerald-600 hover:bg-emerald-500 text-white border-0 px-8 py-4 text-lg font-medium group"
            onClick={() => window.open("https://github.com/Zeddli")}
          >
            <Github className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform" />
            View All Projects
            <ArrowUpRight className="w-5 h-5 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  )
}