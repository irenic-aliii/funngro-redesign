import Link from "next/link";
import Container from "@/components/layout/Container";
import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden py-24">
      <div aria-hidden className="pointer-events-none absolute inset-0 bg-glow-radial-soft" />
      <div aria-hidden className="pointer-events-none absolute inset-0 grid-lines" />
      <Container className="relative flex flex-col items-center text-center">
        <span className="ledger text-xs uppercase text-mint">404</span>
        <h1 className="mt-5 font-serif text-4xl leading-tight text-ink md:text-6xl">
          This page hasn&rsquo;t been built yet.
        </h1>
        <p className="mt-4 max-w-md text-ink-muted">
          The page you're looking for doesn't exist. Head back home or see how
          Funngro works.
        </p>
        <div className="mt-8 flex gap-3">
          <Button href="/">Back to Home</Button>
          <Button href="/how-it-works" variant="outline">
            How It Works
          </Button>
        </div>
      </Container>
    </section>
  );
}
