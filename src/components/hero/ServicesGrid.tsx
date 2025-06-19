
import { Code, Smartphone, Palette, PenTool } from "lucide-react";
import ServiceCard from "./ServiceCard";

interface ServicesGridProps {
  onServiceClick: (serviceType: string) => void;
}

const ServicesGrid = ({ onServiceClick }: ServicesGridProps) => {
  const services = [
    {
      icon: <Code className="h-6 w-6 text-white" />,
      title: "Web Development",
      description: "Modern, responsive websites",
      rating: 4.9,
      reviews: 127,
      gradient: "from-blue-500 to-cyan-500",
      serviceType: "Web Development",
      rotation: "rotate-3"
    },
    {
      icon: <Smartphone className="h-6 w-6 text-white" />,
      title: "Mobile Apps",
      description: "Cross-platform solutions",
      rating: 4.8,
      reviews: 89,
      gradient: "from-green-500 to-emerald-500",
      serviceType: "Mobile App",
      rotation: "-rotate-3"
    },
    {
      icon: <Palette className="h-6 w-6 text-white" />,
      title: "UI/UX Design",
      description: "Beautiful user interfaces",
      rating: 4.9,
      reviews: 156,
      gradient: "from-purple-500 to-pink-500",
      serviceType: "UI/UX Design",
      rotation: "rotate-2"
    },
    {
      icon: <PenTool className="h-6 w-6 text-white" />,
      title: "Content Writing",
      description: "Engaging copy & content",
      rating: 4.7,
      reviews: 94,
      gradient: "from-indigo-500 to-purple-500",
      serviceType: "Content Writing",
      rotation: "-rotate-1"
    }
  ];

  return (
    <div className="relative">
      <div className="grid grid-cols-2 gap-6">
        <div className="space-y-6">
          <ServiceCard
            {...services[0]}
            onClick={() => onServiceClick(services[0].serviceType)}
          />
          <ServiceCard
            {...services[1]}
            onClick={() => onServiceClick(services[1].serviceType)}
          />
        </div>
        
        <div className="space-y-6 mt-12">
          <ServiceCard
            {...services[2]}
            onClick={() => onServiceClick(services[2].serviceType)}
          />
          <ServiceCard
            {...services[3]}
            onClick={() => onServiceClick(services[3].serviceType)}
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesGrid;
