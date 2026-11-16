import { Badge } from '../components/ui/Badge';
import { useAdminProducts } from '../hooks/useAdminProducts';

function fmt(n: number | null) {
  if (n === null) return 'On enquiry';
  return `₹${n.toLocaleString('en-IN')}`;
}

export function Products() {
  const { products, loading, toggleStock } = useAdminProducts();

  return (
    <div className="space-y-5">
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-500">{loading ? '…' : `${products.length} products`}</p>
        <button className="bg-primary text-white text-sm px-4 py-2 rounded-lg hover:bg-primary-dark transition-colors font-medium">
          + Add Product
        </button>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        {loading ? (
          <div className="text-center py-12 text-gray-400 text-sm">Loading products…</div>
        ) : (
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
                  <td className={`px-5 py-3.5 font-medium ${!p.in_stock ? 'text-red-500' : 'text-gray-800'}`}>
                    {p.in_stock ? 'In stock' : 'Out of stock'}
                  </td>
                  <td className="px-5 py-3.5"><Badge status={p.in_stock ? 'active' : 'out_of_stock'} /></td>
                  <td className="px-5 py-3.5">
                    <button
                      onClick={() => toggleStock(p.id, !p.in_stock)}
                      className="text-xs text-primary hover:underline font-medium"
                    >
                      {p.in_stock ? 'Mark Out of Stock' : 'Mark In Stock'}
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
        {!loading && products.length === 0 && (
          <div className="text-center py-12 text-gray-400 text-sm">No products in database yet. Run the SQL migration to add them.</div>
        )}
      </div>
    </div>
  );
}
