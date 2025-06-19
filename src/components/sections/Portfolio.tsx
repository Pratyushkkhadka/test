import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A modern e-commerce solution with advanced features and seamless user experience.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: "Web Development"
  },
  {
    title: "Healthcare Dashboard",
    description: "Comprehensive dashboard for healthcare providers with patient management and analytics.",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    technologies: ["Vue.js", "Python", "MongoDB", "Chart.js"],
    category: "Web Development"
  },
  {
    title: "Telemedicine App",
    description: "Complete telemedicine solution with video consultations and patient records.",
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=600&h=400&fit=crop",
    technologies: ["React Native", "WebRTC", "Firebase"],
    category: "Mobile App"
  },
  {
    title: "Mobile Banking App",
    description: "Secure and intuitive mobile banking application with biometric authentication.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
    technologies: ["React Native", "Firebase", "TypeScript"],
    category: "Mobile App"
  },
  {
    title: "Real Estate Platform",
    description: "Modern real estate platform with virtual tours and advanced search functionality.",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop",
    technologies: ["Next.js", "Prisma", "Tailwind CSS"],
    category: "Web Development"
  },
  {
    title: "Learning Management System",
    description: "Complete LMS with course creation, student tracking, and interactive features.",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop",
    technologies: ["React", "Express", "MySQL", "Socket.io"],
    category: "Web Development"
  },
  {
    title: "FinTech App UI/UX Design",
    description: "Complete UI/UX design system for a modern fintech application with user research.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["Figma", "Adobe XD", "Principle", "InVision"],
    category: "UI/UX Design"
  },
  {
    title: "E-commerce Brand Design",
    description: "Complete brand identity and UI/UX design for an e-commerce platform.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["Figma", "Adobe Creative Suite", "Sketch"],
    category: "UI/UX Design"
  },
  {
    title: "SaaS Content Strategy",
    description: "Complete content marketing strategy and copywriting for B2B SaaS platform.",
    image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop",
    technologies: ["Content Strategy", "SEO", "Copywriting", "Analytics"],
    category: "Content Writing"
  },
  {
    title: "Healthcare Blog Content",
    description: "Medical blog content creation with SEO optimization and expert review.",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?w=600&h=400&fit=crop",
    technologies: ["Medical Writing", "SEO", "Content Marketing"],
    category: "Content Writing"
  }
];

const categories = ["All", "Web Development", "Mobile App", "UI/UX Design", "Content Writing"];

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(projects.filter(project => project.category === selectedCategory));
    }
  }, [selectedCategory]);

  useEffect(() => {
    const handleFilterPortfolio = (event: CustomEvent) => {
      const category = event.detail;
      setSelectedCategory(category);
    };

    window.addEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    return () => {
      window.removeEventListener('filterPortfolio', handleFilterPortfolio as EventListener);
    };
  }, []);

  return (
    <section id="portfolio" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Our Portfolio</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Take a look at some of our recent projects and see how we've helped businesses 
            transform their digital presence.
          </p>
        </div>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300"
            >
              {category}
            </Button>
          ))}
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <Card key={index} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                  <Button size="sm" variant="secondary">
                    <ExternalLink className="h-4 w-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button size="sm" variant="outline">
                    <Github className="h-4 w-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>
              <CardContent className="p-6">
                <div className="mb-3">
                  <Badge variant="secondary">{project.category}</Badge>
                </div>
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
