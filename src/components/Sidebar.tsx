import React from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, Code, Mail } from 'lucide-react';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, toggleSidebar }) => {
  const menuItems = [
    { icon: <Home size={20} />, label: 'Home', href: '#home' },
    { icon: <User size={20} />, label: 'Skills', href: '#about' },
    { icon: <Briefcase size={20} />, label: 'Experience', href: '#experience' },
    { icon: <Code size={20} />, label: 'Projects', href: '#projects' },
    { icon: <GraduationCap size={20} />, label: 'Education', href: '#education' },
    { icon: <Mail size={20} />, label: 'Contact', href: '#contact' },
  ];

  return (
    <div className="relative">
      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="fixed top-4 left-4 z-50 p-3 bg-blue-900 text-white rounded-full hover:bg-blue-800 transition-all shadow-lg"
        aria-label="Toggle Menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Sidebar */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-blue-900 shadow-xl backdrop-blur-lg transition-transform duration-300 transform ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="h-full flex flex-col">
          {/* Profile Section */}
          <div className="p-6 text-center">
            <div className="w-24 h-24 mx-auto rounded-full overflow-hidden border-2 border-white">
              <img
                src="public\profile 2.jpg"
                alt="Yamini Settipalli"
                className="w-full h-full object-cover"
              />
            </div>
            <h2 className="mt-4 text-xl font-bold text-white">Yamini Settipalli</h2>
            <p className="text-sm text-blue-200">Passionate Coder</p>
          </div>

          {/* Navigation */}
          <nav className="flex-grow">
            <ul className="space-y-2 px-4">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="flex items-center gap-3 px-4 py-2 text-gray-200 hover:bg-blue-800 rounded-lg transition-colors"
                  >
                    {item.icon}
                    <span>{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
