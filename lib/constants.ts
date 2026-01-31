// MediPay Landing Page Content Constants

export const SITE_CONFIG = {
  name: "MediPay",
  tagline: "Pharmaceutical Distribution Control",
  description: "The all-in-one pharmaceutical distribution management platform that eliminates payment collection chaos and inventory losses.",
} as const;

export const HERO_CONTENT = {
  headline: "Stop Losing Money to Payment Chaos and Expired Inventory",
  subheadline: "MediPay is the all-in-one pharmaceutical distribution platform that reduces bad debt by 40% while cutting administrative overhead in half.",
  primaryCTA: "Schedule a Demo",
  secondaryCTA: "See How It Works",
} as const;

export const STATS = [
  {
    value: "40%",
    label: "Reduction in Bad Debt",
    description: "Automated PDC tracking and credit intelligence prevent payment losses",
  },
  {
    value: "50%",
    label: "Less Administrative Work",
    description: "Eliminate manual tracking with automated workflows and dashboards",
  },
  {
    value: "30%",
    label: "Faster Collections",
    description: "On-time check deposits with automated reminders and alerts",
  },
  {
    value: "163M+",
    label: "ETB Processed",
    description: "Total cash transactions managed through the platform",
  },
  {
    value: "99.9%",
    label: "System Uptime",
    description: "Enterprise-grade reliability on cloud infrastructure",
  },
] as const;

export const CORE_CAPABILITIES = [
  {
    id: "pdc-management",
    title: "Intelligent Post-Dated Check Management",
    shortDescription: "Stop losing money to forgotten checks and bounced payments",
    icon: "calendar-check",
    problem: "Manual PDC tracking leads to missed deposits, bounced checks, and cash flow gaps",
    features: [
      "Visual calendar and Kanban board views for all pending checks",
      "Automated reminders 7 days, 3 days, and day-of due dates",
      "Instant bounced check alerts to sales managers and finance teams",
      "Bank performance analytics to identify high-risk payment channels",
      "Full reconciliation workflow with settlement tracking",
    ],
    impact: "30%+ improvement in on-time check deposits",
    metric: "30%",
    metricLabel: "Faster Collections",
  },
  {
    id: "batch-inventory",
    title: "Batch-Level Inventory Control (FIFO/FEFO)",
    shortDescription: "Never write off expired pharmaceutical inventory again",
    icon: "package",
    problem: "Manual batch tracking causes expired stock losses and compliance issues",
    features: [
      "Automatic batch prioritization by expiry date",
      "90-day expiration alerts for proactive stock rotation",
      "Damaged/sample quantity tracking per batch",
      "Real-time stock levels with critical threshold alerts",
      "Complete batch transaction history for compliance",
    ],
    impact: "5-15% of inventory value saved from expiration",
    metric: "5-15%",
    metricLabel: "Inventory Saved",
  },
  {
    id: "credit-intelligence",
    title: "Customer Credit Intelligence",
    shortDescription: "Know your customers' payment behavior before extending credit",
    icon: "analytics",
    problem: "Lack of payment history visibility leads to bad debt and credit losses",
    features: [
      "Configurable credit terms and limits per customer",
      "Settlement delay scoring (10+, 20+, 50+, 100+ day risk tiers)",
      "Historical payment pattern analysis",
      "Active/inactive status management with license tracking",
      "Order blocking for customers exceeding credit limits",
    ],
    impact: "Reduce bad debt exposure with data-driven decisions",
    metric: "40%",
    metricLabel: "Less Bad Debt",
  },
  {
    id: "role-dashboards",
    title: "Role-Based Dashboards & Workflows",
    shortDescription: "Every team member sees exactly what they need",
    icon: "dashboard",
    problem: "Generic ERP systems force users to navigate irrelevant data and complex menus",
    features: [
      "Customized dashboards for 6 different user roles",
      "Sales reps see personal orders, pipeline, and commissions",
      "Finance teams see PDC status, reconciliation, and aging",
      "Store managers see dispatch queue and batch allocation",
      "Role-specific permissions for data security",
    ],
    impact: "50%+ reduction in time spent finding information",
    metric: "50%",
    metricLabel: "Time Saved",
  },
  {
    id: "order-workflow",
    title: "Automated Order-to-Cash Workflow",
    shortDescription: "From order creation to payment collection - fully tracked",
    icon: "workflow",
    problem: "Manual order tracking creates delays, errors, and lost visibility",
    features: [
      "End-to-end tracking: Order → Approved → Invoiced → Dispatched → Delivered → Paid → Reconciled",
      "Automatic status notifications to relevant teams at each stage",
      "Withholding tax tracking with document upload",
      "Partial payment and overpayment handling",
      "Customer balance management for credits/prepayments",
    ],
    impact: "Accelerate fulfillment with zero status update meetings",
    metric: "100%",
    metricLabel: "Visibility",
  },
] as const;

export const ROLES = [
  {
    role: "Sales Rep",
    focus: "Personal Performance",
    features: [
      "Personal orders and pipeline",
      "Customer relationship history",
      "Commission tracking",
      "New order creation",
    ],
    icon: "user",
  },
  {
    role: "Sales Manager",
    focus: "Team Oversight",
    features: [
      "Team performance metrics",
      "Order approvals workflow",
      "Customer health monitoring",
      "Territory analytics",
    ],
    icon: "users",
  },
  {
    role: "Finance",
    focus: "Payment Operations",
    features: [
      "PDC status tracking",
      "Payment reconciliation",
      "Aging analysis",
      "Collection activities",
    ],
    icon: "receipt",
  },
  {
    role: "Finance Manager",
    focus: "Financial Planning",
    features: [
      "Cash flow projections",
      "Credit risk assessment",
      "Collection metrics",
      "Financial reporting",
    ],
    icon: "chart-line",
  },
  {
    role: "Store Manager",
    focus: "Fulfillment",
    features: [
      "Dispatch queue",
      "Inventory levels",
      "Batch allocation",
      "Stock movement",
    ],
    icon: "warehouse",
  },
  {
    role: "Driver",
    focus: "Delivery",
    features: [
      "Delivery schedule",
      "Route optimization",
      "Proof of delivery",
      "Return processing",
    ],
    icon: "truck",
  },
] as const;

export const WORKFLOW_STAGES = [
  { id: "created", label: "Order Created", status: "active" },
  { id: "approved", label: "Approved", status: "active" },
  { id: "invoiced", label: "Invoiced", status: "processing" },
  { id: "dispatched", label: "Dispatched", status: "active" },
  { id: "delivered", label: "Delivered", status: "active" },
  { id: "collected", label: "Payment Collected", status: "active" },
  { id: "reconciled", label: "Reconciled", status: "active" },
] as const;

export const TECHNICAL_FEATURES = [
  {
    title: "Bank-Level Security",
    description: "72 data access policies ensure employees only see what they should",
    icon: "shield",
  },
  {
    title: "Complete Audit Trail",
    description: "Every action logged with user, timestamp, and changes - ready for any audit",
    icon: "file-check",
  },
  {
    title: "Cloud-Native Architecture",
    description: "Scales from 10 to 10,000 users without infrastructure changes",
    icon: "cloud",
  },
  {
    title: "99.9% Uptime",
    description: "Built on enterprise-grade Supabase infrastructure",
    icon: "activity",
  },
  {
    title: "Real-Time Sync",
    description: "Changes reflect instantly across all connected devices",
    icon: "refresh",
  },
  {
    title: "Export Anywhere",
    description: "CSV, Excel, and PDF exports for integration with existing systems",
    icon: "download",
  },
] as const;

export const TESTIMONIALS = [
  {
    quote: "MediPay transformed our collections process. We went from chasing checks manually to having complete visibility across 500+ pending PDCs. The automated reminders alone saved us countless hours of follow-ups.",
    author: "Sarah Mitchell",
    company: "Operations Manager, Leading Pharmaceutical Distributor",
    metrics: "40% faster processing, 99% inventory accuracy",
  },
  {
    quote: "The role-based dashboards mean our sales team spends time selling instead of searching for information. It's like having a custom system built just for pharma distribution.",
    author: "James Chen",
    company: "Sales Director, Regional Distribution Network",
    metrics: "50% reduction in administrative time",
  },
  {
    quote: "Batch expiry tracking has eliminated our inventory write-offs. The 90-day alerts give us enough time to rotate stock, and we've saved over 10% of our inventory value in the first year.",
    author: "Michael Rodriguez",
    company: "Store Manager, Metro Pharma Distribution",
    metrics: "10% inventory saved, Zero expired stock losses",
  },
  {
    quote: "Credit intelligence features helped us identify high-risk customers before extending credit. We've cut bad debt by nearly half and our cash flow has never been better.",
    author: "Priya Sharma",
    company: "Finance Manager, Central Medical Supplies",
    metrics: "45% reduction in bad debt, 30% faster collections",
  },
] as const;

export const FAQS = [
  {
    question: "How long does implementation take?",
    answer: "Most implementations are complete within 10 business days. Our phased approach includes: Initial Setup & Training (Days 1-3), Data Migration & Testing (Days 4-7), and Go-Live & Support (Days 8-10). You'll have dedicated implementation support throughout the process.",
  },
  {
    question: "Is MediPay compliant with pharmaceutical regulations?",
    answer: "Yes. MediPay includes complete audit logging that meets pharmaceutical industry standards. Every transaction is traceable with user, timestamp, and action details. The system supports batch tracking, expiry management, and document management required for regulatory compliance.",
  },
  {
    question: "Can we customize the system for our specific workflows?",
    answer: "Absolutely. Role permissions, notification rules, credit policies, and dashboard layouts are all configurable. We work with you during implementation to match MediPay to your business processes. Custom integrations with existing systems are also available.",
  },
  {
    question: "What kind of support do you provide?",
    answer: "Every customer gets dedicated implementation support, comprehensive training for all user roles, and ongoing technical support. We also provide regular product updates, security patches, and new feature releases as part of your subscription.",
  },
  {
    question: "How does pricing work?",
    answer: "Pricing is based on the number of active users and modules you need. Contact us for a custom quote based on your team size and requirements. All plans include implementation support, training, and ongoing updates.",
  },
  {
    question: "What happens to our data if we need to export it?",
    answer: "Your data is always yours. MediPay provides full CSV, Excel, and PDF export capabilities for all data. You can export customer lists, transaction history, inventory data, and reports at any time. We also support data migration assistance if you ever need to transition systems.",
  },
] as const;

export const IMPLEMENTATION_STEPS = [
  {
    phase: "Demo & Discovery",
    duration: "Day 1",
    description: "Live demonstration with your actual data and team. We identify your specific requirements and configure the system accordingly.",
    deliverables: ["System walkthrough", "Requirements documentation", "Implementation plan"],
  },
  {
    phase: "Pilot Program",
    duration: "Days 2-20",
    description: "30-day trial with your actual data and team. Full training, data migration, and workflow configuration with dedicated support.",
    deliverables: ["User training", "Data migration", "Workflow setup", "Role configuration"],
  },
  {
    phase: "Full Deployment",
    duration: "Day 21+",
    description: "Go-live with all users, ongoing support, and optimization. We monitor closely during the first 30 days to ensure smooth operations.",
    deliverables: ["Full team rollout", "Performance monitoring", "Ongoing support", "Regular check-ins"],
  },
] as const;

export const FOOTER_LINKS = {
  product: [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Security", href: "#security" },
    { label: "Pricing", href: "#pricing" },
  ],
  resources: [
    { label: "Documentation", href: "#docs" },
    { label: "API Reference", href: "#api" },
    { label: "Support", href: "#support" },
    { label: "FAQ", href: "#faq" },
  ],
  company: [
    { label: "About", href: "#about" },
    { label: "Blog", href: "#blog" },
    { label: "Careers", href: "#careers" },
    { label: "Contact", href: "#contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#privacy" },
    { label: "Terms of Service", href: "#terms" },
    { label: "Security", href: "#security" },
  ],
} as const;

export const SOCIAL_LINKS = [
  { platform: "Twitter", href: "https://twitter.com/pharmatrack", icon: "twitter" },
  { platform: "LinkedIn", href: "https://linkedin.com/company/pharmatrack", icon: "linkedin" },
  { platform: "GitHub", href: "https://github.com/pharmatrack", icon: "github" },
] as const;
