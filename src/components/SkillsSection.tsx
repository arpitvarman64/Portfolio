
import React from "react";
import { useUserInfo } from "@/contexts/UserInfoContext";

export default function SkillsSection() {
  const { userInfo } = useUserInfo();
  
  // Group skills into categories
  const groupedSkills = {
    "Frontend": userInfo.skills.filter(skill => 
      ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind"].some(k => skill.includes(k))
    ),
    "Backend": userInfo.skills.filter(skill => 
      ["Node", "Express", "API", "Firebase", "Database", "Flask"].some(k => skill.includes(k))
    ),
    "Testing & Tools": userInfo.skills.filter(skill => 
      ["Jira", "Cypress", "Git", "Testing", "CI/CD"].some(k => skill.includes(k))
    ),
    "Others": userInfo.skills.filter(skill => 
      !["HTML", "CSS", "JavaScript", "React", "TypeScript", "Tailwind", 
        "Node", "Express", "API", "Firebase", "Database", "Flask",
        "Jira", "Cypress", "Git", "Testing", "CI/CD"].some(k => skill.includes(k))
    ),
  };

  // Remove empty categories
  const skillCategories = Object.entries(groupedSkills)
    .filter(([_, skills]) => skills.length > 0)
    .map(([category, skills]) => ({
      category,
      items: skills.map(name => ({ name, level: Math.floor(Math.random() * 20) + 80 })) // Random level for demo
    }));

  return (
    <section id="skills" className="py-20 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block text-sm font-medium text-primary mb-4">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight dark:text-white">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground dark:text-gray-300">
            With professional experience, I've developed proficiency
            in several technologies and tools that allow me to build modern, responsive web applications.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((skillGroup) => (
            <div 
              key={skillGroup.category}
              className="bg-secondary/20 dark:bg-gray-800/50 p-8 rounded-2xl"
            >
              <h3 className="text-xl font-bold mb-6 dark:text-white">{skillGroup.category}</h3>
              <div className="space-y-6">
                {skillGroup.items.map((skill) => (
                  <SkillBar key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

interface SkillBarProps {
  skill: {
    name: string;
    level: number;
  };
}

function SkillBar({ skill }: SkillBarProps) {
  return (
    <div>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium dark:text-white">{skill.name}</span>
        <span className="text-xs text-muted-foreground dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-secondary dark:bg-gray-700 rounded-full overflow-hidden">
        <div 
          className="h-full bg-primary rounded-full transition-all duration-1000"
          style={{ width: `${skill.level}%` }}
        ></div>
      </div>
    </div>
  );
}
