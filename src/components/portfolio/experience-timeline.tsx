"use client"

import { useState, useRef } from "react"
import { Building, GraduationCap, Award, Code, Users, Zap, Target, TrendingUp, Calendar, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { motion, useInView, AnimatePresence } from "motion/react"

interface ExperienceEntry {
  type: "work" | "education"
  company: string
  role: string
  location: string
  dateRange: string
  duration: string
  achievements: string[]
  skills: string[]
  highlights: {
    icon: React.ElementType
    label: string
    value: string
  }[]
  gradient: string
  logo: string
}

const experienceData: ExperienceEntry[] = [
  {
    type: "work",
    company: "TechCorp Solutions",
    role: "Senior Full Stack Developer",
    location: "San Francisco, CA",
    dateRange: "2022 - Present",
    duration: "2+ years",
    achievements: [
      "Architected cloud-native microservices platform serving 100k+ daily active users with 99.9% uptime",
      "Implemented automated CI/CD pipelines reducing deployment time by 60% and eliminating manual errors",
      "Led cross-functional team of 8 engineers, establishing coding standards and mentoring junior developers",
      "Optimized database queries and caching strategies resulting in 40% performance improvement"
    ],
    skills: ["React", "Node.js", "AWS", "Docker", "Kubernetes", "TypeScript", "GraphQL"],
    highlights: [
      { icon: Users, label: "Team Size", value: "8 members" },
      { icon: TrendingUp, label: "Performance", value: "+40%" },
      { icon: Target, label: "Uptime", value: "99.9%" }
    ],
    gradient: "from-blue-600 to-purple-600",
    logo: "🚀"
  },
  {
    type: "work",
    company: "InnovateTech",
    role: "Frontend Developer",
    location: "Austin, TX",
    dateRange: "2020 - 2022",
    duration: "2 years",
    achievements: [
      "Developed responsive React applications with TypeScript for Fortune 500 enterprise clients",
      "Created component library adopted across 12 different product teams, improving development velocity",
      "Optimized bundle sizes and implemented progressive web app features reducing load times by 50%",
      "Collaborated with design team to implement pixel-perfect UI/UX following accessibility standards"
    ],
    skills: ["React", "TypeScript", "Sass", "Webpack", "Jest", "Storybook", "Figma"],
    highlights: [
      { icon: Code, label: "Components", value: "50+ built" },
      { icon: Zap, label: "Load Time", value: "-50%" },
      { icon: Award, label: "Teams Using", value: "12" }
    ],
    gradient: "from-emerald-500 to-cyan-500",
    logo: "💡"
  },
  {
    type: "education",
    company: "University of Technology",
    role: "Bachelor of Science in Computer Science",
    location: "Cambridge, MA",
    dateRange: "2016 - 2020",
    duration: "4 years",
    achievements: [
      "Graduated Magna Cum Laude with 3.8 GPA, Dean's List for 6 consecutive semesters",
      "Completed machine learning capstone project predicting stock market trends with 85% accuracy",
      "President of Computer Science Society, organized 15+ tech talks and coding workshops",
      "Mentored 20+ students in introductory programming courses and data structures"
    ],
    skills: ["Java", "Python", "C++", "Machine Learning", "Algorithms", "Data Structures", "Leadership"],
    highlights: [
      { icon: Award, label: "GPA", value: "3.8/4.0" },
      { icon: Users, label: "Mentored", value: "20+ students" },
      { icon: TrendingUp, label: "ML Accuracy", value: "85%" }
    ],
    gradient: "from-orange-500 to-red-500",
    logo: "🎓"
  },
  {
    type: "work",
    company: "StartupLab",
    role: "Junior Developer Intern",
    location: "Boston, MA",
    dateRange: "2019 - 2020",
    duration: "1 year",
    achievements: [
      "Built mobile-first progressive web applications using modern JavaScript frameworks",
      "Implemented responsive designs with 98% cross-browser compatibility across all major platforms",
      "Participated in agile development with daily standups, sprint planning, and retrospectives",
      "Contributed to open-source projects gaining 500+ GitHub stars and community recognition"
    ],
    skills: ["JavaScript", "Vue.js", "HTML5", "CSS3", "Git", "Agile", "REST APIs"],
    highlights: [
      { icon: Code, label: "Compatibility", value: "98%" },
      { icon: Award, label: "GitHub Stars", value: "500+" },
      { icon: Zap, label: "Projects", value: "8 shipped" }
    ],
    gradient: "from-pink-500 to-purple-500",
    logo: "⚡"
  }
]

const TimelineEntry = ({ entry, index, isActive, onHover }: {
  entry: ExperienceEntry
  index: number
  isActive: boolean
  onHover: (index: number | null) => void
}) => {
  const cardRef = useRef(null)
  const isInView = useInView(cardRef, { once: true })
  const [showDetails, setShowDetails] = useState(false)

  return (
    <motion.div
      ref={cardRef}
      className="relative flex items-start group"
      onMouseEnter={() => onHover(index)}
      onMouseLeave={() => onHover(null)}
      initial={{ opacity: 0, x: -50 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.2,
        type: "spring",
        stiffness: 100
      }}
    >
      {/* Enhanced Timeline Dot */}
      <div className="relative flex h-20 w-20 shrink-0 items-center justify-center z-10">
        {/* Pulsing ring effect */}
        <motion.div 
          className={`absolute inset-0 rounded-full bg-gradient-to-r ${entry.gradient} opacity-20`}
          animate={isActive ? {
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          } : {}}
          transition={{ duration: 2, repeat: Infinity }}
        />
        
        <motion.div 
          className={`relative flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${entry.gradient} shadow-2xl`}
          whileHover={{ scale: 1.1, rotate: 10 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
        >
          {/* Background pattern */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-transparent" />
          
          <motion.div className="text-2xl z-10">
            {entry.logo}
          </motion.div>
          
          {/* Icon overlay */}
          <div className="absolute bottom-0 right-0 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
            {entry.type === "work" ? (
              <Building className="h-3 w-3 text-gray-700" />
            ) : (
              <GraduationCap className="h-3 w-3 text-gray-700" />
            )}
          </div>
        </motion.div>

        {/* Floating particles */}
        <AnimatePresence>
          {isActive && (
            <>
              {[...Array(4)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full"
                  style={{
                    top: `${20 + i * 10}%`,
                    left: `${20 + i * 15}%`,
                  }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    y: [0, -20, 0],
                    x: [0, Math.random() * 20 - 10, 0]
                  }}
                  exit={{ opacity: 0, scale: 0 }}
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
      </div>

      {/* Enhanced Content Card */}
      <motion.div 
        className="ml-8 flex-1"
        whileHover={{ x: 8 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <motion.div
          layout
          className={`
            relative overflow-hidden rounded-2xl
            bg-gradient-to-br ${entry.gradient} p-[1px]
            shadow-2xl group-hover:shadow-3xl
            transition-all duration-500
          `}
        >
          <Card className="bg-background/95 backdrop-blur-sm border-0 rounded-2xl">
            <CardContent className="p-8">
              {/* Header Section */}
              <div className="mb-6">
                <div className="flex items-start justify-between mb-3">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className={`text-2xl font-bold bg-gradient-to-r ${entry.gradient} bg-clip-text text-transparent`}>
                        {entry.company}
                      </h3>
                      <Badge 
                        variant="secondary" 
                        className={`bg-gradient-to-r ${entry.gradient} text-white border-0`}
                      >
                        {entry.type === "work" ? "Work" : "Education"}
                      </Badge>
                    </div>
                    <h4 className="text-xl font-semibold text-primary mb-2">
                      {entry.role}
                    </h4>
                  </div>
                  
                  <motion.button
                    onClick={() => setShowDetails(!showDetails)}
                    className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      animate={{ rotate: showDetails ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      ↓
                    </motion.div>
                  </motion.button>
                </div>

                <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>{entry.dateRange}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{entry.location}</span>
                  </div>
                  <Badge variant="outline" className="bg-accent/10 text-accent border-accent/30">
                    {entry.duration}
                  </Badge>
                </div>

                {/* Key Highlights */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                  {entry.highlights.map((highlight, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 20 }}
                      animate={isInView ? { opacity: 1, y: 0 } : {}}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      whileHover={{ scale: 1.05 }}
                      className="text-center p-3 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl"
                    >
                      <highlight.icon className="w-5 h-5 mx-auto mb-2 text-accent" />
                      <div className="font-bold text-primary text-lg">{highlight.value}</div>
                      <div className="text-xs text-muted-foreground">{highlight.label}</div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <AnimatePresence>
                {showDetails && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-4"
                  >
                    <h5 className="font-semibold text-primary mb-3">Key Achievements:</h5>
                    <ul className="space-y-3">
                      {entry.achievements.map((achievement, achievementIndex) => (
                        <motion.li
                          key={achievementIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: achievementIndex * 0.1 }}
                          className="flex items-start group/item"
                        >
                          <motion.span 
                            className="mr-3 mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-accent to-accent/70"
                            whileHover={{ scale: 1.5 }}
                          />
                          <span className="text-sm text-foreground leading-relaxed group-hover/item:text-primary transition-colors">
                            {achievement}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Skills Tags */}
              <div className="flex flex-wrap gap-2 mt-6">
                {entry.skills.slice(0, showDetails ? entry.skills.length : 5).map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + skillIndex * 0.05 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Badge 
                      variant="outline" 
                      className="bg-white/50 text-primary border-primary/20 hover:bg-accent/10 hover:border-accent transition-colors text-xs"
                    >
                      {skill}
                    </Badge>
                  </motion.div>
                ))}
                {!showDetails && entry.skills.length > 5 && (
                  <Badge 
                    variant="outline" 
                    className="bg-gray-50 text-muted-foreground border-gray-200 text-xs"
                  >
                    +{entry.skills.length - 5} more
                  </Badge>
                )}
              </div>
            </CardContent>
          </Card>

          {/* Animated border glow */}
          <motion.div
            className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
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
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default function ExperienceTimeline() {
  const [activeEntry, setActiveEntry] = useState<number | null>(null)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true })

  return (
    <section ref={sectionRef} className="w-full bg-gradient-to-br from-gray-50 to-white py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-48 h-48 bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="mx-auto max-w-6xl relative z-10">
        {/* Enhanced Section Header */}
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.h2 
            className="text-5xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 bg-clip-text text-transparent mb-4"
            animate={{ backgroundPosition: ["-200%", "200%"] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          >
            Professional Journey
          </motion.h2>
          <motion.p 
            className="mt-4 text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            A timeline of growth, achievements, and continuous learning in the world of technology
          </motion.p>

          {/* Stats Overview */}
          <motion.div
            className="flex justify-center items-center gap-8 mt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
          >
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">6+</div>
              <div className="text-sm text-muted-foreground">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">4</div>
              <div className="text-sm text-muted-foreground">Positions</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-emerald-600">100K+</div>
              <div className="text-sm text-muted-foreground">Users Impacted</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced Timeline Container */}
        <div className="relative">
          {/* Animated Vertical Line */}
          <motion.div 
            className="absolute left-10 top-0 w-1 bg-gradient-to-b from-blue-500 via-purple-500 to-emerald-500 rounded-full"
            initial={{ height: 0 }}
            animate={isInView ? { height: "100%" } : {}}
            transition={{ duration: 2, ease: "easeInOut" }}
          />
          
          {/* Floating line decoration */}
          <motion.div
            className="absolute left-9 top-0 w-3 h-full"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
          >
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent rounded-full"
                style={{ left: '1px', top: `${i * 20}%` }}
                animate={{
                  y: [0, -10, 0],
                  opacity: [0.3, 1, 0.3],
                }}
                transition={{
                  duration: 3,
                  delay: i * 0.5,
                  repeat: Infinity,
                }}
              />
            ))}
          </motion.div>
          
          {/* Timeline Entries */}
          <div className="space-y-12">
            {experienceData.map((entry, index) => (
              <TimelineEntry
                key={index}
                entry={entry}
                index={index}
                isActive={activeEntry === index}
                onHover={setActiveEntry}
              />
            ))}
          </div>
        </div>

        {/* Call to action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <p className="text-lg text-muted-foreground mb-6">
            Interested in working together or want to know more about my experience?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-medium hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Download Resume
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}