import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import supplyChainImg from "@/assets/supply-chain.jpg";

export const FoodPantryProgram = () => {
  const pantries = [
    {
      name: "Downtown Community Kitchen",
      location: "San Francisco, CA",
      need: "Critical",
      families: 245,
      monthlyGoal: 1200,
      currentSupport: 890,
      image: supplyChainImg,
      needs: ["Fresh Produce", "Protein Sources", "Baby Formula"],
      impact: "Serves 245 families weekly with fresh, nutritious meals"
    },
    {
      name: "Riverside Food Hub",
      location: "Austin, TX", 
      need: "Moderate",
      families: 180,
      monthlyGoal: 800,
      currentSupport: 650,
      image: supplyChainImg,
      needs: ["Canned Goods", "Rice & Grains", "Hygiene Items"],
      impact: "Mobile pantry reaching rural communities within 50 miles"
    },
    {
      name: "Hope Center Pantry",
      location: "Detroit, MI",
      need: "High",
      families: 320,
      monthlyGoal: 1500,
      currentSupport: 720,
      image: supplyChainImg,
      needs: ["Fresh Vegetables", "Dairy Products", "School Supplies"],
      impact: "Education programs alongside food distribution for 320 families"
    }
  ];

  const getNeedColor = (need: string) => {
    switch (need) {
      case "Critical": return "bg-destructive text-destructive-foreground";
      case "High": return "bg-secondary text-secondary-foreground";
      case "Moderate": return "bg-trust text-trust-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getProgress = (current: number, goal: number) => {
    return Math.round((current / goal) * 100);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Adopt a Food Pantry</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Partner with a local food pantry and see direct updates from volunteers, 
            photos of distributions, and messages from families you're helping.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {pantries.map((pantry, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-all hover:-translate-y-1">
              <div className="relative h-48">
                <img 
                  src={pantry.image}
                  alt={`${pantry.name} operations`}
                  className="w-full h-full object-cover"
                />
                <Badge className={`absolute top-4 right-4 ${getNeedColor(pantry.need)}`}>
                  {pantry.need} Need
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl">{pantry.name}</CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <span>{pantry.location}</span>
                  <span className="text-xs">•</span>
                  <span>{pantry.families} families served</span>
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <div className="flex justify-between text-sm">
                    <span>Monthly Support Goal</span>
                    <span className="font-medium">
                      ${pantry.currentSupport.toLocaleString()} / ${pantry.monthlyGoal.toLocaleString()}
                    </span>
                  </div>
                  <div className="w-full bg-muted rounded-full h-2">
                    <div 
                      className="bg-gradient-to-r from-primary to-primary-glow h-2 rounded-full transition-all duration-500"
                      style={{ width: `${getProgress(pantry.currentSupport, pantry.monthlyGoal)}%` }}
                    ></div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    {getProgress(pantry.currentSupport, pantry.monthlyGoal)}% of monthly goal reached
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-sm mb-3">Current Needs</h4>
                  <div className="flex flex-wrap gap-2">
                    {pantry.needs.map((need, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {need}
                      </Badge>
                    ))}
                  </div>
                </div>

                <p className="text-sm text-muted-foreground border-l-2 border-primary pl-3">
                  {pantry.impact}
                </p>

                <div className="grid grid-cols-2 gap-3">
                  <Button variant="hero" size="sm" className="text-xs">
                    Adopt Pantry
                  </Button>
                  <Button variant="outline" size="sm" className="text-xs">
                    View Updates
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button variant="trust" size="lg" className="px-8">
            Explore All Partner Pantries
          </Button>
        </div>
      </div>
    </section>
  );
};