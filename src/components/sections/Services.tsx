
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Code, Palette, Smartphone, Globe, Database, PenTool, ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const services = [
  {
    icon: Code,
    title: "Web Development",
    description: "Custom web applications built with modern technologies and best practices.",
    features: ["React & Next.js", "TypeScript", "Responsive Design", "Performance Optimization"],
    color: "text-blue-500",
    gradient: "from-blue-500 to-cyan-500",
    pricingCategory: "Web Development"
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "User-centered design that combines aesthetics with functionality.",
    features: ["User Research", "Wireframing", "Prototyping", "Design Systems"],
    color: "text-purple-500",
    gradient: "from-purple-500 to-pink-500",
    pricingCategory: "UI/UX Design"
  },
  {
    icon: Smartphone,
    title: "Mobile Development",
    description: "Cross-platform mobile apps that work seamlessly on all devices.",
    features: ["React Native", "Flutter", "iOS & Android", "App Store Optimization"],
    color: "text-green-500",
    gradient: "from-green-500 to-emerald-500",
    pricingCategory: "Mobile Development"
  },
  {
    icon: Globe,
    title: "Web Applications",
    description: "Scalable web applications with modern architecture and cloud deployment.",
    features: ["Full-Stack Development", "API Integration", "Cloud Hosting", "Security"],
    color: "text-orange-500",
    gradient: "from-orange-500 to-red-500",
    pricingCategory: "Web Development"
  },
  {
    icon: Database,
    title: "Backend Solutions",
    description: "Robust backend systems and database architecture for your applications.",
    features: ["Database Design", "API Development", "Server Management", "Data Analytics"],
    color: "text-red-500",
    gradient: "from-red-500 to-pink-500",
    pricingCategory: "Web Development"
  },
  {
    icon: PenTool,
    title: "Content Writing",
    description: "Engaging content that converts visitors into customers and builds brand authority.",
    features: ["SEO Content", "Technical Writing", "Blog Posts", "Marketing Copy"],
    color: "text-indigo-500",
    gradient: "from-indigo-500 to-purple-500",
    pricingCategory: "Content Writing"
  }
];

const Services = () => {
  const navigate = useNavigate();

  const handleViewPlans = (pricingCategory: string) => {
    navigate('/pricing', { state: { scrollTo: pricingCategory } });
  };

  const handleViewAllPricing = () => {
    console.log("View All Pricing button clicked");
    navigate('/pricing', { state: { scrollTo: 'hero' } });
  };

  return (
    <section id="services" className="py-20 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Code className="h-4 w-4" />
            Our Services
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
            Comprehensive Digital Solutions
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer end-to-end digital solutions to help your business thrive in the modern world. 
            From concept to deployment, we've got you covered.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="hover:shadow-xl transition-all duration-500 hover:-translate-y-3 border-0 bg-background/80 backdrop-blur-sm group relative overflow-hidden h-full flex flex-col"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
              
              <CardHeader className="relative flex-shrink-0">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-all duration-300 shadow-lg`}>
                  <service.icon className="h-7 w-7 text-white" />
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 min-h-[2rem]">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-base leading-relaxed min-h-[3rem]">
                  {service.description}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="relative flex-grow flex flex-col justify-between">
                <div className="flex flex-wrap gap-2 mb-6 min-h-[4rem]">
                  {service.features.map((feature, featureIndex) => (
                    <Badge 
                      key={featureIndex} 
                      variant="secondary" 
                      className="text-xs hover:bg-primary/10 transition-colors"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div>
                
                <Button 
                  onClick={() => handleViewPlans(service.pricingCategory)}
                  className={`w-full group/btn bg-gradient-to-r ${service.gradient} hover:shadow-lg transition-all duration-300 mt-auto`}
                  size="sm"
                >
                  View Plans
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16 animate-fade-in">
          <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-2xl p-8 max-w-3xl mx-auto border border-primary/20">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Let's discuss your project requirements and find the perfect solution for your business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={handleViewAllPricing}
                className="group"
              >
                View All Pricing
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                onClick={() => {
                  const element = document.getElementById("contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Get Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
