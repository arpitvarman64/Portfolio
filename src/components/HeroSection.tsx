
import React from "react";
import { ArrowDown } from "lucide-react";
import { useUserInfo } from "@/contexts/UserInfoContext";

export default function HeroSection() {
  const { userInfo } = useUserInfo();

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#1a1a1a_1px,transparent_1px),linear-gradient(to_bottom,#1a1a1a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>
      
      <div className="absolute top-0 -z-10 h-screen w-full bg-white dark:bg-gray-900">
        <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-[rgba(120,119,198,0.075)] dark:bg-[rgba(120,119,198,0.15)] opacity-50 blur-[80px]"></div>
      </div>
      
      <div className="container px-4 sm:px-6 flex flex-col items-center text-center z-10">
        <span className="inline-flex animate-fade-in opacity-0 items-center rounded-full px-3 py-1 text-sm font-medium bg-primary/10 text-primary mb-6">
          {userInfo.title}
        </span>
        
        <h1 className="animate-fade-in opacity-0 delay-100 text-4xl md:text-6xl lg:text-7xl font-bold mb-6 max-w-4xl mx-auto tracking-tight text-foreground dark:text-white">
          Hi, I'm <span className="text-primary">{userInfo.name}</span>
        </h1>
        
        <p className="animate-fade-in opacity-0 delay-200 text-lg md:text-xl text-muted-foreground dark:text-gray-300 max-w-2xl mx-auto mb-8 text-balance">
          {userInfo.bio}
        </p>
        
        <div className="animate-fade-in opacity-0 delay-300 flex flex-wrap gap-4 justify-center">
          <a 
            href="#projects" 
            className="bg-primary text-white px-6 py-3 rounded-full font-medium transition-all hover:bg-primary/90 hover:shadow-md active:scale-95"
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="bg-secondary text-foreground dark:text-white dark:bg-gray-800 px-6 py-3 rounded-full font-medium transition-all hover:bg-secondary/80 dark:hover:bg-gray-700 active:scale-95"
          >
            Contact Me
          </a>
        </div>
        
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
          <a href="#about" aria-label="Scroll down">
            <ArrowDown className="h-6 w-6 text-muted-foreground dark:text-gray-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
