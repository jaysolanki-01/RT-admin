export const stats = {
  totalRevenue: 2847500,
  totalOrders: 142,
  pendingQuotes: 18,
  totalProducts: 86,
  revenueChange: 12.4,
  ordersChange: 8.1,
  quotesChange: -3.2,
  productsChange: 5.8,
};

export const revenueData = [
  { month: 'Jun', revenue: 180000 },
  { month: 'Jul', revenue: 220000 },
  { month: 'Aug', revenue: 195000 },
  { month: 'Sep', revenue: 310000 },
  { month: 'Oct', revenue: 275000 },
  { month: 'Nov', revenue: 420000 },
];

export const categoryData = [
  { name: 'Tandoor Equipment', value: 38 },
  { name: 'Cooking Ranges', value: 24 },
  { name: 'Refrigeration', value: 16 },
  { name: 'Kitchen Accessories', value: 12 },
  { name: 'Others', value: 10 },
];

export const recentOrders = [
  { id: 'ORD-1041', customer: 'Spice Garden Restaurant', product: 'SS Tandoor 24"', amount: 48500, status: 'delivered', date: '2026-11-14' },
  { id: 'ORD-1040', customer: 'Hotel Royal Palace', product: 'Commercial Range 6-Burner', amount: 72000, status: 'processing', date: '2026-11-13' },
  { id: 'ORD-1039', customer: 'Biryani House Pvt Ltd', product: 'Exhaust Hood 1200mm', amount: 32000, status: 'shipped', date: '2026-11-12' },
  { id: 'ORD-1038', customer: 'Punjabi Dhaba Chain', product: 'Tandoor Equipment x3', amount: 135000, status: 'delivered', date: '2026-11-11' },
  { id: 'ORD-1037', customer: 'Cloud Kitchen Co.', product: 'Fryer + Griddle Combo', amount: 55000, status: 'pending', date: '2026-11-10' },
];

export const pendingQuotes = [
  { id: 'QT-0218', customer: 'Marriott Hotels', email: 'procurement@marriott.in', requirement: 'Full kitchen setup for new property', date: '2026-11-15' },
  { id: 'QT-0217', customer: 'Zomato Dark Kitchen', email: 'ops@zomato.com', requirement: '10x Tandoor units bulk order', date: '2026-11-14' },
  { id: 'QT-0216', customer: 'ITC Hotels', email: 'kitchen@itchotels.in', requirement: 'SS Fabrication for banquet kitchen', date: '2026-11-13' },
  { id: 'QT-0215', customer: 'Haldirams Franchise', email: 'supply@haldirams.com', requirement: 'Commercial fryers and griddles', date: '2026-11-12' },
];

export const products = [
  { id: 'P-001', name: 'Stainless Steel Tandoor 24"', category: 'Tandoor Equipment', price: 48500, stock: 12, status: 'active' },
  { id: 'P-002', name: 'Commercial Gas Range 6-Burner', category: 'Cooking Ranges', price: 72000, stock: 5, status: 'active' },
  { id: 'P-003', name: 'Walk-in Refrigerator 8x10', category: 'Refrigeration', price: 185000, stock: 2, status: 'active' },
  { id: 'P-004', name: 'Exhaust Hood 1200mm', category: 'Exhaust & Ventilation', price: 32000, stock: 8, status: 'active' },
  { id: 'P-005', name: 'Deep Fryer Single Basket', category: 'Fryers & Griddles', price: 18500, stock: 15, status: 'active' },
  { id: 'P-006', name: 'Dough Sheeter Machine', category: 'Food Preparation', price: 42000, stock: 0, status: 'out_of_stock' },
  { id: 'P-007', name: 'Bain Marie 5-Well', category: 'Food Warming', price: 28000, stock: 7, status: 'active' },
  { id: 'P-008', name: 'Stainless Steel Shelving Unit', category: 'Kitchen Accessories', price: 8500, stock: 20, status: 'active' },
];
