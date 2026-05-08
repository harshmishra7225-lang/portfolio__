import { PageTransition } from "@/components/PageTransition";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <PageTransition className="mx-auto flex min-h-[70svh] max-w-3xl flex-col items-center justify-center px-5 text-center">
      <p className="text-sm font-semibold uppercase tracking-[0.18em] text-clay">404</p>
      <h1 className="mt-4 text-4xl font-semibold text-ink sm:text-5xl">Page not found</h1>
      <p className="mt-4 leading-7 text-charcoal/72">
        The page you are looking for is not part of this portfolio yet.
      </p>
      <div className="mt-8">
        <Button href="/">Back Home</Button>
      </div>
    </PageTransition>
  );
}
