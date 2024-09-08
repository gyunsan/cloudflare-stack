'use client'

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Bar, Line } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Title, Tooltip, Legend)

const AnalyticsDashboard = () => {
    // Sample data for charts
    const barChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Sales',
                data: [12, 19, 3, 5, 2, 20],
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
        ],
    }

    const lineChartData = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [
            {
                label: 'Users',
                data: [65, 59, 80, 81, 56, 55],
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1,
            },
        ],
    }

    return (
        <div className="container mx-auto p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                    <CardHeader>
                        <CardTitle>Sales Overview</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Bar data={barChartData} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>User Growth</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <Line data={lineChartData} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>Key Metrics</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <p className="text-sm font-medium">Total Revenue</p>
                                <p className="text-2xl font-bold">$24,000</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Active Users</p>
                                <p className="text-2xl font-bold">1,234</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Conversion Rate</p>
                                <p className="text-2xl font-bold">3.2%</p>
                            </div>
                            <div>
                                <p className="text-sm font-medium">Avg. Session Duration</p>
                                <p className="text-2xl font-bold">2m 15s</p>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default AnalyticsDashboard