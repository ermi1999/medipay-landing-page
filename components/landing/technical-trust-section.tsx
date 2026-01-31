"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { TECHNICAL_FEATURES } from "@/lib/constants";
import { TrustIcons } from "@/lib/icons";

const TRUST_ICON_MAP = {
  "Bank-Level Security": TrustIcons.security,
  "Complete Audit Trail": TrustIcons.audit,
  "Cloud-Native Architecture": TrustIcons.cloud,
  "99.9% Uptime": TrustIcons.uptime,
  "Real-Time Sync": TrustIcons.sync,
  "Export Anywhere": TrustIcons.export,
};

export function TechnicalTrustSection() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="security"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/30 via-background to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px]" />

      <div className="container relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-sm font-medium">
              Enterprise-Grade Platform
            </div>
          </div>
          <h2 className="text-4xl font-medium lg:text-5xl mb-6">
            Built for{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Mission-Critical Operations
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Security, reliability, and compliance built into every layer of the
            platform
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {TECHNICAL_FEATURES.map((feature, index) => {
            const IconComponent =
              TRUST_ICON_MAP[feature.title as keyof typeof TRUST_ICON_MAP];

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 hover:bg-card/80 transition-all duration-300">
                  {/* Icon */}
                  <div className="mb-4">
                    <div className="relative inline-block">
                      <div className="absolute inset-0 bg-primary/20 blur-lg rounded-full group-hover:bg-primary/30 transition-colors" />
                      <div className="relative w-12 h-12 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                        <HugeiconsIcon
                          icon={IconComponent}
                          strokeWidth={2}
                          className="w-6 h-6 text-primary"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Compliance badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-8"
        >
          {[
            "SOC 2 Type II",
            "GDPR Compliant",
            "ISO 27001",
            "HIPAA Ready",
          ].map((badge) => (
            <div
              key={badge}
              className="px-6 py-3 rounded-full border border-border/50 bg-card/30 backdrop-blur-sm text-sm font-medium"
            >
              {badge}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
