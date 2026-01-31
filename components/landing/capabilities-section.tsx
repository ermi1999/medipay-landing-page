import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Calendar03Icon,
  PackageIcon,
  Analytics02Icon,
  DashboardBrowsingIcon,
  WorkflowSquare09Icon,
} from "@hugeicons/core-free-icons";
import { ReactNode } from "react";
import { CORE_CAPABILITIES } from "@/lib/constants";

const CAPABILITY_ICONS = [
  Calendar03Icon, // PDC Management
  PackageIcon, // Batch Inventory
  Analytics02Icon, // Credit Intelligence
  DashboardBrowsingIcon, // Role Dashboards
  WorkflowSquare09Icon, // Order Workflow
];

export function CapabilitiesSection() {
  return (
    <section id="capabilities" className="py-16 md:py-32">
      <div className="@container mx-auto max-w-7xl px-6">
        <div className="text-center">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-sm font-medium">
              Core Platform Capabilities
            </div>
          </div>
          <h2 className="text-balance text-4xl font-semibold lg:text-5xl">
            Everything You Need to{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Eliminate Losses
            </span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl mx-auto">
            Five integrated modules that work together to eliminate payment
            chaos, inventory losses, and administrative overhead.
          </p>
        </div>
        <div className="mx-auto mt-8 grid max-w-6xl gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 [--color-background:var(--color-muted)] [--color-card:var(--color-muted)] *:text-center md:mt-16 dark:[--color-muted:var(--color-zinc-900)]">
          {CORE_CAPABILITIES.map((capability, index) => (
            <Card
              key={capability.id}
              className="group border-0 shadow-none hover:bg-card/50 transition-colors"
            >
              <CardHeader className="pb-3">
                <CardDecorator>
                  <HugeiconsIcon
                    icon={CAPABILITY_ICONS[index]}
                    className="size-6 text-primary"
                    strokeWidth={2}
                    aria-hidden
                  />
                </CardDecorator>

                <h3 className="mt-6 font-semibold text-lg">
                  {capability.title}
                </h3>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  {capability.shortDescription}
                </p>

                {/* Key Features */}
                <div className="space-y-2 text-left">
                  {capability.features.slice(0, 3).map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary/60 mt-1.5 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Impact Metric */}
                <div className="pt-3 mt-3 border-t border-border/50">
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-2xl font-bold text-primary">
                      {capability.metric}
                    </span>
                    <span className="text-sm text-muted-foreground">
                      {capability.metricLabel}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

const CardDecorator = ({ children }: { children: ReactNode }) => (
  <div className="mask-radial-from-40% mask-radial-to-60% relative mx-auto size-36 duration-200 [--color-border:color-mix(in_oklab,var(--color-primary)15%,transparent)] group-hover:[--color-border:color-mix(in_oklab,var(--color-primary)25%,transparent)]">
    <div
      aria-hidden
      className="absolute inset-0 bg-[linear-gradient(to_right,var(--color-border)_1px,transparent_1px),linear-gradient(to_bottom,var(--color-border)_1px,transparent_1px)] bg-[size:24px_24px] opacity-50"
    />

    <div className="bg-background absolute inset-0 m-auto flex size-12 items-center justify-center border-l border-t border-primary/30 rounded-lg">
      {children}
    </div>
  </div>
);
