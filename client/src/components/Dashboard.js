// src/components/Dashboard.js
import React, { useState, useEffect } from 'react';
import { getDashboardData } from '../api';
import KpiCard from './KpiCard';
import UserList from './UserList';
import UserChart from './UserChart';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css';

const Dashboard = () => {
    const [data, setData] = useState({ users: [], kpis: {} });
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dashboardData = await getDashboardData();
                setData(dashboardData);
            } catch (err) {
                setError(err);
                if (err === 'Token is not valid' || err === 'No token, authorization denied') {
                    navigate('/login');
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [navigate]);

    const handleLogout = () => {
        localStorage.removeItem('token');
        navigate('/login');
    };

    if (loading) return <div className="loading">Loading...</div>;
    if (error) return <div className="error-message">Error: {error}</div>;

    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Team Dashboard</h1>
                <button onClick={handleLogout} className="logout-button">
                    Logout
                </button>
            </div>
            <div className="kpis-section">
                <KpiCard title="Total Users" value={data.kpis.totalUsers} icon="👥" />
                <KpiCard title="Active Users" value={data.kpis.activeUsers} icon="🟢" />
                <KpiCard title="Pending Tasks" value={data.kpis.pendingTasks} icon="📋" />
            </div>
            <div className="charts-section">
                <UserChart users={data.users} />
            </div>
            <div className="users-section">
                <UserList users={data.users} />
            </div>
        </div>
    );
};

export default Dashboard;