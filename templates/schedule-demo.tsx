"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Loading03Icon,
  AlertCircleIcon,
  ViewIcon,
  ViewOffIcon,
} from "@hugeicons/core-free-icons";
import { toast } from "sonner";
import { TextAnimate } from "@/components/ui/text-animate";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();
  const supabase = createClient();

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError(null);
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      });
      if (error) {
        setError(error.message);
        setLoading(false);
      }
    } catch {
      setError("Failed to initiate Google sign-in");
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) {
        setError(error.message);
        return;
      }

      if (data.user) {
        toast.success("Successfully logged in!");
        router.push("/dashboard");
        router.refresh();
      }
    } catch (err) {
      setError("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-card">
      <div className="w-full min-h-screen flex flex-col lg:flex-row">
        {/* Left Side - Gradient panel with logo and tagline */}
        <div className="hidden lg:flex lg:w-[45%] relative flex-col justify-between p-10 m-3 mr-0 rounded-2xl overflow-hidden">
          {/* Base warm background */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(160deg, #f5e8df 0%, #ecc5ad 30%, #e0a07a 60%, #ebd0be 100%)",
            }}
          />

          {/* Primary color glow - center-right like the reference */}
          <div
            className="absolute top-[45%] left-[55%] -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[100px]"
            style={{
              background:
                "radial-gradient(circle, rgba(220, 110, 60, 0.6), rgba(220, 110, 60, 0.2), transparent)",
            }}
          />

          {/* Secondary warm glow - top area */}
          <div
            className="absolute top-[20%] left-[30%] w-[250px] h-[250px] rounded-full blur-[90px]"
            style={{
              background:
                "radial-gradient(circle, rgba(220, 110, 60, 0.4), transparent)",
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
            <img
              src="/logo.svg"
              alt="YES Employment Solutions"
              className="w-12 h-12 object-contain"
            />
          </div>

          {/* Tagline bottom-left */}
          <div className="relative z-10 space-y-2">
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="p"
              className="text-sm text-foreground/70 dark:text-background"
            >
              You can easily
            </TextAnimate>
            <TextAnimate
              animation="blurInUp"
              by="word"
              as="h2"
              className="text-3xl font-bold leading-tight text-foreground dark:text-background"
            >
              Streamline your hiring with AI-powered recruitment.
            </TextAnimate>
          </div>
        </div>

        {/* Right Side - Login Form */}
        <div className="flex-1 flex flex-col justify-center px-6 py-10 sm:px-12 lg:px-16 bg-card">
          <div className="w-full max-w-sm mx-auto space-y-8">
            {/* Mobile logo */}
            <div className="flex lg:hidden justify-center">
              <img
                src="/logo.svg"
                alt="YES Employment Solutions"
                className="w-16 h-16 object-contain"
              />
            </div>

            {/* Header */}
            <div className="space-y-1 text-center lg:text-left">
              <img
                src="/logo.svg"
                alt="YES"
                className="hidden lg:block w-8 h-8 object-contain mb-3"
              />
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back
              </h1>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Access your candidates, jobs, and AI-powered matching —
                all in one place.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <Alert
                  variant="destructive"
                  className="animate-in fade-in slide-in-from-top-1"
                >
                  <HugeiconsIcon icon={AlertCircleIcon} size={16} />
                  <AlertDescription>{error}</AlertDescription>
                </Alert>
              )}

              <div className="space-y-1.5">
                <label htmlFor="email" className="text-sm font-medium">
                  Your email
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="name@example.com"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
                  className="h-11"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="password" className="text-sm font-medium">
                  Password
                </label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    autoComplete="current-password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    disabled={loading}
                    className="pr-10 h-11"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {showPassword ? (
                      <HugeiconsIcon icon={ViewOffIcon} size={16} />
                    ) : (
                      <HugeiconsIcon icon={ViewIcon} size={16} />
                    )}
                  </button>
                </div>
              </div>

              <Button
                type="submit"
                className="w-full h-11 font-medium"
                disabled={loading}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <HugeiconsIcon
                      icon={Loading03Icon}
                      size={16}
                      className="animate-spin"
                    />
                    Signing in...
                  </span>
                ) : (
                  "Sign in"
                )}
              </Button>

              <div className="relative">
                <div className="absolute inset-0 flex items-center">
                  <span className="w-full border-t border-border" />
                </div>
                <div className="relative flex justify-center text-xs uppercase">
                  <span className="bg-card px-2 text-muted-foreground">
                    or continue with
                  </span>
                </div>
              </div>

              <Button
                type="button"
                variant="outline"
                className="w-full h-11 font-medium"
                disabled={loading}
                onClick={handleGoogleLogin}
              >
                <svg className="mr-2 h-4 w-4" viewBox="0 0 24 24">
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
                Sign in with Google
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
