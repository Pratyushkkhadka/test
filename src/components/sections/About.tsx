
import { Card, CardContent } from "@/components/ui/card";
import { Users, Award, Clock, Heart } from "lucide-react";

const stats = [
  { icon: Users, label: "Happy Clients", value: "150+" },
  { icon: Award, label: "Projects Completed", value: "300+" },
  { icon: Clock, label: "Years Experience", value: "8+" },
  { icon: Heart, label: "Client Satisfaction", value: "99%" }
];

const About = () => {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-6">About DevStudio</h2>
              <p className="text-xl text-muted-foreground leading-relaxed mb-6">
                We are a passionate team of designers and developers who believe in the power of 
                great design and clean code. Our mission is to help businesses create digital 
                experiences that not only look amazing but also drive real results.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                With years of experience in web development, UI/UX design, and digital strategy, 
                we've helped startups and established companies alike achieve their digital goals. 
                From concept to launch, we're with you every step of the way.
              </p>
            </div>
            
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold">Why Choose Us?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Modern technologies and best practices</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>User-centered design approach</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Agile development methodology</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                  <span>Ongoing support and maintenance</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
                <CardContent className="space-y-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mx-auto">
                    <stat.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-3xl font-bold text-primary">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
