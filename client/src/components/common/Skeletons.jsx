export function CardSkeleton() {
  return (
    <div className="rounded-2xl overflow-hidden border border-leaf-100 bg-cream-100 animate-pulse">
      <div className="h-48 bg-leaf-100" />
      <div className="p-5 space-y-3">
        <div className="h-4 bg-leaf-100 rounded w-3/4" />
        <div className="h-3 bg-leaf-100 rounded w-full" />
        <div className="h-3 bg-leaf-100 rounded w-2/3" />
      </div>
    </div>
  );
}

export function GridSkeleton({ count = 6 }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
