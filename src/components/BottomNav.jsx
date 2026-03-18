import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FiHome, FiGrid, FiCalendar, FiUser } from 'react-icons/fi';

export default function BottomNav() {
  const { t } = useTranslation();
  const location = useLocation();

  const navItems = [
    { path: '/', label: t('nav.home'), icon: FiHome },
    { path: '/categories', label: t('nav.services'), icon: FiGrid },
    { path: '/marketplace', label: t('nav.marketplace'), icon: FiCalendar }, // Using marketplace as proxy for bookings in this demo
    { path: '/dashboard', label: t('nav.dashboard'), icon: FiUser },
  ];

  return (
    <nav className="bottom-nav">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.path}
            to={item.path}
            className={`bottom-nav-item ${isActive ? 'active' : ''}`}
          >
            <Icon />
            <span>{item.label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
