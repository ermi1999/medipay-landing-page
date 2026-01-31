"use client";

import * as React from "react";
import { motion, useInView } from "framer-motion";
import { HugeiconsIcon } from "@hugeicons/react";
import { WORKFLOW_STAGES } from "@/lib/constants";
import {
  ShoppingBasket01Icon,
  CheckmarkCircle01Icon,
  ReceiptDollarIcon,
  TruckDeliveryIcon,
  PackageIcon,
  Money01Icon,
  FolderCheckIcon,
  ArrowRight01Icon,
} from "@hugeicons/core-free-icons";

const WORKFLOW_ICONS = [
  ShoppingBasket01Icon,
  CheckmarkCircle01Icon,
  ReceiptDollarIcon,
  TruckDeliveryIcon,
  PackageIcon,
  Money01Icon,
  FolderCheckIcon,
];

export function WorkflowSection() {
  const ref = React.useRef<HTMLElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      id="how-it-works"
      className="relative py-20 md:py-32 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-primary/5 to-background" />

      <div className="container relative z-10 px-4 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-sm font-medium">
              Order-to-Cash Workflow
            </div>
          </div>
          <h2 className="text-4xl font-medium lg:text-5xl mb-6">
            Complete{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              End-to-End Visibility
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Track every order from creation to reconciliation with automated
            notifications at each stage
          </p>
        </motion.div>

        {/* Workflow visualization */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mb-16 overflow-x-auto pb-4"
        >
          <div className="flex items-center justify-center gap-2 min-w-max px-4">
            {WORKFLOW_STAGES.map((stage, index) => {
              const IconComponent = WORKFLOW_ICONS[index];
              return (
                <React.Fragment key={stage.id}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    className="flex flex-col items-center gap-3 p-4 rounded-xl border border-border/50 bg-card/50 backdrop-blur-sm min-w-[120px]"
                  >
                    <div className="w-14 h-14 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                      <HugeiconsIcon
                        icon={IconComponent}
                        strokeWidth={2}
                        className="w-6 h-6 text-primary"
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-semibold">{stage.label}</div>
                      <div className="text-xs text-muted-foreground mt-1">Step {index + 1}</div>
                    </div>
                  </motion.div>
                  {index < WORKFLOW_STAGES.length - 1 && (
                    <motion.div
                      initial={{ opacity: 0, x: -10 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      className="flex items-center"
                    >
                      <HugeiconsIcon
                        icon={ArrowRight01Icon}
                        strokeWidth={2}
                        className="w-5 h-5 text-primary/50"
                      />
                    </motion.div>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </motion.div>

        {/* Stage descriptions */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[
            {
              stage: "Order Created",
              description: "Sales rep creates order with customer details, products, and pricing",
              notification: "Sales Manager receives approval request",
            },
            {
              stage: "Approved → Invoiced",
              description: "Manager approves order, system generates invoice with tax calculations",
              notification: "Finance team notified of new invoice",
            },
            {
              stage: "Dispatched",
              description: "Store manager allocates inventory by batch, driver receives delivery schedule",
              notification: "Customer receives dispatch notification",
            },
            {
              stage: "Delivered",
              description: "Driver captures proof of delivery, customer signs off",
              notification: "Sales team and customer receive delivery confirmation",
            },
            {
              stage: "Payment Collected",
              description: "PDC or payment collected and tracked, bank deposit scheduled",
              notification: "Finance receives payment notification",
            },
            {
              stage: "Reconciled",
              description: "Payment matched to invoice, customer balance updated, transaction complete",
              notification: "Complete audit trail available for compliance",
            },
          ].map((item, index) => (
            <motion.div
              key={item.stage}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              className="group"
            >
              <div className="h-full p-6 rounded-2xl border border-border/50 bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all duration-300">
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center text-sm font-bold text-primary">
                      {index + 1}
                    </div>
                    <h3 className="font-bold group-hover:text-primary transition-colors">
                      {item.stage}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                  <div className="pt-2 flex items-start gap-2">
                    <div className="w-4 h-4 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground italic">
                      {item.notification}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom stat */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 text-center"
        >
          <div className="inline-block p-6 rounded-2xl border border-primary/30 bg-primary/5 backdrop-blur-sm">
            <p className="text-lg font-semibold mb-2">
              Zero Status Update Meetings Required
            </p>
            <p className="text-sm text-muted-foreground max-w-xl">
              Every stakeholder automatically notified at relevant stages —
              complete transparency without manual communication
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
