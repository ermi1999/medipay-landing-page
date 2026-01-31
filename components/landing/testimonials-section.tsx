import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TESTIMONIALS } from "@/lib/constants";

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-32">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        {/* Section heading */}
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center md:space-y-8">
          <div className="inline-block mb-4">
            <div className="px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-sm font-medium">
              Customer Success Stories
            </div>
          </div>
          <h2 className="text-4xl font-medium lg:text-5xl">
            Trusted by{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Pharmaceutical Distributors
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            See how MediPay is helping distributors eliminate payment chaos,
            inventory losses, and administrative overhead
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid gap-4 [--color-card:var(--color-muted)] *:border-none *:shadow-none sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2 dark:[--color-muted:var(--color-zinc-900)]">
          {/* Featured testimonial - large */}
          <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
            <CardHeader>
              <div className="flex flex-wrap gap-2">
                {TESTIMONIALS[0].metrics.split(", ").map((metric, idx) => (
                  <div
                    key={idx}
                    className="px-3 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium"
                  >
                    {metric}
                  </div>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <p className="text-xl font-medium leading-relaxed">
                  "{TESTIMONIALS[0].quote}"
                </p>

                <div>
                  <cite className="text-sm font-semibold not-italic text-muted-foreground">
                    {TESTIMONIALS[0].company}
                  </cite>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Second testimonial - medium */}
          <Card className="md:col-span-2">
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div className="space-y-4">
                  <p className="text-lg font-medium leading-relaxed">
                    "{TESTIMONIALS[1].quote}"
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {TESTIMONIALS[1].metrics.split(", ").map((metric, idx) => (
                      <div
                        key={idx}
                        className="px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <cite className="text-sm font-semibold not-italic text-muted-foreground">
                    {TESTIMONIALS[1].company}
                  </cite>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Third testimonial - small */}
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div className="space-y-3">
                  <p className="leading-relaxed">"{TESTIMONIALS[2].quote}"</p>
                  <div className="flex flex-wrap gap-2">
                    {TESTIMONIALS[2].metrics.split(", ").map((metric, idx) => (
                      <div
                        key={idx}
                        className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <cite className="text-sm font-semibold not-italic text-muted-foreground">
                    {TESTIMONIALS[2].company}
                  </cite>
                </div>
              </blockquote>
            </CardContent>
          </Card>

          {/* Fourth testimonial - small */}
          <Card>
            <CardContent className="h-full pt-6">
              <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                <div className="space-y-3">
                  <p className="leading-relaxed">"{TESTIMONIALS[3].quote}"</p>
                  <div className="flex flex-wrap gap-2">
                    {TESTIMONIALS[3].metrics.split(", ").map((metric, idx) => (
                      <div
                        key={idx}
                        className="px-2 py-1 rounded-full bg-primary/10 border border-primary/20 text-xs font-medium"
                      >
                        {metric}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <cite className="text-sm font-semibold not-italic text-muted-foreground">
                    {TESTIMONIALS[3].company}
                  </cite>
                </div>
              </blockquote>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
