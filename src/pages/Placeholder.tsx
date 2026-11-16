interface Props { title: string; }
export function Placeholder({ title }: Props) {
  return (
    <div className="flex items-center justify-center h-64">
      <div className="text-center">
        <p className="text-4xl mb-3">🚧</p>
        <h2 className="text-lg font-semibold text-gray-700">{title}</h2>
        <p className="text-sm text-gray-400 mt-1">Coming soon</p>
      </div>
    </div>
  );
}
