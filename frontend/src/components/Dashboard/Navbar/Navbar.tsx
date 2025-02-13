import React from 'react';
import {
  Dashboard as DashboardIcon,
  StarRounded as StarIcon,
  Share as ShareIcon,
  Delete as DeleteIcon,
  Settings as SettingsIcon,
} from '@mui/icons-material';
import './navbar.css';

interface NavbarItem {
  icon: JSX.Element;
  label: string;
}

const navbarItems: NavbarItem[] = [
  { icon: <DashboardIcon />, label: 'All Files' },
  { icon: <StarIcon />, label: 'Favorites' },
  { icon: <ShareIcon />, label: 'Shared' },
  { icon: <DeleteIcon />, label: 'Trash' },
  { icon: <SettingsIcon />, label: 'Settings' },
];

const Navbar: React.FC = () => {
  const [activeItem, setActiveItem] = React.useState<number>(0);

  const handleItemClick = (index: number) => {
    setActiveItem(index);
  };

  return (
    <nav className="navbar">
      {navbarItems.map((item, index) => (
        <div
          key={index}
          onClick={() => handleItemClick(index)}
          className={`nav-item ${activeItem === index ? 'active' : ''}`}
        >
          {React.cloneElement(item.icon, {
            className: `nav-icon`,
          })}
          <div className="nav-label">{item.label}</div>
        </div>
      ))}
    </nav>
  );
};

export default Navbar;
