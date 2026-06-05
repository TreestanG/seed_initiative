import { Hero } from "@/components/sections/Hero";
import { PageMeta } from "@/components/sections/PageMeta";

export function NotFoundPage() {
  return (
    <>
      <PageMeta
        meta={{
          title: "Page Not Found | Seed Initiative",
          description: "The requested Seed Initiative page could not be found.",
          path: "/404",
        }}
      />
      <Hero
        compact
        title="Page not found"
        body="The page you are looking for may have moved."
        actions={[{ label: "Return Home", href: "/" }]}
      />
    </>
  );
}
