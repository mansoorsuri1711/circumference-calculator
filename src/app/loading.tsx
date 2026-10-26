export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-brand">
      <div
        className="h-10 w-10 animate-spin rounded-full border-2 border-violet/30 border-t-violet"
        aria-label="Loading"
      />
    </div>
  );
}
