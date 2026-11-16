import { NavLink } from 'react-router-dom';

const nav = [
  { href: '/', label: 'Dashboard', icon: '▦' },
  { href: '/orders', label: 'Orders', icon: '📦' },
  { href: '/quotes', label: 'Quote Requests', icon: '📋' },
  { href: '/products', label: 'Products', icon: '🍳' },
  { href: '/customers', label: 'Customers', icon: '👥' },
  { href: '/settings', label: 'Settings', icon: '⚙️' },
];

export function Sidebar() {
  return (
    <aside className="w-60 min-h-screen bg-charcoal flex flex-col shrink-0">
      {/* Logo */}
      <div className="px-6 py-5 border-b border-white/10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gold flex items-center justify-center text-charcoal font-bold text-sm">RT</div>
          <div>
            <p className="text-white font-semibold text-sm leading-tight">Raj Tandoor</p>
            <p className="text-white/40 text-xs">Admin Panel</p>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5">
        {nav.map((item) => (
          <NavLink
            key={item.href}
            to={item.href}
            end={item.href === '/'}
            className={({ isActive }) =>
              `flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors ${
                isActive
                  ? 'bg-gold/20 text-gold font-medium'
                  : 'text-white/60 hover:text-white hover:bg-white/5'
              }`
            }
          >
            <span className="text-base w-5 text-center">{item.icon}</span>
            {item.label}
          </NavLink>
        ))}
      </nav>

      {/* Footer */}
      <div className="px-6 py-4 border-t border-white/10">
        <p className="text-white/30 text-xs">© 2026 Raj Tandoor</p>
      </div>
    </aside>
  );
}
