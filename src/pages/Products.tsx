import { Badge } from '../components/ui/Badge';
import { products } from '../lib/mock-data';

function fmt(n: number) {
  return `₹${n.toLocaleString('en-IN')}`;
}

export function Products() {
  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{products.length} products</p>
        <button className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50">
            <tr>
              {['ID', 'Product', 'Category', 'Price', 'Stock', 'Status', ''].map((h) => (
                <th key={h} className="px-5 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wide">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {products.map((p) => (
              <tr key={p.id} className="hover:bg-gray-50">
                <td className="px-5 py-3.5 font-mono text-xs text-gray-400">{p.id}</td>
                <td className="px-5 py-3.5 font-medium text-gray-800">{p.name}</td>
                <td className="px-5 py-3.5 text-gray-500">{p.category}</td>
                <td className="px-5 py-3.5 font-semibold text-gray-900">{fmt(p.price)}</td>
                <td className={`px-5 py-3.5 font-medium ${p.stock === 0 ? 'text-red-500' : 'text-gray-800'}`}>{p.stock}</td>
                <td className="px-5 py-3.5"><Badge status={p.status} /></td>
                <td className="px-5 py-3.5">
                  <button className="text-xs text-primary hover:underline font-medium">Edit</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
