
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Believe IT Solution</h3>
            <p className="text-primary-foreground/80">
              Creating digital experiences that drive results and inspire users with innovative IT solutions.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="hover:text-primary-foreground/60 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Web Development</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">UI/UX Design</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Mobile Apps</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Consulting</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li><a href="#" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Our Team</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-primary-foreground transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>hello@believeitsolution.com</li>
              <li>+1 (555) 123-4567</li>
              <li>123 Business Ave<br />Tech City, TC 12345</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center text-primary-foreground/60">
          <p>&copy; 2024 Believe IT Solution. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
