
import React from 'react';
import DashboardLayout from '../DashboardLayout';

const AdminPage = () => {
    const userRole = 'Admin'; 

    return (
        <div>
            <DashboardLayout role={userRole} />
            <div>
               
                <h2>Admin Dashboard</h2>
                <p>Welcome to the admin dashboard. Here you can manage users, view reports, and more.</p>
            </div>
        </div>
    );
};

export default AdminPage;
