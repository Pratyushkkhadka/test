
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Star, ArrowRight, Sparkles } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/sections/Footer";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const pricingPlans = [
  {
    category: "Web Development",
    icon: "💻",
    gradient: "from-blue-500 to-cyan-500",
    plans: [
      {
        name: "Basic Website",
        price: "$2,000 - $5,000",
        description: "Perfect for small businesses and startups",
        features: [
          "Responsive design",
          "Up to 5 pages",
          "Contact form",
          "SEO optimization",
          "Mobile friendly",
          "1 month support"
        ],
        popular: false
      },
      {
        name: "E-Commerce Platform",
        price: "$5,000 - $15,000",
        description: "Complete online store solution",
        features: [
          "Custom design",
          "Product management",
          "Payment integration",
          "Inventory system",
          "Order tracking",
          "3 months support"
        ],
        popular: true
      },
      {
        name: "Enterprise Solution",
        price: "$15,000 - $50,000",
        description: "Large-scale web applications",
        features: [
          "Custom development",
          "Advanced features",
          "Third-party integrations",
          "Performance optimization",
          "Security features",
          "6 months support"
        ],
        popular: false
      }
    ]
  },
  {
    category: "Mobile Development",
    icon: "📱",
    gradient: "from-green-500 to-emerald-500",
    plans: [
      {
        name: "Basic App",
        price: "$8,000 - $15,000",
        description: "Simple mobile application",
        features: [
          "iOS & Android",
          "Basic features",
          "User authentication",
          "Push notifications",
          "App store submission",
          "2 months support"
        ],
        popular: false
      },
      {
        name: "Advanced App",
        price: "$15,000 - $30,000",
        description: "Feature-rich mobile solution",
        features: [
          "Cross-platform",
          "Advanced UI/UX",
          "API integrations",
          "Offline functionality",
          "Analytics integration",
          "4 months support"
        ],
        popular: true
      }
    ]
  },
  {
    category: "UI/UX Design",
    icon: "🎨",
    gradient: "from-purple-500 to-pink-500",
    plans: [
      {
        name: "Design System",
        price: "$2,000 - $5,000",
        description: "Complete design package",
        features: [
          "User research",
          "Wireframes",
          "High-fidelity designs",
          "Prototype",
          "Design system",
          "Design handoff"
        ],
        popular: false
      },
      {
        name: "Brand + UX",
        price: "$5,000 - $12,000",
        description: "Comprehensive brand and UX design",
        features: [
          "Brand identity",
          "Logo design",
          "Complete UI/UX",
          "Style guide",
          "Marketing materials",
          "Ongoing support"
        ],
        popular: true
      }
    ]
  },
  {
    category: "Content Writing",
    icon: "✍️",
    gradient: "from-orange-500 to-red-500",
    plans: [
      {
        name: "Content Package",
        price: "$1,000 - $3,000",
        description: "Website and marketing content",
        features: [
          "Website copy",
          "Blog posts (5-10)",
          "SEO optimization",
          "Content strategy",
          "Social media content",
          "2 revisions"
        ],
        popular: false
      },
      {
        name: "Content + Strategy",
        price: "$3,000 - $8,000",
        description: "Complete content marketing solution",
        features: [
          "Content audit",
          "Content calendar",
          "Blog posts (20+)",
          "Email campaigns",
          "Social media strategy",
          "Monthly reports"
        ],
        popular: true
      }
    ]
  }
];

const Pricing = () => {
  const location = useLocation();
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    // Only scroll to specific sections if explicitly requested via state
    if (location.state?.scrollTo && location.state.scrollTo !== 'top') {
      const targetCategory = location.state.scrollTo;
      
      if (targetCategory === 'hero') {
        // Scroll to the hero section with "Choose Your Perfect Plan"
        setTimeout(() => {
          const heroElement = document.querySelector('.hero-section');
          if (heroElement) {
            heroElement.scrollIntoView({ behavior: "smooth", block: "center" });
          }
        }, 100);
      } else {
        // Scroll to specific category
        const element = categoryRefs.current[targetCategory];
        if (element) {
          setTimeout(() => {
            element.scrollIntoView({ behavior: "smooth", block: "center" });
          }, 100);
        }
      }
    }
  }, [location.state]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Hero Section */}
      <section className="hero-section pt-32 pb-20 bg-gradient-to-br from-primary/5 via-secondary/10 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 animate-fade-in">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Sparkles className="h-4 w-4" />
              Transparent Pricing
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Choose Your Perfect Plan
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Transform your ideas into reality with our comprehensive digital solutions. 
              All prices are estimates and can be customized based on your specific requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Categories */}
      <section className="pb-20">
        <div className="container mx-auto px-4">
          {pricingPlans.map((category, categoryIndex) => (
            <div 
              key={categoryIndex} 
              className="mb-20 animate-fade-in"
              ref={(el) => categoryRefs.current[category.category] = el}
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="text-center mb-12">
                <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-r ${category.gradient} text-white text-3xl mb-4 shadow-lg`}>
                  {category.icon}
                </div>
                <h2 className="text-3xl lg:text-4xl font-bold mb-2">{category.category}</h2>
                <div className={`w-24 h-1 bg-gradient-to-r ${category.gradient} mx-auto rounded-full`}></div>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {category.plans.map((plan, planIndex) => (
                  <Card 
                    key={planIndex} 
                    className={`relative transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${
                      plan.popular 
                        ? 'border-primary shadow-lg scale-105 bg-gradient-to-b from-primary/5 to-background' 
                        : 'hover:border-primary/50'
                    }`}
                  >
                    {plan.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                        <Badge className={`bg-gradient-to-r ${category.gradient} text-white flex items-center gap-1 px-4 py-1 shadow-lg`}>
                          <Star className="h-3 w-3 fill-current" />
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-4">
                      <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                      <div className={`text-4xl font-bold bg-gradient-to-r ${category.gradient} bg-clip-text text-transparent mb-2`}>
                        {plan.price}
                      </div>
                      <p className="text-muted-foreground">{plan.description}</p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <ul className="space-y-4 mb-8">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <div className={`w-5 h-5 rounded-full bg-gradient-to-r ${category.gradient} flex items-center justify-center flex-shrink-0 mt-0.5`}>
                              <Check className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-sm leading-relaxed">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button 
                        className={`w-full group ${
                          plan.popular 
                            ? `bg-gradient-to-r ${category.gradient} hover:shadow-lg` 
                            : ''
                        }`}
                        variant={plan.popular ? "default" : "outline"}
                        onClick={() => scrollToSection("contact")}
                      >
                        Get Started
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}

          {/* Custom Solution CTA */}
          <div className="text-center mt-20 animate-fade-in">
            <div className="bg-gradient-to-r from-primary/10 via-secondary/10 to-accent/10 rounded-3xl p-12 max-w-4xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">Need a Custom Solution?</h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Every project is unique. Let's discuss your specific requirements and create a tailored solution that perfectly fits your needs and budget.
              </p>
              <Button size="lg" className="group" onClick={() => scrollToSection("contact")}>
                Contact Us for Custom Quote
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;
