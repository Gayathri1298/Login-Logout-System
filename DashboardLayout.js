
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DashboardLayout = ({ role }) => {
    const navigate = useNavigate();

    const menuItems = {
        'Super Admin': ['User Management', 'Role Assignment', 'System Settings'],
        'Admin': ['User Management', 'Reports'],
        'Manager': ['Team Management', 'Reports'],
        'Normal User': ['View Profile']
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <div className="dashboard-layout">
            <h1>Welcome to the Dashboard, {role}</h1>
            <nav>
                <ul>
                    {menuItems[role].map((item, index) => (
                        <li key={index} onClick={() => handleNavigation(`/${item.toLowerCase().replace(/ /g, '-')}`)}>
                            {item}
                        </li>
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default DashboardLayout;
