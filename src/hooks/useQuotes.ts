import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabase';

export type Quote = {
  id: string;
  reference: string;
  customer_name: string;
  email: string;
  phone?: string;
  business_name?: string;
  product_interest?: string;
  quantity?: string;
  requirements?: string;
  delivery_location?: string;
  source: string;
  status: string;
  notes?: string;
  created_at: string;
};

export function useQuotes() {
  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    const { data } = await supabase
      .from('quotes')
      .select('*')
      .order('created_at', { ascending: false });
    setQuotes((data as Quote[]) ?? []);
    setLoading(false);
  }

  async function updateStatus(id: string, status: string) {
    await supabase.from('quotes').update({ status }).eq('id', id);
    setQuotes(prev => prev.map(q => q.id === id ? { ...q, status } : q));
  }

  useEffect(() => { load(); }, []);

  return { quotes, loading, updateStatus, reload: load };
}
