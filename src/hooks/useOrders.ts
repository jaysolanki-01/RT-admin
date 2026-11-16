import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export type Order = {
  id: string;
  order_number: string;
  customer_name: string;
  email: string;
  phone: string;
  items: { id: string; name: string; qty: number; price: number | null }[];
  total: number;
  status: string;
  payment_method: string;
  created_at: string;
};

export function useOrders() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const { data } = await supabase
      .from('orders')
      .select('*')
      .order('created_at', { ascending: false });
    setOrders((data as Order[]) ?? []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    await supabase.from('orders').update({ status }).eq('id', id);
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status } : o));
  }

  useEffect(() => { load(); }, []);

  return { orders, loading, updateStatus, reload: load };
}
