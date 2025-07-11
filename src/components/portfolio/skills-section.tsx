"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { 
  Code,
  Server,
  Wrench,
  Cpu
} from "lucide-react"

interface Skill {
  name: string
  proficiency?: number
  highlighted?: boolean
}

interface SkillCategory {
  title: string
  icon: React.ElementType
  skills: Skill[]
}

const skillCategories: SkillCategory[] = [
  {
    title: "Frontend",
    icon: Code,
    skills: [
      { name: "React", proficiency: 95, highlighted: true },
      { name: "TypeScript", proficiency: 90, highlighted: true },
      { name: "Next.js", proficiency: 88, highlighted: true },
      { name: "CSS/SCSS", proficiency: 85 },
      { name: "Tailwind CSS", proficiency: 92 },
      { name: "Framer Motion", proficiency: 80 },
      { name: "Zustand", proficiency: 85 },
      { name: "React Query", proficiency: 82 }
    ]
  },
  {
    title: "Backend",
    icon: Server,
    skills: [
      { name: "Node.js", proficiency: 88, highlighted: true },
      { name: "Python", proficiency: 85, highlighted: true },
      { name: "FastAPI", proficiency: 82 },
      { name: "Express.js", proficiency: 86 },
      { name: "PostgreSQL", proficiency: 80 },
      { name: "MongoDB", proficiency: 75 },
      { name: "Redis", proficiency: 70 },
      { name: "GraphQL", proficiency: 78 }
    ]
  },
  {
    title: "Tools & DevOps",
    icon: Wrench,
    skills: [
      { name: "Git", proficiency: 95, highlighted: true },
      { name: "Docker", proficiency: 85, highlighted: true },
      { name: "AWS", proficiency: 82 },
      { name: "Vercel", proficiency: 90 },
      { name: "GitHub Actions", proficiency: 80 },
      { name: "Kubernetes", proficiency: 70 },
      { name: "Terraform", proficiency: 65 },
      { name: "Nginx", proficiency: 75 }
    ]
  },
  {
    title: "Mobile & Desktop",
    icon: Cpu,
    skills: [
      { name: "React Native", proficiency: 85 },
      { name: "Expo", proficiency: 88 },
      { name: "Electron", proficiency: 75 },
      { name: "Flutter", proficiency: 65 },
      { name: "iOS Development", proficiency: 60 },
      { name: "Android Development", proficiency: 60 }
    ]
  }
]

export default function SkillsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Technical Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => {
            const IconComponent = category.icon
            
            return (
              <Card key={categoryIndex} className="bg-card border-border hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="pb-6">
                  <CardTitle className="flex items-center gap-3 text-xl font-semibold text-primary">
                    <div className="p-2 bg-accent/10 rounded-lg">
                      <IconComponent className="w-5 h-5 text-accent" />
                    </div>
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Badge 
                            variant={skill.highlighted ? "default" : "secondary"}
                            className={`text-xs font-medium ${
                              skill.highlighted 
                                ? "bg-accent text-accent-foreground hover:bg-accent/90" 
                                : "bg-secondary text-secondary-foreground"
                            }`}
                          >
                            {skill.name}
                          </Badge>
                          {skill.highlighted && (
                            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
                          )}
                        </div>
                        {skill.proficiency && (
                          <span className="text-sm font-medium text-muted-foreground">
                            {skill.proficiency}%
                          </span>
                        )}
                      </div>
                      {skill.proficiency && (
                        <Progress 
                          value={skill.proficiency} 
                          className="h-2 w-full bg-secondary"
                        />
                      )}
                    </div>
                  ))}
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full">
            <div className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-sm font-medium text-accent">
              Currently learning: AI/ML, Rust, Web3
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}