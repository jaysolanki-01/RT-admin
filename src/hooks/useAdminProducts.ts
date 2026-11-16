import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export type AdminProduct = {
  id: string;
  name: string;
  category: string;
  price: number | null;
  in_stock: boolean;
  is_demo: boolean;
  slug: string;
  image: string;
  short_description: string;
  created_at: string;
};

export function useAdminProducts() {
  const [products, setProducts] = useState<AdminProduct[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const { data } = await supabase
      .from('products')
      .select('id,name,category,price,in_stock,is_demo,slug,image,short_description,created_at')
      .order('name');
    setProducts((data as AdminProduct[]) ?? []);
    setLoading(false);
  }

  async function toggleStock(id: string, inStock: boolean) {
    await supabase.from('products').update({ in_stock: inStock }).eq('id', id);
    setProducts(prev => prev.map(p => p.id === id ? { ...p, in_stock: inStock } : p));
  }

  useEffect(() => { load(); }, []);

  return { products, loading, toggleStock, reload: load };
}
