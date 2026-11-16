import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/layout/Layout';
import { Dashboard } from './pages/Dashboard';
import { Orders } from './pages/Orders';
import { Quotes } from './pages/Quotes';
import { Products } from './pages/Products';
import { Placeholder } from './pages/Placeholder';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/quotes" element={<Quotes />} />
          <Route path="/products" element={<Products />} />
          <Route path="/customers" element={<Placeholder title="Customers" />} />
          <Route path="/settings" element={<Placeholder title="Settings" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
