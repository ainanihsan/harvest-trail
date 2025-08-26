import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import farmerImpact from "@/assets/farmer-impact.jpg";

export const ImpactDashboard = () => {
  const impacts = [
    {
      title: "Maria's Farm - Guatemala",
      description: "Received fertilizer and tools through your donation",
      image: farmerImpact,
      progress: 85,
      status: "Growing",
      metrics: {
        yield: "+40% increase",
        income: "+$180/month", 
        family: "5 members supported"
      },
      updates: [
        "Seeds planted with new fertilizer - March 15",
        "First harvest exceeded expectations - June 2",
        "Building new storage facility - Current"
      ]
    }
  ];

  const supplyChainData = [
    { step: "Donation Received", status: "completed", date: "Feb 14, 2024" },
    { step: "Supplies Purchased", status: "completed", date: "Feb 16, 2024" },
    { step: "Warehouse Processing", status: "completed", date: "Feb 20, 2024" },
    { step: "Transport to Region", status: "completed", date: "Feb 25, 2024" },
    { step: "Local Distribution", status: "completed", date: "Mar 1, 2024" },
    { step: "Farmer Delivery", status: "completed", date: "Mar 5, 2024" },
    { step: "Impact Tracking", status: "active", date: "Ongoing" }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Your Impact Dashboard</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Follow your donation's journey from contribution to real-world change
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {impacts.map((impact, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48">
                <img 
                  src={impact.image} 
                  alt={impact.title}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 right-4 bg-primary text-primary-foreground">
                  {impact.status}
                </Badge>
              </div>
              <CardHeader>
                <CardTitle className="text-xl">{impact.title}</CardTitle>
                <CardDescription>{impact.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>Project Progress</span>
                    <span className="font-medium">{impact.progress}%</span>
                  </div>
                  <Progress value={impact.progress} className="h-2" />
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="font-semibold text-primary">{impact.metrics.yield}</div>
                    <div className="text-xs text-muted-foreground">Yield Increase</div>
                  </div>
                  <div>
                    <div className="font-semibold text-secondary">{impact.metrics.income}</div>
                    <div className="text-xs text-muted-foreground">Monthly Income</div>
                  </div>
                  <div>
                    <div className="font-semibold text-trust">{impact.metrics.family}</div>
                    <div className="text-xs text-muted-foreground">Family Size</div>
                  </div>
                </div>
                
                <div className="space-y-2">
                  <h4 className="font-medium text-sm">Recent Updates</h4>
                  {impact.updates.map((update, idx) => (
                    <div key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {update}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="p-8">
          <CardHeader className="text-center pb-8">
            <CardTitle className="text-2xl">Donation Supply Chain</CardTitle>
            <CardDescription>Track your $50 donation through our transparent system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="relative">
              <div className="absolute left-8 top-8 bottom-8 w-0.5 bg-border"></div>
              <div className="space-y-8">
                {supplyChainData.map((item, index) => (
                  <div key={index} className="relative flex items-center gap-6">
                    <div className={`w-4 h-4 rounded-full border-2 z-10 ${
                      item.status === 'completed' 
                        ? 'bg-primary border-primary' 
                        : 'bg-secondary border-secondary animate-pulse'
                    }`}></div>
                    <div className="flex-1 flex justify-between items-center">
                      <div>
                        <div className="font-medium">{item.step}</div>
                        <div className="text-sm text-muted-foreground">{item.date}</div>
                      </div>
                      <Badge variant={item.status === 'completed' ? 'default' : 'secondary'}>
                        {item.status === 'completed' ? 'Complete' : 'Active'}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};