
import HeroContent from "@/components/hero/HeroContent";
import ServicesGrid from "@/components/hero/ServicesGrid";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleServiceClick = (serviceType: string) => {
    // Scroll to portfolio and filter by service type
    scrollToSection("portfolio");
    // Add a small delay to ensure scrolling completes before filtering
    setTimeout(() => {
      const event = new CustomEvent('filterPortfolio', { detail: serviceType });
      window.dispatchEvent(event);
    }, 500);
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-secondary/20 pt-20">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HeroContent 
            onContactClick={() => scrollToSection("contact")}
            onPortfolioClick={() => scrollToSection("portfolio")}
          />
          <ServicesGrid onServiceClick={handleServiceClick} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
