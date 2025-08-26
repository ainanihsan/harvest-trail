import { HeroSection } from "@/components/HeroSection";
import { ImpactDashboard } from "@/components/ImpactDashboard";
import { FoodPantryProgram } from "@/components/FoodPantryProgram";
import { StatsOverview } from "@/components/StatsOverview";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <StatsOverview />
      <ImpactDashboard />
      <FoodPantryProgram />
      
      {/* Footer */}
      <footer className="bg-muted py-12">
        <div className="container mx-auto px-4 text-center">
          <div className="mb-6">
            <h3 className="text-2xl font-bold mb-2 bg-gradient-to-r from-primary to-primary-glow bg-clip-text text-transparent">
              FoodTrack Impact
            </h3>
            <p className="text-muted-foreground">
              Transparent food donations, measurable impact, real change.
            </p>
          </div>
          <div className="text-sm text-muted-foreground">
            © 2024 FoodTrack Impact. Building trust through transparency.
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;