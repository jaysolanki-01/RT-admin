import { useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { recentOrders } from '../lib/mock-data';

const statuses = ['all', 'pending', 'processing', 'shipped', 'delivered'];

function fmt(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export function Orders() {
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? recentOrders : recentOrders.filter((o) => o.status === filter);

  return (
    <div className="space-y-5">
      <div className="flex items-center gap-2 flex-wrap">
        {statuses.map((s) => (
          <button
            key={s}
            onClick={() => setFilter(s)}
            className={`px-3 py-1.5 rounded-lg text-sm font-medium capitalize transition-colors ${
              filter === s ? 'bg-primary text-white' : 'bg-white border border-gray-200 text-gray-600 hover:border-primary hover:text-primary'
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {['Order ID', 'Customer', 'Product', 'Amount', 'Date', 'Status', ''].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filtered.map((o) => (
              <tr key={o.id} className="hover:bg-gray-50">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-500">{o.id}</td>
                <td className="px-5 py-3.5 font-medium text-gray-800">{o.customer}</td>
                <td className="px-5 py-3.5 text-gray-600">{o.product}</td>
                <td className="px-5 py-3.5 font-semibold text-gray-900">{fmt(o.amount)}</td>
                <td className="px-5 py-3.5 text-gray-500">{o.date}</td>
                <td className="px-5 py-3.5"><Badge status={o.status} /></td>
                <td className="px-5 py-3.5">
                  <button className="text-xs text-primary hover:underline font-medium">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">No orders found.</div>
        )}
      </div>
    </div>
  );
}
