import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function PricingPage() {
  return (
    <div className="landing-container">
      <section className="inner-page-hero">
        <Card className="reveal">
          <CardHeader>
            <Badge className="mb-3">Archetype Growth</Badge>
            <CardTitle style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)" }}>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="lead">Archetype Growth — pricing overview.</p>
            <div className="actions">
              <ButtonLink href="#contact" size="lg">Talk to us</ButtonLink>
              <ButtonLink variant="outline" href="#use-cases" size="lg">See use cases</ButtonLink>
            </div>
          </CardContent>
        </Card>
        <div className="inner-page-accent reveal reveal-delay-2" aria-hidden />
      </section>
    </div>
  );
}
