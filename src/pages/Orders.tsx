import { useState } from 'react';
import { Badge } from '../components/ui/Badge';
import { useOrders } from '../hooks/useOrders';

const statuses = ['all', 'pending', 'processing', 'shipped', 'delivered'];

function fmt(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export function Orders() {
  const { orders, loading, updateStatus } = useOrders();
  const [filter, setFilter] = useState('all');
  const filtered = filter === 'all' ? orders : orders.filter((o) => o.status === filter);

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
        {loading ? (
          <div className="text-center py-12 text-gray-400 text-sm">Loading orders…</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="bg-gray-50">
              <tr>
                {['Order ID', 'Customer', 'Items', 'Amount', 'Date', 'Status', ''].map((h) => (
                  <th key={h} className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {filtered.map((o) => {
                const itemSummary = Array.isArray(o.items) && o.items.length
                  ? o.items.map((i: { name: string; qty: number }) => `${i.qty}× ${i.name}`).join(', ')
                  : '—';
                return (
                  <tr key={o.id} className="hover:bg-gray-50">
                    <td className="px-5 py-3.5 font-mono text-xs text-gray-500">{o.order_number}</td>
                    <td className="px-5 py-3.5 font-medium text-gray-800">
                      <div>{o.customer_name}</div>
                      <div className="text-xs text-gray-400">{o.email}</div>
                    </td>
                    <td className="px-5 py-3.5 text-gray-600 text-xs max-w-[180px] truncate">{itemSummary}</td>
                    <td className="px-5 py-3.5 font-semibold text-gray-900">{fmt(o.total)}</td>
                    <td className="px-5 py-3.5 text-gray-500">{new Date(o.created_at).toLocaleDateString('en-IN')}</td>
                    <td className="px-5 py-3.5"><Badge status={o.status} /></td>
                    <td className="px-5 py-3.5">
                      <select
                        value={o.status}
                        onChange={(e) => updateStatus(o.id, e.target.value)}
                        className="text-xs border border-gray-200 rounded px-2 py-1 text-gray-600 bg-white hover:border-primary cursor-pointer"
                      >
                        {['pending', 'processing', 'shipped', 'delivered', 'cancelled'].map(s => (
                          <option key={s} value={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
        {!loading && filtered.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">No orders found.</div>
        )}
      </div>
    </div>
  );
}
