import { Card, CardContent } from "@/components/ui/card";

export const StatsOverview = () => {
  const stats = [
    {
      title: "Total Impact Tracked",
      value: "$2.4M",
      subtitle: "In verified donations",
      color: "text-primary",
      bgColor: "bg-primary/5"
    },
    {
      title: "Meals Delivered",
      value: "12,847",
      subtitle: "This month alone",
      color: "text-secondary", 
      bgColor: "bg-secondary/5"
    },
    {
      title: "Families Supported",
      value: "3,200+",
      subtitle: "Across 15 states",
      color: "text-trust",
      bgColor: "bg-trust/5"
    },
    {
      title: "Supply Chain Transparency", 
      value: "100%",
      subtitle: "End-to-end tracking",
      color: "text-primary",
      bgColor: "bg-primary/5"
    },
    {
      title: "Partner Organizations",
      value: "450",
      subtitle: "Verified food pantries",
      color: "text-secondary",
      bgColor: "bg-secondary/5"
    },
    {
      title: "Response Time",
      value: "< 48hrs",
      subtitle: "Donation to delivery",
      color: "text-trust",
      bgColor: "bg-trust/5"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Transparent Impact Metrics</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Every donation is tracked from dollar to delivered meal with complete transparency
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className={`p-6 ${stat.bgColor} border-0 hover:shadow-lg transition-all hover:-translate-y-1`}>
              <CardContent className="p-0 text-center space-y-3">
                <div className={`text-4xl font-bold ${stat.color}`}>
                  {stat.value}
                </div>
                <div>
                  <div className="font-semibold text-lg">{stat.title}</div>
                  <div className="text-sm text-muted-foreground">{stat.subtitle}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};