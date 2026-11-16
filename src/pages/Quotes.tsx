import { useQuotes } from '../hooks/useQuotes';

export function Quotes() {
  const { quotes, loading, updateStatus } = useQuotes();

  return (
    <div className="space-y-4">
      {loading && <div className="text-center py-12 text-gray-400 text-sm">Loading quotes…</div>}
      {!loading && quotes.length === 0 && (
        <div className="text-center py-12 text-gray-400 text-sm">No quote requests yet.</div>
      )}
      {quotes.map((q) => (
        <div key={q.id} className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-start justify-between gap-4">
            <div className="min-w-0">
              <div className="flex items-center gap-3 flex-wrap">
                <span className="font-mono text-xs text-gray-400">{q.reference}</span>
                <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  q.status === 'done' ? 'bg-green-100 text-green-700' :
                  q.status === 'contacted' ? 'bg-blue-100 text-blue-700' :
                  q.status === 'quoted' ? 'bg-purple-100 text-purple-700' :
                  q.status === 'cancelled' ? 'bg-red-100 text-red-700' :
                  'bg-yellow-100 text-yellow-700'
                }`}>
                  {q.status.charAt(0).toUpperCase() + q.status.slice(1)}
                </span>
                <span className="text-xs text-gray-400 capitalize">{q.source}</span>
              </div>
              <h3 className="font-semibold text-gray-900 mt-1">{q.customer_name}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{q.email}{q.phone ? ` · ${q.phone}` : ''}</p>
              {q.business_name && <p className="text-sm text-gray-500">{q.business_name}</p>}
              {q.product_interest && <p className="text-sm text-gray-700 mt-1"><span className="text-gray-400">Product:</span> {q.product_interest}{q.quantity ? ` · Qty: ${q.quantity}` : ''}</p>}
              {q.requirements && <p className="text-sm text-gray-700 mt-1">{q.requirements}</p>}
              {q.delivery_location && <p className="text-sm text-gray-500 mt-1"><span className="text-gray-400">Location:</span> {q.delivery_location}</p>}
              <p className="text-xs text-gray-400 mt-2">Received: {new Date(q.created_at).toLocaleDateString('en-IN')}</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              {q.status === 'pending' && (
                <button
                  onClick={() => updateStatus(q.id, 'contacted')}
                  className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  Mark Contacted
                </button>
              )}
              {q.status === 'contacted' && (
                <button
                  onClick={() => updateStatus(q.id, 'quoted')}
                  className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium"
                >
                  Mark Quoted
                </button>
              )}
              {q.status !== 'done' && q.status !== 'cancelled' && (
                <button
                  onClick={() => updateStatus(q.id, 'done')}
                  className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-lg hover:border-gray-300 transition-colors"
                >
                  Mark Done
                </button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
