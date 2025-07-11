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
    gradient: "from-purple-500 via-pink-500 to-red-500",
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
    gradient: "from-blue-500 via-cyan-500 to-green-500",
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
    gradient: "from-green-500 via-teal-500 to-blue-500",
    liveDemo: "",
    github: "https://github.com/Zeddli/autopilot",
    icon: "🤖"
  },
  
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
                  <span className="text-white/80 text-sm">{project.status}</span>
                  <span className="text-white/60 text-sm">• {project.year}</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white/90 border-0">
                  {project.category}
                </Badge>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setShowPreview(!showPreview)}
              className="p-2 bg-white/20 rounded-full text-white hover:bg-white/30 transition-colors"
            >
              <Eye className="w-4 h-4" />
            </motion.button>
          </div>

          {/* Title and Description */}
          <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90 transition-colors">
            {project.title}
          </h3>
          
          <p className="text-white/80 text-sm mb-2 font-medium">
            {project.shortDesc}
          </p>
          
          <AnimatePresence>
            {(isHovered || showPreview) && (
              <motion.p
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                className="text-white/70 text-sm mb-6 leading-relaxed"
              >
                {project.description}
              </motion.p>
            )}
          </AnimatePresence>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-white font-bold text-lg">{project.stats.users}</div>
              <div className="text-white/60 text-xs">Users</div>
            </div>
            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-white font-bold text-lg flex items-center justify-center gap-1">
                <Star className="w-4 h-4 text-yellow-300 fill-current" />
                {project.stats.rating}
              </div>
              <div className="text-white/60 text-xs">Rating</div>
            </div>
            <div className="text-center p-3 bg-white/10 rounded-lg backdrop-blur-sm">
              <div className="text-white font-bold text-lg">{project.stats.views}</div>
              <div className="text-white/60 text-xs">Views</div>
            </div>
          </div>

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
                  className="bg-white/10 text-white/90 border-white/20 text-xs hover:bg-white/20 transition-colors"
                >
                  {tech}
                </Badge>
              </motion.div>
            ))}
            {!isHovered && project.technologies.length > 4 && (
              <Badge variant="outline" className="bg-white/10 text-white/60 border-white/20 text-xs">
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
                className="flex-1 bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-sm group/btn"
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
                className="bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white/50"
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
              className="flex items-center justify-between text-white/60 text-xs"
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
            background: `linear-gradient(45deg, transparent, rgba(255,255,255,0.1), transparent)`,
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
    <section id='projects' ref={sectionRef} className="py-20 px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-r from-cyan-500/5 to-purple-500/5 rounded-full blur-3xl" />
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
            <h2 className="text-6xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 bg-clip-text text-transparent">
              Featured Projects
            </h2>
            <Sparkles className="w-8 h-8 text-yellow-400" />
          </motion.div>
          
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
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
            <div className="flex items-center gap-2 text-gray-400">
              <div className="w-3 h-3 bg-green-500 rounded-full" />
              <span className="text-sm">Live Projects</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <Github className="w-4 h-4" />
              <span className="text-sm">Open Source</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
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
            className="bg-gradient-to-r from-purple-500 to-cyan-500 hover:from-purple-600 hover:to-cyan-600 text-white border-0 px-8 py-4 text-lg font-medium group"
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