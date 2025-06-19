
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const teamMembers = [
  {
    name: "Pratyush Khadka",
    role: "CEO & Founder",
    description: "Visionary leader with 12+ years in tech, driving innovation and strategic growth.",
    image: "/lovable-uploads/bc943c02-5e94-4c92-aa9a-5287346d3dad.png"
  },
  {
    name: "Shyam Khadka",
    role: "CTO",
    description: "Technology expert specializing in scalable architecture and modern development practices."
  },
  {
    name: "Aashish Karki",
    role: "Head of HR",
    description: "People-focused leader ensuring our team culture and talent development excellence."
  },
  {
    name: "Martin",
    role: "Design Director",
    description: "Creative visionary crafting exceptional user experiences and brand identity."
  }
];

const Team = () => {
  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">Meet Our Leadership Team</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our experienced leadership team brings together diverse expertise to deliver exceptional results for our clients.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-2">
              <CardContent className="space-y-4">
                {member.image && (
                  <div className="flex justify-center mb-4">
                    <Avatar className="w-32 h-32 transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:z-10 relative cursor-pointer">
                      <AvatarImage src={member.image} alt={member.name} className="object-cover" />
                      <AvatarFallback className="text-lg font-semibold">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </AvatarFallback>
                    </Avatar>
                  </div>
                )}
                <div>
                  <h4 className="text-xl font-semibold text-primary">{member.name}</h4>
                  <p className="text-sm font-medium text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
