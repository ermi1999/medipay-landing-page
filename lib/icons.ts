// Centralized Hugeicons exports for MediPay landing page

import {
  Calendar03Icon,
  PackageIcon,
  Analytics01Icon,
  SecurityCheckIcon,
  DashboardSquare01Icon,
  WorkflowCircle03Icon,
  UserIcon,
  UserGroupIcon,
  ReceiptDollarIcon,
  ChartLineData01Icon,
  WarehouseIcon,
  TruckDeliveryIcon,
  Shield01Icon,
  FolderCheckIcon,
  CloudIcon,
  Activity01Icon,
  RefreshIcon,
  Download01Icon,
  ArrowRight01Icon,
  CheckmarkCircle01Icon,
  AlertCircleIcon,
  Menu01Icon,
  Cancel01Icon,
  ArrowDown01Icon,
  ArrowUp01Icon,
  PlayCircleIcon,
  Mail01Icon,
  TelephoneIcon,
  TwitterIcon,
  Linkedin01Icon,
  GithubIcon,
  MoneyBag01Icon,
  Timer01Icon,
  Clock01Icon,
} from "@hugeicons/core-free-icons";

// Feature icons
export const FeatureIcons = {
  pdcManagement: Calendar03Icon,
  inventory: PackageIcon,
  creditIntelligence: Analytics01Icon,
  dashboards: DashboardSquare01Icon,
  workflow: WorkflowCircle03Icon,
} as const;

// Role icons
export const RoleIcons = {
  salesRep: UserIcon,
  salesManager: UserGroupIcon,
  finance: ReceiptDollarIcon,
  financeManager: ChartLineData01Icon,
  storeManager: WarehouseIcon,
  driver: TruckDeliveryIcon,
} as const;

// Technical/Trust icons
export const TrustIcons = {
  security: Shield01Icon,
  audit: FolderCheckIcon,
  cloud: CloudIcon,
  uptime: Activity01Icon,
  sync: RefreshIcon,
  export: Download01Icon,
} as const;

// UI icons
export const UIIcons = {
  arrow: ArrowRight01Icon,
  check: CheckmarkCircle01Icon,
  alert: AlertCircleIcon,
  menu: Menu01Icon,
  close: Cancel01Icon,
  chevronDown: ArrowDown01Icon,
  chevronUp: ArrowUp01Icon,
  chevronRight: ArrowRight01Icon,
  play: PlayCircleIcon,
  mail: Mail01Icon,
  phone: TelephoneIcon,
  securityCheck: SecurityCheckIcon,
} as const;

// Social icons
export const SocialIcons = {
  twitter: TwitterIcon,
  linkedin: Linkedin01Icon,
  github: GithubIcon,
} as const;

// Stats icons
export const StatsIcons = {
  money: MoneyBag01Icon,
  timer: Timer01Icon,
  clock: Clock01Icon,
  analytics: Analytics01Icon,
} as const;

// Export all for convenience
export const AllIcons = {
  ...FeatureIcons,
  ...RoleIcons,
  ...TrustIcons,
  ...UIIcons,
  ...SocialIcons,
  ...StatsIcons,
} as const;
