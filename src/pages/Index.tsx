
import React, { useEffect } from "react";
import NavBar from "@/components/NavBar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import UserInfoForm from "@/components/UserInfoForm";
import { useUserInfo } from "@/contexts/UserInfoContext";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { updateUserInfo } = useUserInfo();
  const { toast } = useToast();

  // Add scroll reveal animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fade-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Select all sections except the hero section (which should already be visible)
    document.querySelectorAll("section:not(#home)").forEach((section) => {
      section.classList.add("opacity-0");
      observer.observe(section);
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  const handleSaveUserInfo = (data) => {
    updateUserInfo(data);
    toast({
      title: "Portfolio Updated",
      description: "Your portfolio information has been updated successfully.",
    });
  };

  return (
    <div className="min-h-screen bg-background dark:bg-gray-900 transition-colors duration-300">
      <NavBar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <Footer />
      <UserInfoForm onSave={handleSaveUserInfo} />
    </div>
  );
};

export default Index;
