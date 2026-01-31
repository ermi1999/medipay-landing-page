import { STATS } from "@/lib/constants";

export function StatsSection() {
  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto max-w-7xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-4xl font-medium lg:text-5xl">
            Proven Impact on Your{" "}
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Bottom Line
            </span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Pharmaceutical distributors see immediate, measurable improvements
            across operations
          </p>
        </div>

        <div className="grid gap-12 divide-y *:text-center md:grid-cols-2 lg:grid-cols-5 md:gap-2 md:divide-x md:divide-y-0">
          {STATS.map((stat) => (
            <div key={stat.label} className="space-y-4 pt-12 first:pt-0 md:pt-0">
              <div className="text-5xl font-bold bg-gradient-to-br from-primary to-primary/60 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="font-semibold text-lg">{stat.label}</div>
              <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
