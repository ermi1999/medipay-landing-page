"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { ROLES } from "@/lib/constants";
import { RoleIcons } from "@/lib/icons";

const ROLE_ICON_MAP = {
  "Sales Rep": RoleIcons.salesRep,
  "Sales Manager": RoleIcons.salesManager,
  "Finance": RoleIcons.finance,
  "Finance Manager": RoleIcons.financeManager,
  "Store Manager": RoleIcons.storeManager,
  "Driver": RoleIcons.driver,
};

export function RoleDashboardsSection() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-20 md:py-32 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-muted/20 to-background" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

      <div className="container relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-sm font-medium">
              Role-Based Access
            </div>
          </div>
          <h2 className="text-4xl font-medium lg:text-5xl mb-6">
            Everyone Sees{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Exactly What They Need
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Six tailored dashboards for different roles - eliminating information
            overload and maximizing productivity
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ROLES.map((role, index) => {
            const IconComponent = ROLE_ICON_MAP[role.role as keyof typeof ROLE_ICON_MAP];

            return (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group"
              >
                <div className="relative h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                  {/* Hover glow */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-all duration-500" />

                  <div className="relative space-y-4">
                    {/* Icon */}
                    <div className="flex items-center gap-4">
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/30 blur-lg rounded-full group-hover:bg-primary/40 transition-colors" />
                        <div className="relative w-14 h-14 bg-gradient-to-br from-primary/20 to-primary/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                          <HugeiconsIcon
                            icon={IconComponent}
                            strokeWidth={2}
                            className="w-7 h-7 text-primary"
                          />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-bold group-hover:text-primary transition-colors">
                          {role.role}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {role.focus}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2">
                      {role.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          <span className="text-muted-foreground">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-6 px-8 py-4 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <div>
              <div className="text-3xl font-bold text-primary">50%+</div>
              <div className="text-sm text-muted-foreground">Time Saved</div>
            </div>
            <div className="h-12 w-px bg-border" />
            <div className="text-left max-w-md">
              <p className="text-sm text-muted-foreground">
                Users report spending half the time finding information with
                role-specific dashboards
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
