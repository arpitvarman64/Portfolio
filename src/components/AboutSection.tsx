
import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";
import { useUserInfo } from "@/contexts/UserInfoContext";

// For production, use your actual profile picture or set up an image in /public/
const profileUrl = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80";

export default function AboutSection() {
  const { userInfo } = useUserInfo();

  return (
    <section id="about" className="py-20 md:py-32 bg-white dark:bg-gray-900 relative overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="order-2 md:order-1">
            <span className="inline-block text-sm font-medium text-primary mb-4">
              About Me
            </span>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight dark:text-white">
              Passionate About Creating Intuitive Digital Solutions
            </h2>
            
            <p className="text-muted-foreground dark:text-gray-300 mb-6">
              {userInfo.experience}
            </p>
            
            <div className="flex gap-5 mb-8">
              <a 
                href={userInfo.github}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary dark:bg-gray-800 rounded-full p-3 hover:bg-secondary/80 dark:hover:bg-gray-700 transition-colors"
                aria-label="GitHub Profile"
              >
                <Github className="h-5 w-5 dark:text-gray-300" />
              </a>
              <a 
                href={userInfo.linkedin}
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-secondary dark:bg-gray-800 rounded-full p-3 hover:bg-secondary/80 dark:hover:bg-gray-700 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-5 w-5 dark:text-gray-300" />
              </a>
              <a 
                href={`mailto:${userInfo.email}`}
                className="bg-secondary dark:bg-gray-800 rounded-full p-3 hover:bg-secondary/80 dark:hover:bg-gray-700 transition-colors"
                aria-label="Email Me"
              >
                <Mail className="h-5 w-5 dark:text-gray-300" />
              </a>
            </div>
          </div>
          
          <div className="order-1 md:order-2 relative">
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-xl aspect-[4/5] max-w-md mx-auto">
              <img 
                src={profileUrl} 
                alt="Portfolio Owner" 
                className="w-full h-full object-cover object-center"
                loading="lazy"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-primary/5 dark:bg-primary/10 rounded-full blur-3xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-64 h-64 bg-secondary/20 dark:bg-secondary/10 rounded-full blur-3xl -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
