"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { Star } from 'lucide-react';

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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
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
    gradient: 'from-emerald-600 to-emerald-700',
    icon: '👑'
  }

];

// Filters removed

const SkillCard = ({ skill, index }: {
  skill: Skill;
  index: number;
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
      className="relative group"
      style={{ transformStyle: 'preserve-3d' }}
    >
      <Card className={`
        relative overflow-hidden border-0 h-full
        bg-gradient-to-br ${skill.gradient}
        backdrop-blur-sm
        shadow-2xl group-hover:shadow-3xl
        transition-all duration-300
        before:absolute before:inset-0 
        before:bg-gradient-to-br before:${skill.gradient} before:opacity-10
        before:blur-xl before:-z-10
      `}>
        {/* Decorative particles removed for simplicity */}

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

          <h3 className="text-xl font-bold text-white">{skill.name}</h3>
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
  const filteredSkills = skills;

  // const totalProjects = skills.reduce((sum, skill) => sum + skill.projects, 0);
  // const avgExperience = skills.reduce((sum, skill) => sum + skill.yearsExperience, 0) / skills.length;

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl font-bold text-primary mb-6">
            Technical Skill
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto mb-8">
            Showcasing my technical proficiency and professional capabilities across various domains
          </p>
          
          
        </motion.div>

        {/* Controls removed */}

        {/* Skills Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={'all'}
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