interface StatCardProps {
  label: string;
  value: string;
  change: number;
  icon: string;
}

export function StatCard({ label, value, change, icon }: StatCardProps) {
  const positive = change >= 0;
  return (
    <div className="bg-white rounded-xl border border-gray-200 p-5 flex items-start gap-4">
      <div className="w-11 h-11 rounded-lg bg-primary-50 flex items-center justify-center text-xl shrink-0">{icon}</div>
      <div className="min-w-0">
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-2xl font-bold text-gray-900 mt-0.5 truncate">{value}</p>
        <p className={`text-xs mt-1 font-medium ${positive ? 'text-green-600' : 'text-red-500'}`}>
          {positive ? '▲' : '▼'} {Math.abs(change)}% vs last month
        </p>
      </div>
    </div>
  );
}
