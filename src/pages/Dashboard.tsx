import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';
import { StatCard } from '../components/ui/StatCard';
import { Badge } from '../components/ui/Badge';
import { stats, revenueData, categoryData, recentOrders, pendingQuotes } from '../lib/mock-data';

const PIE_COLORS = ['#1a4d2e', '#c3a268', '#2d6b45', '#6b8f71', '#a8c5a0'];

function fmt(n: number) {
  if (n >= 100000) return `₹${(n / 100000).toFixed(1)}L`;
  if (n >= 1000) return `₹${(n / 1000).toFixed(0)}K`;
  return `₹${n}`;
}

export function Dashboard() {
  return (
    <div className="space-y-6">

      {/* Stat cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        <StatCard label="Total Revenue" value={fmt(stats.totalRevenue)} change={stats.revenueChange} icon="💰" />
        <StatCard label="Total Orders" value={String(stats.totalOrders)} change={stats.ordersChange} icon="📦" />
        <StatCard label="Pending Quotes" value={String(stats.pendingQuotes)} change={stats.quotesChange} icon="📋" />
        <StatCard label="Products" value={String(stats.totalProducts)} change={stats.productsChange} icon="🍳" />
      </div>

      {/* Charts row */}
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
        {/* Revenue bar chart */}
        <div className="xl:col-span-2 bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Revenue (Last 6 Months)</h2>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={revenueData} barSize={32}>
              <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
              <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} tickFormatter={(v) => fmt(v)} />
              <Tooltip formatter={(v: number) => [fmt(v), 'Revenue']} cursor={{ fill: '#f3f4f6' }} />
              <Bar dataKey="revenue" fill="#1a4d2e" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Category pie */}
        <div className="bg-white rounded-xl border border-gray-200 p-5">
          <h2 className="font-semibold text-gray-800 mb-4">Sales by Category</h2>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={categoryData} cx="50%" cy="45%" outerRadius={70} dataKey="value">
                {categoryData.map((_, i) => <Cell key={i} fill={PIE_COLORS[i % PIE_COLORS.length]} />)}
              </Pie>
              <Legend iconSize={8} iconType="circle" wrapperStyle={{ fontSize: 11 }} />
              <Tooltip formatter={(v: number) => [`${v}%`, 'Share']} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Tables row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">

        {/* Recent orders */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">Recent Orders</h2>
            <a href="/orders" className="text-xs text-primary hover:underline font-medium">View all</a>
          </div>
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">ID</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Customer</th>
                <th className="px-5 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wide">Amount</th>
                <th className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {recentOrders.map((o) => (
                <tr key={o.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 font-mono text-xs text-gray-500">{o.id}</td>
                  <td className="px-5 py-3 text-gray-800 truncate max-w-[140px]">{o.customer}</td>
                  <td className="px-5 py-3 text-right font-medium text-gray-900">{fmt(o.amount)}</td>
                  <td className="px-5 py-3"><Badge status={o.status} /></td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pending quotes */}
        <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
          <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between">
            <h2 className="font-semibold text-gray-800">Pending Quote Requests</h2>
            <a href="/quotes" className="text-xs text-primary hover:underline font-medium">View all</a>
          </div>
          <div className="divide-y divide-gray-100">
            {pendingQuotes.map((q) => (
              <div key={q.id} className="px-5 py-3.5 hover:bg-gray-50 transition-colors">
                <div className="flex items-start justify-between gap-2">
                  <div className="min-w-0">
                    <p className="font-medium text-gray-800 text-sm truncate">{q.customer}</p>
                    <p className="text-xs text-gray-500 mt-0.5 truncate">{q.requirement}</p>
                    <p className="text-xs text-gray-400 mt-1">{q.email}</p>
                  </div>
                  <div className="text-right shrink-0">
                    <p className="font-mono text-xs text-gray-400">{q.id}</p>
                    <p className="text-xs text-gray-400 mt-1">{q.date}</p>
                    <button className="mt-2 text-xs bg-primary text-white px-2.5 py-1 rounded-md hover:bg-primary-dark transition-colors">
                      Respond
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}
