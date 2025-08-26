import { Button } from "@/components/ui/button";
import foodPantryHero from "@/assets/food-pantry-hero.jpg";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center justify-center bg-gradient-to-br from-background via-muted to-primary/5">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h1 className="text-5xl lg:text-6xl font-bold bg-gradient-to-r from-primary via-primary-glow to-secondary bg-clip-text text-transparent leading-tight">
              Track Every Meal, 
              <br />
              Change Every Life
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              See the real impact of your donations. From your contribution to the farmer's field, 
              through our supply chain, directly to families in need. Complete transparency, 
              measurable impact.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="lg" className="text-lg px-8">
              Start Tracking Impact
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              View Live Dashboard
            </Button>
          </div>
          
          <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">$2.4M</div>
              <div className="text-sm text-muted-foreground">Tracked Donations</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-secondary">12,847</div>
              <div className="text-sm text-muted-foreground">Meals Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-trust">450</div>
              <div className="text-sm text-muted-foreground">Partner Pantries</div>
            </div>
          </div>
        </div>
        
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-2xl">
            <img 
              src={foodPantryHero} 
              alt="Volunteers organizing food at a community pantry"
              className="w-full h-[600px] object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-background p-6 rounded-xl shadow-xl border">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse"></div>
              <span className="font-medium">Live Impact Updates</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Real-time donation tracking active
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};