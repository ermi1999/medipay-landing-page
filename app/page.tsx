"use client";

import * as React from "react";
import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { StatsSection } from "@/components/landing/stats-section";
import { CapabilitiesSection } from "@/components/landing/capabilities-section";
import { RoleDashboardsSection } from "@/components/landing/role-dashboards-section";
import { WorkflowSection } from "@/components/landing/workflow-section";
import { TechnicalTrustSection } from "@/components/landing/technical-trust-section";
import { TestimonialsSection } from "@/components/landing/testimonials-section";
import { FAQSection } from "@/components/landing/faq-section";
import { Footer } from "@/components/landing/footer";
import { DemoCTA } from "@/components/landing/demo-cta";

export default function LandingPage() {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <StatsSection />
      <CapabilitiesSection />
      <RoleDashboardsSection />
      <WorkflowSection />
      <TechnicalTrustSection />
      <TestimonialsSection />
      <FAQSection />

      {/* Final CTA */}
      <section className="py-32 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/10 to-background" />
        <div className="container relative z-10 px-4 max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-4xl font-medium lg:text-5xl">
              Ready to Transform Your Distribution Operations?
            </h2>
            <p className="text-xl text-muted-foreground">
              Join pharmaceutical distributors who have reduced bad debt by 40%
              and cut administrative overhead in half.
            </p>
            <DemoCTA size="lg" />

            <div className="pt-8 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <span>Free Demo</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <span>Expert Onboarding</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                </div>
                <span>24-Hour Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
