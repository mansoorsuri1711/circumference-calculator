"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center bg-brand px-4 text-ink">
      <h1 className="mb-3 font-display text-2xl font-bold">Something went wrong</h1>
      <p className="mb-6 max-w-md text-center text-ink/70">
        The page hit an unexpected error. Try again, or head back to the circumference calculator.
      </p>
      <button
        type="button"
        onClick={reset}
        className="rounded-xl bg-gradient-to-r from-violet to-teal px-5 py-3 text-sm font-bold text-white"
      >
        Try again
      </button>
    </div>
  );
}
