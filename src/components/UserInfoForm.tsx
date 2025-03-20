
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { PlusCircle, X } from "lucide-react";

interface UserInfoFormProps {
  onSave: (data: UserInfo) => void;
}

export interface UserInfo {
  name: string;
  title: string;
  bio: string;
  experience: string;
  skills: string[];
  github: string;
  linkedin: string;
  email: string;
}

export default function UserInfoForm({ onSave }: UserInfoFormProps) {
  const [open, setOpen] = useState(false);
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: "",
    title: "",
    bio: "",
    experience: "",
    skills: [],
    github: "",
    linkedin: "",
    email: "",
  });
  const [currentSkill, setCurrentSkill] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setUserInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleAddSkill = () => {
    if (currentSkill.trim() && !userInfo.skills.includes(currentSkill.trim())) {
      setUserInfo(prev => ({
        ...prev,
        skills: [...prev.skills, currentSkill.trim()]
      }));
      setCurrentSkill("");
    }
  };

  const handleRemoveSkill = (skill: string) => {
    setUserInfo(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s !== skill)
    }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleAddSkill();
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(userInfo);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" className="fixed bottom-5 right-5 z-50 rounded-full">
          <PlusCircle className="mr-2 h-4 w-4" />
          Update Portfolio Info
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Your Portfolio Information</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4 pt-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">Full Name</label>
            <Input
              id="name"
              name="name"
              value={userInfo.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
            />
          </div>
          
          <div>
            <label htmlFor="title" className="block text-sm font-medium mb-1">Professional Title</label>
            <Input
              id="title"
              name="title"
              value={userInfo.title}
              onChange={handleChange}
              placeholder="Frontend Developer"
              required
            />
          </div>
          
          <div>
            <label htmlFor="bio" className="block text-sm font-medium mb-1">Bio</label>
            <Textarea
              id="bio"
              name="bio"
              value={userInfo.bio}
              onChange={handleChange}
              placeholder="I'm a developer with expertise in..."
              required
              className="min-h-[100px]"
            />
          </div>
          
          <div>
            <label htmlFor="experience" className="block text-sm font-medium mb-1">Experience</label>
            <Textarea
              id="experience"
              name="experience"
              value={userInfo.experience}
              onChange={handleChange}
              placeholder="I have X years of experience working with..."
              required
              className="min-h-[100px]"
            />
          </div>
          
          <div>
            <label htmlFor="skills" className="block text-sm font-medium mb-1">Skills</label>
            <div className="flex">
              <Input
                id="skills"
                value={currentSkill}
                onChange={(e) => setCurrentSkill(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="React"
              />
              <Button 
                type="button" 
                onClick={handleAddSkill} 
                className="ml-2"
              >
                Add
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-2">
              {userInfo.skills.map((skill) => (
                <Badge key={skill} className="flex items-center gap-1">
                  {skill}
                  <button 
                    type="button" 
                    onClick={() => handleRemoveSkill(skill)}
                    className="hover:text-destructive transition-colors"
                  >
                    <X className="h-3 w-3" />
                  </button>
                </Badge>
              ))}
            </div>
          </div>
          
          <div>
            <label htmlFor="github" className="block text-sm font-medium mb-1">GitHub URL</label>
            <Input
              id="github"
              name="github"
              type="url"
              value={userInfo.github}
              onChange={handleChange}
              placeholder="https://github.com/yourusername"
            />
          </div>
          
          <div>
            <label htmlFor="linkedin" className="block text-sm font-medium mb-1">LinkedIn URL</label>
            <Input
              id="linkedin"
              name="linkedin"
              type="url"
              value={userInfo.linkedin}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/yourusername"
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
            <Input
              id="email"
              name="email"
              type="email"
              value={userInfo.email}
              onChange={handleChange}
              placeholder="you@example.com"
              required
            />
          </div>
          
          <Button type="submit" className="w-full">Save Information</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
