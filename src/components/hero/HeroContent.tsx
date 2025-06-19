
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface HeroContentProps {
  onContactClick: () => void;
  onPortfolioClick: () => void;
}

const HeroContent = ({ onContactClick, onPortfolioClick }: HeroContentProps) => {
  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-5xl lg:text-7xl font-bold leading-tight font-playfair">
        We Build
        <span className="text-primary block">Digital Dreams</span>
      </h1>
      <p className="text-xl text-muted-foreground leading-relaxed font-poppins font-light">
        Transform your ideas into stunning web applications and user experiences. 
        We specialize in modern web development, UI/UX design, content writing, and digital solutions 
        that drive results.
      </p>
      <div className="flex flex-col sm:flex-row gap-4">
        <Button 
          size="lg" 
          onClick={onContactClick}
          className="group font-poppins font-medium"
        >
          Start Your Project
          <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
        </Button>
        <Button 
          variant="outline" 
          size="lg"
          onClick={onPortfolioClick}
          className="font-poppins font-medium"
        >
          View Our Work
        </Button>
      </div>
    </div>
  );
};

export default HeroContent;
