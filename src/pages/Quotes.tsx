import { pendingQuotes } from '../lib/mock-data';

export function Quotes() {
  return (
    <div className="space-y-4">
      {pendingQuotes.map((q) => (
        <div key={q.id} className="bg-white rounded-xl border border-gray-200 p-5">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-gray-400">{q.id}</span>
                <span className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700">Pending</span>
              </div>
              <h3 className="font-semibold text-gray-900 mt-1">{q.customer}</h3>
              <p className="text-sm text-gray-500 mt-0.5">{q.email}</p>
              <p className="text-sm text-gray-700 mt-2">{q.requirement}</p>
              <p className="text-xs text-gray-400 mt-2">Received: {q.date}</p>
            </div>
            <div className="flex flex-col gap-2 shrink-0">
              <button className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium">
                Send Quote
              </button>
              <button className="border border-gray-200 text-gray-600 text-sm px-4 py-2 rounded-lg hover:border-gray-300 transition-colors">
                Mark Done
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
