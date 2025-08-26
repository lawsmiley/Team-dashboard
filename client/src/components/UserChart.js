// src/components/UserChart.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import './UserChart.css';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const UserChart = ({ users }) => {
    if (!users || users.length === 0) {
        return <div className="chart-container"><p>No user data to display.</p></div>;
    }

    const roles = users.reduce((acc, user) => {
        const roleName = user.role ? user.role.name : 'Unassigned';
        acc[roleName] = (acc[roleName] || 0) + 1;
        return acc;
    }, {});

    const data = {
        labels: Object.keys(roles),
        datasets: [{
            label: 'Users by Role',
            data: Object.values(roles),
            backgroundColor: ['#42A5F5', '#66BB6A', '#FFA726', '#26C6DA'],
            borderColor: 'transparent',
            borderWidth: 1,
        }],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: { position: 'top' },
            title: { display: true, text: 'User Distribution by Role' }
        },
        scales: {
            y: { beginAtZero: true }
        }
    };

    return (
        <div className="chart-container">
            <Bar data={data} options={options} />
        </div>
    );
};

export default UserChart;