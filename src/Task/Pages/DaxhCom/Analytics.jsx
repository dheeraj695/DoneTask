import React from 'react';
import { Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import Dashboard from '../Dashboard';

const sampleData = [
  { name: 'Category A', value: 25 },
  { name: 'Category B', value: 50 },
  { name: 'Category C', value: 75 },
  { name: 'Category D', value: 100 },
];

const Analytics = () => {
  return (
    <div>
    <Dashboard/>
      <Typography variant="h4" gutterBottom>
        Analytics
      </Typography>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={sampleData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Analytics;
