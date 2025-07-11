"use client";

import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { 
  Code, 
  Database, 
  Palette, 
  Cloud, 
  Search, 
  Filter,
  TrendingUp,
  Award,
  Calendar,
  ExternalLink,
  Star
} from 'lucide-react';

interface Skill {
  id: string;
  name: string;
  category: 'frontend' | 'backend' | 'AI' | 'cloud';
  level: number;
  yearsExperience: number;
  description: string;
  projects: number;
  certifications?: string[];
  gradient: string;
  icon: string;
}

const skills: Skill[] = [
  // Frontend
  {
    id: 'react',
    name: 'React',
    category: 'frontend',
    level: 95,
    yearsExperience: 3,
    description: 'Advanced React development with hooks, context, and performance optimization',
    projects: 25,
    certifications: ['React Developer Certification'],
    gradient: 'from-blue-500 to-cyan-500',
    icon: '⚛️'
  },
  {
    id: 'nextjs',
    name: 'Next.js',
    category: 'frontend',
    level: 90,
    yearsExperience: 3,
    description: 'Full-stack React framework with SSR, SSG, and API routes',
    projects: 18,
    gradient: 'from-gray-800 to-gray-600',
    icon: '▲'
  },
  {
    id: 'typescript',
    name: 'TypeScript',
    category: 'frontend',
    level: 88,
    yearsExperience: 3,
    description: 'Strongly typed JavaScript for scalable applications',
    projects: 30,
    gradient: 'from-blue-600 to-blue-400',
    icon: '📘'
  },
  {
    id: 'tailwind',
    name: 'Tailwind CSS',
    category: 'frontend',
    level: 92,
    yearsExperience: 3,
    description: 'Utility-first CSS framework for rapid UI development',
    projects: 22,
    gradient: 'from-teal-500 to-cyan-400',
    icon: '🎨'
  },

  // Backend
  {
    id: 'nodejs',
    name: 'Node.js',
    category: 'backend',
    level: 85,
    yearsExperience: 5,
    description: 'Server-side JavaScript runtime for scalable applications',
    projects: 20,
    gradient: 'from-green-600 to-green-400',
    icon: '🟢'
  },
  {
    id: 'graphql',
    name: 'GraphQL',
    category: 'backend',
    level: 80,
    yearsExperience: 3,
    description: 'Query language for APIs and a runtime for fulfilling those queries with your existing data',
    projects: 15,
    gradient: 'from-yellow-500 to-blue-500',
    icon: '🐍'
  },
  {
    id: 'postgresql',
    name: 'PostgreSQL',
    category: 'backend',
    level: 78,
    yearsExperience: 3,
    description: 'Advanced relational database with complex queries and optimization',
    projects: 12,
    gradient: 'from-blue-700 to-blue-500',
    icon: '🐘'
  },
  {
    id: 'mongodb',
    name: 'MongoDB',
    category: 'backend',
    level: 75,
    yearsExperience: 2,
    description: 'NoSQL database for flexible and scalable data storage',
    projects: 10,
    gradient: 'from-green-700 to-green-500',
    icon: '🍃'
  },

  // Design & Tools
  {
    id: 'golang',
    name: 'Golang',
    category: 'backend',
    level: 85,
    yearsExperience: 3,
    description: 'Fast and efficient programming language for backend development',
    projects: 10,
    gradient: 'from-purple-500 to-pink-500',
    icon: '🐹'
  },
  {
    id: 'eino',
    name: 'Eino',
    category: 'AI',
    level: 80,
    yearsExperience: 3,
    description: 'AI framework for building and deploying AI models',
    projects: 10,
    gradient: 'from-red-500 to-orange-500',
    icon: '🎨'
  },
  {
    id: 'julia',
    name: 'Julia',
    category: 'AI',
    level: 88,
    yearsExperience: 2,
    description: 'High-level programming language for scientific computing',
    projects: 15,
    gradient: 'from-indigo-500 to-purple-500',
    icon: '✨'
  },

  // Cloud & DevOps
  {
    id: 'aws',
    name: 'AWS',
    category: 'cloud',
    level: 75,
    yearsExperience: 2,
    description: 'Cloud infrastructure, serverless functions, and deployment automation',
    projects: 8,
    certifications: ['AWS Certified Developer'],
    gradient: 'from-orange-500 to-yellow-500',
    icon: '☁️'
  },
  {
    id: 'docker',
    name: 'Docker',
    category: 'cloud',
    level: 70,
    yearsExperience: 2,
    description: 'Containerization for consistent development and deployment environments',
    projects: 12,
    gradient: 'from-blue-600 to-blue-400',
    icon: '🐋'
  },
  {
    id: 'vercel',
    name: 'Vercel',
    category: 'cloud',
    level: 90,
    yearsExperience: 3,
    description: 'Modern deployment platform for frontend applications',
    projects: 20,
    gradient: 'from-black to-gray-700',
    icon: '▲'
  },

  // Soft Skills
  {
    id: 'nestjs',
    name: 'NestJS',
    category: 'backend',
    level: 92,
    yearsExperience: 3,
    description: 'Backend framework for building scalable and maintainable applications',
    projects: 10,
    gradient: 'from-emerald-500 to-teal-500',
    icon: '🧩'
  },
  {
    id: 'postgres',
    name: 'PostgreSQL',
    category: 'backend',
    level: 88,
    yearsExperience: 3,
    description: 'Relational database for storing and querying structured data',
    projects: 10,
    gradient: 'from-rose-500 to-pink-500',
    icon: '💬'
  },
  {
    id: 'kubernetes',
    name: 'Kubernetes',
    category: 'cloud',
    level: 80,
    yearsExperience: 1,
    description: 'Container orchestration for managing and scaling applications',
    projects: 10,
    gradient: 'from-violet-500 to-purple-500',
    icon: '👑'
  },
  {
    id: 'github',
    name: 'GitHub',
    category: 'cloud',
    level: 80,
    yearsExperience: 4,
    description: 'Version control and collaboration for software development',
    projects: 10,
    gradient: 'from-violet-500 to-purple-500',
    icon: '👑'
  }

];

const categories = [
  { id: 'all', label: 'All Skills', icon: Filter, color: 'from-gray-500 to-gray-400' },
  { id: 'frontend', label: 'Frontend', icon: Code, color: 'from-blue-500 to-cyan-500' },
  { id: 'backend', label: 'Backend', icon: Database, color: 'from-green-500 to-emerald-500' },
  { id: 'AI', label: 'AI', icon: Palette, color: 'from-purple-500 to-pink-500' },
  { id: 'cloud', label: 'Cloud & DevOps', icon: Cloud, color: 'from-orange-500 to-yellow-500' }
];

const SkillCard = ({ skill, index, isDetailed, onToggleDetail }: {
  skill: Skill;
  index: number;
  isDetailed: boolean;
  onToggleDetail: (id: string) => void;
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50, rotateX: -10 }}
      animate={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        type: "spring",
        stiffness: 100
      }}
      whileHover={{ 
        y: -10,
        rotateX: 10,
        rotateY: 5,
        scale: 1.02
      }}
      className="relative group cursor-pointer"
      style={{ transformStyle: 'preserve-3d' }}
      onClick={() => onToggleDetail(skill.id)}
    >
      <Card className={`
        relative overflow-hidden border-0 h-full
        bg-gradient-to-br ${skill.gradient}
        backdrop-blur-sm bg-white/10
        shadow-2xl group-hover:shadow-3xl
        transition-all duration-300
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:${skill.gradient} before:opacity-20
        before:blur-xl before:-z-10
      `}>
        {/* Floating particles effect */}
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white/50 rounded-full"
              style={{
                left: `${20 + (i * 15)}%`,
                top: `${10 + (i * 10)}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: 2,
                delay: i * 0.2,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>

        <div className="p-6 relative z-10">
          <div className="flex items-center justify-between mb-4">
            <motion.div 
              className="text-4xl"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {skill.icon}
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="flex items-center space-x-1"
            >
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(skill.level / 20) 
                      ? 'text-yellow-300 fill-current' 
                      : 'text-white/30'
                  }`}
                />
              ))}
            </motion.div>
          </div>

          <h3 className="text-xl font-bold text-white mb-2">{skill.name}</h3>
          
          {/* Animated progress bar */}
          <div className="mb-4">
            <div className="flex justify-between items-center mb-1">
              <span className="text-white/80 text-sm">Proficiency</span>
              <span className="text-white font-semibold text-sm">{skill.level}%</span>
            </div>
            <div className="w-full bg-white/20 rounded-full h-2 overflow-hidden">
              <motion.div
                className="h-full bg-white/80 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${skill.level}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
              />
            </div>
          </div>

          <AnimatePresence>
            {!isDetailed && (
              <motion.div
                initial={{ opacity: 1 }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-3"
              >
                <div className="flex items-center space-x-4 text-white/80">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{skill.yearsExperience}y exp</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <TrendingUp className="w-4 h-4" />
                    <span className="text-sm">{skill.projects} projects</span>
                  </div>
                </div>

                {skill.certifications && (
                  <div className="space-y-1">
                    {skill.certifications.map((cert, i) => (
                      <Badge key={i} variant="secondary" className="bg-white/20 text-white">
                        <Award className="w-3 h-3 mr-1" />
                        {cert}
                      </Badge>
                    ))}
                  </div>
                )}
              </motion.div>
            )}

            {isDetailed && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="space-y-4"
              >
                <p className="text-white/90 text-sm leading-relaxed">
                  {skill.description}
                </p>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-white">{skill.yearsExperience}</div>
                    <div className="text-xs text-white/70">Years Experience</div>
                  </div>
                  <div className="text-center p-3 bg-white/10 rounded-lg">
                    <div className="text-2xl font-bold text-white">{skill.projects}</div>
                    <div className="text-xs text-white/70">Projects Completed</div>
                  </div>
                </div>

                <Button 
                  variant="secondary" 
                  size="sm" 
                  className="w-full bg-white/20 hover:bg-white/30 text-white border-0"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Projects
                </Button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Animated border gradient */}
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
  );
};

export const SkillsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  const [detailedSkills, setDetailedSkills] = useState<Set<string>>(new Set());

  const filteredSkills = useMemo(() => {
    return skills.filter(skill => {
      const matchesCategory = selectedCategory === 'all' || skill.category === selectedCategory;
      const matchesSearch = skill.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                           skill.description.toLowerCase().includes(searchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchTerm]);

  const toggleSkillDetail = (skillId: string) => {
    const newDetailedSkills = new Set(detailedSkills);
    if (newDetailedSkills.has(skillId)) {
      newDetailedSkills.delete(skillId);
    } else {
      newDetailedSkills.add(skillId);
    }
    setDetailedSkills(newDetailedSkills);
  };

  const totalProjects = skills.reduce((sum, skill) => sum + skill.projects, 0);
  const avgExperience = skills.reduce((sum, skill) => sum + skill.yearsExperience, 0) / skills.length;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent mb-6">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Showcasing my technical proficiency and professional capabilities across various domains
          </p>
          
          {/* Stats */}
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-emerald-400">{skills.length}</div>
              <div className="text-gray-400">Skills Mastered</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-blue-400">{totalProjects}</div>
              <div className="text-gray-400">Projects Delivered</div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.5 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-400">{avgExperience.toFixed(1)}</div>
              <div className="text-gray-400">Avg Years Experience</div>
            </motion.div>
          </div>
        </motion.div>

        {/* Controls */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          {/* Search */}
          <div className="relative mb-8 max-w-md mx-auto">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <Input
              placeholder="Search skills..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 bg-white/10 border-white/20 text-white placeholder-gray-400 backdrop-blur-sm"
            />
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant={selectedCategory === category.id ? "default" : "outline"}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`
                      relative overflow-hidden border-0
                      ${selectedCategory === category.id
                        ? `bg-gradient-to-r ${category.color} text-white`
                        : 'bg-white/10 hover:bg-white/20 text-gray-300 backdrop-blur-sm'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {category.label}
                  </Button>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory + searchTerm}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          >
            {filteredSkills.map((skill, index) => (
              <SkillCard
                key={skill.id}
                skill={skill}
                index={index}
                isDetailed={detailedSkills.has(skill.id)}
                onToggleDetail={toggleSkillDetail}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredSkills.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-2xl font-semibold text-gray-300 mb-2">No skills found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default SkillsShowcase;