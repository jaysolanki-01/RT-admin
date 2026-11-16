import { Outlet, useLocation } from 'react-router-dom';
import { Sidebar } from './Sidebar';
import { Header } from './Header';

const titles: Record<string, string> = {
  '/': 'Dashboard',
  '/orders': 'Orders',
  '/quotes': 'Quote Requests',
  '/products': 'Products',
  '/customers': 'Customers',
  '/settings': 'Settings',
};

export function Layout() {
  const { pathname } = useLocation();
  const title = titles[pathname] ?? 'Admin';
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col min-w-0">
        <Header title={title} />
        <main className="flex-1 p-6 overflow-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
