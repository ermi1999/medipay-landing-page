"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  CheckmarkCircle01Icon,
  Mail01Icon,
  TelephoneIcon,
  UserIcon,
  Building01Icon,
} from "@hugeicons/core-free-icons";
import { SITE_CONFIG } from "@/lib/constants";
import Image from "next/image";

interface DemoCTAProps {
  triggerText?: string;
  variant?: "default" | "outline" | "secondary";
  size?: "default" | "sm" | "lg";
  className?: string;
}

export function DemoCTA({
  triggerText = "Schedule a Demo",
  variant = "default",
  size = "lg",
  className,
}: DemoCTAProps) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);
  const [formData, setFormData] = React.useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
  });
  const [errors, setErrors] = React.useState<{
    name?: string;
    email?: string;
    phone?: string;
    company?: string;
  }>({});

  const validateForm = () => {
    const newErrors: typeof errors = {};

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
    }

    // Phone validation
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!formData.phone) {
      newErrors.phone = "Phone number is required";
    } else if (formData.phone.replace(/\D/g, "").length < 10) {
      newErrors.phone = "Please enter a valid phone number";
    } else if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = "Phone number contains invalid characters";
    }

    // Company validation
    if (!formData.company.trim()) {
      newErrors.company = "Company name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (validateForm()) {
      // TODO: Send to backend API
      console.log("Demo request:", formData);
      setIsSubmitted(true);

      // Reset after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", phone: "", company: "", message: "" });
        setIsOpen(false);
      }, 5000);
    }
  };

  const handleOpenChange = (open: boolean) => {
    setIsOpen(open);
    if (!open) {
      // Reset form when closing
      setTimeout(() => {
        setIsSubmitted(false);
        setErrors({});
      }, 300);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={handleOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant={variant}
          size={size}
          className={`relative group overflow-hidden ${className}`}
        >
          <span className="relative z-10">{triggerText}</span>
          <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary-foreground/20 to-primary/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
        </Button>
      </DialogTrigger>

      <DialogContent className="w-[95vw] sm:w-[90vw] md:min-w-[700px] lg:min-w-[1000px] xl:min-w-[1200px] max-w-7xl p-0 gap-0 overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[600px]">
          {/* Left Side - Gradient panel with branding */}
          <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-10 overflow-hidden">
            {/* Base purple/blue gradient background */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(160deg, #e8dfff 0%, #c5b3ff 30%, #9b7aff 60%, #d0c3ff 100%)",
              }}
            />

            {/* Primary color glow - center-right */}
            <div
              className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.6), rgba(139, 92, 246, 0.2), transparent)",
              }}
            />

            {/* Secondary glow - top area */}
            <div
              className="absolute top-[20%] left-[30%] w-[250px] h-[250px] rounded-full blur-[90px]"
              style={{
                background:
                  "radial-gradient(circle, rgba(139, 92, 246, 0.4), transparent)",
              }}
            />

            {/* Grain/noise texture overlay */}
            <div
              className="absolute inset-0 opacity-[0.15]"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                backgroundSize: "256px 256px",
              }}
            />

            {/* Logo top-left */}
            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt={SITE_CONFIG.name}
                  width={48}
                  height={48}
                  className="w-12 h-12"
                />
                <div>
                  <div className="text-xl font-bold text-foreground">
                    {SITE_CONFIG.name}
                  </div>
                  <div className="text-xs text-foreground/70 uppercase tracking-widest">
                    {SITE_CONFIG.tagline}
                  </div>
                </div>
              </div>
            </div>

            {/* Tagline bottom-left */}
            <div className="relative z-10 space-y-3">
              <p className="text-sm text-foreground/70">
                Transform your distribution
              </p>
              <h2 className="text-3xl font-bold leading-tight text-foreground">
                Reduce bad debt by 40% while cutting administrative overhead
                in half
              </h2>
              <div className="flex flex-wrap gap-3 pt-4">
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="text-xs font-medium text-foreground">
                    Free Demo
                  </span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/20 backdrop-blur-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span className="text-xs font-medium text-foreground">
                    24-Hour Response
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="flex-1 flex flex-col justify-center p-8 lg:p-10 bg-background">
            {!isSubmitted ? (
              <div className="w-full max-w-md mx-auto space-y-6">
                {/* Hidden dialog title for accessibility */}
                <DialogHeader className="sr-only">
                  <DialogTitle>Schedule a Demo</DialogTitle>
                  <DialogDescription>
                    Fill out the form to schedule a personalized demo of
                    MediPay
                  </DialogDescription>
                </DialogHeader>

                {/* Visible header */}
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold">Get a Free Demo</h2>
                  <p className="text-muted-foreground">
                    See how MediPay eliminates payment chaos and inventory
                    losses. We'll contact you within 24 hours.
                  </p>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name */}
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="text-sm font-medium flex items-center gap-2">
                      <HugeiconsIcon icon={UserIcon} size={16} className="text-muted-foreground" />
                      Full Name
                    </label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        setErrors({ ...errors, name: undefined });
                      }}
                      className={errors.name ? "border-destructive" : ""}
                    />
                    {errors.name && (
                      <p className="text-sm text-destructive">{errors.name}</p>
                    )}
                  </div>

                  {/* Email */}
                  <div className="space-y-1.5">
                    <label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                      <HugeiconsIcon icon={Mail01Icon} size={16} className="text-muted-foreground" />
                      Email Address
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="you@company.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        setErrors({ ...errors, email: undefined });
                      }}
                      className={errors.email ? "border-destructive" : ""}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  {/* Phone */}
                  <div className="space-y-1.5">
                    <label htmlFor="phone" className="text-sm font-medium flex items-center gap-2">
                      <HugeiconsIcon icon={TelephoneIcon} size={16} className="text-muted-foreground" />
                      Phone Number
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={formData.phone}
                      onChange={(e) => {
                        setFormData({ ...formData, phone: e.target.value });
                        setErrors({ ...errors, phone: undefined });
                      }}
                      className={errors.phone ? "border-destructive" : ""}
                    />
                    {errors.phone && (
                      <p className="text-sm text-destructive">{errors.phone}</p>
                    )}
                  </div>

                  {/* Company */}
                  <div className="space-y-1.5">
                    <label htmlFor="company" className="text-sm font-medium flex items-center gap-2">
                      <HugeiconsIcon icon={Building01Icon} size={16} className="text-muted-foreground" />
                      Company Name
                    </label>
                    <Input
                      id="company"
                      type="text"
                      placeholder="Your Company"
                      value={formData.company}
                      onChange={(e) => {
                        setFormData({ ...formData, company: e.target.value });
                        setErrors({ ...errors, company: undefined });
                      }}
                      className={errors.company ? "border-destructive" : ""}
                    />
                    {errors.company && (
                      <p className="text-sm text-destructive">
                        {errors.company}
                      </p>
                    )}
                  </div>

                  {/* Message (optional) */}
                  <div className="space-y-1.5">
                    <label htmlFor="message" className="text-sm font-medium">
                      Message (Optional)
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your specific needs..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      rows={3}
                      className="resize-none"
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    Request Demo
                  </Button>

                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to our Terms of Service
                    and Privacy Policy.
                  </p>
                </form>
              </div>
            ) : (
              <div className="w-full max-w-md mx-auto text-center space-y-6 py-8">
                <div className="inline-block">
                  <div className="w-20 h-20 mx-auto bg-primary/20 rounded-full flex items-center justify-center">
                    <HugeiconsIcon
                      icon={CheckmarkCircle01Icon}
                      size={48}
                      className="text-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">Request Received!</h3>
                  <p className="text-muted-foreground">
                    Thank you for your interest in MediPay. We'll be in
                    touch within 24 hours to schedule your personalized demo.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
