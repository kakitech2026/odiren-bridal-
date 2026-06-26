import { Play } from "lucide-react";
import commercialVideo from "@/assets/video/commercial.mp4";

const CommercialSection = () => {
  return (
    <section id="commercial" className="py-16 sm:py-20 bg-background">
        <div className="text-center mb-12 sm:mb-16 animate-fade-in">
          <h2 className="px-4 sm:px-0 text-3xl sm:text-4xl lg:text-5xl tracking-tight font-normal text-foreground mb-4">
            Our Craft in Motion
          </h2>
          <div className="w-16 sm:w-20 h-1 bg-gold rounded-full mx-auto mb-4 sm:mb-6"></div>
          <p className="font-display font-light italic text-lg sm:text-xl text-black/50 max-w-2xl mx-auto px-4">
            A glimpse into how we shape elegance — custom gowns, bridal party ensembles, and couture pieces brought to life through Odiren’s signature craftsmanship and thoughtful design.
          </p>
        </div>
        <div className="px-4 sm:px-12">
            <video 
            className="w-full h-full rounded-2xl border border-border hover-luxury glow-romantic"
            preload="metadata"
            loop
            autoPlay
            muted   
            src={commercialVideo}></video>
        </div>
    </section>
  );
};

export default CommercialSection;