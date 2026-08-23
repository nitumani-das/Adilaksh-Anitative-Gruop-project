import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import {
  LayoutDashboard,
  Package,
  FolderTree,
  FileText,
  ShieldCheck,
  Image,
  Users,
  Mail,
  Settings,
  LogOut,
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import Sprig from '../components/common/Sprig';

const NAV_ITEMS = [
  { label: 'Overview', path: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Products', path: '/admin/products', icon: Package },
  { label: 'Categories', path: '/admin/categories', icon: FolderTree },
  { label: 'Blog Posts', path: '/admin/blogs', icon: FileText },
  { label: 'Certificates', path: '/admin/certificates', icon: ShieldCheck },
  { label: 'Gallery', path: '/admin/gallery', icon: Image },
  { label: 'Leads', path: '/admin/leads', icon: Users },
  { label: 'Subscribers', path: '/admin/subscribers', icon: Mail },
  { label: 'Settings', path: '/admin/settings', icon: Settings },
];

export default function AdminLayout() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login', { replace: true });
  };

  return (
    <div className="min-h-screen flex bg-cream-200">
      <aside className="w-64 shrink-0 bg-forest-950 text-cream-100 flex flex-col">
        <div className="flex items-center gap-2 px-6 py-6 border-b border-cream-100/10">
          <Sprig className="w-7 h-7 text-gold-400" />
          <span className="font-display text-lg font-semibold">Admin Panel</span>
        </div>

        <nav className="flex-1 px-3 py-5 space-y-1 overflow-y-auto">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3.5 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-forest-800 text-cream-100'
                    : 'text-cream-100/65 hover:bg-forest-900 hover:text-cream-100'
                }`
              }
            >
              <item.icon size={17} />
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="px-4 py-5 border-t border-cream-100/10">
          <p className="text-xs text-cream-100/50 mb-3 px-1">
            Signed in as <span className="text-cream-100/80">{user?.name}</span> ({user?.role})
          </p>
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 w-full px-3.5 py-2.5 rounded-xl text-sm font-medium text-cream-100/70 hover:bg-forest-900 hover:text-cream-100 transition-colors"
          >
            <LogOut size={16} />
            Log Out
          </button>
        </div>
      </aside>

      <main className="flex-1 overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
}
