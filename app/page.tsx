import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { ButtonLink } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <>
      
      <section className="hero-landing-shell reveal reveal-delay-1">
        <div className="hero-landing">
          <div className="hero-copy reveal">
            <h1 className="hero-headline">AI agent use cases for healthcare operations</h1>
            <p className="lead">Streamline claims, eligibility, prior authorization, referrals, and member support with practical agent workflows.</p>
            <div className="actions">
              <ButtonLink href="#contact" size="lg">Talk to us</ButtonLink>
              <ButtonLink variant="outline" href="#use-cases" size="lg">See use cases</ButtonLink>
            </div>
          </div>
          <div className="hero-offer-grid">
            <Card className="hero-offer-mini-card reveal">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Faster intake and triage</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">Automate structured and unstructured intake so teams can categorize work and prioritize what needs attention first.</p>
                </CardContent>
              </Card>
              <Card className="hero-offer-mini-card reveal reveal-delay-1">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Real-time verification</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">Verify coverage, explain benefits, and flag gaps or authorization requirements without long manual back-and-forth.</p>
                </CardContent>
              </Card>
              <Card className="hero-offer-mini-card reveal reveal-delay-2">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Better member and provider support</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">Handle common questions, surface status updates, and reduce call center volume with personalized responses.</p>
                </CardContent>
              </Card>
              <Card className="hero-offer-mini-card reveal reveal-delay-2">
                <CardContent className="hero-offer-mini-content">
                  <p className="hero-offer-title">Core capability</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                    <span className="hero-offer-shimmer hero-offer-shimmer-b" />
                  </div>
                  <p className="hero-offer-body">Deliver value quickly with clear, focused workflows.</p>
                </CardContent>
              </Card>
          </div>
        </div>
      </section>
      <section className="section section-alt reveal">
        <h2 className="section-header">Who it&apos;s for</h2>
        <div className="audience-grid">
          <Card className="audience-segment-card reveal">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Healthcare operations leaders</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Collaborate with shared context, policies, and audit trails.</p>
                </CardContent>
              </Card>
          <Card className="audience-segment-card reveal reveal-delay-1">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Payer teams</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Collaborate with shared context, policies, and audit trails.</p>
                </CardContent>
              </Card>
          <Card className="audience-segment-card reveal reveal-delay-2">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Provider organizations</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Purpose-built experiences for provider organizations.</p>
                </CardContent>
              </Card>
          <Card className="audience-segment-card reveal reveal-delay-2">
                <CardContent className="audience-segment-content">
                  <p className="audience-segment-title">Customers</p>
                  <div className="hero-offer-shimmer-lines" aria-hidden="true">
                    <span className="hero-offer-shimmer hero-offer-shimmer-a" />
                  </div>
                  <p className="audience-segment-body">Self-serve answers and faster resolutions at scale.</p>
                </CardContent>
              </Card>
        </div>
      </section>
      <section className="section reveal">
        <h2 className="section-header">Features</h2>
        <div className="feature-grid">
          <Card><CardHeader><CardTitle>Claims intake &amp; triage</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Automates intake of claims from multiple formats.</li><li>Categorizes and prioritizes claims for processing.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Eligibility &amp; benefits verification</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Verifies member coverage in real time.</li><li>Explains benefits details to members or agents.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Prior authorization assistant</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Guides requests through approval workflows.</li><li>Identifies missing information and reduces delays.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Member engagement &amp; support</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Handles coverage, claims status, and ID card inquiries.</li><li>Uses unified member data for personalized responses.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Referral intake &amp; coordination</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Ingests referrals from digital, paper, fax, and web channels.</li><li>Routes referrals by urgency and specialty.</li></ul></CardContent></Card>
          <Card><CardHeader><CardTitle>Care team collaboration</CardTitle></CardHeader><CardContent><ul className="prose-list"><li>Creates referral summaries in Slack canvases.</li><li>Notifies teams and surfaces next-best actions.</li></ul></CardContent></Card>
        </div>
      </section>
      <section className="section reveal">
        <h2 className="section-header">FAQ</h2>
        <Accordion>
        <AccordionItem key="What healthcare workflows are covered?" value="What healthcare workflows are covered?">
          <AccordionTrigger>What healthcare workflows are covered?</AccordionTrigger>
          <AccordionContent>Claims, eligibility, prior authorization, member support, referrals, scheduling, and provider collaboration.</AccordionContent>
        </AccordionItem>
        <AccordionItem key="Who is this for?" value="Who is this for?">
          <AccordionTrigger>Who is this for?</AccordionTrigger>
          <AccordionContent>Healthcare operations leaders, payer teams, provider organizations, and care coordination teams.</AccordionContent>
        </AccordionItem>
        </Accordion>
      </section>
    </>
  );
}
