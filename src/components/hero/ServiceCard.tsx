
import { Star } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  rating: number;
  reviews: number;
  gradient: string;
  icon: React.ReactNode;
  rotation: string;
  onClick: () => void;
}

const ServiceCard = ({ 
  title, 
  description, 
  rating, 
  reviews, 
  gradient, 
  icon, 
  rotation, 
  onClick 
}: ServiceCardProps) => {
  return (
    <div 
      className={`bg-background/80 backdrop-blur-sm border border-border/50 p-6 rounded-2xl transform ${rotation} hover:rotate-0 transition-all duration-300 cursor-pointer hover:shadow-xl group`}
      onClick={onClick}
    >
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
        {icon}
      </div>
      <h3 className="font-semibold text-lg mb-2 font-poppins">{title}</h3>
      <p className="text-sm text-muted-foreground mb-3 font-inter">{description}</p>
      <div className="flex items-center gap-2">
        <div className="flex items-center gap-1">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating)
                  ? 'fill-yellow-400 text-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-muted-foreground font-inter">
          {rating} ({reviews})
        </span>
      </div>
    </div>
  );
};

export default ServiceCard;
