export default function EmptyState({ title = 'Nothing here yet', message, action }) {
  return (
    <div className="flex flex-col items-center justify-center text-center py-20 px-6">
      <h3 className="font-display text-xl text-forest-900 mb-2">{title}</h3>
      {message && <p className="text-charcoal-700 max-w-sm mb-5">{message}</p>}
      {action}
    </div>
  );
}
